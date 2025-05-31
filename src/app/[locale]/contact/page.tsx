import { useTranslations } from 'next-intl'
import ContactForm from '../components/ContactForm'

export default function ContactPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('')

  return (
    <main className="min-h-screen  text-primary dark:text-gray-500 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('Contact')}</h1>
        <p className="text-lg text-gray-600 mb-12">{t('Contact_Description')}</p>
      </section>
      <ContactForm params={params} />
    </main>
  )
}