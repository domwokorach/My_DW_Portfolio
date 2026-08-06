'use client'

import { useEffect, useMemo, useState } from 'react'

import { profile } from '@/lib/data'

type HeroProps = {
  projectCount: number
}

export function Hero({ projectCount }: HeroProps) {
  const roles = useMemo(
    () => ['Software Engineer', 'Front-End Developer', 'Web Developer'],
    [],
  )
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')

  useEffect(() => {
    const role = roles[roleIndex]
    let charIndex = 0

    const interval = window.setInterval(() => {
      charIndex += 1
      setTypedRole(role.slice(0, charIndex))

      if (charIndex >= role.length) {
        window.clearInterval(interval)
        window.setTimeout(() => {
          setTypedRole('')
          setRoleIndex((current) => (current + 1) % roles.length)
        }, 1100)
      }
    }, 70)

    return () => window.clearInterval(interval)
  }, [roleIndex, roles])

  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{profile.title}</p>
        <h1 id="hero-title">Hi, I'm {profile.name}</h1>
        <p className="hero-roles" aria-live="polite">
          <span className="hero-roles__label">{typedRole || roles[roleIndex]}</span>
          <span className="hero-roles__cursor" aria-hidden="true">
            |
          </span>
        </p>
        <p className="hero-summary">{profile.summary}</p>

        <div className="cta-row">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <a className="button button--secondary" href="/resume.pdf" download>
            Download Resume
          </a>
        </div>

        <ul className="hero-stats" aria-label="Profile statistics">
          {profile.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>

        <div className="social-links" aria-label="Social links">
          {profile.social.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="hero-terminal" aria-label="Portfolio terminal preview">
        <div className="terminal-window">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
          </div>
          <pre>
            <code>{`$ npm run dev
✓ Portfolio online at localhost:3000
$ npm run build
✓ Static routes, metadata, and API validated

Selected work: ${projectCount} case studies
Delivery mode: semantic HTML, keyboard support, and local artwork`}</code>
          </pre>
        </div>
        <div className="terminal-caption">
          <span>Current focus</span>
          <strong>Case-study driven product storytelling</strong>
        </div>
      </aside>
    </section>
  )
}