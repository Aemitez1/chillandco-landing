# Frontend Architecture — chillandco-landing

## Project Structure

```
chillandco-landing/
├── .sdd/                        ← คัดลอกมาจาก landing-sdd/
├── public/
│   ├── logo.jpg                 ← Brand logo (copy from go-line-ai-bot)
│   ├── og-image.jpg             ← Open Graph image (1200×630)
│   └── favicon.ico
├── src/
│   ├── app/                     ← Next.js App Router
│   │   ├── [lang]/              ← Dynamic locale segment (i18n)
│   │   │   ├── layout.tsx       ← Root layout (fonts, metadata, translations)
│   │   │   ├── page.tsx         ← Home page (/)
│   │   │   ├── blog/            ← Blog section
│   │   │   └── pricing/         ← /pricing (optional standalone)
│   │   └── globals.css
│   ├── middleware.ts            ← Language Detection & Negotiator
│   ├── i18n-config.ts           ← Supported locales config
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Top navigation + LINE CTA button
│   │   │   └── Footer.tsx       ← Footer links + copyright
│   │   ├── sections/            ← One component per landing section
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── DashboardSection.tsx
│   │   │   ├── KnowledgeBaseSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/                  ← Reusable atom components
│   │       ├── GlowButton.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── FeatureCard.tsx
│   │       ├── StepCard.tsx
│   │       ├── PricingCard.tsx
│   │       └── FAQItem.tsx
│   ├── data/
│   │   ├── content.types.ts     ← Types for all text strings and sections
│   │   ├── content-th.ts        ← Thai dictionary
│   │   ├── content-en.ts        ← English dictionary
│   │   └── dictionaries.ts      ← Async loader for dictionary by locale
│   └── lib/
│       └── utils.ts             ← cn() helper, etc.
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Pages

### `/[lang]/` — Home (Main Landing Page)
Page เดียวที่สำคัญที่สุด ประกอบด้วย sections ตามลำดับ:

```
[Navbar]
 ↓
[Hero] — Headline + CTA + Badge
 ↓
[StatsBar] — ตัวเลข highlight (< 4วิ / 24/7 / ...)
 ↓
[Features] — 8 feature cards grid
 ↓
[HowItWorks] — 5-step timeline
 ↓
[Dashboard] — Screenshot preview + feature list
 ↓
[KnowledgeBase] — 4 sections (AI IDENTITY/PRODUCTS/ORDERS & PAYMENT/FAQ & RULES)
 ↓
[Pricing] — 2 plan cards + FAQ accordion
 ↓
[CTA] — Final conversion block
 ↓
[Footer]
```

### `/[lang]/pricing` (optional)
Standalone pricing page สำหรับ direct link ใน ads

### `/[lang]/blog` 
Blog section สำหรับ SEO content และ บทความต่างๆ

## Component Design Principles

### Section Components
- รับ props โดยตรงจาก Data Dictionary (`ContentDictionary`)
- ใช้ `id="section-name"` สำหรับ anchor navigation
- Animate เมื่อ scroll เข้ามา (Framer Motion `whileInView`)

### UI Atoms
- Stateless, reusable
- Typed props ทุกตัว
- รับ String Payload และ Config จาก Component แม่เท่านั้น ห้าม import `content-xx.ts` โดยตรง

## Key UI Patterns

### Scroll Animation
```tsx
// ใช้ framer-motion สำหรับทุก section
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Color System (Tailwind)
```
Primary:    zinc-900 / zinc-800  (dark text, buttons)
Accent:     emerald-500          (AI/success states)
Warning:    rose-500             (Manual/alert states)
Brand Pink: pink-200/400         (logo accent color)
Background: white / zinc-50      (clean, minimal)
```

### Typography
```css
/* layout.tsx */
font-family: 'Inter', 'Noto Sans Thai', sans-serif;
```

### Responsive Breakpoints
```
Mobile:   < 768px   (sm)
Tablet:   768-1024px (md)
Desktop:  > 1024px  (lg, xl)
```

## SEO Configuration

### Root Layout (`app/[lang]/layout.tsx`)
ระบบใช้ `generateMetadata` เพื่อสร้างค่า Meta tags ตามภาษา (`th`, `en`) แบบ Dynamic จาก dictionaries.

### Per-Section Structured Data
- `FAQPage` JSON-LD สำหรับ FAQ section
- `SoftwareApplication` JSON-LD สำหรับ product

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID/INP | < 200ms |
| Lighthouse | ≥ 90 (all categories) |

### Optimization Checklist
- [ ] `next/image` สำหรับทุก `<img>` (auto WebP + lazy load)
- [ ] `next/font` สำหรับ Google Fonts (no FOUT)
- [ ] Framer Motion lazy import (`dynamic(() => import(...))`)
- [ ] `loading="lazy"` บน dashboard screenshot
- [ ] SVG icons inline แทน icon font
