import {
    BrandContent,
    HeroContent,
    HowItWorksContent,
    FeaturesContent,
    DashboardContent,
    KnowledgeBaseContent,
    AmbassadorContent,
    PricingContent,
    WebDesignContent,
    PageAdminContent,
    PortfolioPageContent,
    StatsContent,
    NavContent,
    FooterContent,
    CTAContent,
    BlogContent,
    SEOContent,
    PrivacyPolicyContent,
} from "./content.types";

export const brand: BrandContent = {
    name: "Chill&Co Works",
    tagline: "AI Sales Assistant for LINE OA",
    description: "An intelligent AI system that responds to customers on your behalf 24/7. Easy to connect, no code required, complete with a Real-time Dashboard.",
    url: "https://www.chillandcostudio.com",
    logoPath: "/logo.jpg",
    lineAddFriendUrl: "https://line.me/R/ti/p/@chillandco",
    supportEmail: "support@chillandcostudio.com",
};

export const hero: HeroContent = {
    headlineHtml: 'Let AI chat with customers <br className="hidden md:block" />\n<span className="text-gradient">for you 24/7</span>',
    description: "Chill&Co Works is an AI Sales Assistant for LINE OA that answers questions, closes sales, and automatically hands over to admins — complete with a Dashboard to monitor customers in real-time.",
    cta: {
        primary: { label: "Add LINE Friend", url: brand.lineAddFriendUrl },
        secondary: { label: "View all features", url: "#features" },
    },
    badge: "🤖 Powered by Google Gemini",
};

export const howItWorks: HowItWorksContent = {
    title: "How does it work?",
    subtitle: "5 automatic steps, from customer message to admin notification",
    steps: [
        {
            step: "1",
            emoji: "💬",
            title: "Customer sends a message",
            desc: "Customer sends a message through your shop's LINE OA",
            color: "blue",
        },
        {
            step: "2",
            emoji: "🔍",
            title: "Status Check",
            desc: "System automatically checks message quota, expiration, and AI status",
            color: "indigo",
        },
        {
            step: "3",
            emoji: "🧠",
            title: "AI Processing",
            desc: "AI reads shop data + last 5 chats and generates a precise answer",
            color: "violet",
            note: "Google Gemini",
        },
        {
            step: "4",
            emoji: "✅",
            title: "Reply to customer",
            desc: "Sends the answer and immediately notifies admins in the LINE group",
            color: "emerald",
        },
        {
            step: "5",
            emoji: "🆘",
            title: "Admin Handover",
            desc: "If the customer is confused or asks repeatedly — AI automatically passes the job to an admin",
            color: "amber",
            note: "Auto Handover",
        },
    ],
};

export const features: FeaturesContent = {
    title: "Core Features",
    subtitle: "Comprehensive, delivering both speed and accuracy",
    items: [
        {
            icon: "Bot",
            iconColor: "text-emerald-600",
            iconBg: "bg-emerald-50",
            title: "Auto AI Reply (Gemini)",
            desc: "Accurately analyzes customer intent and closes sales 24/7.",
            highlight: true,
        },
        {
            icon: "ArrowRightLeft",
            iconColor: "text-amber-600",
            iconBg: "bg-amber-50",
            title: "Seamless Smart Handover",
            desc: "Instantly and seamlessly hands over chats to human admins when customers need help or face complex issues.",
        },
        {
            icon: "LayoutDashboard",
            iconColor: "text-violet-600",
            iconBg: "bg-violet-50",
            title: "Premium Control Dashboard",
            desc: "A web interface for store owners to view statistics, manage AI data, and monitor chats in real-time.",
            highlight: true,
        },
        {
            icon: "Zap",
            iconColor: "text-yellow-600",
            iconBg: "bg-yellow-50",
            title: "Easy to Use",
            desc: "No coding required. Simply input your store's data into the Dashboard and activate it instantly.",
        },
        {
            icon: "Image",
            iconColor: "text-pink-600",
            iconBg: "bg-pink-50",
            title: "AI Photo Gallery",
            desc: "Upload product photos with details and prices, allowing the AI to intelligently fetch and offer them to customers.",
            highlight: true,
        },
        {
            icon: "Globe",
            iconColor: "text-teal-600",
            iconBg: "bg-teal-50",
            title: "Multi-language Support",
            desc: "Automatically detects customer language, can respond naturally in both Thai and English.",
            highlight: true,
        },
        {
            icon: "MessageCircle",
            iconColor: "text-pink-600",
            iconBg: "bg-pink-50",
            title: "Polite Personality",
            desc: "Always uses polite particles, building a good, professional brand image for your shop.",
        },
        {
            icon: "Building2",
            iconColor: "text-zinc-600",
            iconBg: "bg-zinc-100",
            title: "Multi-Tenant SaaS",
            desc: "Supports multiple shops in a single system, each securely isolated with its own Channel Token and Knowledge Base.",
        },
    ],
};

export const dashboard: DashboardContent = {
    title: "Real-time Store Management Dashboard",
    subtitle: "View statistics, manage customers, and control AI from a single web page",
    featureListTitle: "Full Control",
    features: [
        {
            icon: "LayoutDashboard",
            title: "Overview Dashboard",
            desc: "View messages used, customer count, package expiry, and AI Core status",
        },
        {
            icon: "Users",
            title: "Customer Monitor",
            desc: "Customer table with name search, AI/Manual filter, and pagination across all devices",
        },
        {
            icon: "RefreshCcw",
            title: "Toggle Mode",
            desc: "Instantly switch AI ↔ Manual mode per customer so admins can take over",
        },
        {
            icon: "Bot",
            title: "AI Core Switch",
            desc: "Turn AI on or off for the whole shop with one click, in case you want manual control",
        },
        {
            icon: "Settings",
            title: "Identity & Knowledge Base",
            desc: "Enter shop data, products, FAQs, and payment methods — AI uses them instantly to answer customers",
        },
        {
            icon: "MessageSquare",
            title: "Admin Group Notifications",
            desc: "Receive automatic notifications in LINE groups when an AI replies or a handover occurs",
        },
    ],
    screenshots: [
        { src: "/screenshots/desktop/dashboard.png", alt: "Desktop Dashboard", device: "🖥️ Desktop" },
        { src: "/screenshots/ipad/dashboard.png", alt: "iPad Dashboard", device: "📱 iPad" },
        { src: "/screenshots/mobile/dashboard.png", alt: "Mobile Dashboard", device: "📲 Mobile" },
    ],
};

export const knowledgeBase: KnowledgeBaseContent = {
    title: "Setup AI Knowledge Base",
    subtitle: "Fill in 4 categories of store information; the AI will instantly use it to answer customers",
    sections: [
        {
            emoji: "🤖",
            label: "AI IDENTITY",
            title: "Personality & Business Category",
            desc: "Store name, business type, response style — give AI an identity that matches your brand",
        },
        {
            emoji: "📦",
            label: "PRODUCTS",
            title: "Product Database",
            desc: "Product list, prices, stock, and details that AI can use instantly to answer customers",
        },
        {
            emoji: "💳",
            label: "ORDERS & PAYMENT",
            title: "Payment & Shipping",
            desc: "Bank accounts, PromptPay, shipping fees, cut-off times — AI will always inform customers correctly",
        },
        {
            emoji: "❓",
            label: "FAQ & RULES",
            title: "FAQ and Special Rules",
            desc: "Frequently asked questions, return policies, promotions — answerable even late at night",
        },
        {
            emoji: "🖼️",
            label: "photo",
            title: "Product Photos",
            desc: "Product images that the AI can instantly use to answer customers",
        },
    ],
    limit: "5,000 characters per category",
};

export const ambassador: AmbassadorContent = {
    badge: "Brand Ambassador",
    name: "Lino",
    nameEn: "Reno",
    title: "Content Creator & Influencer",
    imagePath: "/images/brand-ambassador.png",
    quote: "After using Chill&Co Works for a month, sales have clearly increased because the AI can answer customers 24 hours a day, no miss, no missed messages anymore.",
    highlights: [
        { icon: "TrendingUp", label: "Increased Sales", value: "+40%" },
        { icon: "Clock", label: "Time Saved", value: "3+ hrs/day" },
        { icon: "MessageCircle", label: "Customer Satisfaction", value: "Very High" },
    ],
    cta: { label: "Try it free for 7 days", url: brand.lineAddFriendUrl },
    cancelNote: "Just like {name} uses — no commitment, cancel anytime",
};

export const pricing: PricingContent = {
    title: "Pricing Packages",
    subtitle: "Choose the package that fits your business size",
    currency: "THB",
    billingNote: "Prices do not include 7% VAT",
    card: { month: "Month", included: "Included Features", isNew: "NEW" },
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions about using the AI Chatbot system",
    allFeatures: [
        { key: "ai_24_7", label: "Auto Reply 24/7", isNew: false },
        { key: "ai_photo", label: "Send Images", isNew: true },
        { key: "dashboard", label: "Customer Management Dashboard", isNew: false },
        { key: "handover", label: "Auto Handover to Admin", isNew: false },
        { key: "line_notify", label: "Admin LINE Group Notification", isNew: false },
        { key: "trial", label: "Free 7-day trial", isNew: false },
        { key: "support_std", label: "Standard Support (Reply within 24 hrs)", isNew: false },
        { key: "priority_support", label: "Priority Support", isNew: true },
        { key: "usage_report", label: "Monthly Usage Report", isNew: true },
        { key: "multi_admin", label: "Multi-Admin Group", isNew: true },
        { key: "onboarding", label: "Dedicated Onboarding (1-on-1 Setup)", isNew: true },
    ],
    plans: [
        {
            name: "Starter",
            emoji: "🌱",
            price: 490,
            priceLabel: "490",
            limit: "1,000 messages/month",
            targetDesc: "Perfect for newly started shops",
            includedFeatures: [
                "ai_24_7",
                "ai_photo",
                "dashboard",
                "handover",
                "line_notify",
                "trial",
                "support_std",
            ],
            cta: { label: "Get Started", url: brand.lineAddFriendUrl },
            highlight: false,
        },
        {
            name: "Growth",
            emoji: "🔥",
            price: 790,
            priceLabel: "790",
            limit: "3,000 messages/month",
            targetDesc: "Perfect for popular shops running ads",
            badge: "Best Value",
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
            cta: { label: "Try it free", url: brand.lineAddFriendUrl },
            highlight: true,
        },
        {
            name: "Pro",
            emoji: "🚀",
            price: 1490,
            priceLabel: "1490",
            limit: "10,000 messages/month",
            targetDesc: "Perfect for large shops during heavy campaigns",
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
            cta: { label: "Contact Us", url: brand.lineAddFriendUrl },
            highlight: false,
        },
    ],
    faq: [
        {
            q: "Is it easy to use?",
            a: "Very easy! Just add our LINE OA as a friend and fill in your shop's information in the Dashboard. The system will be ready to answer customers instantly, no code needed.",
        },
        {
            q: "How accurate is the AI?",
            a: "The AI uses the data you provide in the Knowledge Base as Context. The more detailed information you enter, the more accurate and spot-on the answers will be.",
        },
        {
            q: "What if the AI cannot answer?",
            a: "The One-Shot Handover system will automatically hand over the ticket to an admin, along with a notification in the LINE group that a customer needs help.",
        },
        {
            q: "How many LINE OAs are supported?",
            a: "The system is designed as a Multi-Tenant SaaS, supporting multiple LINE OAs in a single system. Each store has isolated Data and Configuration.",
        },
        {
            q: "Is my store's data safe?",
            a: "Yes. Each store stores its LINE Channel Token and Secret separately in the database. The Multi-Tenancy Isolation system prevents cross-store access.",
        },
    ],
};

export const webDesign: WebDesignContent = {
    badge: "🌐 Add-on Service",
    title: "Website Design & Build",
    subtitle: "Beautiful design, fast loading, responsive on all devices — ready to connect with AI Chatbot instantly",
    startingAt: "Starting at",
    note: "Starting prices · VAT 7% not included · Contact us for more details",
    cta: { label: "Inquire Price & Details", url: brand.lineAddFriendUrl },
    plans: [
        {
            emoji: "📄",
            name: "Landing Page",
            nameEn: "Landing Page",
            desc: "A single page optimized for conversions, perfect for running ads, products, or promotions",
            price: "2,900",
            priceUnit: "THB / Project",
            highlight: false,
            badge: null,
            features: [
                "Custom Design per brand",
                "Responsive across all devices",
                "Framer Motion Animations",
                "SEO Optimized",
                "Delivered in 7 days",
                "2 revisions allowed",
            ],
            color: "violet",
        },
        {
            emoji: "🛍️",
            name: "E-Commerce",
            nameEn: "E-Commerce",
            desc: "Full online store with checkout, payment, and stock management on Next.js",
            price: "14,900",
            priceUnit: "THB / Project",
            highlight: false,
            badge: null,
            features: [
                "Cart + Payment system",
                "Product + Stock management",
                "PromptPay / Credit Card",
                "Admin Dashboard",
                "Connects with LINE OA AI",
                "3 revisions allowed",
            ],
            color: "emerald",
        },
        {
            emoji: "🏢",
            name: "Corporate",
            nameEn: "Corporate Site",
            desc: "Company website, corporate portfolio building trust and attracting B2B clients",
            price: "11,900",
            priceUnit: "THB / Project",
            highlight: true,
            badge: "Popular",
            features: [
                "Multi-page (About, Services, Contact)",
                "Contact Form + Google Maps",
                "Blog / News Section",
                "Ready-to-use SEO + Sitemap",
                "Multi-language support",
                "3 revisions allowed",
            ],
            color: "blue",
        },
        {
            emoji: "🎨",
            name: "Portfolio",
            nameEn: "Portfolio",
            desc: "Showcase your work and build a standout personal brand. Ideal for Freelancers & Creatives",
            price: "5,900",
            priceUnit: "THB / Project",
            highlight: false,
            badge: null,
            features: [
                "Gallery + Project Showcase",
                "About Me + Skills Section",
                "Dark / Light Mode",
                "Smooth Animations",
                "Delivered in 5 days",
                "2 revisions allowed",
            ],
            color: "pink",
        },
    ],
};

export const pageAdmin: PageAdminContent = {
    badge: "👩‍💼 Add-on Service",
    title: "Professional Page Admin & Chat Support",
    subtitle: "We manage your customers across all platforms with a 7+ year experienced bilingual team — Thai & English",
    experience: "7+ years of experience in service & hospitality",
    services: [
        {
            emoji: "💬",
            title: "Customer Chat Support",
            desc: "Professional, polite, and clear communication in both Thai and English",
        },
        {
            emoji: "🛒",
            title: "Order Taking & Sales Closing",
            desc: "Receive orders, close sales, and coordinate with related departments smoothly",
        },
        {
            emoji: "🔗",
            title: "Backend Coordination",
            desc: "Coordinate between customers and your team to make everything move forward without friction",
        },
        {
            emoji: "🌐",
            title: "Multi-Platform",
            desc: "Supports Facebook Page, Instagram, LINE OA and all online platforms",
        },
        {
            emoji: "🇬🇧",
            title: "Bilingual: Thai & English",
            desc: "Communicate naturally with both Thai and international customers",
        },
    ],
    workHoursLabel: "Working Hours",
    workDays: "Monday–Saturday",
    workHours: "09:00–18:00",
    workFlexNote: "Flexible hours by arrangement",
    reportNote: "Monthly summary report included",
    platformsLabel: "Supported Platforms",
    platforms: ["Facebook Page", "Instagram", "LINE OA", "Shopee", "Lazada"],
    startingAt: "Starting at",
    plans: [
        {
            name: "Basic",
            emoji: "🌱",
            price: "4,900",
            priceUnit: "THB / Month",
            highlight: true,
            badge: "Most Popular",
            features: [
                "Chat support (Mon–Sat 09:00–18:00)",
                "Order taking & sales closing",
                "Backend coordination",
                "Monthly summary report",
                "1–2 platforms supported",
                "Thai language communication",
            ],
            color: "blue",
        },
        {
            name: "Premium",
            emoji: "🔥",
            price: "12,900",
            priceUnit: "THB / Month",
            highlight: false,
            badge: "Full Service",
            features: [
                "Full multi-platform chat support",
                "Order taking & sales closing",
                "Full backend coordination",
                "Monthly summary report",
                "All platforms supported",
                "Bilingual: Thai & English",
            ],
            color: "amber",
        },
    ],
    note: "Starting prices · VAT 7% not included · Contact us for more details",
    cta: { label: "Inquire Details & Pricing", url: brand.lineAddFriendUrl },
};

export const stats: StatsContent[] = [
    { value: "4", suffix: " sec", prefix: "< ", label: "Avg. Reply Time" },
    { value: "24/7", suffix: "", prefix: "", label: "Availability" },
    { value: "5", suffix: "+", prefix: "", label: "Active Stores" },
    { value: "100", suffix: "%", prefix: "", label: "Auto Handover if needed" },
];

export const nav: NavContent = {
    links: [
        { label: "Features", href: "/#features" },
        { label: "Dashboard", href: "/#dashboard" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Page Admin", href: "/#page-admin" },
        { label: "Website", href: "/#web-design" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "FAQ", href: "/#faq" },
        { label: "Blog", href: "/blog" },
    ],
    cta: { label: "Add LINE Friend", href: brand.lineAddFriendUrl },
};

// ─── Portfolio Page ────────────────────────────────────────────────────────────

export const portfolioPage: PortfolioPageContent = {
    badge: "✨ Our Work",
    title: "Websites",
    titleHighlight: "We've Built",
    subtitle: "Real portfolio examples across diverse industries — beautiful design, fast loading, mobile-ready on every project",
    backHome: "Back to Home",
    viewLabel: "View Project",
    ctaTitle: "Want a Website Like This?",
    ctaDesc: "Contact us for a free quote. Custom design tailored to your brand.",
    ctaButton: "Inquire Price & Details",
    filterAll: "All",
    stats: {
        projectsValue: "5+",
        projectsLabel: "Projects",
        responsiveLabel: "Responsive",
        deliveryValue: "7+ Days",
        deliveryLabel: "Fast Delivery",
    },
    projects: [
        {
            id: "pizzeria-hut-1",
            title: "Pizzeria Hut 1",
            category: "Restaurant",
            categoryColor: "orange",
            desc: "Premium restaurant website in Phuket. Supports 3 languages (Thai, English, Russian) with online menu and table reservations.",
            image: "/ex-web/pizza.png",
            tags: ["Restaurant", "Multi-language", "Menu", "Reservation"],
            type: "Corporate",
        },
        {
            id: "k-energy",
            title: "K-Energy BESS",
            category: "Corporate",
            categoryColor: "teal",
            desc: "Corporate website for a BESS (Battery Energy Storage System) company. Dark/professional design built for B2B credibility.",
            image: "/ex-web/ek-energy.png",
            tags: ["Corporate", "Energy", "B2B", "Dark Theme"],
            type: "Corporate",
        },
        {
            id: "home-service",
            title: "Home Cleaning Service",
            category: "Landing Page",
            categoryColor: "green",
            desc: "Mobile-first landing page for an hourly house cleaning service. Converts visitors directly via LINE booking.",
            image: "/ex-web/home-service.png",
            tags: ["Landing Page", "Mobile-first", "LINE", "Service"],
            type: "Landing Page",
        },
        {
            id: "stockcontrol",
            title: "StockControl System",
            category: "Web App",
            categoryColor: "blue",
            desc: "Car accessories inventory management system for TEAM Auto Sports. Includes login, admin dashboard, and role-based access control.",
            image: "/ex-web/stockcontrol.png",
            tags: ["Web App", "Dashboard", "Inventory", "Auth"],
            type: "Web App",
        },
        {
            id: "aemitez-portfolio",
            title: "Aemitez_Dev Portfolio",
            category: "Portfolio",
            categoryColor: "purple",
            desc: "Developer portfolio with AI-enhanced workflow showcase. Features a Skill Radar Chart, Tech Stack breakdown, and project gallery.",
            image: "/ex-web/aemitez.github.png",
            tags: ["Portfolio", "AI-Enhanced", "Next.js", "Chart"],
            type: "Portfolio",
        },
    ],
};

export const footer: FooterContent = {
    menuTitle: "Menu",
    contactTitle: "Contact",
    tagline: "AI Sales Assistant for LINE OA — by Chill&Co Studio",
    links: [
        { label: "Contact Support", href: `mailto:${brand.supportEmail}` },
        { label: "LINE OA", href: brand.lineAddFriendUrl },
        { label: "Privacy Policy", href: "/en/privacy-policy" },
    ],
    copyright: `© 2026 Chill&Co Studio. All rights reserved.`,
};

export const cta: CTAContent = {
    badge: "Ready to use today",
    titleHtml: 'Ready to let AI work <span className="text-gradient">for you</span><br className="hidden md:block" />?',
    desc: "Experience letting AI close sales for you 24 hours a day without you having to tirelessly answer chats yourself anymore.",
    button: "Add Friend to get started"
};

export const blog: BlogContent = {
    badge: "Blog",
    header: "LINE OA Guides & Tips",
    desc: "Articles for shop owners who want AI to help answer customers effectively on LINE.",
    backHome: "Back to Home",
    backToAll: "View all articles",
    empty: "No articles yet",
    readMore: "Read more",
    ctaBadge: "",
    ctaTitle: "Ready to let AI work for you?",
    ctaDesc: "Try it free for 7 days, no commitment, cancel anytime",
    ctaButton: "Add LINE Friend"
};

export const seo: SEOContent = {
    defaultTitle: "Chill&Co Works — AI Sales Assistant for LINE OA",
    defaultDesc: "Automated AI replying to LINE OA customers 24/7. No code required, complete with Real-time Dashboard",
    keywords: [
        "LINE OA",
        "AI Chatbot",
        "SaaS",
        "LINE Bot",
        "Auto chatbot",
        "AI chat responder",
        "LINE OA AI",
        "Chill&Co Works",
    ],
    blogTitle: "AI LINE OA Blog",
    blogDesc: "Articles and guides for shop owners wanting to use AI to automatically reply on LINE OA — tips, setup methods, and comparisons."
};

// ─── Privacy Policy ───────────────────────────────────────────────────────────

export const privacyPolicy: PrivacyPolicyContent = {
    badge: "🔒 Privacy",
    pageTitle: "Privacy Policy",
    subtitle: "Chill&Co Works is committed to protecting your privacy. We are transparent about how we handle your data and comply with PDPA and international standards.",
    lastUpdatedLabel: "Last Updated",
    lastUpdatedDate: "May 14, 2025",
    backHome: "Back to Home",
    tocTitle: "Table of Contents",
    seoTitle: "Privacy Policy | Chill&Co Works",
    seoDesc: "Read the Privacy Policy of Chill&Co Works — AI Sales Assistant for LINE OA. Learn how we collect, use, and protect your personal data.",
    sections: [
        {
            number: "1",
            title: "Introduction",
            intro: "This Privacy Policy explains how Chill&Co Works collects, uses, and protects your personal information when you use our services.",
            items: [
                {
                    title: "Service Name",
                    content: "Chill&Co Assistant — AI Sales Assistant for LINE OA",
                },
                {
                    title: "Service Provider",
                    content: "Chill&Co Works, operated by a Thai development team. Contact us at support@chillandcostudio.com",
                },
                {
                    title: "Purpose of This Policy",
                    content: "This policy is designed to inform users about the management of personal data in accordance with international standards and the Personal Data Protection Act (PDPA) of Thailand, as well as the policies of Meta (Facebook) and LINE Platform.",
                },
            ],
        },
        {
            number: "2",
            title: "Data We Collect",
            intro: "We collect only the data necessary to provide our services, categorized as follows:",
            items: [
                {
                    title: "Social Media Data",
                    content: "Data received via API including LINE/Facebook profile names, User IDs, profile photos, and authorized Page or LINE OA information.",
                },
                {
                    title: "Communication Data",
                    content: "Message content (Chat Logs) from customer interactions with the bot, which is required for AI processing and response generation.",
                },
                {
                    title: "Technical Data",
                    content: "IP addresses, browser types, and system usage logs for diagnostics and security purposes.",
                },
                {
                    title: "Account Data",
                    content: "Information you provide during registration such as email, store name, and AI configuration data entered in the Dashboard.",
                },
                {
                    title: "Payment Data",
                    content: "If you purchase a subscription, payments are processed via a third-party Payment Gateway. We do not store credit or debit card information directly in our systems.",
                },
            ],
        },
        {
            number: "3",
            title: "How We Use Your Data",
            intro: "Data collected is used only for the following purposes:",
            items: [
                {
                    title: "Core Service Delivery",
                    content: "We use your data to process automated chat interactions, respond to customer inquiries, and hand off conversations to human admins when necessary.",
                },
                {
                    title: "AI Processing",
                    content: "Message content is sent to Google Gemini API for intent analysis and response generation, subject to Google's Privacy Policy and Terms of Service.",
                },
                {
                    title: "Customer Support",
                    content: "System logs are used to investigate and resolve issues when the system behaves unexpectedly.",
                },
                {
                    title: "Analytics & Improvement",
                    content: "Aggregated, anonymized data is used to analyze usage patterns and improve features and service quality.",
                },
            ],
        },
        {
            number: "4",
            title: "Third-Party Disclosure",
            intro: "We do not sell, trade, or exchange your personal data with third parties, except in the following cases:",
            items: [
                {
                    title: "Primary Platforms (LINE / Meta)",
                    content: "Some data is relayed back to LINE Corporation or Meta (Facebook) based on the channel you use, governed by their respective Privacy Policies.",
                },
                {
                    title: "AI Provider (Google Gemini)",
                    content: "Conversation message content is sent to Google Gemini API for processing, subject to Google's Privacy Policy and Terms of Service.",
                },
                {
                    title: "Payment Gateway Providers",
                    content: "Data necessary for payment processing is shared with our Payment Gateway provider, which maintains PCI-DSS compliance.",
                },
                {
                    title: "Legal Requirements",
                    content: "We will only disclose your data when required by a court order, government authority, or applicable law.",
                },
            ],
        },
        {
            number: "5",
            title: "Data Security",
            intro: "We implement appropriate technical and organizational measures to protect your personal data.",
            items: [
                {
                    title: "Encryption",
                    content: "All data transmitted through our systems is protected using HTTPS/TLS protocols to ensure secure communication.",
                },
                {
                    title: "Access Control",
                    content: "Our databases have strict access controls in place. Only authorized personnel can access personal data.",
                },
                {
                    title: "Retention Period",
                    content: "Conversation data is retained for the lifetime of your account and deleted within 90 days after account cancellation or upon your request.",
                },
            ],
        },
        {
            number: "6",
            title: "User Rights & Data Deletion",
            intro: "You have full rights to control your personal data as defined by PDPA and Meta's policies.",
            items: [
                {
                    title: "Right of Access",
                    content: "You can request a copy of the personal data we hold about you at any time by emailing support@chillandcostudio.com.",
                },
                {
                    title: "Right to Rectify or Delete",
                    content: "To correct or delete your personal data, email support@chillandcostudio.com with your account name and the requested action. We will respond within 30 business days.",
                },
                {
                    title: "Revoking Facebook App Access",
                    content: "Go to Facebook Settings → Security and Login → Apps and Websites → Find Chill&Co and click Remove to revoke access.",
                },
                {
                    title: "Revoking LINE Access",
                    content: "You can block or unfollow our LINE OA at any time directly through the LINE app.",
                },
                {
                    title: "Right to Complain",
                    content: "If you believe your personal data rights have been violated, you have the right to file a complaint with Thailand's Personal Data Protection Committee (PDPC).",
                },
            ],
        },
        {
            number: "7",
            title: "Contact Information",
            intro: "If you have any questions or concerns about this Privacy Policy, please contact us via the following channels:",
            items: [
                {
                    title: "Privacy Email",
                    content: "support@chillandcostudio.com",
                },
                {
                    title: "Website",
                    content: "https://www.chillandcostudio.com",
                },
                {
                    title: "LINE OA",
                    content: "You can contact us directly via our LINE OA. We aim to respond within 1 business day.",
                },
            ],
        },
    ],
    contactTitle: "Contact Privacy Team",
    contactEmail: "support@chillandcostudio.com",
    contactWebsite: "https://www.chillandcostudio.com",
    contactEmailLabel: "Email",
    contactWebsiteLabel: "Website",
};

export const floatingContact = {
    ariaLabel: "Contact us via LINE"
};
