/**
 * content.ts — Landing Page Content
 * Chill&Co Works: LINE OA AI Chatbot SaaS
 *
 * Source: Extracted from .sdd/ documentation of go-line-ai-bot
 * Generated: 2026-02-23
 *
 * Usage: Copy to chillandco-landing/src/data/content.ts
 */

// ─── Brand ────────────────────────────────────────────────────────────────────

export const brand = {
    name: "Chill&Co Works",
    tagline: "AI Sales Assistant สำหรับ LINE OA",
    description:
        "ระบบ AI อัจฉริยะที่ตอบลูกค้าใน LINE OA แทนคุณ 24/7 เชื่อมต่อง่าย ไม่ต้องเขียนโค้ด พร้อม Dashboard จัดการลูกค้าแบบ Real-time",
    url: "https://www.chillandcostudio.com",
    logoPath: "/logo.jpg",
    lineAddFriendUrl: "https://line.me/R/ti/p/@YOUR_LINE_OA_ID", // TODO: replace with real LINE OA ID
    supportEmail: "support@chillandcostudio.com",
};

// ─── Hero Section ─────────────────────────────────────────────────────────────

export const hero = {
    headline: "ให้ AI ตอบลูกค้า LINE แทนคุณ",
    subheadline: "ตลอด 24 ชั่วโมง ทุกวัน ไม่มีวันหยุด",
    description:
        "Chill&Co Works คือระบบ AI Sales Assistant สำหรับ LINE OA ที่ช่วยตอบคำถาม ปิดการขาย และส่งต่อแอดมินอัตโนมัติ — พร้อม Dashboard สำหรับติดตามลูกค้าแบบ Real-time",
    cta: {
        primary: { label: "เพิ่มเพื่อน LINE OA", url: brand.lineAddFriendUrl },
        secondary: { label: "ดูฟีเจอร์ทั้งหมด", url: "#features" },
    },
    badge: "🤖 Powered by Google Gemini",
};

// ─── How It Works (Webhook Flow) ──────────────────────────────────────────────

export const howItWorks = {
    title: "ทำงานอย่างไร?",
    subtitle: "5 ขั้นตอนอัตโนมัติ ตั้งแต่ลูกค้าส่งข้อความ จนถึงแอดมินได้รับแจ้งเตือน",
    steps: [
        {
            step: "1",
            emoji: "💬",
            title: "ลูกค้าส่งข้อความ",
            desc: "ลูกค้าส่งข้อความมาทาง LINE OA ของร้านคุณ",
            color: "blue",
        },
        {
            step: "2",
            emoji: "🔍",
            title: "ตรวจสอบสถานะ",
            desc: "ระบบตรวจสอบโควต้า วันหมดอายุ และสถานะ AI โดยอัตโนมัติ",
            color: "indigo",
        },
        {
            step: "3",
            emoji: "🧠",
            title: "AI ประมวลผล",
            desc: "AI อ่านข้อมูลร้าน + ประวัติแชท 5 รายการล่าสุด แล้วสร้างคำตอบที่ตรงประเด็น",
            color: "violet",
            note: "Google Gemini",
        },
        {
            step: "4",
            emoji: "✅",
            title: "ตอบกลับลูกค้า",
            desc: "ส่งคำตอบพร้อมแจ้งแอดมินในกลุ่ม LINE ทันที",
            color: "emerald",
        },
        {
            step: "5",
            emoji: "🆘",
            title: "ส่งต่อแอดมิน (Auto Handover)",
            desc: "หากลูกค้าสับสนหรือถามซ้ำ — AI ส่งต่องานให้แอดมินโดยอัตโนมัติ",
            color: "amber",
            note: "Auto Handover",
        },
    ],
};

// ─── Core Features ─────────────────────────────────────────────────────────────

export const features = {
    title: "ฟีเจอร์หลัก",
    subtitle: "ครบครัน ได้ทั้งความเร็วและความแม่นยำ",
    items: [
        {
            emoji: "🤖",
            title: "AI ตอบอัตโนมัติ 24/7",
            desc: "ตอบคำถามลูกค้าแบบ Real-time ไม่มีวันหยุด ไม่มี missed message",
            highlight: true,
        },
        {
            emoji: "🎯",
            title: "ตรวจจับ Intent อัจฉริยะ",
            desc: "วิเคราะห์ว่าลูกค้าต้องการ inquiry / buy / ต้องการแอดมิน แล้วตอบสนองต่างกัน",
        },
        {
            emoji: "🆘",
            title: "One-Shot Handover",
            desc: "ตอบแล้วลูกค้ายังไม่ชัดเจน ส่งต่อแอดมินทันที ไม่ดึงเวลาลูกค้า",
        },
        {
            emoji: "💬",
            title: "บุคลิกสุภาพ เหมือนแอดมินจริง",
            desc: 'ใช้ "ค่ะ", "นะคะ" เสมอ สร้าง Brand Image ที่ดีให้ร้านคุณ',
        },
        {
            emoji: "⚡",
            title: "ตอบเร็ว",
            desc: "Gemini ตอบใน 2-4 วินาที พร้อม Loading Animation ให้ลูกค้าเห็นว่ากำลังพิมพ์",
        },
        {
            emoji: "🧠",
            title: "จำบทสนทนา",
            desc: "จำประวัติแชท 5 รายการล่าสุด ต่อเนื่อง ไม่ต้องถามซ้ำ",
        },
        {
            emoji: "🌐",
            title: "รองรับหลายภาษา",
            desc: "ตรวจจับภาษาลูกค้าอัตโนมัติ ตอบได้ทั้งภาษาไทยและอังกฤษ",
        },
        {
            emoji: "🔗",
            title: "Multi-Tenant SaaS",
            desc: "รองรับหลายร้านในระบบเดียว แต่ละร้านมี Channel Token และ Knowledge Base ของตัวเอง",
        },
    ],
};

// ─── Dashboard Features ────────────────────────────────────────────────────────

export const dashboard = {
    title: "Dashboard จัดการร้านแบบ Real-time",
    subtitle: "ดูสถิติ จัดการลูกค้า และควบคุม AI ได้จากหน้าเว็บเดียว",
    features: [
        {
            icon: "LayoutDashboard",
            title: "Overview Dashboard",
            desc: "ดูจำนวน Message ที่ใช้ไป, จำนวนลูกค้า, วันหมดอายุแพ็กเกจ และสถานะ AI Core",
        },
        {
            icon: "Users",
            title: "Customer Monitor",
            desc: "ตารางลูกค้า พร้อมค้นหาชื่อ, กรอง AI/Manual, และ pagination รองรับทุก device",
        },
        {
            icon: "RefreshCcw",
            title: "Toggle Mode",
            desc: "สลับโหมด AI ↔ Manual ต่อลูกค้าได้ทันที เพื่อให้แอดมินเข้ามาดูแลแทน",
        },
        {
            icon: "Bot",
            title: "AI Core Switch",
            desc: "เปิด-ปิด AI ทั้งร้านได้ด้วยปุ่มเดียว ในกรณีที่ต้องการควบคุมเอง",
        },
        {
            icon: "Settings",
            title: "Identity & Knowledge Base",
            desc: "กรอกข้อมูลร้าน สินค้า FAQ และช่องทางชำระเงิน — AI นำไปใช้ตอบลูกค้าทันที",
        },
        {
            icon: "MessageSquare",
            title: "Admin Group Notifications",
            desc: "รับแจ้งเตือนอัตโนมัติในกลุ่ม LINE เมื่อ AI ตอบหรือ Handover เกิดขึ้น",
        },
        {
            icon: "FileText",
            title: "Docs Canvas",
            desc: "คู่มือการใช้งานในแอป 4 หน้า — ภาพรวม, Flow, หน้าจอ, ความสามารถ AI",
        },
        {
            icon: "Headphones",
            title: "Support",
            desc: "ส่งอีเมลถึงทีม Support ได้โดยตรงจากหน้า Dashboard",
        },
    ],
    responsive: {
        title: "ใช้งานได้ทุก Device",
        items: [
            { device: "Desktop", icon: "🖥️", desc: "Table view เต็มรูปแบบ พร้อม sidebar navigation" },
            { device: "iPad", icon: "📱", desc: "Layout ปรับอัตโนมัติ เหมาะกับการใช้งานบน Tablet" },
            { device: "Mobile", icon: "📲", desc: "Compact card view พร้อม bottom nav และ hamburger menu" },
        ],
    },
};

// ─── Knowledge Base (Identity & Data) ─────────────────────────────────────────

export const knowledgeBase = {
    title: "ตั้งค่า Knowledge Base ให้ AI",
    subtitle: "กรอกข้อมูลร้าน 4 หมวด AI จะนำไปใช้ตอบลูกค้าได้ทันที",
    sections: [
        {
            emoji: "🤖",
            label: "AI IDENTITY",
            title: "บุคลิกและหมวดธุรกิจ",
            desc: "ชื่อร้าน ประเภทธุรกิจ สไตล์การตอบ",
        },
        {
            emoji: "📦",
            label: "PRODUCTS",
            title: "ฐานข้อมูลสินค้า",
            desc: "รายการสินค้า ราคา สต็อก รายละเอียดที่ AI ใช้ตอบ",
        },
        {
            emoji: "💳",
            label: "ORDERS & PAYMENT",
            title: "ช่องทางชำระและขนส่ง",
            desc: "บัญชีธนาคาร พร้อมเพย์ ค่าส่ง ตัดรอบ",
        },
        {
            emoji: "❓",
            label: "FAQ & RULES",
            title: "FAQ และกฎพิเศษ",
            desc: "คำถามที่พบบ่อย นโยบายคืนของ โปรโมชัน",
        },
    ],
    limit: "5,000 ตัวอักษรต่อหมวด",
};

// ─── Pricing ───────────────────────────────────────────────────────────────────

export const pricing = {
    title: "แพ็กเกจราคา",
    subtitle: "เลือกแพ็กเกจที่เหมาะกับขนาดธุรกิจของคุณ",
    currency: "THB",
    billingNote: "ราคายังไม่รวม VAT 7%",
    plans: [
        {
            name: "Starter",
            emoji: "🌱",
            price: 490,
            priceLabel: "490",
            limit: "1,000 ข้อความ/เดือน",
            features: [
                "ตอบอัตโนมัติ 24/7 พร้อม Dashboard",
                "ฟีเจอร์ Auto Handover ส่งต่อแอดมิน",
                "ทดลองใช้ฟรี 7 วันเต็ม",
                "เหมาะสำหรับร้านที่เพิ่งเริ่มต้นใช้งาน",
            ],
            cta: { label: "เริ่มต้นใช้งาน", url: brand.lineAddFriendUrl },
            highlight: false,
        },
        {
            name: "Growth",
            emoji: "🔥",
            price: 790,
            priceLabel: "790",
            limit: "3,000 ข้อความ/เดือน",
            badge: "คุ้มที่สุด",
            features: [
                "ตอบอัตโนมัติ 24/7 พร้อม Dashboard",
                "ฟีเจอร์ Auto Handover ส่งต่อแอดมิน",
                "ทดลองใช้ฟรี 7 วันเต็ม",
                "เหมาะสำหรับร้านยอดฮิต มีการยิงแอด",
            ],
            cta: { label: "ทดลองฟรี", url: brand.lineAddFriendUrl },
            highlight: true,
        },
        {
            name: "Pro",
            emoji: "🚀",
            price: 1490,
            priceLabel: "1490",
            limit: "10,000 ข้อความ/เดือน",
            features: [
                "ตอบอัตโนมัติ 24/7 พร้อม Dashboard",
                "ฟีเจอร์ Auto Handover ส่งต่อแอดมิน",
                "ทดลองใช้ฟรี 7 วันเต็ม",
                "เหมาะสำหรับร้านใหญ่ ช่วงแคมเปญทะลัก",
            ],
            cta: { label: "ติดต่อสอบถาม", url: brand.lineAddFriendUrl },
            highlight: false,
        },
    ],
    faq: [
        {
            q: "ใช้งานง่ายไหม?",
            a: "ง่ายมากครับ เพียงเพิ่มเพื่อน LINE OA แล้วกรอกข้อมูลร้านใน Dashboard ระบบจะพร้อมตอบลูกค้าทันที ไม่ต้องเขียนโค้ด",
        },
        {
            q: "AI ตอบได้แม่นยำแค่ไหน?",
            a: "AI ใช้ข้อมูลที่คุณกรอกใน Knowledge Base เป็น Context ในการตอบ ยิ่งกรอกข้อมูลละเอียด AI ยิ่งตอบได้ตรงและแม่นยำมากขึ้น",
        },
        {
            q: "ถ้า AI ตอบไม่ได้จะเกิดอะไรขึ้น?",
            a: "ระบบ One-Shot Handover จะส่งเรื่องให้แอดมินโดยอัตโนมัติ พร้อมแจ้งในกลุ่ม LINE ว่ามีลูกค้าต้องการความช่วยเหลือ",
        },
        {
            q: "รองรับกี่ LINE OA?",
            a: "ระบบออกแบบมาเป็น Multi-Tenant SaaS รองรับหลาย LINE OA ในระบบเดียว แต่ละร้านมี Data และ Configuration แยกกัน",
        },
        {
            q: "ข้อมูลร้านปลอดภัยไหม?",
            a: "ใช่ครับ แต่ละร้านเก็บ LINE Channel Token และ Channel Secret แยกกันในฐานข้อมูล ระบบ Multi-Tenancy Isolation ป้องกันการเข้าถึงข้ามร้าน",
        },
    ],
};

// ─── Tech Stack (for transparency / developer audience) ───────────────────────

export const techStack = {
    title: "เทคโนโลยีที่ใช้",
    items: [
        { name: "Go (Golang) + Fiber", role: "Backend API", emoji: "⚙️" },
        { name: "Google Gemini", role: "AI Engine", emoji: "🧠" },
        { name: "LINE Messaging API", role: "Platform", emoji: "💚" },
        { name: "PostgreSQL (Neon)", role: "Database", emoji: "🗄️" },
        { name: "React + Vite + TypeScript", role: "Dashboard Frontend", emoji: "⚛️" },
        { name: "Tailwind CSS + Shadcn/ui", role: "UI Design System", emoji: "🎨" },
        { name: "Render", role: "Cloud Hosting", emoji: "☁️" },
    ],
};

// ─── Social Proof / Stats ──────────────────────────────────────────────────────

export const stats = [
    { value: "< 4วิ", label: "เวลาตอบกลับเฉลี่ย" },
    { value: "24/7", label: "พร้อมให้บริการ" },
    { value: "5+", label: "ร้านค้าที่ใช้งาน" }, // TODO: update with real number
    { value: "100%", label: "Auto Handover เมื่อจำเป็น" },
];

// ─── Navigation ────────────────────────────────────────────────────────────────

export const nav = {
    links: [
        { label: "ฟีเจอร์", href: "#features" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "ราคา", href: "#pricing" },
        { label: "คู่มือ", href: "#how-it-works" },
        { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "เพิ่มเพื่อน LINE", href: brand.lineAddFriendUrl },
};

// ─── Footer ────────────────────────────────────────────────────────────────────

export const footer = {
    tagline: "AI Sales Assistant สำหรับ LINE OA — by Chill&Co Studio",
    links: [
        { label: "ติดต่อ Support", href: `mailto:${brand.supportEmail}` },
        { label: "LINE OA", href: brand.lineAddFriendUrl },
    ],
    copyright: `© ${new Date().getFullYear()} Chill&Co Studio. All rights reserved.`,
};
