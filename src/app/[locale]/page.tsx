import { HeroSection } from './components/Hero'
import { FC } from 'react'

export default function DashboardPage({params}: {params: {locale: string}}) {
  const {locale} = params;

  return (
    <div>
      <HeroSection locale={locale} />
    </div>
  )

}

