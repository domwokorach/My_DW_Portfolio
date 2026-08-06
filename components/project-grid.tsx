import type { ReactNode } from 'react'

type ProjectGridProps = {
  children: ReactNode
}

export function ProjectGrid({ children }: ProjectGridProps) {
  return <div className="project-grid">{children}</div>
}