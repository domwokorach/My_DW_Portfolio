import Image from 'next/image'
import Link from 'next/link'

import type { Project } from '@/lib/data'

import { CaseStudyPreview } from './case-study-preview'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <Image
          src={project.image}
          alt={project.alt}
          width={1200}
          height={840}
          sizes="(max-width: 820px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={project.image.startsWith('http')}
        />
      </div>

      <div className="project-card__body">
        <p className="eyebrow">
          {project.year} / {project.status}
        </p>
        <p className="project-card__stars" aria-label={`${project.stars} GitHub stars`}>
          {project.stars} stars
        </p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-card__summary">{project.summary}</p>

        <CaseStudyPreview metrics={project.metrics} />

        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="link-row">
          <Link href={`/projects/${project.slug}`}>Case study</Link>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        </div>
      </div>
    </article>
  )
}