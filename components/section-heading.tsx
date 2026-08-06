type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}