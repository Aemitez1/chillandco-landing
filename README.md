# Chill&Co Works Landing Page

High-conversion landing page for **Chill&Co Works** (AI Sales Assistant for LINE OA), built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Overview

This landing page is designed to showcase the capabilities of the Chill&Co AI system, capturing leads via LINE Add Friend conversions. It features a modern, dark-themed UI with emerald accents, smooth scroll animations, and responsive layouts across all devices.

### Features
- **Hero & Value Proposition**: Engaging headline with animated entry and clear CTAs.
- **Dynamic Stats Bar**: Animated counters highlighting key performance metrics.
- **Interactive Component Previews**: Dashboard layout mockups demonstrating the actual product interface.
- **Knowledge Base Setup**: Interactive tab interface showing how the AI learns from store data.
- **Pricing Cards**: Clear, tiered pricing structure with a highlighted "Professional" plan.
- **SEO Optimized**: Includes OpenGraph tags, JSON-LD structured data for FAQs, and comprehensive meta information.

## 💻 Tech Stack

- **Framework**: [Next.js 14 App Router](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (Sans-serif) & Noto Sans Thai

## 📂 Project Structure

- `src/app/`: Next.js App Router setup (pages, layout, globals).
- `src/components/`: Reusable React components.
  - `layout/`: Navbar, Footer.
  - `sections/`: Main landing page sections (Hero, Features, Pricing, etc.).
  - `ui/`: UI Atoms (GlowButton, SectionHeader, Cards).
- `src/data/`: Centralized content management (`content.ts` is the single source of truth for text/media).
- `src/lib/`: Utility functions (e.g., `cn` for Tailwind class merging).

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Content Management

All text, links, and pricing data are managed centrally in `src/data/content.ts`. To update copy or modify pricing, simply edit this file—no need to dig through individual React components.
