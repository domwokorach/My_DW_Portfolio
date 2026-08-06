import type { Metadata } from 'next'

import { SiteHeader } from '@/components/site-header'
import { profile } from '@/lib/data'
import { getSiteUrl, siteConfig } from '@/lib/site'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/projects/atlas.svg',
        width: 1200,
        height: 630,
        alt: 'Claude Code developer portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/projects/atlas.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  url: getSiteUrl().toString(),
  email: profile.email,
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.x],
} satisfies Record<string, unknown>

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <footer className="footer-shell">
          <p>
            Built for {profile.name}. Contact <a href={`mailto:${profile.email}`}>{profile.email}</a>
            .
          </p>
        </footer>
      </body>
    </html>
  )
}