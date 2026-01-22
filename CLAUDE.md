# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nicholas Conn's personal portfolio website hosted on GitHub Pages. Built with Next.js, TypeScript, and Tailwind CSS.

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Production build (outputs to /out)
npm run lint       # Run ESLint
npm run type-check # TypeScript validation
```

## Architecture

**Tech Stack:**
- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- MDX for blog posts
- GitHub Actions CI/CD

**Project Structure:**
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home page
│   ├── projects/page.tsx   # GitHub repos (fetched at build time)
│   ├── resume/page.tsx     # Resume/CV
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/page.tsx # Individual blog posts
├── components/             # Reusable React components
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   └── ContactLinks.tsx
├── content/blog/           # MDX blog posts
└── lib/
    ├── github.ts           # GitHub API fetching
    └── blog.ts             # Blog utilities
```

**Key Patterns:**
- GitHub repos fetched at build time via `lib/github.ts` (no client-side API calls)
- Blog posts are MDX files in `src/content/blog/` with frontmatter (title, date, description)
- Custom color palette defined in `src/app/globals.css` using Tailwind v4 `@theme` directive
- VT323 monospace font loaded via `next/font/google`

**Deployment:**
- Push to `main` triggers GitHub Actions workflow
- Builds and deploys to GitHub Pages automatically
