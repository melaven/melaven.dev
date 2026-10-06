import { type ReactNode, type SVGProps } from "react";
import { BadgeCheck, ChevronRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Icons (inline SVG: brand icons are deprecated/removed in newer lucide)     */
/* -------------------------------------------------------------------------- */

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41Z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  TechChip: inline badge that sits inside running text                       */
/* -------------------------------------------------------------------------- */

interface TechChipProps {
  children: ReactNode;
}

export function TechChip({ children }: TechChipProps) {
  return (
    <span className="mx-0.5 inline-flex items-center whitespace-nowrap rounded-md border border-gray-200 bg-gray-100 px-1.5 py-0.5 align-baseline text-[0.85em] font-medium leading-none text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/melaven", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com/", Icon: XIcon },
];

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-32 pt-24 sm:px-8 sm:pb-40 sm:pt-32">
      {/* Avatar placeholder */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-lg font-medium text-gray-500 dark:border-gray-800 dark:bg-gray-900"
        role="img"
        aria-label="Avatar placeholder"
      >
        MN
      </div>

      {/* Name + verified */}
      <div className="mt-8 flex items-center gap-2">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">Maxim Nesterov</h2>
        <BadgeCheck className="h-5 w-5 fill-blue-500 text-white dark:text-gray-950" aria-label="Verified" />
      </div>

      {/* Socials */}
      <ul className="mt-4 flex items-center gap-4 text-gray-500">
        {SOCIALS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="block rounded-sm transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-100"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        ))}
      </ul>

      {/* Headline */}
      <h1 className="mt-16 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-50">
        Backend Engineering &amp; System Architecture
      </h1>

      {/* Bio with inline chips */}
      <p className="mt-10 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg sm:leading-9">
        I design and implement backend systems for data processing and business automation. 
        Specialized in asynchronous architectures using <TechChip>Python / FastAPI</TechChip>, 
        database design with <TechChip>PostgreSQL</TechChip>, and container orchestration 
        via <TechChip>Docker</TechChip>. Current focus: real-time sentiment analysis pipelines 
        and CRM integrations with <TechChip>amoCRM</TechChip> and <TechChip>Supabase</TechChip>.
      </p>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="#projects"
          className="inline-flex items-center gap-1 rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-100 dark:focus-visible:ring-offset-gray-950"
        >
          View Projects
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}