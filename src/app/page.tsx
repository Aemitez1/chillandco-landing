import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DashboardSection from "@/components/sections/DashboardSection";
import KnowledgeBaseSection from "@/components/sections/KnowledgeBaseSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

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
                <PricingSection />
                <FAQSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
