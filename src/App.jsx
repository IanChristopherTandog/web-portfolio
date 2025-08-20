import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Menu, Gamepad2, Globe, FileText, Code2, ExternalLink, Sun, Moon, ArrowUp } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'
import { Input, Textarea } from './components/ui/input'
import ProjectImage from './components/ProjectImage'

// =====================
// CONFIG
// =====================
const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/IanChristopherTandog', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ian-christopher-tandog-8a366b202/', icon: Linkedin },
  { label: 'itch.io', href: 'https://itch.io/profile/', icon: Gamepad2 }, // TODO: add exact itch.io profile path
]

const SKILLS = {
  Languages: ['Java', 'C++', 'JavaScript', 'HTML', 'CSS'],
  Frameworks: ['Spring', 'Bootstrap', 'Godot Engine', 'React', 'Tailwind CSS', 'Framer Motion'],
  Tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Eclipse', 'Node.js', 'npm', 'Vite'],
  Other: ['REST APIs', 'Game Dev basics', 'Responsive Design', 'SEO Best Practices', 'Dark Mode'],
}

const SKILL_BARS = [
  { name: "JavaScript (React, Tailwind)", level: 50 },
  { name: "Java (Spring Framework)", level: 70 },
  { name: "PHP & MySQL", level: 90 },
  { name: "C# (Windows Forms)", level: 80 },
  { name: "Godot & GDScript", level: 95 },
  { name: "Java Fundamentals", level: 80 }
]

const PROJECTS = [
  {
    title: 'Web-based Appointment System with Inquiry for Minells Hair Nail and Lashes Salon',
    description: 'A full-stack web application with admin panel using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.',
    stack: ['HTML', 'CSS', 'JavaScript, PHP', 'MySQL', 'Bootstrap'],
    image: '/images/minnelsProject.png',
    demo: '#',
    code: 'https://github.com/IanChristopherTandog/Web-based-Appointment-System-with-Inquiry-for-Minell-s-Hair-Nail-and-Lashes-Salon',
  },
  {
    title: 'Real Estate Portfolio Website',
    description: 'React & Tailwind CSS Real Estate Portfolio Website for Marci Metzger.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'React Control'],
    image: '/images/real-state-portfolio.png',
    demo: 'https://marci-metzger-real-estate.pages.dev/',
    code: 'https://github.com/IanChristopherTandog/Marci-Metzger-Real-Estate',
  },
  {
    title: 'Dodge the Creeps (Godot)',
    description: 'Arcade-style survival game built with Godot Engine. Move, dodge enemies, and chase a high score.',
    stack: ['Godot', 'GDScript', 'HTML5 Export'],
    image: '/images/dodge-the-creeps.png',
    demo: 'https://IanChristopherTandog.github.io/DodgeTheCreeps/',
    code: 'https://github.com/IanChristopherTandog/DodgeTheCreeps',
    // embed: { src: 'https://IanChristopherTandog.github.io/DodgeTheCreeps/', aspect: '16/9' },
  },
]

const RESUME_PDF = '/resume/Ian_Christopher_Tandog_Resume.pdf'

// =====================
// UTIL / Components
// =====================
const container = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
        {icon}
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-slate-100">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}

function Chip({ children }) {
  return <Badge className="px-3 py-1 bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100">
      {children}</Badge>
}

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  }, [dark])
  return { dark, toggle: () => setDark(d => !d) }
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, toggle } = useDarkMode()

  const scrollTo = (hash) => {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <div className={`${container} flex h-16 items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Code2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">Ian Christopher Tandog</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <button key={n.href} onClick={() => scrollTo(n.href)} className="text-sm text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400 transition">
                {n.label}
              </button>
            ))}
            <a href={RESUME_PDF} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900 text-slate-900 dark:text-slate-100" download>
              <Download className="h-4 w-4" aria-hidden="true" /> Resume
            </a>
            <button aria-label="Toggle dark mode" onClick={toggle} className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm text-slate-900 bg-white hover:bg-slate-100 dark:text-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-colors">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <button aria-label="Toggle dark mode" onClick={toggle} className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm text-slate-900 bg-white hover:bg-slate-100 dark:text-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition-colors">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className="inline-flex items-center justify-center rounded-xl border px-3 py-2">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        
      </header>
      {/* Modal Menu */}
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-slate-950 rounded-xl p-8 w-80 flex flex-col gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {NAV.map((n) => (
                <button key={n.href} onClick={() => scrollTo(n.href)} className="py-2 text-left text-slate-900 dark:text-slate-100 hover:text-blue-700 dark:hover:text-blue-400 transition">
                  {n.label}
                </button>
              ))}
              <a href={RESUME_PDF} download className="mt-3 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-slate-900 dark:text-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
                <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className={`${container} grid min-h-[80vh] items-center gap-10 py-16 md:grid-cols-2`}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100">
              Full-Stack & Game Developer in Progress
              <span className="block text-lg font-medium text-blue-700 dark:text-blue-400">From Web Apps to Game Prototypes</span>
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I build web applications with PHP, MySQL, and JavaScript, create desktop tools in C#, 
              and prototype games with Godot and GDScript. Currently, I’m expanding my skills in 
              modern web development with React and Tailwind while building my portfolio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => scrollTo('#projects')}>View My Projects</Button>
              <Button variant="outline" onClick={() => scrollTo('#contact')}className="border-slate-700 text-slate-700 hover:bg-slate-50 dark:border-slate-300 dark:text-slate-300 dark:hover:bg-slate-800">Contact Me</Button>
            </div>
            <div className="mt-6 flex items-center gap-4">
              {SOCIALS.map((s) => {
                const Icon = s.icon
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400">
                    <Icon className="h-4 w-4" aria-hidden="true" /> {s.label}
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-3xl border shadow-xl dark:border-slate-800">
              <img
                alt="My profile"
                className="h-full w-full object-cover"
                src="/images/1x1 PICTURE.jpg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className={container}>
          <SectionTitle title="About Me" subtitle="A quick snapshot of who I am and what I do." icon={<FileText className="h-6 w-6 text-blue-700 dark:text-blue-400" />} />
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            {/* Avatar */}
            <Card className="overflow-hidden">
              <img
                alt="Portrait placeholder for Ian Christopher Tandog"
                className="h-64 w-full object-cover"
                src="/images/aboutMe.jpg"
                loading="lazy"
              />
              <CardContent className="space-y-3 dark:text-slate-100">
                <CardTitle >Ian Christopher Tandog</CardTitle>
                <CardDescription>Software Developer</CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Chip>PHP</Chip><Chip>MySQL</Chip><Chip>JavaScript</Chip><Chip>React</Chip><Chip>C#</Chip><Chip>Java</Chip><Chip>Godot</Chip>
                </div>
              </CardContent>
            </Card>

            {/* Bio + Tech Stack */}
            <div className="space-y-6 dark:text-slate-100">
              <p className="text-slate-700 dark:text-slate-300">
                I’m a developer with experience in full-stack web applications (PHP, MySQL, Bootstrap, JavaScript), desktop applications in C#, and game prototypes using Godot and GDScript. I enjoy turning ideas into functional projects, from my capstone system to my OJT game development work. Currently, I’m expanding my skills in modern web development with React and Tailwind, building my portfolio and sharpening my craft through real projects.
              </p>

              <Card>
                <CardHeader><CardTitle>Skills Summary</CardTitle></CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {Object.entries(SKILLS).map(([k, v]) => (
                    <div key={k}>
                      <div className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{k}</div>
                      <div className="flex flex-wrap gap-2">
                        {v.map((it) => (<Chip key={it}>{it}</Chip>))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white py-20 dark:bg-slate-950">
        <div className={container}>
          <SectionTitle title="Projects" subtitle="Selected work across web and game development." icon={<Globe className="h-6 w-6 text-blue-700 dark:text-blue-400" />} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, idx) => (
              <Card key={p.title} className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img alt={`${p.title} screenshot`} src={p.image} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg dark:text-slate-100">{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (<Chip key={s}>{s}</Chip>))}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline dark:text-blue-400">
                      <ExternalLink className="h-4 w-4" aria-hidden="true" /> Demo
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:underline dark:text-slate-300">
                      <Github className="h-4 w-4" aria-hidden="true" /> Code
                    </a>
                  </div>
                </CardContent>

                {/* {idx === 0 && p.embed?.src && (
                  <div className="px-6 pb-6">
                    <div className="mt-2 w-full overflow-hidden rounded-xl border dark:border-slate-800">
                      <div className={`aspect-[${p.embed.aspect}]`}>
                        <iframe title="Godot Game" src={p.embed.src} className="h-full w-full" allowFullScreen loading="lazy" />
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      Embedded playable build (replace the src with your hosted HTML5 export).
                    </p>
                  </div>
                )} */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20">
        <div className={container}>
          <SectionTitle title="Skills" subtitle="A visual snapshot of my core strengths." icon={<Code2 className="h-6 w-6 text-blue-700 dark:text-blue-400" />} />
          <div className="grid gap-6 md:grid-cols-2 dark:text-slate-300">
            <Card>
              <CardHeader><CardTitle>Skill Levels</CardTitle></CardHeader>
              <CardContent className="space-y-5">
                {SKILL_BARS.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{s.level}%</span>
                    </div>
                    <Progress value={s.level} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>What I’m Learning</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Chip>Spring Security</Chip>
                  <Chip>REST API design</Chip>
                  <Chip>Unit Testing</Chip>
                  <Chip>Deployment (Vercel/GitHub Pages)</Chip>
                  <Chip>Game polishing</Chip>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  I’m actively enhancing my Java Spring stack and sharpening game polish in Godot, while continuing to refine accessible, responsive front‑end patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="bg-white py-20 dark:bg-slate-950">
        <div className={container}>
          <SectionTitle title="Resume" subtitle="Quick summary and a downloadable copy." icon={<FileText className="h-6 w-6 text-blue-700 dark:text-blue-400" />} />

          <Card className="mx-auto max-w-3xl dark:text-slate-300">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
                <CardDescription>
                  I’m a developer with experience in full-stack web applications (PHP, MySQL, Bootstrap, JavaScript), desktop applications in C#, and game prototypes using Godot and GDScript. I enjoy turning ideas into functional projects, from my capstone system to my OJT game development work. Currently, I’m expanding my skills in modern web development with React and Tailwind, building my portfolio and sharpening my craft through real projects.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Based in the Philippines. Open to internships, junior roles, and freelance web/game projects.
              </div>
              <a href={RESUME_PDF} download className="btn btn-primary inline-flex items-center gap-2">
                <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className={container}>
          <SectionTitle title="Contact" subtitle="Let’s build something together." icon={<Mail className="h-6 w-6 text-blue-700 dark:text-blue-400" />} />

          <Card className="mx-auto max-w-3xl dark:text-slate-300">
            <CardContent className="space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const data = new FormData(form)
                  const name = data.get('name')
                  const email = data.get('email')
                  const message = data.get('message')
                  const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
                  window.location.href = `mailto:ictandog37@gmail.com?subject=${subject}&body=${body}` // TODO: replace email
                }}
                className="grid gap-4"
              >
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Name</label>
                    <Input required name="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Email</label>
                    <Input required type="email" name="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Message</label>
                  <Textarea required name="message" placeholder="Tell me about your project..." rows={6} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Or email me directly: <a className="underline text-blue-700 dark:text-blue-400" href="mailto:ictandog37@gmail.com">ictandog37@gmail.com</a></div>
                  <Button type="submit">Send</Button>
                </div>
              </form>

              <div className="mt-6 flex flex-wrap gap-4">
                {SOCIALS.map((s) => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"   className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
>
                      <Icon className="h-4 w-4" aria-hidden="true" /> {s.label}
                    </a>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className={`${container} flex flex-col items-center justify-between gap-3 py-8 text-sm text-slate-500 dark:text-slate-400 md:flex-row`}>
          <div>© {new Date().getFullYear()} Ian Christopher Tandog. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="inline-flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" /> Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
