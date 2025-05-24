'use client'

import Image from 'next/image'
import { Project } from '@/src/data/projectData'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-md transition overflow-hidden">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </a>
    </div>
  )
}