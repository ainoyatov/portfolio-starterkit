
import { useTranslations } from 'next-intl';
import { ProjectCard } from '@/src/app/[locale]/components/ProjectCard';
import { projects } from '@/src/data/projectData';

export default function ProjectsPage() {
  const t = useTranslations('');

  return (
    <main className="min-h-screen  text-primary dark:text-gray-500 px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('Projects')}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('Projects_Description')}
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </section>
    </main>
  );
}