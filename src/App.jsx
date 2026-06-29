import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { profile, projects, skills, stats } from './data'
import TiltCard from './components/TiltCard'

const Scene3D = lazy(() => import('./components/Scene3D'))

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="nav">
      <a href="#top" className="nav__logo">
        <span className="nav__logo-mark">DG</span>
        <span className="nav__logo-text">Deepanshu Garg</span>
      </a>
      <nav className="nav__links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a className="btn btn--ghost nav__cta" href={`mailto:${profile.email}`}>
        Let&apos;s talk
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__canvas">
        <Suspense fallback={<div className="hero__canvas-fallback" />}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.role} · {profile.location}
        </motion.p>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hi, I&apos;m <span className="grad">{profile.name}</span>.
          <br />I craft software that feels like magic.
        </motion.h1>
        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a className="btn btn--primary" href="#projects">
            View my work
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </motion.div>
      </div>
      <div className="hero__scroll">
        <span />
        Scroll to explore
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="stats__item"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <span className="stats__value grad">{s.value}</span>
          <span className="stats__label">{s.label}</span>
        </motion.div>
      ))}
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        kicker="Selected work"
        title="Projects I'm proud of"
        sub="A mix of products, platforms, and playful experiments — built end to end."
      />
      <div className="grid">
        {projects.map((p) => (
          <TiltCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <SectionHeading
        kicker="Toolbox"
        title="Skills & technologies"
        sub="The stack I reach for to ship reliable, scalable products."
      />
      <div className="skills">
        {skills.map((s, i) => (
          <motion.div
            key={s.group}
            className="skills__group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <h3>{s.group}</h3>
            <div className="skills__items">
              {s.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="about__grid">
        <motion.div
          className="about__art"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>DG</span>
        </motion.div>
        <div className="about__text">
          <SectionHeading kicker="About me" title="Engineer, builder, problem-solver" align="left" />
          <p>
            I&apos;m {profile.name}, a software developer who loves turning hard problems into elegant,
            performant products. From pixel-perfect interfaces to resilient backends and cloud
            infrastructure, I enjoy owning features end to end.
          </p>
          <p>
            When I&apos;m not shipping, I&apos;m exploring 3D on the web, contributing to open source, and
            mentoring developers. I care deeply about craft, speed, and delightful user experiences.
          </p>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Work with me
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <motion.div
        className="contact__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Let&apos;s build something <span className="grad">great</span>.
        </h2>
        <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function SectionHeading({ kicker, title, sub, align = 'center' }) {
  return (
    <motion.div
      className={`heading heading--${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="heading__kicker">{kicker}</span>
      <h2 className="heading__title">{title}</h2>
      {sub && <p className="heading__sub">{sub}</p>}
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {profile.name}. Built with React & Three.js.
      </span>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
