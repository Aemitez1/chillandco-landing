# 🗺️ Roadmap — chillandco-landing (Phase 1)

> **Objective:** Launch a production-ready landing page at `www.chillandcostudio.com` ที่ convert visitor ให้เป็น LINE OA subscriber

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **Deploy:** Vercel
- **Content:** `src/data/content.ts`

---

## 🟢 Sprint 1: Project Setup (Progress: 100%)
**Goal:** Initialize repo, configure tools, setup deploy pipeline

- [x] **1.1 Repository Init**
    - [x] `npx create-next-app@latest chillandco-landing --typescript --tailwind --app`
    - [x] สร้าง `.sdd/` folder และ copy SDD files
    - [x] สร้าง `src/data/content.ts` (copy จาก `landing-content.ts`)
    - [x] Copy `logo.jpg` จาก `go-line-ai-bot/frontend/public/`
    - [x] Copy dashboard screenshots จาก `go-line-ai-bot/frontend/screenshots/`

- [x] **1.2 Dependencies**
    - [x] `npm install framer-motion lucide-react`
    - [x] `npm install @next/font` (ถ้าใช้ Next.js < 14)
    - [x] ตั้งค่า Tailwind: เพิ่ม custom colors (pink, emerald, zinc)
    - [x] สร้าง `src/lib/utils.ts` (cn helper)

- [ ] **1.3 Vercel Setup**
    - [ ] Push to GitHub (`chillandco-landing` repo)
    - [ ] Connect Vercel project → GitHub repo
    - [ ] ตั้งค่า Custom Domain: `www.chillandcostudio.com`
    - [ ] ทดสอบ auto-deploy pipeline

- [x] **1.4 Base Layout**
    - [x] `src/app/layout.tsx` — fonts, metadata, viewport
    - [x] `src/app/globals.css` — Tailwind directives + base styles
    - [x] `src/components/layout/Navbar.tsx` — with LINE CTA button
    - [x] `src/components/layout/Footer.tsx`

---

## 🟡 Sprint 2: Core Sections (Progress: 100%)
**Goal:** Build and connect main landing sections ให้ครบ

- [x] **2.1 Hero Section**
    - [x] `HeroSection.tsx` — headline, badge, CTA buttons
    - [x] Mobile-first layout (stack vertically on mobile)
    - [x] Animated headline (Framer Motion fadeIn)

- [x] **2.2 Stats Bar**
    - [x] `StatsBar.tsx` — 4 stat items จาก `content.ts`
    - [x] Counter animation เมื่อ scroll เข้ามา

- [x] **2.3 Features Section**
    - [x] `FeaturesSection.tsx` — grid 8 cards
    - [x] `FeatureCard.tsx` — reusable atom
    - [x] Stagger animation (cards โผล่ทีละตัว)

- [x] **2.4 How It Works**
    - [x] `HowItWorksSection.tsx` — 5-step timeline
    - [x] `StepCard.tsx` — numbered step component
    - [x] Desktop: horizontal | Mobile: vertical

- [x] **2.5 Dashboard Preview**
    - [x] `DashboardSection.tsx`
    - [x] Device frame mockup (desktop + mobile screenshot)
    - [x] Feature bullet list ด้านข้าง

---

## 🟠 Sprint 3: Conversion Sections (Progress: 100%)
**Goal:** Complete pricing, FAQ, and final CTA

- [x] **3.1 Knowledge Base Section**
    - [x] `KnowledgeBaseSection.tsx` — 4 tab cards
    - [x] Interactive tab switching animation

- [x] **3.2 Pricing Section**
    - [x] `PricingSection.tsx` — 2 plan cards
    - [x] `PricingCard.tsx` — highlighted "Professional" card
    - [x] กรอกราคาจริงใน `content.ts` ก่อน deploy

- [x] **3.3 FAQ Section**
    - [x] `FAQSection.tsx` — Accordion 5 ข้อ
    - [x] `FAQItem.tsx` — open/close animation
    - [x] JSON-LD structured data สำหรับ SEO

- [x] **3.4 Final CTA Section**
    - [x] `CTASection.tsx` — Full-width CTA block
    - [x] เชื่อม LINE Add Friend URL

---

## 🔴 Sprint 4: Polish & Launch (Progress: 0%)
**Goal:** Production-ready quality, SEO, performance

- [ ] **4.1 SEO**
    - [ ] ตั้งค่า `metadata` ครบใน `layout.tsx`
    - [ ] OpenGraph image (`og-image.jpg` 1200×630)
    - [ ] JSON-LD: `SoftwareApplication` + `FAQPage`
    - [ ] `sitemap.xml` + `robots.txt`

- [ ] **4.2 Performance**
    - [ ] แปลงรูปภาพทุกรูปเป็น WebP
    - [ ] `next/image` สำหรับทุก image
    - [ ] Lazy import Framer Motion
    - [ ] Lighthouse score ≥ 90 ทุก category

- [ ] **4.3 Accessibility**
    - [ ] Alt text ทุก image
    - [ ] Semantic HTML (`<section>`, `<article>`, `<nav>`)
    - [ ] Keyboard navigation บน accordion FAQ

- [ ] **4.4 Cross-browser & Responsive**
    - [ ] ทดสอบ Chrome, Safari, Firefox
    - [ ] ทดสอบ iPhone SE (375px), iPad (768px), Desktop (1440px)

- [ ] **4.5 Launch**
    - [ ] กรอกข้อมูลจริงใน `content.ts` ทั้งหมด
        - [ ] LINE OA URL จริง
        - [ ] ราคา Package จริง
        - [ ] จำนวนร้านค้าจริง
    - [ ] ทดสอบ LINE Add Friend URL
    - [ ] Deploy to production
    - [ ] ตรวจสอบ Google Search Console

---

## 🚀 Future Phases (Backlog)

- [ ] **Phase 2:** Blog section (SEO content marketing)
- [ ] **Phase 2:** Contact form (Formspree หรือ Resend)
- [ ] **Phase 3:** Dashboard link generator ให้ลูกค้าใหม่ลงทะเบียน self-service
- [ ] **Phase 3:** Analytics dashboard (Google Analytics / Vercel Analytics)
