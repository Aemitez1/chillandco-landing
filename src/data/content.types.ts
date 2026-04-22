export interface BrandContent {
    name: string;
    tagline: string;
    description: string;
    url: string;
    logoPath: string;
    lineAddFriendUrl: string;
    supportEmail: string;
}

export interface HeroContent {
    headlineHtml: string;
    description: string;
    cta: {
        primary: { label: string; url: string };
        secondary: { label: string; url: string };
    };
    badge: string;
}

export interface HowItWorksStep {
    step: string;
    emoji: string;
    title: string;
    desc: string;
    color: string;
    note?: string;
}

export interface HowItWorksContent {
    title: string;
    subtitle: string;
    steps: HowItWorksStep[];
}

export interface FeatureItem {
    icon: string;
    iconColor: string;
    iconBg: string;
    title: string;
    desc: string;
    highlight?: boolean;
}

export interface FeaturesContent {
    title: string;
    subtitle: string;
    items: FeatureItem[];
}

export interface DashboardContent {
    title: string;
    subtitle: string;
    featureListTitle: string;
    features: { icon: string; title: string; desc: string }[];
    screenshots: { src: string; alt: string; device: string }[];
}

export interface KnowledgeBaseContent {
    title: string;
    subtitle: string;
    sections: { emoji: string; label: string; title: string; desc: string }[];
    limit: string;
}

export interface AmbassadorContent {
    badge: string;
    name: string;
    nameEn: string;
    title: string;
    imagePath: string;
    quote: string;
    highlights: { icon: string; label: string; value: string }[];
    cta: { label: string; url: string };
    cancelNote: string;
}

export interface PricingPlan {
    name: string;
    emoji: string;
    price: number | string;
    priceLabel: string;
    limit: string;
    targetDesc: string;
    badge?: string;
    includedFeatures: string[];
    cta: { label: string; url: string };
    highlight: boolean;
}

export interface PricingFAQ {
    q: string;
    a: string;
}

export interface PricingContent {
    title: string;
    subtitle: string;
    currency: string;
    billingNote: string;
    card: { month: string; included: string; isNew: string };
    faqTitle: string;
    faqSubtitle: string;
    allFeatures: { key: string; label: string; isNew: boolean }[];
    plans: PricingPlan[];
    faq: PricingFAQ[];
}

export interface WebDesignPlan {
    emoji: string;
    name: string;
    nameEn: string;
    desc: string;
    price: string;
    priceUnit: string;
    highlight: boolean;
    badge: string | null;
    features: string[];
    color: string;
}

export interface WebDesignContent {
    badge: string;
    title: string;
    subtitle: string;
    startingAt: string;
    note: string;
    cta: { label: string; url: string };
    plans: WebDesignPlan[];
}

export interface PageAdminService {
    emoji: string;
    title: string;
    desc: string;
}

export interface PageAdminPlan {
    name: string;
    emoji: string;
    price: string;
    priceUnit: string;
    highlight: boolean;
    badge: string | null;
    features: string[];
    color: string;
}

export interface PageAdminContent {
    badge: string;
    title: string;
    subtitle: string;
    experience: string;
    services: PageAdminService[];
    workHoursLabel: string;
    workDays: string;
    workHours: string;
    workFlexNote: string;
    reportNote: string;
    startingAt: string;
    plans: PageAdminPlan[];
    note: string;
    cta: { label: string; url: string };
    platforms: string[];
    platformsLabel: string;
}

export interface StatsContent {
    value: string;
    suffix: string;
    prefix: string;
    label: string;
}

export interface NavContent {
    links: { label: string; href: string }[];
    cta: { label: string; href: string };
}

export interface FooterContent {
    menuTitle: string;
    contactTitle: string;
    tagline: string;
    links: { label: string; href: string }[];
    copyright: string;
}

export interface CTAContent {
    badge: string;
    titleHtml: string;
    desc: string;
    button: string;
}

export interface BlogContent {
    badge: string;
    header: string;
    desc: string;
    backHome: string;
    backToAll: string;
    empty: string;
    readMore: string;
    ctaBadge: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
}

export interface SEOContent {
    defaultTitle: string;
    defaultDesc: string;
    keywords: string[];
    blogTitle: string;
    blogDesc: string;
}

export interface ContentDictionary {
    brand: BrandContent;
    hero: HeroContent;
    howItWorks: HowItWorksContent;
    features: FeaturesContent;
    dashboard: DashboardContent;
    knowledgeBase: KnowledgeBaseContent;
    ambassador: AmbassadorContent;
    pricing: PricingContent;
    webDesign: WebDesignContent;
    pageAdmin: PageAdminContent;
    stats: StatsContent[];
    nav: NavContent;
    footer: FooterContent;
    cta: CTAContent;
    blog: BlogContent;
    seo: SEOContent;
    floatingContact: { ariaLabel: string };
}
