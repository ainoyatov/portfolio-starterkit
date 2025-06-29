'use client';

import { useState, useEffect } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslations } from 'next-intl';

export type FormDataPoints = {
    name?: string,
    email?: string,
    phone?: string,
    message?: string
};

const ContactForm = ({ params }: { params: { locale: string } }) => {
    const { locale } = params;
    const t = useTranslations('');

    const [state, setState] = useState<Partial<FormDataPoints>>({});
    const [captcha, setCaptcha] = useState<string | null>(null);
    const [isToggled, setIsToggled] = useState(false);

    // Enable submit button once captcha is passed
    useEffect(() => {
        setIsToggled(!!captcha); //same as setIsToggled(captcha !== null);
    }, [captcha]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const FormAction = async (formData: FormData) => {

        if (captcha) {
            const payload: FormDataPoints = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                message: formData.get('message') as string,
            };

            const verifyCaptcha = await fetch('/api/recaptcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ captcha }),
            });

            const { success: captchaSuccess, message: captchaMessage } = await verifyCaptcha.json();

            if (!captchaSuccess) {
                alert(captchaMessage || 'Captcha verification failed.');
                return;
            }

            const sendMail = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const { success, message } = await sendMail.json();

            if (success) {
                setState(payload);
                alert(message);
                window.location.reload();
            } else {
                alert(message);
            }
        } else {
            alert('Please verify Captcha.');
        }
    };

    const activeStyle = 'shadow-[inset_0_0_0_1000px_#bfdbfe]  dark:shadow-[inset_0_0_0_1000px_#bfdbfe]';
    const baseStyle = 'w-full p-3 rounded-md border border-gray-300 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-300';

    return (
        <form action={FormAction}>
            <div className="flex-1 flex justify-center p-4">
                <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-primary dark:bg-slate-500 bg-opacity-70">
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder={t('Full_Name')}
                            value={state.name || ''}
                            onChange={handleChange}
                            className={`${baseStyle} ${state.name ? activeStyle : ''}`}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t('Email')}
                            value={state.email || ''}
                            onChange={handleChange}
                            className={`${baseStyle} ${state.email ? activeStyle : ''}`}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder={t('Phone')}
                            value={state.phone || ''}
                            onChange={handleChange}
                            className={`${baseStyle} ${state.phone ? activeStyle : ''}`}
                        />
                        <textarea
                            name="message"
                            placeholder={t('Message')}
                            value={state.message || ''}
                            onChange={handleChange}
                            className={`${baseStyle} h-24 resize-none ${state.message ? activeStyle : ''}`}
                        />

                        <div className="mt-4">
                            <ReCAPTCHA 
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA!}
                                className="w-full mt-4"
                                onChange={setCaptcha}
                            />
                        </div>

                        <div className="py-2">
                            <button
                                disabled={!isToggled}
                                type="submit"
                                className={`w-full p-3 rounded-md text-white font-bold transition ${isToggled ? 'bg-black hover:bg-gray-800' : 'bg-black opacity-50 cursor-not-allowed'}`}
                            >
                                {t('Contact_Me')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;