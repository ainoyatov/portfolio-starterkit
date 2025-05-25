'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Project } from '@/src/data/projectData'

export const ProjectCard = ({ project }: { project: Project }) => {
  const t = useTranslations('')

  return (
    <div className="border rounded-lg shadow hover:shadow-md transition overflow-hidden">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={project.image}
          alt={t(project.titleKey)}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1 ">{t(project.titleKey)}</h3>
          <p className="text-gray-600 text-sm border-t-2 ">{t(project.descriptionKey)}</p>
        </div>
      </a>
    </div>
  )
}