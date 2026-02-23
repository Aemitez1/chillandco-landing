# Coding Standards — chillandco-landing

## TypeScript

- **Strict mode ON** — `tsconfig.json`: `"strict": true`
- ทุก component ต้อง type props ด้วย `interface`
- ห้ามใช้ `any` เด็ดขาด ถ้าจำเป็นใช้ `unknown` แทน
- Export type ที่ใช้ร่วมกันไว้ใน `src/types/`

```tsx
// ✅ Good
interface FeatureCardProps {
  emoji: string;
  title: string;
  desc: string;
  highlight?: boolean;
}

// ❌ Bad
const FeatureCard = (props: any) => { ... }
```

## Component Naming

| ประเภท | Pattern | ตัวอย่าง |
|--------|---------|---------|
| Page | PascalCase | `page.tsx` (Next.js convention) |
| Section | `[Name]Section.tsx` | `HeroSection.tsx` |
| UI Atom | Descriptive PascalCase | `FeatureCard.tsx`, `GlowButton.tsx` |
| Layout | `[Name].tsx` | `Navbar.tsx`, `Footer.tsx` |

## File & Folder Naming

- **Components:** PascalCase (`FeatureCard.tsx`)
- **Data / Utils:** camelCase (`content.ts`, `utils.ts`)
- **Folders:** lowercase (`sections/`, `ui/`, `layout/`)

## Content Separation (Critical Rule)

> **ห้าม hardcode text ภายใน component โดยตรง**

ข้อความ, ราคา, ชื่อฟีเจอร์ **ทุกอย่าง** ต้องมาจาก `src/data/content.ts`

```tsx
// ✅ Good
import { features } from '@/data/content';
<h2>{features.title}</h2>

// ❌ Bad
<h2>ฟีเจอร์หลัก</h2>
```

## Styling

- **Tailwind utility classes เท่านั้น** — ห้ามเขียน custom CSS ยกเว้น `globals.css`
- ใช้ `cn()` helper จาก `@/lib/utils` สำหรับ conditional classes
- **Mobile-first** — เริ่มจาก mobile, ค่อยเพิ่ม `md:`, `lg:`

```tsx
// ✅ Good
<div className={cn(
  "px-4 py-3 rounded-xl",
  isHighlighted && "bg-emerald-500 text-white"
)} />

// ❌ Bad
<div style={{ padding: '12px', borderRadius: '12px' }} />
```

## Animation (Framer Motion)

- ใช้ `whileInView` + `once: true` สำหรับ scroll animations
- Viewport กำหนด `amount: 0.2` เสมอ (เพื่อให้ mobile trigger ได้)
- ใช้ `staggerChildren` สำหรับ list items

```tsx
// ✅ Pattern มาตรฐาน
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
  {items.map(item => (
    <motion.li key={item.title} variants={itemVariants}>...</motion.li>
  ))}
</motion.ul>
```

## Images

- **ใช้ `next/image` เสมอ** แทน `<img>`
- ระบุ `width`, `height` หรือใช้ `fill` + `relative` container
- ใส่ `alt` ทุกรูปที่มีความหมาย, `alt=""` สำหรับรูปประดับ
- Screenshots จาก dashboard: วางไว้ใน `public/screenshots/`

```tsx
// ✅ Good
import Image from 'next/image';
<Image src="/screenshots/desktop/dashboard.png" alt="Chill&Co Dashboard บน Desktop" width={1440} height={900} />

// ❌ Bad
<img src="/screenshots/desktop/dashboard.png" />
```

## Git Commit Convention

```
feat: เพิ่ม FeaturesSection component
fix: แก้ layout ของ HowItWorks บน mobile
style: ปรับสี CTA button ให้ตรง brand
content: อัปเดตราคา Pricing ใน content.ts
docs: เพิ่ม ROADMAP.md
chore: อัปเดต dependencies
```

## Branch Strategy

```
main          ← production (auto-deploy to Vercel)
dev           ← staging
feat/[name]   ← feature branches
fix/[name]    ← bug fix branches
```
