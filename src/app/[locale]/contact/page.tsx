// src/app/[locale]/contact/page.tsx
'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact({ params }: { params: { locale: string } }) {
  const { locale } = params
  const t = useTranslations('')

  const [verified, setVerified] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    // Simulate form submission delay
    setTimeout(() => setFormStatus('success'), 1500)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('Contact')}</h1>
        <p className="text-lg text-gray-600 mb-12">{t('Contact_Description')}</p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-black focus:border-black"
            />
          </div>

          {/* <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={() => setVerified(true)}
          /> */}

          <button
            type="submit"
            disabled={!verified || formStatus === 'loading'}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            {formStatus === 'loading' ? 'Sending...' : t('Contact_Me')}
          </button>

          {formStatus === 'success' && (
            <p className="text-green-600 mt-4">Message sent successfully!</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
          )}
        </form>

        {/* <div className="mt-16 text-sm text-gray-500 text-center">
          <p>Email: your@email.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: Scottsdale, AZ</p>
        </div> */}
      </section>
    </main>
  )
}

// import { useTranslations } from "next-intl";

// export default function ContactPage () {

//     const t = useTranslations('')
//     return (
//         <div className='px-32 py-24 text-center text-2xl'>
//             {t('Page_Description')}
//         </div>
//     )
// }