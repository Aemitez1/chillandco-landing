import { getDictionary } from "@/data/dictionaries";
import { Locale } from "@/i18n-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function PortfolioPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const portfolio = dict.portfolioPage;

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-50 to-white">
            <Navbar nav={dict.nav} lang={params.lang} brand={dict.brand} />

            <main className="flex-1 pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-4 md:px-8">

                    {/* Back link — same style as blog page */}
                    <div className="mb-4">
                        <Link
                            href={`/${params.lang}`}
                            className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            {portfolio.backHome}
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col items-center text-center gap-5 mb-14">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 border border-violet-200 text-sm font-semibold text-violet-700">
                            {portfolio.badge}
                        </span>

                        {/* Title — highlight word comes from content */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                            {portfolio.title}{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">
                                {portfolio.titleHighlight}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed">
                            {portfolio.subtitle}
                        </p>

                        {/* Stats row — all labels from content */}
                        <div className="flex flex-wrap justify-center gap-8 mt-2">
                            {[
                                { value: portfolio.stats.projectsValue, label: portfolio.stats.projectsLabel },
                                { value: "100%", label: portfolio.stats.responsiveLabel },
                                { value: portfolio.stats.deliveryValue, label: portfolio.stats.deliveryLabel },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center">
                                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-zinc-500 font-medium mt-0.5">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery + Filter (client component) */}
                    <PortfolioGallery portfolio={portfolio} lineUrl={dict.brand.lineAddFriendUrl} />

                </div>
            </main>

            <Footer footer={dict.footer} nav={dict.nav} brand={dict.brand} />
        </div>
    );
}
