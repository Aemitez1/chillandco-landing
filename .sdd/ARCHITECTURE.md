# Chill&Co Landing Page — Architecture

## Overview

Landing Page สำหรับโปรโมท **Chill&Co Works LINE OA AI Chatbot SaaS** ที่ `www.chillandcostudio.com`

เป้าหมายหลัก:
1. **Convert** — ดึง visitor ให้กด Add Friend LINE OA
2. **Educate** — อธิบายฟีเจอร์และ workflow ให้ชัดเจน
3. **Trust** — สร้างความน่าเชื่อถือด้วยข้อมูล transparent

## Core Features (ฟีเจอร์เด่นทั้งหมด)

1. **ตอบอัตโนมัติด้วย AI (Gemini)**: วิเคราะห์เจตนาลูกค้าได้อย่างแม่นยำ ปิดการขายได้ 24 ชม.
2. **ระบบสลับโหมดอัจฉริยะ (Seamless Handover)**: ส่งต่อแชทให้แอดมินมนุษย์ทันทีแบบไร้รอยต่อเมื่อลูกค้าต้องการคุยกับคน หรือเจอปัญหาซับซ้อน
3. **Dashboard ควบคุมพรีเมียม**: หน้าเว็บสำหรับเจ้าของร้าน ดูสถิติ จัดการข้อมูล AI และมอนิเตอร์แชทแบบ Real-time
4. **ใช้งานง่าย**: ไม่ต้องเขียนโค้ด แค่พิมพ์ข้อมูลร้านลงบน Dashboard เปิดใช้งานได้ทันที
5. **AI Photo Gallery**: อัปโหลดรูปภาพสินค้าพร้อมรายละเอียดและราคา ให้ AI ดึงข้อมูลไปเสนอขายได้อย่างชาญฉลาด

## Tech Stack

| Layer | Technology | เหตุผล |
|-------|-----------|--------|
| **Framework** | Next.js 14+ (App Router) | SSG/SSR สำหรับ SEO, React ecosystem เดิม |
| **Language** | TypeScript | Type safety, เหมือน dashboard repo |
| **Styling** | Tailwind CSS v3 | Utility-first, productive |
| **Animation** | Framer Motion | Scroll animations, micro-interactions |
| **Icons** | Lucide React | เหมือน dashboard repo |
| **Fonts** | Google Fonts (Inter / Noto Sans Thai) | Thai + Latin support |
| **Deploy** | Vercel | Free, CI/CD อัตโนมัติจาก GitHub |
| **Analytics** | Vercel Analytics (optional) | Page views, conversions |

## Architecture Pattern

```
www.chillandcostudio.com
        ↓
   Vercel CDN (Edge)
        ↓
  Next.js (Static Export)
        ↓
  src/data/content.ts  ←──  ข้อมูลทั้งหมดอยู่ที่นี่
```

- **Fully Static** — ใช้ `next export` หรือ `output: 'export'` สำหรับ pages ที่ไม่ต้องการ dynamic data
- **No Backend** — Landing page ไม่ต่อ API ใดๆ ทั้งสิ้น ข้อมูลทุกอย่างอยู่ใน `content.ts`
- **Content-First** — การเปลี่ยน copy/ราคา/ฟีเจอร์ทำได้ใน `content.ts` ไฟล์เดียว โดยไม่ต้องแตะ components

## Deployment Pipeline

```
Push to main (GitHub)
        ↓
Vercel Auto Deploy
        ↓
Build: next build
        ↓
www.chillandcostudio.com (Live)
```

## Domain & DNS

| Record | Value | หมายเหตุ |
|--------|-------|---------|
| `www` CNAME | `cname.vercel-dns.com` | Vercel project domain |
| `@` A Record | Vercel IP | Root redirect → www |

## Related Repositories

| Repo | Purpose | URL |
|------|---------|-----|
| `go-line-ai-bot` | Backend + Dashboard App | `app.chillandcostudio.com` (หรือ Render URL) |
| `chillandco-landing` | **This repo** — Landing Page | `www.chillandcostudio.com` |

## Environment Variables

Landing page นี้ **ไม่ต้องการ** Environment Variables เนื่องจากเป็น static site
ยกเว้นถ้าเพิ่ม analytics ในอนาคต:

```env
# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
