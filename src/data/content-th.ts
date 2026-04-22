import { BrandContent, HeroContent, HowItWorksContent, FeaturesContent, DashboardContent, KnowledgeBaseContent, AmbassadorContent, PricingContent, WebDesignContent, PageAdminContent, StatsContent, NavContent, FooterContent, CTAContent, BlogContent, SEOContent } from './content.types';
/**
 * content.ts — Landing Page Content
 * Chill&Co Works: LINE OA AI Chatbot SaaS
 *
 * Source: Extracted from .sdd/ documentation of go-line-ai-bot
 * Generated: 2026-02-23
 */

// ─── Brand ────────────────────────────────────────────────────────────────────

export const brand: BrandContent = {
    name: "Chill&Co Works",
    tagline: "AI Sales Assistant สำหรับ LINE OA",
    description:
        "ระบบ AI อัจฉริยะที่ตอบลูกค้าใน LINE OA แทนคุณ 24/7 เชื่อมต่อง่าย ไม่ต้องเขียนโค้ด พร้อม Dashboard จัดการลูกค้าแบบ Real-time",
    url: "https://www.chillandcostudio.com",
    logoPath: "/logo.jpg",
    lineAddFriendUrl: "https://line.me/R/ti/p/@623arqyi",
    supportEmail: "support@chillandcostudio.com",
};

// ─── Hero Section ─────────────────────────────────────────────────────────────

export const hero: HeroContent = {
    headlineHtml: 'ให้ AI ตอบลูกค้า LINE <br className="hidden md:block" />\n<span className="text-gradient">แทนคุณ 24 ชั่วโมง</span>',
    description:
        "Chill&Co Works คือระบบ AI Sales Assistant สำหรับ LINE OA ที่ช่วยตอบคำถาม ปิดการขาย และส่งต่อแอดมินอัตโนมัติ — พร้อม Dashboard สำหรับติดตามลูกค้าแบบ Real-time",
    cta: {
        primary: { label: "เพิ่มเพื่อน LINE OA", url: brand.lineAddFriendUrl },
        secondary: { label: "ดูฟีเจอร์ทั้งหมด", url: "#features" },
    },
    badge: "🤖 Powered by Google Gemini",
};

// ─── How It Works (Webhook Flow) ──────────────────────────────────────────────

export const howItWorks: HowItWorksContent = {
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

export const features: FeaturesContent = {
    title: "ฟีเจอร์หลัก",
    subtitle: "ครบครัน ได้ทั้งความเร็วและความแม่นยำ",
    items: [
        {
            icon: "Bot",
            iconColor: "text-emerald-600",
            iconBg: "bg-emerald-50",
            title: "AI ตอบอัตโนมัติ 24/7",
            desc: "ตอบคำถามลูกค้าแบบ Real-time ไม่มีวันหยุด ไม่มี missed message",
            highlight: true,
        },
        {
            icon: "ArrowRightLeft",
            iconColor: "text-amber-600",
            iconBg: "bg-amber-50",
            title: "ระบบสลับโหมดอัจฉริยะ (Seamless Handover)",
            desc: "ส่งต่อแชทให้แอดมินมนุษย์ทันทีแบบไร้รอยต่อเมื่อลูกค้าต้องการคุยกับคน หรือเจอปัญหาซับซ้อน",
        },
        {
            icon: "LayoutDashboard",
            iconColor: "text-violet-600",
            iconBg: "bg-violet-50",
            title: "Dashboard ควบคุมพรีเมียม",
            desc: "หน้าเว็บสำหรับเจ้าของร้าน ดูสถิติ จัดการข้อมูล AI และมอนิเตอร์แชทแบบ Real-time",
            highlight: true,
        },
        {
            icon: "Zap",
            iconColor: "text-yellow-600",
            iconBg: "bg-yellow-50",
            title: "ใช้งานง่าย",
            desc: "ไม่ต้องเขียนโค้ด แค่พิมพ์ข้อมูลร้านลงบน Dashboard เปิดใช้งานได้ทันที",
        },
        {
            icon: "Image",
            iconColor: "text-pink-600",
            iconBg: "bg-pink-50",
            title: "AI Photo Gallery",
            desc: "อัปโหลดรูปภาพสินค้าพร้อมรายละเอียดและราคา ให้ AI ดึงข้อมูลไปเสนอขายได้อย่างชาญฉลาด",
            highlight: true,
        },
        {
            icon: "Globe",
            iconColor: "text-teal-600",
            iconBg: "bg-teal-50",
            title: "รองรับหลายภาษา (Multi-Language)",
            desc: "ตรวจจับภาษาลูกค้าอัตโนมัติ ตอบได้ทั้งภาษาไทยและอังกฤษได้อย่างเป็นธรรมชาติ",
            highlight: true,
        },
        {
            icon: "MessageCircle",
            iconColor: "text-pink-600",
            iconBg: "bg-pink-50",
            title: "พูดจาสุภาพ เป็นมิตร",
            desc: "ใช้คำลงท้าย 'ค่ะ', 'นะคะ', 'ครับ' เสมอ สร้างภาพลักษณ์ที่ดีให้กับร้าน",
        },
        {
            icon: "Building2",
            iconColor: "text-zinc-600",
            iconBg: "bg-zinc-100",
            title: "Multi-Tenant SaaS",
            desc: "รองรับหลายร้านในระบบเดียว แต่ละร้านมี Channel Token และ Knowledge Base จัดการแยกขาดจากกัน",
        },
    ],
};

// ─── Dashboard Features ────────────────────────────────────────────────────────

export const dashboard: DashboardContent = {
    title: "Dashboard จัดการร้านแบบ Real-time",
    subtitle: "ดูสถิติ จัดการลูกค้า และควบคุม AI ได้จากหน้าเว็บเดียว",
    featureListTitle: "ควบคุมทุกอย่างได้เอง",
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
    ],
    screenshots: [
        { src: "/screenshots/desktop/dashboard.png", alt: "Dashboard Desktop", device: "🖥️ Desktop" },
        { src: "/screenshots/ipad/dashboard.png", alt: "Dashboard iPad", device: "📱 iPad" },
        { src: "/screenshots/mobile/dashboard.png", alt: "Dashboard Mobile", device: "📲 Mobile" },
    ],
};

// ─── Knowledge Base (Identity & Data) ─────────────────────────────────────────

export const knowledgeBase: KnowledgeBaseContent = {
    title: "ตั้งค่า Knowledge Base ให้ AI",
    subtitle: "กรอกข้อมูลร้าน 4 หมวด AI จะนำไปใช้ตอบลูกค้าได้ทันที",
    sections: [
        {
            emoji: "🤖",
            label: "AI IDENTITY",
            title: "บุคลิกและหมวดธุรกิจ",
            desc: "ชื่อร้าน ประเภทธุรกิจ สไตล์การตอบ — ทำให้ AI มีตัวตนที่ตรงกับแบรนด์ร้านคุณ",
        },
        {
            emoji: "📦",
            label: "PRODUCTS",
            title: "ฐานข้อมูลสินค้า",
            desc: "รายการสินค้า ราคา สต็อก รายละเอียดที่ AI ใช้ตอบลูกค้าได้ทันที",
        },
        {
            emoji: "💳",
            label: "ORDERS & PAYMENT",
            title: "ช่องทางชำระและขนส่ง",
            desc: "บัญชีธนาคาร พร้อมเพย์ ค่าส่ง ตัดรอบ — AI แจ้งลูกค้าได้ถูกต้องเสมอ",
        },
        {
            emoji: "❓",
            label: "FAQ & RULES",
            title: "FAQ และกฎพิเศษ",
            desc: "คำถามที่พบบ่อย นโยบายคืนของ โปรโมชัน — ตอบได้แม้ตอนดึก",
        },
        {
            emoji: "🖼️",
            label: "photo",
            title: "รูปภาพสินค้า",
            desc: "รูปภาพสินค้าที่ AI ใช้ตอบลูกค้าได้ทันที",
        },
    ],
    limit: "5,000 ตัวอักษรต่อหมวด",
};

// ─── Brand Ambassador ──────────────────────────────────────────────────────────

export const ambassador: AmbassadorContent = {
    badge: "Brand Ambassador",
    name: "ลีโน่",
    nameEn: "Reno",
    title: "Content Creator & อินฟลูเอนเซอร์",
    imagePath: "/images/brand-ambassador.png",
    quote:
        "พอใช้ Chill&Co Works ไป 1 เดือน ยอดขายเพิ่มขึ้นชัดเจนเลย เพราะ AI ตอบลูกค้าได้ตลอด 24 ชั่วโมง ไม่มีพลาด ไม่มี missed message อีกต่อไป",
    highlights: [
        { icon: "TrendingUp", label: "ยอดขายเพิ่ม", value: "+40%" },
        { icon: "Clock", label: "ประหยัดเวลา", value: "3+ ชม./วัน" },
        { icon: "MessageCircle", label: "ลูกค้าพึงพอใจ", value: "สูงขึ้นมาก" },
    ],
    cta: { label: "ทดลองใช้ฟรี 7 วัน", url: brand.lineAddFriendUrl },
    cancelNote: "เหมือนอย่างที่ {name} ใช้ — ไม่ต้องผูกมัด ยกเลิกได้ทุกเมื่อ",
};

// ─── Pricing ───────────────────────────────────────────────────────────────────

export const pricing: PricingContent = {
    title: "แพ็กเกจราคา",
    subtitle: "เลือกแพ็กเกจที่เหมาะกับขนาดธุรกิจของคุณ",
    currency: "THB",
    billingNote: "ราคายังไม่รวม VAT 7%",
    card: { month: "เดือน", included: "ฟีเจอร์ที่ได้รับ", isNew: "ใหม่" },
    faqTitle: "คำถามที่พบบ่อย (FAQ)",
    faqSubtitle: "ข้อสงสัยเกี่ยวกับการใช้งานระบบ AI ตอบแชท",
    // Feature registry — isNew = [NEW] feature (เพิ่มเพื่อสร้าง differentiation)
    allFeatures: [
        { key: "ai_24_7", label: "ตอบอัตโนมัติ 24/7", isNew: false },
        { key: "ai_photo", label: "ส่งรูปภาพ", isNew: true },
        { key: "dashboard", label: "Dashboard จัดการลูกค้า", isNew: false },
        { key: "handover", label: "Auto Handover ส่งต่อแอดมิน", isNew: false },
        { key: "line_notify", label: "แจ้งเตือนกลุ่ม LINE Admin", isNew: false },
        { key: "trial", label: "ทดลองใช้ฟรี 7 วัน", isNew: false },
        { key: "support_std", label: "Support ทั่วไป (ตอบภายใน 24 ชม.)", isNew: false },
        { key: "priority_support", label: "Priority Support", isNew: true },
        { key: "usage_report", label: "Monthly Usage Report", isNew: true },
        { key: "multi_admin", label: "Multi-Admin Group (แจ้งได้หลายกลุ่ม)", isNew: true },
        { key: "onboarding", label: "Dedicated Onboarding (Setup 1-on-1)", isNew: true },
    ],
    plans: [
        {
            name: "Starter",
            emoji: "🌱",
            price: 490,
            priceLabel: "490",
            limit: "1,000 ข้อความ/เดือน",
            targetDesc: "เหมาะสำหรับร้านที่เพิ่งเริ่มต้น",
            includedFeatures: [
                "ai_24_7",
                "ai_photo",
                "dashboard",
                "handover",
                "line_notify",
                "trial",
                "support_std",
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
            targetDesc: "เหมาะสำหรับร้านยอดฮิต มีการยิงแอด",
            badge: "คุ้มที่สุด",
            includedFeatures: [
                "ai_24_7",
                "ai_photo",
                "dashboard",
                "handover",
                "line_notify",
                "trial",
                "priority_support",
                "usage_report",
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
            targetDesc: "เหมาะสำหรับร้านใหญ่ ช่วงแคมเปญทะลัก",
            includedFeatures: [
                "ai_24_7",
                "ai_photo",
                "dashboard",
                "handover",
                "line_notify",
                "trial",
                "priority_support",
                "usage_report",
                "multi_admin",
                "onboarding",
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

// ─── Page Admin Service ────────────────────────────────────────────────────────

export const pageAdmin: PageAdminContent = {
    badge: "👩‍💼 บริการเสริม",
    title: "Admin เพจ & ตอบแชท มืออาชีพ",
    subtitle: "ดูแลลูกค้าแทนคุณ ครบทุกแพลตฟอร์ม ด้วยทีมแอดมินประสบการณ์กว่า 7 ปี สื่อสารได้ 2 ภาษา ไทย–อังกฤษ",
    experience: "ประสบการณ์สายบริการและท่องเที่ยวกว่า 7 ปี",
    services: [
        {
            emoji: "💬",
            title: "ตอบแชทลูกค้า",
            desc: "ตอบอย่างมืออาชีพ สุภาพ เข้าใจง่าย ใช้ภาษาไทยถูกต้องและอังกฤษได้ดี",
        },
        {
            emoji: "🛒",
            title: "รับออเดอร์ & ปิดการขาย",
            desc: "รับออเดอร์ ปิดการขาย และประสานต่อยังแผนกที่เกี่ยวข้องอย่างราบรื่น",
        },
        {
            emoji: "🔗",
            title: "ประสานงานหลังบ้าน",
            desc: "ประสานงานระหว่างลูกค้าและทีมของคุณ ให้ทุกอย่างเดินหน้าได้ไม่ติดขัด",
        },
        {
            emoji: "📊",
            title: "สรุปรายงานรายเดือน",
            desc: "รายงานสรุปผลประจำเดือน ให้คุณติดตามยอดและสถานการณ์ได้ชัดเจน",
        },
        {
            emoji: "🌐",
            title: "ทุกแพลตฟอร์ม",
            desc: "รองรับ Facebook Page, Instagram, LINE OA และแพลตฟอร์มออนไลน์ทุกชนิด",
        },
        {
            emoji: "🇬🇧",
            title: "2 ภาษา ไทย–อังกฤษ",
            desc: "สื่อสารกับลูกค้าชาวไทยและต่างชาติได้อย่างเป็นธรรมชาติ",
        },
    ],
    workHoursLabel: "เวลาทำงาน",
    workDays: "จันทร์–เสาร์",
    workHours: "09:00–18:00 น.",
    workFlexNote: "เวลางานยืดหยุ่นได้ตามข้อตกลง",
    reportNote: "มีรายงานสรุปประจำเดือน",
    platformsLabel: "รองรับแพลตฟอร์ม",
    platforms: ["Facebook Page", "Instagram", "LINE OA", "Shopee", "Lazada"],
    startingAt: "เริ่มต้นที่",
    plans: [
        {
            name: "Basic",
            emoji: "🌱",
            price: "4,900",
            priceUnit: "บาท / เดือน",
            highlight: false,
            badge: null,
            features: [
                "ตอบแชทลูกค้า (จ.–ส. 09:00–18:00)",
                "รับออเดอร์ & ปิดการขาย",
                "ประสานงานหลังบ้าน",
                "สรุปรายงานรายเดือน",
                "รองรับ 1–2 แพลตฟอร์ม",
                "สื่อสารภาษาไทย",
            ],
            color: "blue",
        },
        {
            name: "Premium",
            emoji: "🔥",
            price: "12,900",
            priceUnit: "บาท / เดือน",
            highlight: true,
            badge: "ครบครัน",
            features: [
                "ตอบแชทลูกค้าครบทุกแพลตฟอร์ม",
                "รับออเดอร์ & ปิดการขาย",
                "ประสานงานหลังบ้านเต็มรูปแบบ",
                "สรุปรายงานรายเดือน",
                "รองรับทุกแพลตฟอร์ม",
                "สื่อสาร 2 ภาษา ไทย–อังกฤษ",
            ],
            color: "amber",
        },
    ],
    note: "ราคาเริ่มต้น · ยังไม่รวม VAT 7% · ติดต่อสอบถามรายละเอียดเพิ่มเติมได้เลย",
    cta: { label: "สอบถามรายละเอียด & ราคา", url: brand.lineAddFriendUrl },
};

// ─── Web Design & Build Services ──────────────────────────────────────────────

export const webDesign: WebDesignContent = {
    badge: "🌐 บริการเสริม",
    title: "รับออกแบบ & สร้างเว็บไซต์",
    subtitle: "ดีไซน์สวย โหลดเร็ว รองรับทุก device — พร้อมเชื่อมต่อ AI Chatbot ได้ทันที",
    startingAt: "เริ่มต้นที่",
    note: "ราคาเริ่มต้น · ยังไม่รวม VAT 7% · ติดต่อสอบถามรายละเอียดเพิ่มเติมได้เลย",
    cta: { label: "สอบถามราคา & รายละเอียด", url: brand.lineAddFriendUrl },
    plans: [
        {
            emoji: "📄",
            name: "Landing Page",
            nameEn: "Landing Page",
            desc: "หน้าเดียว ปิดการขายได้เต็มที่ เหมาะสำหรับยิงแอด สินค้าหรือโปรโมชัน",
            price: "2,900",
            priceUnit: "บาท / โปรเจกต์",
            highlight: false,
            badge: null,
            features: [
                "ออกแบบ Custom ตามแบรนด์",
                "Responsive ทุก device",
                "Framer Motion Animation",
                "SEO Optimized",
                "ส่งมอบใน 7 วัน",
                "แก้ไข 2 รอบ",
            ],
            color: "violet",
        },
        {
            emoji: "🛍️",
            name: "E-Commerce",
            nameEn: "E-Commerce",
            desc: "ร้านค้าออนไลน์ครบวงจร สั่งซื้อ ชำระเงิน จัดการสต็อก บน Next.js",
            price: "14,900",
            priceUnit: "บาท / โปรเจกต์",
            highlight: true,
            badge: "ยอดนิยม",
            features: [
                "ระบบตะกร้า + ชำระเงิน",
                "จัดการสินค้า + สต็อก",
                "PromptPay / Credit Card",
                "Admin Dashboard",
                "เชื่อมต่อ LINE OA AI ได้",
                "แก้ไข 3 รอบ",
            ],
            color: "emerald",
        },
        {
            emoji: "🏢",
            name: "Corporate",
            nameEn: "Corporate Site",
            desc: "เว็บบริษัท พอร์ตโฟลิโอองค์กร สร้างความน่าเชื่อถือ ดึงดูดลูกค้า B2B",
            price: "11,900",
            priceUnit: "บาท / โปรเจกต์",
            highlight: false,
            badge: null,
            features: [
                "หลายหน้า (About, Services, Contact)",
                "Contact Form + Google Maps",
                "Blog / News Section",
                "SEO + Sitemap พร้อมใช้",
                "รองรับ Multi-language",
                "แก้ไข 3 รอบ",
            ],
            color: "blue",
        },
        {
            emoji: "🎨",
            name: "Portfolio",
            nameEn: "Portfolio",
            desc: "แสดงผลงาน สร้าง Personal Brand ให้โดดเด่น เหมาะ Freelancer & Creative",
            price: "5,900",
            priceUnit: "บาท / โปรเจกต์",
            highlight: false,
            badge: null,
            features: [
                "Gallery + Project Showcase",
                "About Me + Skills Section",
                "Dark / Light Mode",
                "Smooth Animation",
                "ส่งมอบใน 5 วัน",
                "แก้ไข 2 รอบ",
            ],
            color: "pink",
        },
    ],
};

// ─── Social Proof / Stats ──────────────────────────────────────────────────────

export const stats: StatsContent[] = [
    { value: "4", suffix: " วิ", prefix: "< ", label: "เวลาตอบกลับเฉลี่ย" },
    { value: "24/7", suffix: "", prefix: "", label: "พร้อมให้บริการ" },
    { value: "5", suffix: "+", prefix: "", label: "ร้านค้าที่ใช้งาน" },
    { value: "100", suffix: "%", prefix: "", label: "Auto Handover เมื่อจำเป็น" },
];


// ─── Navigation ────────────────────────────────────────────────────────────────

export const nav: NavContent = {
    links: [
        { label: "ฟีเจอร์", href: "/#features" },
        { label: "Dashboard", href: "/#dashboard" },
        { label: "ราคา", href: "/#pricing" },
        { label: "แอดมินเพจ", href: "/#page-admin" },
        { label: "เว็บไซต์", href: "/#web-design" },
        { label: "คู่มือ", href: "/#how-it-works" },
        { label: "FAQ", href: "/#faq" },
        { label: "บทความ", href: "/blog" },
    ],
    cta: { label: "เพิ่มเพื่อน LINE", href: brand.lineAddFriendUrl },
};

// ─── Footer ────────────────────────────────────────────────────────────────────

export const footer: FooterContent = {
    menuTitle: "เมนู",
    contactTitle: "ติดต่อ",
    tagline: "AI Sales Assistant สำหรับ LINE OA — by Chill&Co Studio",
    links: [
        { label: "ติดต่อ Support", href: `mailto:${brand.supportEmail}` },
        { label: "LINE OA", href: brand.lineAddFriendUrl },
    ],
    copyright: `© 2026 Chill&Co Studio. All rights reserved.`,
};

// ─── Extras & Meta ─────────────────────────────────────────────────────────────

export const cta: CTAContent = {
    badge: "ระบบพร้อมใช้งานแล้ววันนี้",
    titleHtml: 'พร้อมให้ AI ทำงาน<span className="text-gradient">แทนคุณ</span><br className="hidden md:block" />แล้วหรือยัง?',
    desc: "สัมผัสประสบการณ์ให้ AI ปิดการขายให้คุณตลอด 24 ชั่วโมง โดยไม่ต้องเหนื่อยตอบแชทเองอีกต่อไป",
    button: "เพิ่มเพื่อนเพื่อเริ่มต้นใช้งาน"
};

export const blog: BlogContent = {
    badge: "บทความ",
    header: "คู่มือและเคล็ดลับ LINE OA",
    desc: "บทความสำหรับเจ้าของร้านที่ต้องการให้ AI ช่วยตอบลูกค้าบน LINE ได้อย่างมีประสิทธิภาพ",
    backHome: "กลับหน้าหลัก",
    backToAll: "ดูบทความทั้งหมด",
    empty: "ยังไม่มีบทความ",
    readMore: "อ่านต่อ",
    ctaBadge: "",
    ctaTitle: "พร้อมให้ AI ทำงานแทนคุณแล้วหรือยัง?",
    ctaDesc: "ทดลองใช้ฟรี 7 วัน ไม่ต้องผูกมัด ยกเลิกได้ทุกเมื่อ",
    ctaButton: "เพิ่มเพื่อน LINE OA"
};

export const seo: SEOContent = {
    defaultTitle: "Chill&Co Works — AI Sales Assistant สำหรับ LINE OA",
    defaultDesc: "ระบบ AI ตอบลูกค้า LINE OA อัตโนมัติ 24/7 ไม่ต้องเขียนโค้ด พร้อม Dashboard จัดการ Real-time",
    keywords: [
        "LINE OA",
        "AI Chatbot",
        "SaaS",
        "LINE Bot",
        "ระบบตอบแชทอัตโนมัติ",
        "AI ตอบแชท",
        "LINE OA AI",
        "Chill&Co Works",
    ],
    blogTitle: "บทความ AI LINE OA | Chill&Co Works",
    blogDesc: "บทความและคู่มือสำหรับเจ้าของร้านที่ต้องการใช้ AI ตอบ LINE OA อัตโนมัติ — เคล็ดลับ วิธีตั้งค่า และเปรียบเทียบตัวเลือก"
};

export const floatingContact = {
    ariaLabel: "ติดต่อเราผ่าน LINE"
};
