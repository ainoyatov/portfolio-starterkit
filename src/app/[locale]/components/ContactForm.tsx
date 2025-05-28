'use client';

// import { sendEmail } from "@/lib/sendEmail";
import { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslations } from 'next-intl'

export type FormDataPoints = {
    full_name?: string,
    email?: string,
    phone?: string,
    message?: string
}

const ContactForm = ({ params }: { params: { locale: string } }) => {

    const { locale } = params
    const t = useTranslations('')

    const [state, setState] = useState<Partial<FormDataPoints>>({});
    const [captcha, setCaptcha] = useState<string | null>(null);
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => setIsToggled(!isToggled);

    const FormAction = async (formData: FormData) => {
        if (captcha) {
            const payload: FormDataPoints = {
                full_name: formData.get('full-name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                message: formData.get('message') as string,
            }

            const verifyCaptcha = await fetch('/api/recaptcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ captcha })
            })

            const { response } = await verifyCaptcha.json();

            if (response) {
                setState(payload);
                // sendEmail(payload);
                alert('Your message has been sent. Thank you for contacting us.')
                window.location.reload();
            } else {
                alert('Please refresh the page and re-verify Captcha');
            }
        } else {
            alert('Please verify Captcha.')
        }
    }

    return (
        <form action={FormAction}>
            <div className="flex-1 flex justify-center p-4">
                <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-white bg-opacity-70">
                    <div className="space-y-4">
                        <input type="text" name="full-name" placeholder="Full Name" className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600" />
                        <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600" />
                        <input type="text" name="phone" placeholder="Phone" className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600" />
                        <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600 h-24 resize-none" />

                        <div className='mt-4'>
                            <ReCAPTCHA 
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA!} 
                                className='w-full mt-4'
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
    )
}

export default ContactForm;