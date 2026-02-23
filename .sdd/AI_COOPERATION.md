# AI Cooperation Rules — chillandco-landing

> กฎการทำงานร่วมกับ AI Assistant สำหรับโปรเจกต์ `chillandco-landing`

## Core Rules

### 1. Content Source of Truth
- **`src/data/content.ts`** คือ single source of truth ของข้อความและข้อมูลทั้งหมด
- ถ้าต้องการเพิ่ม/แก้ content ให้แก้ที่ `content.ts` เท่านั้น ห้ามแก้ใน component โดยตรง

### 2. Sync on Change
- ทุกครั้งที่มีการเพิ่ม section ใหม่, refactor, หรือเปลี่ยน tech — AI **ต้องอัปเดต SDD document** ที่เกี่ยวข้องทันที
- SDD อยู่ที่ `.sdd/` folder ในโปรเจกต์

### 3. Strict Roadmap Exception
- AI **ห้ามแก้ `ROADMAP.md`** ยกเว้นถ้า user สั่งอย่างชัดเจน
- ใช้คำว่า "อัปเดต roadmap" หรือ comment บน ROADMAP.md จึงจะแก้ได้

### 4. No Hardcoded Text
- AI ต้องไม่เขียน copy/text ลง component โดยตรง — ให้เพิ่มใน `content.ts` แล้ว import

### 5. Image Handling
- ใช้ `next/image` เสมอ ห้ามใช้ `<img>` tag
- Screenshots ที่มีอยู่ใน `public/screenshots/` ให้ใช้ได้เลย ไม่ต้องสร้างใหม่

### 6. Performance First
- ทุก Framer Motion import ต้องเป็น dynamic import เพื่อหลีกเลี่ยง bundle bloat
- ถ้าเพิ่ม dependency ใหม่ ต้องแจ้ง user ก่อน

## Allowed Without Asking
- แก้ `content.ts` (เพิ่ม/แก้ content)
- แก้ Tailwind classes ภายใน component
- สร้าง component ใหม่ใน `src/components/`
- แก้ metadata ใน `layout.tsx`

## Must Ask Before Doing
- เปลี่ยน Framework หรือ major dependency
- เพิ่ม page ใหม่นอกเหนือจากที่ระบุใน ROADMAP
- แก้ DNS หรือ Vercel configuration
- เชื่อมต่อ external API ใดๆ

## Related Documentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) — Tech stack, deploy
- [FRONTEND_ARCHITECTURE.md](./FRONTEND_ARCHITECTURE.md) — Component structure, SEO
- [CONTENT_STRATEGY.md](./CONTENT_STRATEGY.md) — Sections, copywriting, images
- [CODING_STANDARDS.md](./CODING_STANDARDS.md) — TypeScript, styling, animation
- [ROADMAP.md](./ROADMAP.md) — Sprint plan
