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

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <HeroSection />
                <StatsBar />
                <FeaturesSection />
                <HowItWorksSection />
                <DashboardSection />
                <KnowledgeBaseSection />
                <AmbassadorSection />
                <PricingSection />
                <WebDesignSection />
                <FAQSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
