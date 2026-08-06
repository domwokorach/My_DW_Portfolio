export const siteConfig = {
  name: 'Dominic Wokorach-Olanya',
  role: 'Software Engineer',
  company: 'Sky',
  email: 'Dominic.Wokorach-O@outlook.com',
  description:
    'Software Engineer portfolio with case studies, accessible navigation, and a contact endpoint.',
  githubUsername: 'domwokorach',
  social: {
    github: 'https://github.com/domwokorach',
    linkedin: 'https://www.linkedin.com/in/dominic-w-3673523b/',
    x: 'https://x.com/do3inic',
    website: getSiteUrl().toString(),
  },
  keywords: [
    'developer portfolio',
    'Claude Code portfolio',
    'full-stack developer portfolio',
    'Next.js portfolio starter',
    'case study routes',
  ],
}

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (siteUrl) {
    return new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`)
  }

  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`)
  }

  return new URL('http://localhost:3000')
}