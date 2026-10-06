import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon } from "./Hero";

const CONTACT_LINKS = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    text: "hello@example.com",
    Icon: Mail
  },
  {
    label: "Telegram", 
    href: "https://t.me/nstnoire",
    text: "@nstnoire",
    Icon: MessageCircle
  },
  {
    label: "GitHub",
    href: "https://github.com/melaven", 
    text: "melaven",
    Icon: GithubIcon
  }
];

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 py-32 sm:px-8 sm:py-40"
    >
      <h2 className="mb-8 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
        Integration & Consulting
      </h2>
      
      <p className="mb-12 max-w-2xl text-base leading-7 text-gray-500">
        Direct contact for B2B infrastructure development and autonomous systems integration.
      </p>
      
      <div className="space-y-6">
        {CONTACT_LINKS.map(({ label, href, text, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-gray-900 transition-colors hover:text-gray-600 focus-visible:outline-none focus-visible:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300 dark:focus-visible:text-gray-300"
          >
            <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="font-mono">{text}</span>
          </a>
        ))}
      </div>
      
      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Maxim Nesterov. B2B Backend & Automation.
        </p>
      </footer>
    </section>
  );
}