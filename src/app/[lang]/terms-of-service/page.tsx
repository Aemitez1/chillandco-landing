import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Scale, Mail, Globe } from "lucide-react";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/data/dictionaries";

export async function generateMetadata({
    params,
}: {
    params: { lang: Locale };
}): Promise<Metadata> {
    const dict = await getDictionary(params.lang);
    const tos = dict.termsOfService;
    return {
        title: tos.seoTitle,
        description: tos.seoDesc,
        openGraph: {
            title: tos.seoTitle,
            description: tos.seoDesc,
            type: "website",
        },
    };
}

export default async function TermsOfServicePage({
    params,
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(params.lang);
    const tos = dict.termsOfService;

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar nav={dict.nav} lang={params.lang} brand={dict.brand} />

            <main className="flex-1 pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">

                    {/* Back link */}
                    <div className="mb-6">
                        <Link
                            href={`/${params.lang}`}
                            className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-700 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            {tos.backHome}
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="mb-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold mb-4">
                            {tos.badge}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                            {tos.pageTitle}
                        </h1>
                        <p className="text-zinc-500 text-base max-w-2xl mb-3">
                            {tos.subtitle}
                        </p>
                        <p className="text-xs text-zinc-400">
                            {tos.lastUpdatedLabel}: {tos.lastUpdatedDate}
                        </p>
                    </div>

                    {/* Platform badges */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {["LINE OA", "Meta / Facebook", "Google Gemini AI"].map((p) => (
                            <span
                                key={p}
                                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600"
                            >
                                {p}
                            </span>
                        ))}
                    </div>

                    {/* Table of Contents */}
                    <nav
                        aria-label={tos.tocTitle}
                        className="mb-12 p-5 rounded-2xl bg-violet-50 border border-violet-200"
                    >
                        <p className="text-sm font-semibold text-zinc-700 mb-3 flex items-center gap-2">
                            <Scale className="w-4 h-4 text-violet-500" />
                            {tos.tocTitle}
                        </p>
                        <ol className="space-y-1">
                            {tos.sections.map((section) => (
                                <li key={section.number}>
                                    <a
                                        href={`#section-${section.number}`}
                                        className="text-sm text-zinc-500 hover:text-violet-600 transition-colors"
                                    >
                                        {section.number}. {section.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* Sections */}
                    <div className="space-y-10">
                        {tos.sections.map((section) => (
                            <section
                                key={section.number}
                                id={`section-${section.number}`}
                                className="scroll-mt-28"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-sm font-bold flex items-center justify-center">
                                        {section.number}
                                    </span>
                                    <h2 className="text-xl font-bold text-zinc-900">
                                        {section.title}
                                    </h2>
                                </div>

                                {section.intro && (
                                    <p className="text-zinc-500 text-sm mb-5 leading-relaxed pl-11">
                                        {section.intro}
                                    </p>
                                )}

                                <div className="pl-11 space-y-4">
                                    {section.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 rounded-xl bg-white border border-zinc-100 shadow-sm"
                                        >
                                            <p className="text-sm font-semibold text-zinc-800 mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-zinc-500 leading-relaxed">
                                                {item.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Contact Card */}
                    <div className="mt-16 p-6 rounded-2xl bg-violet-50 border border-violet-200">
                        <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                            <Scale className="w-5 h-5 text-violet-500" />
                            {tos.contactTitle}
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-zinc-600">
                                <Mail className="w-4 h-4 text-violet-500 flex-shrink-0" />
                                <span className="font-medium mr-1">{tos.contactEmailLabel}:</span>
                                <a
                                    href={`mailto:${tos.contactEmail}`}
                                    className="text-violet-700 hover:text-violet-900 underline underline-offset-2 transition-colors"
                                >
                                    {tos.contactEmail}
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-zinc-600">
                                <Globe className="w-4 h-4 text-violet-500 flex-shrink-0" />
                                <span className="font-medium mr-1">{tos.contactWebsiteLabel}:</span>
                                <a
                                    href={tos.contactWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-violet-700 hover:text-violet-900 underline underline-offset-2 transition-colors"
                                >
                                    {tos.contactWebsite}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer footer={dict.footer} nav={dict.nav} brand={dict.brand} />
        </div>
    );
}
