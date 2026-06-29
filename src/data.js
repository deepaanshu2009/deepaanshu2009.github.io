export const profile = {
  name: 'Deepanshu Garg',
  role: 'Software Developer',
  tagline: 'I build fast, beautiful, and reliable products across the web, cloud, and AI.',
  location: 'India · Remote-friendly',
  email: 'deepaanshu2009@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/deepaanshu2009' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Twitter', href: 'https://twitter.com/' },
  ],
}

export const stats = [
  { value: '5+', label: 'Years building' },
  { value: '40+', label: 'Projects shipped' },
  { value: '20+', label: 'Happy clients' },
  { value: '∞', label: 'Cups of coffee' },
]

export const projects = [
  {
    title: 'Nebula Analytics',
    blurb:
      'Real-time product analytics platform processing millions of events per day with sub-second dashboards.',
    tags: ['React', 'Node.js', 'ClickHouse', 'WebSockets'],
    accent: '#7c5cff',
    link: '#',
  },
  {
    title: 'Aether AI Assistant',
    blurb:
      'An LLM-powered assistant with tool use, RAG over private docs, and a streaming chat UI.',
    tags: ['Next.js', 'Python', 'LangChain', 'pgvector'],
    accent: '#21d4fd',
    link: '#',
  },
  {
    title: 'Orbit Commerce',
    blurb:
      'Headless e-commerce storefront with a 98 Lighthouse score and one-click global checkout.',
    tags: ['Remix', 'Stripe', 'Tailwind', 'Edge'],
    accent: '#ff6ad5',
    link: '#',
  },
  {
    title: 'Pulse DevOps',
    blurb:
      'Self-serve CI/CD platform that cut deploy times by 70% with preview environments per PR.',
    tags: ['Go', 'Kubernetes', 'Terraform', 'gRPC'],
    accent: '#42e695',
    link: '#',
  },
  {
    title: 'Lumen Design System',
    blurb:
      'A themeable, accessible component library powering 12 internal apps with 200+ components.',
    tags: ['React', 'Storybook', 'Radix', 'a11y'],
    accent: '#ffb347',
    link: '#',
  },
  {
    title: 'Voyage Maps',
    blurb:
      'Interactive 3D map experience for travel planning with smooth WebGL route animations.',
    tags: ['Three.js', 'Mapbox', 'TypeScript', 'WebGL'],
    accent: '#5d9bff',
    link: '#',
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { group: 'AI / ML', items: ['LLMs', 'LangChain', 'RAG', 'Vector DBs', 'PyTorch'] },
]
