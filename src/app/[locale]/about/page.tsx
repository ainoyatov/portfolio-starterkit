// src/app/[locale]/about/page.tsx
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function About({params}:{params: {locale:string}}) {
  const {locale} = params

  const t = useTranslations('')

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('About')}</h1>
        <p className="text-lg text-gray-600 mb-12">
          {t('Page_Description')}
        </p>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={100}
            height={150}
            className="rounded-full shadow-md"
          />
          <blockquote className="italic text-gray-500 max-w-xl">
            {t('About_Quote')}
          </blockquote>
        </div>

        {/* Expertise Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-2">{t('Column_1_title')}</h2>
            <p className="text-gray-600">{t('Columns_1_description')}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-2">{t('Column_2_title')}</h2>
            <p className="text-gray-600">{t('Columns_2_description')}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-2">{t('Column_3_title')}</h2>
            <p className="text-gray-600">{t('Columns_3_description')}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">{t('Contact')}</h2>
          <p className="text-gray-600 mb-6">{t('Page_Description')}</p>
          <a
            href={`/${locale}/contact`}
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            {t('Contact_Me')}
          </a>
        </div>
      </section>
    </main>
  )
}