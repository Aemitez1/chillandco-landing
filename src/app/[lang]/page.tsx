import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const StatsBar = dynamic(() => import("@/components/sections/StatsBar"), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), { ssr: true });
const HowItWorksSection = dynamic(() => import("@/components/sections/HowItWorksSection"), { ssr: true });
const DashboardSection = dynamic(() => import("@/components/sections/DashboardSection"), { ssr: true });
const KnowledgeBaseSection = dynamic(() => import("@/components/sections/KnowledgeBaseSection"), { ssr: true });
const AmbassadorSection = dynamic(() => import("@/components/sections/AmbassadorSection"), { ssr: true });
const PricingSection = dynamic(() => import("@/components/sections/PricingSection"), { ssr: true });
const WebDesignSection = dynamic(() => import("@/components/sections/WebDesignSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: true });
const CTASection = dynamic(() => import("@/components/sections/CTASection"), { ssr: true });

import { getDictionary } from "@/data/dictionaries";
import { Locale } from "@/i18n-config";

export default async function Home({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar nav={dict.nav} lang={params.lang} brand={dict.brand} />

            <main className="flex-1">
                <HeroSection hero={dict.hero} />
                <StatsBar stats={dict.stats} />
                <FeaturesSection features={dict.features} />
                <HowItWorksSection howItWorks={dict.howItWorks} />
                <DashboardSection dashboard={dict.dashboard} />
                <KnowledgeBaseSection knowledgeBase={dict.knowledgeBase} />
                <AmbassadorSection ambassador={dict.ambassador} />
                <PricingSection pricing={dict.pricing} brand={dict.brand} />
                <WebDesignSection webDesign={dict.webDesign} />
                <FAQSection pricing={dict.pricing} />
                <CTASection brand={dict.brand} cta={dict.cta} />
            </main>

            <Footer footer={dict.footer} nav={dict.nav} brand={dict.brand} />
        </div>
    );
}
