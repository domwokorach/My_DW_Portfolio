import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { CaseStudyPreview } from '@/components/case-study-preview'
import { SectionHeading } from '@/components/section-heading'
import { getProjectBySlug, projects } from '@/lib/data'
import { getSiteUrl, siteConfig } from '@/lib/site'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const canonical = `/projects/${project.slug}`

  return {
    metadataBase: getSiteUrl(),
    title: project.title,
    description: project.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: project.title,
      description: project.summary,
      images: [{ url: project.image, width: 1200, height: 840, alt: project.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="case-study-page section-shell">
      <header className="project-page__hero">
        <div className="project-page__card">
          <p className="eyebrow">Case study</p>
          <h1>{project.title}</h1>
          <p className="hero-summary">{project.description}</p>
          <p className="project-page__stars">{project.stars} GitHub stars</p>

          <div className="project-page__meta">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </div>

          <div className="project-page__image">
            <Image
              src={project.image}
              alt={project.alt}
              width={1200}
              height={840}
              sizes="(max-width: 820px) 100vw, 60vw"
              unoptimized={project.image.startsWith('http')}
            />
          </div>
        </div>

        <aside className="case-study-sidebar">
          <SectionHeading
            eyebrow="At a glance"
            title={project.status}
            description={project.overview}
          />

          <div>
            <p className="eyebrow">Stack</p>
            <ul className="project-page__stack">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Links</p>
            <ul className="project-page__links">
              <li>
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  GitHub repo
                </a>
              </li>
              <li>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </header>

      <div className="case-study-layout">
        <section className="case-study-content" aria-labelledby="challenge-title">
          <SectionHeading
            id="challenge-title"
            eyebrow="Challenge"
            title="Problem and user context"
            description={project.challenge}
          />

          <SectionHeading
            id="constraints-title"
            eyebrow="Constraints and tradeoffs"
            title="What the team had to balance"
            description="The portfolio keeps the tradeoffs visible so the final design reads like an implementation note, not just a polished mockup."
          />
          <ul>
            {project.constraints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <SectionHeading
            id="architecture-title"
            eyebrow="Architecture or data flow"
            title="Flow visualization"
            description="A reusable step diagram makes the system understandable without forcing readers into a wall of text."
          />
          <ArchitectureDiagram steps={project.architecture} />

          <SectionHeading
            id="states-title"
            eyebrow="Screens and states"
            title="UI states worth showing"
            description="Each project includes the states a reviewer would want to inspect before approving the implementation."
          />
          <ul className="tag-list">
            {project.uiStates.map((state) => (
              <li key={state}>{state}</li>
            ))}
          </ul>

          <SectionHeading
            id="approach-title"
            eyebrow="Approach"
            title="How the work was structured"
            description="The implementation stays typed and modular so the site can grow with more projects without losing clarity."
          />
          <ul>
            {project.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <SectionHeading
            id="results-title"
            eyebrow="Results and metrics"
            title="What changed after launch"
            description="The results stay tied to metrics and operator behavior instead of generic product-language claims."
          />
          <ul>
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <SectionHeading
            id="lessons-title"
            eyebrow="Lessons learned"
            title="What carried forward"
            description="The final notes make the case study useful as a reference, not just a gallery item."
          />
          <ul>
            {project.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <SectionHeading
            id="code-title"
            eyebrow="Code and repository"
            title="Implementation notes"
            description="Reviewers can jump straight to the repo link and scan the code-level notes that drove the build."
          />
          <ul>
            {project.codeNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <aside className="case-study-sidebar">
          <CaseStudyPreview metrics={project.metrics} />
          <div className="timeline-summary">
            <strong>{project.year}</strong>
            <span>{siteConfig.name}</span>
          </div>
        </aside>
      </div>
    </article>
  )
}