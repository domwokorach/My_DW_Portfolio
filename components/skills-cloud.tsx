import type { SkillCategory } from '@/lib/data'

type SkillsCloudProps = {
  categories: SkillCategory[]
}

export function SkillsCloud({ categories }: SkillsCloudProps) {
  return (
    <div className="skills-cloud">
      {categories.map((category) => (
        <article key={category.category} className="skills-cloud__card">
          <p className="eyebrow">{category.category}</p>
          <p className="skills-cloud__description">{category.description}</p>
          <div className="skills-cloud__grid" aria-label={category.category}>
            {category.items.map((item) => (
              <div key={item.label} className="skill-badge">
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}