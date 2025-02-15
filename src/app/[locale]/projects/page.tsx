import { useTranslations } from "next-intl"

const ProjectsPage = () => {
    const t = useTranslations('')
    return (
        <div className='px-32 py-24 text-center text-2xl'>
            {t('Page_Description')}
        </div>
    )
}

export default ProjectsPage