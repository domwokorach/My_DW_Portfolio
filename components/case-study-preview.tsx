import type { ProjectMetric } from '@/lib/data'

type CaseStudyPreviewProps = {
  metrics: ProjectMetric[]
}

export function CaseStudyPreview({ metrics }: CaseStudyPreviewProps) {
  return (
    <dl className="case-study-preview">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
        </div>
      ))}
    </dl>
  )
}