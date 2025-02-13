import { useTranslations } from "next-intl"

const ProjectsPage = () => {
    const t = useTranslations('')
    return (
        <div>{t('Project_Page_Description')}</div>
    )
}

export default ProjectsPage