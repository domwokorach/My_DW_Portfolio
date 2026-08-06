import type { MetadataRoute } from 'next'

import { projects } from '@/lib/data'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  return [
    {
      url: baseUrl.toString(),
      lastModified: new Date(),
    },
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, baseUrl).toString(),
      lastModified: new Date(),
    })),
  ]
}