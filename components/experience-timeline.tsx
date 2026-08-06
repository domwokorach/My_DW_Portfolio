import type { ExperienceEntry } from '@/lib/data'

type ExperienceTimelineProps = {
  items: ExperienceEntry[]
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="experience-timeline">
      {items.map((item) => (
        <li key={`${item.year}-${item.company}`}>
          <div className="experience-timeline__marker" aria-hidden="true" />
          <div className="experience-timeline__content">
            <p className="eyebrow">{item.year}</p>
            <h3>
              {item.role} <span>{item.company}</span>
            </h3>
            <p>{item.summary}</p>
            <ul className="experience-timeline__tech">
              {item.technologies.map((technology) => (
                <li key={technology.label}>
                  <span aria-hidden="true">{technology.icon}</span>
                  {technology.label}
                </li>
              ))}
            </ul>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}