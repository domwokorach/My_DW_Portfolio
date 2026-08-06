import {
  articles,
  experience,
  implementationNotes,
  openSource,
  profile,
  projects,
  skills,
} from '@/lib/data'

import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { ContactCTA } from '@/components/contact-cta'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { Hero } from '@/components/hero'
import { ProjectCard } from '@/components/project-card'
import { ProjectGrid } from '@/components/project-grid'
import { SectionHeading } from '@/components/section-heading'
import { SkillsCloud } from '@/components/skills-cloud'

export default function HomePage() {
  return (
    <>
      <Hero projectCount={projects.length} />

      <section className="section-shell" id="about" aria-labelledby="about-title">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title={`Most recently at ${profile.company}`}
          description={profile.summary}
        />
        <div className="about-grid">
          <article className="about-card">
            <p className="eyebrow">Professional summary</p>
            <p>
              I build production interfaces, case-study narratives, and contact flows that are easy
              to ship, easy to maintain, and easy to hand off to the next person.
            </p>
            <p className="about-card__muted">Fun fact: {profile.funFact}</p>
          </article>

          <article className="about-card">
            <p className="eyebrow">Tech stack visualization</p>
            <div className="stack-visual">
              {profile.techStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="about-card">
            <p className="eyebrow">Experience</p>
            <strong className="about-card__stat">{profile.yearsExperience}</strong>
            <p className="about-card__muted">Years of experience shipping products and systems.</p>
          </article>
        </div>
      </section>

      <section className="section-shell" id="projects" aria-labelledby="work-title">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Featured projects with measurable outcomes and deeper case studies."
          description="Each project keeps the metrics, route, and architecture close to the implementation so the narrative stays useful after launch."
        />
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ProjectGrid>
      </section>

      <section className="section-shell" id="skills" aria-labelledby="skills-title">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="A typed content model with visual depth and practical boundaries."
          description="The layout keeps role, category, and tool metadata explicit so the site can evolve without collapsing into a blob of cards."
        />
        <SkillsCloud categories={skills} />
      </section>

      <section className="section-shell" id="open-source" aria-labelledby="open-source-title">
        <SectionHeading
          id="open-source-title"
          eyebrow="Open source"
          title="GitHub activity, notable contributions, and community work."
          description="The open-source section keeps profile links, contribution context, and collaboration highlights visible without cluttering the rest of the page."
        />
        <div className="open-source-grid">
          <article className="open-source-card open-source-card--graph">
            <p className="eyebrow">Contribution graph</p>
            <img
              src={openSource.contributionGraph}
              alt="GitHub contribution graph"
              loading="lazy"
            />
            <a href={openSource.profileUrl} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </article>

          <article className="open-source-card">
            <p className="eyebrow">Notable contributions</p>
            <ul className="open-source-list">
              {openSource.highlights.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell" id="experience" aria-labelledby="experience-title">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Operator-friendly systems, shipped with a bias for clarity."
          description="The timeline keeps the work semantic and scannable while preserving the result of each role in measurable terms."
        />
        <ExperienceTimeline items={experience} />
      </section>

      <section className="section-shell" id="writing" aria-labelledby="writing-title">
        <SectionHeading
          id="writing-title"
          eyebrow="Writing"
          title="Short essays and field notes that explain the implementation tradeoffs."
          description="The writing section is a lightweight index of articles, notes, and guides that extend the portfolio beyond the case studies."
        />
        <div className="article-grid">
          {articles.map((article) => (
            <article key={article.title} className="article-card">
              <div className="article-card__meta">
                <span>{article.source}</span>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.href} target="_blank" rel="noreferrer">
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="architecture-title">
        <SectionHeading
          id="architecture-title"
          eyebrow="Reusable flow"
          title="One architecture diagram, many case studies."
          description="The same flow visualization can be reused inside individual project pages to explain routing, data handling, or operator steps."
        />
        <ArchitectureDiagram steps={projects[0].architecture} />
      </section>

      <section className="section-shell" id="implementation-notes" aria-labelledby="notes-title">
        <SectionHeading
          id="notes-title"
          eyebrow="Claude Code implementation notes"
          title="Reusable components and deployment guidance."
          description="These notes mirror the brief so the portfolio stays easy to customize and extend."
        />
        <div className="notes-grid">
          {implementationNotes.map((note) => (
            <article key={note.title} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="contact">
        <ContactCTA />
      </section>
    </>
  )
}