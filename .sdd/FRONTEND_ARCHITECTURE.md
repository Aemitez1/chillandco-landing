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
│   │   ├── layout.tsx           ← Root layout (fonts, metadata, analytics)
│   │   ├── page.tsx             ← Home page (/)
│   │   ├── pricing/
│   │   │   └── page.tsx         ← /pricing (optional standalone)
│   │   └── globals.css
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
│   │   └── content.ts           ← Single source of truth for all copy & data
│   └── lib/
│       └── utils.ts             ← cn() helper, etc.
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Pages

### `/` — Home (Main Landing Page)
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
[KnowledgeBase] — 4 sections (PERSONA/REPO/PROTOCOL/LOGIC)
 ↓
[Pricing] — 2 plan cards + FAQ accordion
 ↓
[CTA] — Final conversion block
 ↓
[Footer]
```

### `/pricing` (optional)
Standalone pricing page สำหรับ direct link ใน ads

## Component Design Principles

### Section Components
- รับ props โดยตรงจาก `content.ts` types
- ใช้ `id="section-name"` สำหรับ anchor navigation
- Animate เมื่อ scroll เข้ามา (Framer Motion `whileInView`)

### UI Atoms
- Stateless, reusable
- Typed props ทุกตัว
- ไม่ import จาก `content.ts` โดยตรง — รับผ่าน props เท่านั้น

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

### Root Layout (`layout.tsx`)
```tsx
export const metadata: Metadata = {
  title: 'Chill&Co Works — AI Sales Assistant สำหรับ LINE OA',
  description: 'ระบบ AI ตอบลูกค้า LINE OA อัตโนมัติ 24/7 พร้อม Dashboard จัดการ Real-time',
  openGraph: {
    title: 'Chill&Co Works',
    description: '...',
    images: ['/og-image.jpg'],
    url: 'https://www.chillandcostudio.com',
  },
  twitter: { card: 'summary_large_image' },
  keywords: ['LINE OA', 'AI Chatbot', 'SaaS', 'LINE Bot', 'ระบบตอบแชทอัตโนมัติ'],
};
```

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
