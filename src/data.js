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

// Base URL so demo/download links work both locally and on GitHub Pages.
const BASE = import.meta.env.BASE_URL

// All projects are real, self-contained apps that live in public/projects.
// `demo` opens the running app; `download` is a zip generated at build time.
export const projects = [
  {
    title: 'Focus Timer',
    blurb:
      'A Pomodoro timer with focus/break modes, an animated progress dial, and persistent session counting.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SVG'],
    accent: '#7c5cff',
    demo: `${BASE}projects/focus-timer/index.html`,
    download: `${BASE}downloads/focus-timer.zip`,
  },
  {
    title: 'Markdown Previewer',
    blurb:
      'A live Markdown editor with a dependency-free renderer for headings, lists, code, tables, and links.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Regex'],
    accent: '#21d4fd',
    demo: `${BASE}projects/markdown-previewer/index.html`,
    download: `${BASE}downloads/markdown-previewer.zip`,
  },
  {
    title: 'Expense Tracker',
    blurb:
      'Track income and spending with a running balance, totals, and transactions saved in localStorage.',
    tags: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    accent: '#42e695',
    demo: `${BASE}projects/expense-tracker/index.html`,
    download: `${BASE}downloads/expense-tracker.zip`,
  },
  {
    title: 'Memory Match Game',
    blurb:
      'A 4x4 card-matching game with 3D flip animations, move counting, and a shuffled board each round.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game'],
    accent: '#ff6ad5',
    demo: `${BASE}projects/memory-game/index.html`,
    download: `${BASE}downloads/memory-game.zip`,
  },
]

export const downloadAll = `${BASE}downloads/all-projects.zip`

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { group: 'AI / ML', items: ['LLMs', 'LangChain', 'RAG', 'Vector DBs', 'PyTorch'] },
]
