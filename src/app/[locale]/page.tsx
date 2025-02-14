import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {/* {t('An')}{' '} */}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Tech_Leader')}
          </span>
          <br />
          {t('Title')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Title_Description'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/ainoyatov'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('View_Portfolio')}
            </Button>
          </a>
          <a
            href='https://github.com/ainoyatov'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Contact_Me')}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Column_1_title')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Columns_1_description'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Column_2_title')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Columns_2_description'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Column_3_title')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Columns_3_description'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
