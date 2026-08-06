export type SocialLink = {
  label: string
  href: string
}

export type ProfileStat = {
  label: string
  value: string
}

export type SkillItem = {
  label: string
  icon: string
}

export type SkillCategory = {
  category: string
  description: string
  items: SkillItem[]
}

export type ProjectMetric = {
  label: string
  value: string
}

export type ArchitectureStep = {
  title: string
  detail: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  status: string
  year: string
  image: string
  alt: string
  tags: string[]
  stars: string
  repoUrl: string
  demoUrl: string
  metrics: ProjectMetric[]
  overview: string
  challenge: string
  constraints: string[]
  approach: string[]
  uiStates: string[]
  codeNotes: string[]
  outcomes: string[]
  lessons: string[]
  stack: string[]
  architecture: ArchitectureStep[]
}

export type ExperienceTechnology = {
  label: string
  icon: string
}

export type ExperienceEntry = {
  year: string
  role: string
  company: string
  summary: string
  highlights: string[]
  technologies: ExperienceTechnology[]
}

export type Article = {
  title: string
  description: string
  href: string
  source: string
  date: string
  readTime: string
}

export type OpenSourceHighlight = {
  title: string
  description: string
}

export type ImplementationNote = {
  title: string
  description: string
}

export const profile = {
  name: 'Dominic Wokorach-Olanya',
  title: 'Software Engineer',
  company: 'Sky',
  yearsExperience: '8+',
  summary:
    'Software Engineer with a strong background in Web and Front-End Development, skilled in HTML, CSS, JavaScript (ES6+), REST APIs, and React. Experienced in Agile environments and the Software Development Lifecycle, delivering scalable solutions that support product adoption and drive measurable results.',
  email: 'Contact me',
  funFact: 'The work I am proudest of is accessibility-focused — making software easier to use for people who rely on assistive technology.',
  techStack: ['HTML', 'CSS', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL', 'C#'],
  stats: [
    { label: 'Bug reduction', value: '-20%' },
    { label: 'User satisfaction lift', value: '+30%' },
    { label: 'Downtime reduction', value: '-25%' },
    { label: 'User adoption boost', value: '+20%' },
  ] satisfies ProfileStat[],
  social: [
    { label: 'GitHub', href: 'https://github.com/domwokorach' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dominic-w-3673523b/' },
    { label: 'Twitter', href: 'https://x.com/do3inic' },
  ] satisfies SocialLink[],
} as const

export const openSource = {
  githubUsername: 'domwokorach',
  contributionGraph: 'https://ghchart.rshah.org/domwokorach',
  profileUrl: 'https://github.com/domwokorach',
  highlights: [
    {
      title: 'Accessibility-focused front-end work',
      description: 'Improved web accessibility for users with disabilities at Lloyds Banking Group, lifting user satisfaction by 30%.',
    },
    {
      title: 'Graph database tooling',
      description: 'Supported the Innovation X team in building a Neo4j graph database to improve search functionality.',
    },
    {
      title: 'Internal tooling and pattern libraries',
      description: 'Maintained desktop and mobile pattern libraries and redesigned toolbar UI, lifting internal user adoption by 20%.',
    },
  ] satisfies OpenSourceHighlight[],
}

export const implementationNotes = [
  {
    title: 'Reusable project cards',
    description:
      'Keep image, stack tags, metrics, outcome text, repo links, and demo links in one typed project array.',
  },
  {
    title: 'Case-study routing',
    description:
      'Generate routes from the project slug so adding one project automatically creates the detail page.',
  },
  {
    title: 'Image optimization',
    description:
      'Serve screenshots through next/image with explicit dimensions and replace SVG mocks with AVIF or WebP when available.',
  },
  {
    title: 'Metadata and deployment',
    description:
      'Keep canonical URLs, social metadata, sitemap, robots, and environment variables aligned before a production deploy.',
  },
] satisfies ImplementationNote[]

export const skills = [
  {
    category: 'Languages',
    description: 'Core languages used across web and backend work.',
    items: [
      { label: 'HTML', icon: 'H' },
      { label: 'CSS', icon: 'C' },
      { label: 'JavaScript (ES6+)', icon: 'JS' },
      { label: 'TypeScript', icon: 'TS' },
      { label: 'Python', icon: 'Py' },
      { label: 'SQL', icon: 'SQL' },
      { label: 'C#', icon: 'C#' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    description: 'Frameworks used to build and ship interfaces and services.',
    items: [
      { label: 'React', icon: 'R' },
      { label: 'Angular', icon: 'Ng' },
      { label: 'Next.js', icon: 'N' },
      { label: 'Node.js', icon: 'JS' },
      { label: 'Express', icon: 'Ex' },
    ],
  },
  {
    category: 'Testing & Quality',
    description: 'Practices and tools for reliable, well-tested code.',
    items: [
      { label: 'JUnit', icon: 'Ju' },
      { label: 'Jest', icon: 'Je' },
      { label: 'TDD', icon: 'TD' },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    description: 'Tools for shipping, automating, and maintaining production systems.',
    items: [
      { label: 'Git', icon: 'Gi' },
      { label: 'GitHub', icon: 'Gh' },
      { label: 'Jenkins', icon: 'Jk' },
      { label: 'Docker', icon: 'Dk' },
      { label: 'CI/CD', icon: 'CD' },
    ],
  },
  {
    category: 'Tools & Platforms',
    description: 'Day-to-day tools for collaboration and debugging.',
    items: [
      { label: 'DevTools', icon: 'DT' },
      { label: 'Jira', icon: 'Ji' },
      { label: 'Confluence', icon: 'Co' },
    ],
  },
] satisfies SkillCategory[]

export const projects = [
  {
    slug: 'atlas-ops',
    title: 'Atlas Ops',
    summary:
      'An internal operations console that reduced triage time by turning scattered alerts into a guided incident workflow.',
    description:
      'Atlas Ops combined live telemetry, severity scoring, and a decision-tree runbook so on-call engineers could move from detection to mitigation in one screen.',
    status: 'Shipped',
    year: '2025',
    image: 'https://github-readme-activity-graph.vercel.app/graph?username=domwokorach&bg_color=0d1117&color=57c7ff&line=1eeb40&point=58a6ff&area=true&hide_border=true',
    alt: "Live GitHub activity graph for domwokorach",
    tags: ['Next.js', 'Postgres', 'Resend', 'Observability'],
    stars: '1.4k',
    repoUrl: 'https://github.com/domwokorach/atlas-ops',
    demoUrl: 'https://atlas.averystone.dev',
    metrics: [
      { label: 'Triage time', value: '-41%' },
      { label: 'False escalations', value: '-26%' },
      { label: 'Adoption', value: '92%' },
    ],
    overview:
      'A critical-path operations surface for support and SRE teams, focused on clarity under pressure.',
    challenge:
      'Operators had to hop between logs, Slack, dashboards, and a stale runbook before they could make the first useful move.',
    constraints: [
      'Had to work during live incidents with minimal room for visual clutter.',
      'Needed to keep the interface fast on older laptops and unreliable Wi-Fi.',
      'Had to surface the right next step without hiding the underlying data.',
    ],
    approach: [
      'Built a prioritized event feed with severity, owner, and SLA context baked into each row.',
      'Collapsed the runbook into progressively disclosed next steps instead of a separate documentation path.',
      'Added a shareable incident summary so responders could hand off with one click.',
    ],
    uiStates: ['Idle dashboard', 'Incident active', 'Escalation in progress', 'Resolved summary'],
    codeNotes: [
      'Route handlers normalize alerts before they hit the client.',
      'Project cards and case-study pages share the same typed source data.',
      'Image dimensions stay explicit so screenshots do not shift layout.',
    ],
    outcomes: [
      'Median first-action time dropped from 7 minutes to 4 minutes.',
      'The support team cut duplicate escalations by more than a quarter.',
      'Leadership used the same dashboard in weekly review meetings.',
    ],
    lessons: [
      'Treat incident UI like a control surface, not a marketing page.',
      'The most useful cards are the ones that stay readable at a glance.',
      'Small handoff actions prevent bigger coordination problems later.',
    ],
    stack: ['Next.js App Router', 'TypeScript', 'Postgres', 'Vercel Functions'],
    architecture: [
      { title: 'Signal intake', detail: 'Normalizes webhook payloads and internal alerts into one event model.' },
      { title: 'Ranking', detail: 'Scores incidents by customer impact, age, and unresolved dependencies.' },
      { title: 'Guidance', detail: 'Surfaces the right runbook step rather than a wall of links.' },
    ],
  },
  {
    slug: 'signal-library',
    title: 'Signal Library',
    summary:
      'A content library and preview system that gave a marketing team one source of truth for social, launch, and newsletter assets.',
    description:
      'Signal Library made reusable campaign cards, content states, and copy previews available to writers and designers without needing developer support.',
    status: 'In production',
    year: '2024',
    image: '/projects/signal.svg',
    alt: 'Abstract content library mockup for Signal Library',
    tags: ['Design system', 'CMS', 'Content ops', 'Analytics'],
    stars: '842',
    repoUrl: 'https://github.com/domwokorach/signal-library',
    demoUrl: 'https://signal.averystone.dev',
    metrics: [
      { label: 'Content turnaround', value: '-35%' },
      { label: 'Duplicate assets', value: '-48%' },
      { label: 'Weekly users', value: '74' },
    ],
    overview:
      'A content operations hub that reduced review overhead while keeping every launch asset aligned.',
    challenge:
      'Writers were duplicating snippets across channels and never knew which version matched the live product state.',
    constraints: [
      'Needed to support non-technical editors without introducing new tooling overhead.',
      'Had to stay in sync with live product messaging across multiple channels.',
      'Could not slow down page loads for campaign previews.',
    ],
    approach: [
      'Created a typed content model with status flags for draft, review, approved, and archived.',
      'Rendered live previews directly from the same component primitives used in production.',
      'Added usage analytics so editors could see which templates actually moved traffic.',
    ],
    uiStates: ['Draft preview', 'Review queue', 'Approved asset', 'Archive view'],
    codeNotes: [
      'Content cards and preview states are rendered from one typed array.',
      'A shared component tree keeps publishing and drafting behavior aligned.',
      'Analytics metadata stays close to the content model for easier iteration.',
    ],
    outcomes: [
      'Launch prep became a scheduled workflow instead of an ad hoc scramble.',
      'The team retired three manual copy-paste checklists.',
      'Template reuse increased without flattening the editorial voice.',
    ],
    lessons: [
      'Preview tools are most useful when they share the same primitives as production.',
      'Editors need state, not just content blocks.',
      'A few well-placed analytics fields can replace a lot of guesswork.',
    ],
    stack: ['React', 'TypeScript', 'Headless CMS', 'Analytics'],
    architecture: [
      { title: 'Content model', detail: 'Typed records for assets, channels, and approval state.' },
      { title: 'Preview layer', detail: 'Same rendering primitives for draft review and live publishing.' },
      { title: 'Insights', detail: 'Tracks reach, reuse, and approval bottlenecks over time.' },
    ],
  },
  {
    slug: 'orbit-finance',
    title: 'Orbit Finance',
    summary:
      'A client portal that made complex account activity readable with progressive disclosure, fewer charts, and clearer next actions.',
    description:
      'Orbit Finance reorganized dense financial data into a task-first experience with clear decisions, exception handling, and accessibility-first interactions.',
    status: 'Shipped',
    year: '2023',
    image: '/projects/orbit.svg',
    alt: 'Abstract finance portal mockup for Orbit Finance',
    tags: ['Accessibility', 'Finance', 'Next.js', 'Charts'],
    stars: '512',
    repoUrl: 'https://github.com/domwokorach/orbit-finance',
    demoUrl: 'https://orbit.averystone.dev',
    metrics: [
      { label: 'Support tickets', value: '-29%' },
      { label: 'Task completion', value: '+22%' },
      { label: 'Zoom compliance', value: '100%' },
    ],
    overview:
      'A portal for clients and advisors that had to stay legible under zoom, keyboard-only use, and dense regulatory copy.',
    challenge:
      'The old interface buried critical next steps under a dense matrix of balances, alerts, and statements.',
    constraints: [
      'Had to remain useful at 200% zoom and on assistive technologies.',
      'Needed to present regulated data without visual overload.',
      'Should guide users toward the one action that mattered most.',
    ],
    approach: [
      'Reframed every screen around a single next action and a clear exception state.',
      'Reduced chart density and pushed raw detail into drill-in panels for keyboard users.',
      'Built responsive tables that survived 200% zoom without horizontal chaos.',
    ],
    uiStates: ['Summary view', 'Detail drill-in', 'Exception state', 'Zoomed responsive table'],
    codeNotes: [
      'Responsive table states are tuned to survive zoom and keyboard usage.',
      'Exception states are surfaced before deep chart detail.',
      'Pagination and drill-ins stay separate to preserve legibility.',
    ],
    outcomes: [
      'Clients finished critical tasks faster with fewer handoffs.',
      'Accessibility reviews passed on the first iteration.',
      'The support queue saw fewer “where do I click?” requests.',
    ],
    lessons: [
      'Accessibility constraints make the layout better for everyone.',
      'Dense information needs hierarchy, not just more space.',
      'Task-first design reduces support overhead.',
    ],
    stack: ['Next.js', 'Accessible UI', 'Table patterns', 'Analytics'],
    architecture: [
      { title: 'Task framing', detail: 'Every screen starts with the job the user needs to finish.' },
      { title: 'Exception handling', detail: 'Shows anomalies and warnings before numerical detail.' },
      { title: 'Accessibility', detail: 'Keyboard flows and zoom-safe layouts remain intact at all sizes.' },
    ],
  },
] satisfies Project[]

export const experience = [
  {
    year: '06/2024 - 07/2024',
    role: 'Software Engineer (Shadowing)',
    company: 'Sky, Osterley, London, UK',
    summary:
      'Shadowed the engineering team at Sky, contributing to developer tooling and Agile delivery.',
    highlights: [
      'Collaborated with cross-functional teams to refine development tools and streamline day-to-day tasks, enhancing overall productivity.',
      'Actively participated in Scrum rituals, contributing to the successful delivery of multiple projects.',
      'Developed and tested code using best practices, achieving a 20% reduction in bug occurrences.',
      'Facilitated team structures to optimise workflow and communication.',
    ],
    technologies: [
      { label: 'Agile', icon: 'Ag' },
      { label: 'Scrum', icon: 'Sc' },
      { label: 'Testing', icon: 'Te' },
    ],
  },
  {
    year: '09/2018 - 01/2020',
    role: 'Front End Developer - Innovation and Strategy',
    company: 'Lloyds Banking Group, London Bridge, London, UK',
    summary:
      'Focused on accessibility, design, and prototyping for the Innovation and Strategy team.',
    highlights: [
      'Specialised in enhancing web accessibility for users with disabilities, boosting user satisfaction by 30%.',
      'Led the graphic design and website construction for the Innovation Communities Conference 2018, drawing over 500 attendees.',
      'Engaged with colleagues to establish core values and set KPIs, improving team performance metrics.',
      'Showcased prototypes for the Applied Technology Innovation team, advancing strategic initiatives.',
    ],
    technologies: [
      { label: 'Accessibility', icon: 'A' },
      { label: 'HTML/CSS/JS', icon: 'H' },
      { label: 'Prototyping', icon: 'Pr' },
    ],
  },
  {
    year: '03/2016 - 09/2018',
    role: 'Web Developer - Backend & Architecture, Methodology, Applied Technology',
    company: 'Lloyds Banking Group, London Bridge, London, UK',
    summary:
      'Worked across backend fundamentals, graph database tooling, and internal UI improvements.',
    highlights: [
      'Gained foundational knowledge of Python and backend functions, contributing to data analysis projects.',
      'Supported the Innovation X Team in developing the Neo4j Graph database management system, enhancing search functionalities.',
      'Enhanced toolbar UI by adding new icons, improving navigation speed and usability for 5,000 users.',
      'Improved accessibility and consistency of internal tools by updating toolbar design, contributing to a 20% boost in user adoption.',
    ],
    technologies: [
      { label: 'Python', icon: 'Py' },
      { label: 'Neo4j', icon: 'N4' },
      { label: 'UI Tooling', icon: 'UI' },
    ],
  },
  {
    year: '03/2015 - 03/2016',
    role: 'UI Delivery and Transformation',
    company: 'Lloyds Banking Group, Moorgate, London, UK',
    summary:
      'Reviewed and resolved pre-release errors and maintained UI pattern libraries across desktop and mobile.',
    highlights: [
      'Reviewed error codes and updates pre-release, ensuring seamless online functionality across the UK.',
      'Utilised HTML, CSS, JavaScript, and Git to debug and resolve errors, reducing downtime by 25%.',
      'Maintained desktop and mobile pattern libraries, enhancing user experience consistency.',
    ],
    technologies: [
      { label: 'HTML/CSS/JS', icon: 'H' },
      { label: 'Git', icon: 'Gi' },
    ],
  },
  {
    year: '10/2014 - 03/2015',
    role: 'Apprentice',
    company: 'Lloyds Banking Group, Moorgate, London, UK',
    summary: 'Started in an apprenticeship role, transitioning into front-end development.',
    highlights: [
      'Enhanced UI components while transitioning into Front-End Development, contributing to improved usability and design consistency.',
      'Contributed to team projects, enhancing technical skills and understanding of industry practices.',
    ],
    technologies: [{ label: 'UI Components', icon: 'UI' }],
  },
] satisfies ExperienceEntry[]

export const articles = [
  {
    title: 'How I structure case-study content so it survives redesigns',
    description:
      'A practical breakdown of content modeling, metrics, and reusable narrative blocks for portfolio sites.',
    href: 'https://averystone.dev/articles/case-studies',
    source: 'Essay',
    date: '2026',
    readTime: '6 min',
  },
  {
    title: 'Why I default to semantic landmarks before visual polish',
    description:
      'A short guide to getting keyboard flow, heading structure, and screen-reader behavior right early.',
    href: 'https://averystone.dev/articles/semantics',
    source: 'Field note',
    date: '2025',
    readTime: '4 min',
  },
  {
    title: 'Designing a contact form that fails well in production',
    description:
      'Lessons from building a form that has a demo mode, validation, and a safe server fallback.',
    href: 'https://averystone.dev/articles/contact-forms',
    source: 'Guide',
    date: '2024',
    readTime: '5 min',
  },
] satisfies Article[]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}