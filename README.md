# melaven.dev

Personal portfolio of **Maxim Nesterov**, a backend and system integration engineer. The site presents selected work, technical experience, tools, and ways to get in touch.

## Overview

This project is a responsive, single-page portfolio built with React and TypeScript. It features a minimal interface, motion-enhanced interactions, and a light/dark theme.

### Highlights

- Responsive layouts for desktop and mobile
- Light and dark themes
- Animated profile and page interactions
- Featured project, experience, and technology sections
- GitHub activity and direct contact links
- Resume link that opens in a new tab

## Tech stack

- **React 18** and **TypeScript**
- **Vite** for development and production builds
- **Tailwind CSS** for styling
- **Framer Motion** and **GSAP** for animation
- **Lucide React** and **React Icons** for icons
- **react-github-calendar** for GitHub activity

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal when the server is ready.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run the TypeScript check and create a production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

To verify a production build:

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Project structure

```text
.
├── public/                 # Static assets served from the site root
├── src/
│   ├── AnimatedLink.tsx    # Animated link component
│   ├── App.tsx             # Application entry component
│   ├── Contact.tsx         # Contact section
│   ├── FeaturedBuild.tsx   # Featured project section
│   ├── GitHubActivity.tsx  # GitHub contribution activity
│   ├── Hero.tsx            # Introductory profile section
│   ├── MagneticButton.tsx  # Interactive button component
│   ├── PortfolioSite.tsx   # Portfolio page composition and content
│   ├── Stack.tsx           # Technology stack section
│   ├── index.css           # Global styles and Tailwind directives
│   └── main.tsx            # React application bootstrap
├── index.html              # HTML document and page metadata
├── package.json            # Scripts and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

## Resume

The **View Resume** link points to a Google Docs document. Replace its URL in `src/PortfolioSite.tsx` if the resume is moved or updated.

## Deployment

Build the site with `npm run build`, then publish the contents of `dist/` to any static hosting provider that supports single-page Vite applications. Configure the hosting provider to serve `index.html` for the root route.

## License

No license has been specified for this project. Contact the author before reusing or distributing its contents.
