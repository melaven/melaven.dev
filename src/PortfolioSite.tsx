import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, Check, Code2, ExternalLink, Github, Mail, MapPin, Menu, MessageCircle, Moon, Send, Sun, X } from 'lucide-react';
import { SiDocker, SiFastapi, SiGithub, SiNginx, SiPhp, SiPostgresql, SiPython, SiRedis, SiSupabase, SiTypescript } from 'react-icons/si';
import { gsap } from 'gsap';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  href?: string;
};

type Experience = {
  date: string;
  title: string;
  company: string;
  place: string;
  description: string;
};

const TechBadge = ({ icon, text }: { icon?: React.ReactNode; text: string }) => {
  return (
    <span className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-dashed border-gray-400 bg-gray-50 px-2 py-0.5 align-middle text-sm font-medium text-gray-800 transition-colors hover:border-gray-500 dark:border-gray-600 dark:bg-white/5 dark:text-gray-200">
      {icon && <span className="flex items-center justify-center text-[1em]">{icon}</span>}
      {text}
    </span>
  );
};

const TechConveyor = () => {
  const [showAll, setShowAll] = useState(false);

  const technologies = [
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
    { name: 'FastAPI', icon: <SiFastapi color="#009688" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
    { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
    { name: 'Nginx', icon: <SiNginx color="#009639" /> },
    { name: 'PHP', icon: <SiPhp color="#777BB4" /> },
    { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
    { name: 'GitHub', icon: <SiGithub className="text-gray-900 dark:text-white" /> },
    { name: 'React', icon: <span className="text-sky-500">⚛</span> },
    { name: 'Tailwind', icon: <span className="text-cyan-500">✦</span> },
  ];

  const displayedTechs = showAll ? technologies : technologies.slice(0, 8);

  return (
    <div className="mt-16 w-full">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technologies</h2>
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-300"
        >
          {showAll ? 'Show less' : 'View all'} <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {displayedTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-white/10 dark:bg-black/20 dark:hover:border-white/30"
          >
            <span className="flex flex-shrink-0 items-center justify-center text-xl">{tech.icon}</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    title: 'Enterprise SERM Platform (Tenable)',
    subtitle: 'Autonomous SI SERM & Lead Engine',
    description: 'Architected the core backend infrastructure for an autonomous reputation management system. Designed database schemas and orchestrated complex data pipelines to eliminate manual monitoring and deliver real-time business intelligence.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=85&w=1400',
    technologies: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Webhook Dispatcher',
    subtitle: 'Secure API Gateway & Report Generator',
    description: 'Engineered a high-performance webhook dispatcher featuring Clean Architecture. Implemented HMAC security, strict rate limiting, and a reverse proxy configuration to ensure secure, scalable, and isolated B2B integrations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=85&w=1400',
    technologies: ['Python', 'FastAPI', 'Pandas', 'WeasyPrint', 'Nginx'],
    href: 'https://github.com/melaven',
  },
  {
    title: 'Telegram Crawler',
    subtitle: 'Asynchronous Data Extraction Pipeline',
    description: 'Designed and deployed a high-volume asynchronous data extraction system. Built reliable background workers to parse, process, and route continuous data streams directly into the core infrastructure.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=85&w=1400',
    technologies: ['Python', 'AsyncIO'],
    href: 'https://github.com/melaven',
  },
];

const experience: Experience[] = [
  {
    date: '2026 – Present',
    title: 'Founder & System Architect',
    company: 'Tenable',
    place: 'Remote',
    description: 'Founded a B2B technical startup focused on autonomous backend infrastructure. Architecting and developing core products, including an SI-driven Search Engine Reputation Management (SERM) engine and high-performance asynchronous data crawlers.',
  },
  {
    date: '2025 – 2026',
    title: 'Automation & SI Engineer',
    company: 'Freelance',
    place: 'Remote',
    description: 'Engineered custom parsing and automation scripts for cross-platform content distribution (TikTok, Instagram Reels). Integrated SI models for media generation and audio processing, streamlining digital content pipelines for clients.',
  },
  {
    date: 'Jul 2024 – Oct 2024',
    title: 'Reputation Data Analyst',
    company: 'VICTORY GROUP',
    place: 'Remote',
    description: 'Managed corporate reputation workflows and operational analytics. Maintained data structured reporting via CRM and cloud spreadsheets, ensuring transparent performance tracking for brand reputation campaigns.',
  },
];

const technologyRows = [
  ['Python (FastAPI, AsyncIO)', 'PHP', 'SI Models'],
  ['PostgreSQL', 'Redis', 'Docker', 'Supabase'],
  ['REST APIs', 'Webhooks', 'CRM APIs', 'SI APIs'],
];

const experiences = experience;
const avatarTiles = Array.from({ length: 144 }, (_, index) => index);
const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/highlights': 'Highlights',
  '/tech-stack': 'Technologies',
  '/certifications': 'Certifications',
};

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ title, href, linkLabel = 'View all' }: { title: string; href?: string; linkLabel?: string }) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">{title}</h2>
      {href && <RouteLink href={href} className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">{linkLabel}<ArrowRight className="h-3.5 w-3.5" /></RouteLink>}
    </div>
  );
}

function RouteLink({ href, children, className = '', onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: (event: ReactMouseEvent<HTMLAnchorElement>) => void }) {
  return <a href={href} onClick={onClick} className={className}>{children}</a>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <article className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-gray-400 dark:border-gray-800 dark:bg-[#111] dark:hover:border-gray-600">
        <a href={project.href || '/projects'} className="block overflow-hidden" aria-label={`Open ${project.title}`}>
          <img src={project.image} alt={project.title} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-48" />
        </a>
        <div className="flex min-h-[205px] flex-col p-4 sm:p-5">
          <div className="mb-2 flex items-start justify-between gap-3">
            <div>
              <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-400">{project.subtitle}</p>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{project.title}</h3>
            </div>
          </div>
          <p className="mb-5 text-sm leading-6 text-gray-500 dark:text-gray-400">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => <span key={technology} className="rounded-md bg-gray-100 px-2 py-1 text-[10px] text-gray-600 dark:bg-gray-800 dark:text-gray-300">{technology}</span>)}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ExperienceList({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="divide-y divide-dashed divide-gray-200 dark:divide-gray-800">
      {experiences.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.06}>
          <article className={`grid gap-2 py-5 sm:grid-cols-[150px_1fr] sm:gap-7 ${detailed ? 'sm:py-7' : ''}`}>
            <p className="pt-0.5 text-xs font-medium text-gray-400">{item.date}</p>
            <div>
              <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.company}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-gray-400"><MapPin className="h-3 w-3" />{item.place}</p>
              {detailed && <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">{item.description}</p>}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function FeaturedWork({ reducedMotion }: { reducedMotion: boolean | null }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = projects;
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section className="mb-16 sm:mb-20">
      <SectionHeading title="Featured Work" />
      <div className="flex h-[300px] gap-2 overflow-hidden sm:h-[360px] sm:gap-3" role="list" aria-label="Featured projects">
        {featured.map((project, index) => {
          const active = activeIndex === index;
          return (
            <motion.div
              key={project.title}
              role="listitem"
              tabIndex={0}
              aria-label={`${project.title}, ${project.subtitle}`}
              aria-current={active}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              onClick={() => setActiveIndex(index)}
              animate={{ flex: active ? 5 : 1 }}
              transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 150, damping: 24 }}
              className={`relative min-w-0 cursor-pointer overflow-hidden rounded-xl bg-gray-900 outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-gray-500 ${active ? 'flex-[5]' : 'flex-1'}`}
            >
              <img src={project.image} alt="" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${active ? 'scale-100' : 'scale-125'}`} />
              <div className={`absolute inset-0 transition-colors duration-500 ${active ? 'bg-black/30' : 'bg-black/65'}`} />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                <span className={`mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs ${active ? '' : 'sm:[writing-mode:vertical-rl]'}`}>{project.subtitle}</span>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.22 }}>
                      <h3 className="text-lg font-semibold sm:text-2xl">{project.title}</h3>
                      <p className="mt-1 max-w-lg text-xs leading-5 text-white/80 sm:text-sm">{project.description}</p>
                      <a href="/projects" onClick={(event) => event.stopPropagation()} className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 hover:text-white">Explore project<ArrowRight className="h-3.5 w-3.5" /></a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
        {featured.map((project, index) => <span key={project.title} className={`h-1 rounded-full transition-all ${activeIndex === index ? 'w-6 bg-gray-700 dark:bg-gray-300' : 'w-1.5 bg-gray-300 dark:bg-gray-700'}`} />)}
      </div>
    </section>
  );
}

function HomePage({ navigate, reducedMotion }: { navigate: (path: string) => void; reducedMotion: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const tweenRef = useRef<ReturnType<typeof gsap.delayedCall> | null>(null);
  const profileRef = useRef(false);

  const switchProfile = (next: boolean) => {
    if (profileRef.current === next) return;
    profileRef.current = next;
    setHovered(next);
    const tiles = tileRef.current?.querySelectorAll('span');
    const image = avatarRef.current;
    if (!tiles || !image || reducedMotion) {
      setActiveAvatar(next);
      return;
    }
    gsap.killTweensOf(tiles);
    tweenRef.current?.kill();
    gsap.set(tiles, { display: 'none' });
    const step = 0.3 / tiles.length;
    gsap.to(tiles, { display: 'block', duration: 0, stagger: { each: step, from: 'random' } });
    tweenRef.current = gsap.delayedCall(0.3, () => setActiveAvatar(next));
    gsap.to(tiles, { display: 'none', duration: 0, delay: 0.3, stagger: { each: step, from: 'random' } });
  };

  useEffect(() => () => { tweenRef.current?.kill(); }, []);

  return (
    <>
      <section className="mb-16 pt-7 sm:mb-20 sm:pt-11">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mb-5 flex w-fit items-center gap-6">
          <div
            className="relative h-[112px] w-[112px] shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 shadow-sm dark:border-gray-600 dark:bg-gray-900 sm:h-[160px] sm:w-[160px]"
            onMouseEnter={() => switchProfile(true)} onMouseLeave={() => switchProfile(false)}
            onFocus={() => switchProfile(true)} onBlur={() => switchProfile(false)}
            onClick={() => { if (window.matchMedia('(pointer: coarse)').matches) switchProfile(!profileRef.current); }}
            tabIndex={0} role="button" aria-label="Toggle profile portrait"
          >
            <img src="/avatar-cartoon.jpg" alt="Melaven" className="absolute inset-0 h-full w-full object-cover" />
            <img ref={avatarRef} src="/avatar-real.jpg" alt="Maxim Nesterov" className={`absolute inset-0 h-full w-full scale-110 object-cover transition-opacity duration-200 ${activeAvatar ? 'opacity-100' : 'opacity-0'}`} />
            <div ref={tileRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
              {avatarTiles.map((tile) => <span key={tile} className="absolute bg-white dark:bg-gray-950" style={{ width: `${100 / 12}%`, height: `${100 / 12}%`, left: `${(tile % 12) * (100 / 12)}%`, top: `${Math.floor(tile / 12) * (100 / 12)}%`, display: 'none' }} />)}
            </div>
          </div>
          <div>
            <h1 className="flex items-center gap-1.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
              <AnimatePresence mode="wait" initial={false}><motion.span key={hovered ? 'full' : 'alias'} initial={reducedMotion ? false : { opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.16 }}>{hovered ? 'Maxim Nesterov' : 'Melaven'}</motion.span></AnimatePresence>
              <svg viewBox="0 0 24 24" aria-label="Verified" role="img" className="ml-2 h-6 w-6 shrink-0 text-blue-500">
                <g fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.792-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.74 2.746 1.867 3.45-.032.22-.05.44-.05.66 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25C9.182 21.585 10.49 22.5 12 22.5s2.816-.917 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.792 3.918-4 0-.22-.018-.44-.05-.66 1.128-.704 1.867-1.99 1.867-3.45zm-11.16 4.083l-3.35-3.35 1.413-1.414 1.937 1.936 5.488-5.487 1.414 1.414-6.902 6.9z" />
                </g>
              </svg>
            </h1>
            <div className="mt-2 flex items-center gap-3 text-gray-400">
              <a href="https://github.com/melaven" aria-label="GitHub" target="_blank" rel="noreferrer" className="transition-colors hover:text-gray-900 dark:hover:text-white"><Github className="h-[17px] w-[17px]" /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-sm font-semibold transition-colors hover:text-gray-900 dark:hover:text-white">in</a>
              <a href="mailto:maxim.nesterov84@gmail.com" aria-label="Email" className="transition-colors hover:text-gray-900 dark:hover:text-white"><Mail className="h-[17px] w-[17px]" /></a>
            </div>
          </div>
        </motion.div>

        <div className="max-w-[720px]">
          <motion.h2 initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="max-w-2xl text-[28px] font-medium leading-tight tracking-tight text-gray-900 dark:text-white sm:text-[38px]">Backend &amp; System Integration</motion.h2>
          <motion.p initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }} className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-[15px]">
            I design and integrate autonomous backend solutions using
            <TechBadge icon={<SiPython color="#3776AB" />} text="Python" /> and
            <TechBadge icon={<SiFastapi color="#009688" />} text="FastAPI" />, ensuring robust data flow via
            <TechBadge icon={<SiPostgresql color="#4169E1" />} text="PostgreSQL" />. I treat automation as a system-level UX, connecting complex logic with
            <TechBadge icon={<SiDocker color="#2496ED" />} text="Docker" /> to play the long game.
          </motion.p>
          <motion.a initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.24 }} href="https://docs.google.com/document/d/15u_YFph1Nobas2T-K1tkF1uPCBYdad0OElEYa3ghnzs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-gray-950">View Resume <ArrowDownRight className="h-4 w-4" /></motion.a>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <SectionHeading title="Experience" />
        <ExperienceList />
      </section>

      <FeaturedWork reducedMotion={reducedMotion} />

      <section className="mb-16 sm:mb-20">
        <SectionHeading title="Projects" href="/projects" linkLabel="Explore projects" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        <button onClick={() => navigate('/projects')} className="mx-auto mt-7 inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-950 dark:border-gray-800 dark:text-gray-300 dark:hover:text-white">Explore all projects<ArrowRight className="h-3.5 w-3.5" /></button>
      </section>

      <TechConveyor />

      <section className="mb-16 sm:mb-20">
        <SectionHeading title="Certifications" href="/certifications" />
        <div className="grid gap-4 md:grid-cols-[1.05fr_1fr]">
          <Reveal className="rounded-lg border border-gray-200 p-5 dark:border-gray-800 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">PROFESSIONAL CREDENTIAL</p>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300"><Code2 className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-gray-400">Oct 2024</p>
                <h3 className="mt-1 text-base font-semibold text-gray-900 dark:text-white">System Architecture &amp; Data Automation</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Tenable Infrastructure</p>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white">VIEW CREDENTIAL<ExternalLink className="h-3 w-3" /></a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="rounded-lg border border-gray-200 p-5 dark:border-gray-800 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">RECENT TRAINING</p>
            <div className="mt-5 divide-y divide-gray-100 dark:divide-gray-800">
              <div className="py-3 first:pt-0">
                <p className="text-[10px] text-gray-400">Apr 2026</p>
                <h3 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">SI (System Intelligence) &amp; Backend Automation</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">B2B Infrastructure Summit</p>
              </div>
              <div className="py-3 pb-0">
                <p className="text-[10px] text-gray-400">Mar 2026</p>
                <h3 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">High-Performance Crawler Design</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Data Extraction Core</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <SectionHeading title="Education" />
        <Reveal className="grid gap-2 border-y border-dashed border-gray-200 py-5 sm:grid-cols-[150px_1fr] sm:gap-7 dark:border-gray-800">
          <p className="text-xs font-medium text-gray-400">2026 — Present</p>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Digital Marketing &amp; Product Strategy</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">TOP Computer Academy (Remote)</p>
          </div>
        </Reveal>
      </section>

      <section className="mb-16 sm:mb-20">
        <SectionHeading title="Offline Processes" href="/highlights" />
        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <Reveal>
            <p className="max-w-sm text-sm leading-7 text-gray-500 dark:text-gray-400">System architecture requires a clear mind. Off-screen, I focus on analyzing business frameworks, studying design principles, and reading hard sci-fi to keep my strategic vision sharp.</p>
            <div className="mt-4 flex flex-wrap gap-2">{['Business Literature', 'Sci-Fi', 'Design Arts', 'Discipline'].map(item => <span key={item} className="rounded-full border border-gray-200 px-3 py-1.5 text-[10px] text-gray-600 dark:border-gray-800 dark:text-gray-300">{item}</span>)}</div>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-4 gap-2">
            {[
              ['Business', 'photo-1517836357463-d25dfeac3438'], ['Focus', 'photo-1534438327276-14e5300c3a48'], ['Design', 'photo-1470770841072-f978cf4d019e'], ['Mindset', 'photo-1519501025264-65ba15a82390'],
            ].map(([label, id]) => <div key={label} className="group relative aspect-[4/5] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-900"><img loading="lazy" alt={label} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=400`} className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-2 pb-2 pt-7 text-[9px] font-medium text-white">{label}</span></div>)}
          </Reveal>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <SectionHeading title="GitHub Activity" />
        <Reveal className="overflow-hidden rounded-lg border border-gray-200 p-4 dark:border-gray-800 sm:p-5">
          <a href="https://github.com/melaven" target="_blank" rel="noreferrer" className="mb-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-900 dark:hover:text-white">Open GitHub profile<ArrowRight className="h-3 w-3" /></a>
          <div className="overflow-x-auto"><img src="https://ghchart.rshah.org/0f766e/melaven" alt="GitHub contribution activity for Melaven" loading="lazy" className="min-w-[700px] max-w-full opacity-80 dark:invert dark:hue-rotate-180" /></div>
          <p className="mt-3 text-[10px] text-gray-400">Contribution history · GitHub</p>
        </Reveal>
      </section>

      <section className="mb-12 border-y border-gray-200 py-10 dark:border-gray-800 sm:py-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <a href="mailto:hellofsleepingdolls@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a href="https://discordapp.com/users/nstnoire" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900">
              <MessageCircle className="h-4 w-4" />
              Discord @melaven
            </a>
            <a href="https://t.me/melavenn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900">
              <Send className="h-4 w-4" />
              Telegram @melavenn
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="mt-20 flex flex-col items-center justify-between border-t border-zinc-200 py-8 sm:flex-row">
        <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
          Repetition until it becomes technique.
        </p>
        <p className="mt-4 text-sm text-zinc-500 sm:mt-0 dark:text-zinc-400">
          Maxim Nesterov / Still building / Remote
        </p>
      </footer>

      <AnimatePresence>
        {chatOpen && <motion.aside initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} className="fixed bottom-20 right-4 z-50 w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-[#111]">
          <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-800"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /><div><p className="text-xs font-semibold text-gray-900 dark:text-white">Chat with Melaven</p><p className="text-[10px] text-gray-400">Usually replies by email</p></div></div><button onClick={() => setChatOpen(false)} aria-label="Close chat"><X className="h-4 w-4 text-gray-500" /></button></div>
          <div className="p-4"><p className="rounded-lg bg-gray-50 p-3 text-xs leading-5 text-gray-600 dark:bg-gray-900 dark:text-gray-300">Hi, I&apos;m Maxim. Tell me a little about the system or integration you&apos;re planning.</p><a href="mailto:maxim.nesterov84@gmail.com" className="mt-3 flex items-center justify-center gap-2 rounded-md bg-gray-900 py-2.5 text-xs font-medium text-white dark:bg-white dark:text-gray-950"><Send className="h-3.5 w-3.5" />Continue by email</a></div>
        </motion.aside>}
      </AnimatePresence>
      <motion.button whileTap={{ scale: 0.94 }} onClick={() => setChatOpen((open) => !open)} aria-label={chatOpen ? 'Close chat' : 'Open chat'} className="fixed bottom-4 right-4 z-50 inline-flex h-11 items-center gap-2 rounded-full bg-zinc-900 px-4 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 dark:bg-white dark:text-gray-950"><MessageCircle className="h-4 w-4" />Chat with Maxim Nesterov</motion.button>
    </>
  );
}

function RoutePage({ path, navigate }: { path: string; navigate: (path: string) => void }) {
  const title = routeTitles[path] || 'Project';
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? projects : projects.filter(project => project.technologies.some(tech => tech.toLowerCase().includes(activeTab.toLowerCase())));
  const perPage = 3;
  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const visibleProjects = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => { setPage(1); }, [activeTab]);

  return (
    <div className="min-h-[60vh] pt-9 sm:pt-14">
      <button onClick={() => navigate('/')} className="mb-7 inline-flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"><ArrowLeft className="h-3.5 w-3.5" />Back to Home</button>
      <Reveal className="mb-9"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">Melaven / Portfolio</p><h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{path === '/projects' ? 'Selected Projects' : title}</h1><p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">{path === '/projects' ? 'Backend systems, integrations, and automation built for production workflows.' : path === '/experience' ? 'A closer look at the systems I have designed and delivered.' : path === '/highlights' ? 'Selected milestones, technical interests, and the work behind the projects.' : path === '/tech-stack' ? 'Tools and technologies I use to design, build, and ship reliable systems.' : 'Training and professional development.'}</p></Reveal>

      {path === '/projects' && <>
        <div className="mb-6 flex flex-wrap gap-2">{['All', 'Python', 'FastAPI', 'PostgreSQL'].map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${activeTab === tab ? 'border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-950' : 'border-gray-200 text-gray-500 hover:border-gray-400 dark:border-gray-800 dark:text-gray-400'}`}>{tab}</button>)}</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project,index)=><ProjectCard key={project.title} project={project} index={index}/>)}</div>
        <div className="mt-7 flex items-center justify-center gap-2"><button aria-label="Previous page" onClick={()=>setPage(page-1)} disabled={page===1} className="grid h-9 w-9 place-items-center rounded-md border border-gray-200 text-gray-500 disabled:opacity-30 dark:border-gray-800"><ArrowLeft className="h-4 w-4"/></button><span className="px-2 text-xs text-gray-500">{page} / {pageCount}</span><button aria-label="Next page" onClick={()=>setPage(page+1)} disabled={page===pageCount} className="grid h-9 w-9 place-items-center rounded-md border border-gray-200 text-gray-500 disabled:opacity-30 dark:border-gray-800"><ArrowRight className="h-4 w-4"/></button></div>
      </>}
      {path === '/experience' && <div className="divide-y divide-gray-200 dark:divide-gray-800">{experiences.map((item,index)=><Reveal key={item.title} delay={index*.04}><article className="grid gap-3 py-7 sm:grid-cols-[160px_1fr] sm:gap-8"><p className="text-xs text-gray-400">{item.date}</p><div><h2 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h2><p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.company} · {item.place}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400">{item.description}</p><ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400"><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400"/>Designed asynchronous services, database structures, and production APIs.</li><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400"/>Worked across implementation, testing, deployment, and technical documentation.</li></ul></div></article></Reveal>)}</div>}
      {path === '/highlights' && <div className="grid gap-3 sm:grid-cols-2">{[['System Design','Turning complex workflows into maintainable backend services.'],['Automation','Replacing repetitive operations with reliable integrations.'],['Data Pipelines','Collecting, processing, and routing data asynchronously.'],['Security','HMAC verification, replay protection, and practical rate limiting.']].map(([heading,body],index)=><Reveal key={heading} delay={index*.05} className="rounded-lg border border-gray-200 p-5 dark:border-gray-800"><span className="text-[10px] font-mono text-gray-400">0{index+1}</span><h2 className="mt-5 text-base font-semibold text-gray-900 dark:text-white">{heading}</h2><p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{body}</p></Reveal>)}</div>}
      {path === '/tech-stack' && <div className="space-y-2">{technologyRows.map((items,index)=><Reveal key={index} className="grid gap-4 border-t border-gray-200 py-5 sm:grid-cols-[150px_1fr] dark:border-gray-800"><h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">{['Core Backend','Data & Infrastructure','Integrations'][index]}</h2><div className="flex flex-wrap gap-2">{items.map(item=><span key={item} className="rounded-md border border-gray-200 px-3 py-2 text-xs text-gray-600 dark:border-gray-800 dark:text-gray-300">{item}</span>)}</div></Reveal>)}</div>}
      {path === '/certifications' && <div className="grid gap-4 md:grid-cols-2"><article className="rounded-lg border border-gray-200 p-5 dark:border-gray-800"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">PROFESSIONAL CREDENTIAL</p><div className="mt-6 flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300"><Code2 className="h-5 w-5" /></div><div><p className="text-xs text-gray-400">Oct 2024</p><h2 className="mt-1 text-base font-semibold text-gray-900 dark:text-white">System Architecture &amp; Data Automation</h2><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Tenable Infrastructure</p><a href="#" className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white">VIEW CREDENTIAL<ExternalLink className="h-3 w-3" /></a></div></div></article><article className="rounded-lg border border-gray-200 p-5 dark:border-gray-800"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">RECENT TRAINING</p><div className="mt-5 divide-y divide-gray-100 dark:divide-gray-800"><div className="py-3 first:pt-0"><p className="text-[10px] text-gray-400">Apr 2026</p><h2 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">SI (System Intelligence) &amp; Backend Automation</h2><p className="mt-1 text-xs text-gray-500 dark:text-gray-400">B2B Infrastructure Summit</p></div><div className="py-3 pb-0"><p className="text-[10px] text-gray-400">Mar 2026</p><h2 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">High-Performance Crawler Design</h2><p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Data Extraction Core</p></div></div></article></div>}
      {!routeTitles[path] && <ProjectDetail path={path} navigate={navigate} />}
    </div>
  );
}

function ProjectDetail({ path, navigate }: { path: string; navigate: (path: string) => void }) {
  const project = projects.find(item => path.toLowerCase().includes(item.title.toLowerCase().split(' ')[0])) || projects[0];
  return <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"><img src={project.image} alt={project.title} className="h-56 w-full object-cover sm:h-80"/><div className="p-5 sm:p-8"><p className="text-[10px] uppercase tracking-widest text-gray-400">{project.subtitle}</p><h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map(item=><span key={item} className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">{item}</span>)}</div><button onClick={()=>navigate('/projects')} className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300"><ArrowLeft className="h-4 w-4"/>All projects</button></div></div>;
}

export default function PortfolioSite() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/, '') || '/');
  const [dark, setDark] = useState(() => window.localStorage.getItem('portfolio-theme') === 'dark' || (!window.localStorage.getItem('portfolio-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches));
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname.replace(/\/$/, '') || '/');
    const scroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener('popstate', updatePath);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { window.removeEventListener('popstate', updatePath); window.removeEventListener('scroll', scroll); };
  }, []);

  const navigate = (next: string) => {
    if (next === path) { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); return; }
    window.history.pushState({}, '', next);
    setPath(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const intercept = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href');
    if (href?.startsWith('/') && !event.metaKey && !event.ctrlKey && !event.shiftKey && event.button === 0) {
      event.preventDefault();
      navigate(href);
    }
  };

  const toggleTheme = (trigger?: HTMLElement) => {
    const rect = trigger?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    document.documentElement.style.setProperty('--transition-origin-x', `${x}px`);
    document.documentElement.style.setProperty('--transition-origin-y', `${y}px`);

    const update = () => setDark(value => !value);
    const transition = (document as Document & { startViewTransition?: (callback: () => void) => unknown }).startViewTransition;
    if (transition) {
      transition.call(document, () => {
        update();
      });
      return;
    }
    update();
  };

  const onHome = path === '/';
  const links = [['/projects', 'Projects'], ['/experience', 'Experience'], ['/highlights', 'Highlights']] as const;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-100 dark:bg-[#090909] dark:text-gray-100 dark:selection:bg-teal-900">
      <header className="sticky top-0 z-40 border-b border-gray-100/80 bg-white/75 backdrop-blur-xl dark:border-gray-800/80 dark:bg-[#090909]/80">
        <div className="mx-auto flex h-[62px] w-full max-w-[720px] items-center justify-between px-5 sm:px-0">
          <a href="/" onClick={intercept} className="inline-flex items-center" aria-label="Home">
            <div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
              MN<span className="text-teal-500">.</span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 sm:flex">{links.map(([href,label])=><a key={href} href={href} onClick={intercept} className={`text-xs transition-colors ${path===href?'text-gray-950 dark:text-white':'text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white'}`}>{label}</a>)}
            <button onClick={(event) => toggleTheme(event.currentTarget)} aria-label={dark?'Switch to light':'Switch to dark'} title={dark?'Switch to light':'Switch to dark'} className="ml-1 grid h-8 w-8 place-items-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"><AnimatePresence mode="wait" initial={false}><motion.span key={dark?'dark':'light'} initial={reduceMotion?false:{opacity:0,y:-6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:6}} transition={{duration:.15}}>{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}</motion.span></AnimatePresence></button>
          </nav>
          <div className="flex items-center gap-1 sm:hidden"><button onClick={(event) => toggleTheme(event.currentTarget)} aria-label="Toggle theme" className="grid h-9 w-9 place-items-center text-gray-500">{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}</button><button onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Close menu':'Open menu'} className="grid h-9 w-9 place-items-center text-gray-500">{menuOpen?<X className="h-4 w-4"/>:<Menu className="h-4 w-4"/>}</button></div>
        </div>
        <AnimatePresence>{menuOpen&&<motion.nav initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-gray-100 bg-white px-5 dark:border-gray-800 dark:bg-[#090909] sm:hidden">{links.map(([href,label])=><a key={href} href={href} onClick={intercept} className="block border-b border-gray-100 py-3 text-sm text-gray-600 last:border-0 dark:border-gray-800 dark:text-gray-300">{label}</a>)}</motion.nav>}</AnimatePresence>
      </header>

      <main className="mx-auto w-full max-w-[720px] px-5 sm:px-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={path} initial={reduceMotion?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.24,ease:[.22,1,.36,1]}}>
            {onHome ? <HomePage navigate={navigate} reducedMotion={Boolean(reduceMotion)}/> : <RoutePage path={path} navigate={navigate}/>}
          </motion.div>
        </AnimatePresence>
      </main>

      {!onHome && <div className="mx-auto mt-10 w-full max-w-[720px] px-5 sm:px-0"><footer className="flex flex-col gap-3 border-t border-gray-200 py-6 text-[10px] text-gray-400 sm:flex-row sm:justify-between dark:border-gray-800"><span>Repetition until it becomes technique.</span><span>Melaven / Still building / Remote</span></footer></div>}
      <AnimatePresence>{showTop&&<motion.button initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top" className="fixed bottom-4 left-4 z-40 grid h-9 w-9 place-items-center rounded-md border border-gray-200 bg-white/90 text-gray-500 shadow-sm backdrop-blur transition-colors hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900/90 dark:hover:text-white"><ArrowUp className="h-4 w-4"/></motion.button>}</AnimatePresence>
    </div>
  );
}
