import type { ArchitectureStep } from '@/lib/data'

type ArchitectureDiagramProps = {
  steps: ArchitectureStep[]
}

export function ArchitectureDiagram({ steps }: ArchitectureDiagramProps) {
  return (
    <div className="architecture-diagram" aria-label="Architecture flow diagram">
      {steps.map((step, index) => (
        <div key={step.title} className="architecture-diagram__step">
          <strong>{step.title}</strong>
          <p>{step.detail}</p>
          {index < steps.length - 1 ? <span aria-hidden="true">→</span> : null}
        </div>
      ))}
    </div>
  )
}