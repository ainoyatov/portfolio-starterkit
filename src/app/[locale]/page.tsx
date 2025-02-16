import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { HeroSection } from './components/Hero'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <HeroSection />
    </div>
  )
}
