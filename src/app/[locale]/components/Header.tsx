'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')

  return (
    <header className="w-full bg-background px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-screen-2xl flex-col md:flex-row items-center justify-between gap-4">
        <div className='flex flex-row'>
            {/* Name */}
            <Link lang={locale} href="/" className="flex flex-row items-center">
              <div className="m-2 select-none text-md">Akmal Inoyatov</div>
            </Link>

            <div className="flex flex-row items-center gap-3">
              <ThemeSwitch />
              <LangSwitcher />
              <a href="https://github.com/ainoyatov" target="_blank" rel="noopener noreferrer">
                <div className="size-7 sm:size-8">
                  <GithubIcon />
                </div>
              </a>
            </div>
        </div>

        {/* Nav + Controls */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <nav className="flex flex-row md:flex-row gap-4 text-md sm:text-base items-center">
            <Link lang={locale} href="/about">{t('About')}</Link>
            <Link lang={locale} href="/projects">{t('Projects')}</Link>
            <Link lang={locale} href="/contact">{t('Contact')}</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}