# Content Strategy — chillandco-landing

## Objective

แปลง **visitor** ให้เป็น **customer** ผ่าน LINE OA Add Friend

Primary CTA: **กดปุ่ม Add Friend LINE OA**

## Section Order & Purpose

### 1. Navbar
- **Goal:** ให้ visitor เข้าถึงทุก section ได้ง่าย + CTA ตลอดเวลา
- **CTA:** ปุ่ม "เพิ่มเพื่อน LINE" สีเขียว มองเห็นตลอด

### 2. Hero Section
- **Goal:** สร้าง First Impression ใน 3 วินาที
- **Message:** "ให้ AI ตอบลูกค้า LINE แทนคุณ — ตลอด 24 ชั่วโมง ทุกวัน"
- **CTA:** ปุ่มใหญ่ Primary + ปุ่ม Secondary "ดูฟีเจอร์"
- **Visual:** Animation หรือ mockup บน iPhone/LINE chat

### 3. Stats Bar
- **Goal:** สร้าง credibility ด้วยตัวเลข
- **Copy:** `< 4วิ ตอบ` | `24/7 พร้อม` | `5+ ร้าน` | `100% Auto Handover`
- **Design:** Minimal strip สีเข้ม, ตัวเลขใหญ่

### 4. Features Section
- **Goal:** อธิบายว่าระบบทำอะไรได้บ้าง
- **Layout:** Grid 2×4 หรือ 3×3 (responsive)
- **Tone:** สั้น ตรง มีประโยชน์ vs benefit ที่จับต้องได้
- ❌ อย่าพูดว่า "Support 24/7" แบบนามธรรม
- ✅ พูดว่า "ตอบลูกค้าได้ตอนตี 3 โดยไม่ต้องตื่น"

### 5. How It Works
- **Goal:** ให้ visitor เข้าใจ flow ใน 30 วินาที
- **Format:** 5-step horizontal timeline (desktop) / vertical stepper (mobile)
- **ต้องแสดง:** ลูกค้าส่ง → ระบบตรวจ → AI ตอบ → แจ้งแอดมิน → Handover

### 6. Dashboard Preview
- **Goal:** แสดง Dashboard ที่ใช้งานจริง สร้าง trust
- **Visual:** Screenshot จริงจาก `go-line-ai-bot/frontend/screenshots/`
- **Carousel:** Desktop → iPad → Mobile

### 7. Knowledge Base Section
- **Goal:** อธิบายว่า "ใส่ข้อมูลอะไรให้ AI?"
- **Format:** 4 card tabs (AI IDENTITY / PRODUCTS / ORDERS & PAYMENT / FAQ & RULES)
- **Tone:** "ง่ายแค่กรอกข้อมูล AI ทำส่วนที่เหลือเอง"

### 8. Pricing Section
- **Goal:** Convert visitor ที่สนใจแล้วให้ตัดสินใจ
- **Layout:** 3 cards side-by-side (Starter / Growth / Pro)
- **Strategy:** Highlight Growth (แนะนำ badge "คุ้มที่สุด")
- **FAQ:** Accordion 5 ข้อ ตอบ objections หลัก

### 9. Web Design & Build Section (Add-on Services)
- **Goal:** Cross-sell บริการรับทำเว็บไซต์ต่อเนื่องจากลูกค้าที่อาจจะยังไม่มีเว็บ
- **Layout:** 4 cards grid (Landing Page, E-Commerce, Corporate, Portfolio)
- **Strategy:** วางต่อจาก Pricing เพื่อไม่ให้กวน Product หลัก (AI Chatbot) แต่ยังให้เห็นได้ชัดเจน
- **Tone:** "ดีไซน์สวย โหลดเร็ว รองรับทุก device — พร้อมเชื่อมต่อ AI Chatbot ได้ทันที"

### 10. CTA Section (Final)
- **Goal:** Last chance to convert visitor ที่ scroll มาถึงท้ายสุด
- **Message:** "พร้อมให้ AI ทำงานแทนคุณแล้วหรือยัง?"
- **CTA:** ปุ่ม Add Friend ใหญ่ที่สุดในหน้า

### 11. Footer
- **Content:** Copyright, email support, LINE link
- **Minimal:** ไม่ต้องมีลิงก์เยอะ

## Copywriting Guidelines

### Tone of Voice
- **กระชับ** — 1 ประโยคต่อ 1 ความหมาย
- **เป็นมิตร** — พูดคุยเหมือนเพื่อนที่รู้จริง ไม่ formal เกินไป
- **Result-focused** — พูด outcome ไม่ใช่ feature
- **ภาษาไทยเป็นหลัก** — target คือเจ้าของร้านไทย

### Avoid
- ❌ ศัพท์เทคนิคที่ไม่จำเป็น (เช่น "Goroutines", "PostgreSQL")
- ❌ Passive voice ("สามารถถูกใช้งานได้")
- ❌ Overpromise ("ปิดการขาย 100%")

### Structure ทุก Feature Card
```
[Emoji] [ชื่อสั้น]
[Benefit 1-2 ประโยค ที่เจ้าของร้านเข้าใจได้ทันที]
```

## Image & Media Strategy

| Section | Visual |
|---------|--------|
| Hero | Mockup LINE chat + AI reply bubble |
| Dashboard | Screenshot จากของจริง (ดู `screenshots/`) |
| Features | Emoji / Simple SVG icon |
| How It Works | Numbered step icons + connecting line |
| Pricing | Clean card UI, badge highlight |

### Dashboard Screenshots ที่มี (จาก go-line-ai-bot)
```
frontend/screenshots/
├── desktop/dashboard.png
├── desktop/settings.png
├── ipad/dashboard.png
├── ipad/settings.png
├── mobile/dashboard.png
├── mobile/sidebar.png
└── mobile/users.png
```
ใช้ screenshots เหล่านี้ใน Dashboard Preview section ได้เลย

## Open Graph / Social Share

```
Title:       Chill&Co Works — AI Sales Assistant สำหรับ LINE OA
Description: ระบบ AI ตอบลูกค้า LINE OA อัตโนมัติ 24/7 ไม่ต้องเขียนโค้ด
Image:       /og-image.jpg  (1200×630px, แสดง dashboard + logo)
```
