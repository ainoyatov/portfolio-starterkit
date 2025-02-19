'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import TornadoIcon from '../../icons/tornado'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row place-items-center'>
          <div className='h-14 w-14 items-center'>
            {/* <LogoIcon /> */}
            <TornadoIcon />
          </div>
          <strong className='mx-2 select-none'>Akmal Inoyatov</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/projects`}>
            {t('Projects')}
          </Link>
          <Link lang={locale} href={`/contact`}>
            {t('Contact')}
          </Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href='https://github.com/ainoyatov'
          target='_blank'
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
