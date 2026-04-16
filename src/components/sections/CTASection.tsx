"use client";

import { motion } from "framer-motion";
import { BrandContent, CTAContent } from "@/data/content.types";
import GlowButton from "@/components/ui/GlowButton";

export default function CTASection({ brand, cta }: { brand: BrandContent; cta: CTAContent }) {
    return (
        <section className="bg-zinc-900 text-white py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container-narrow flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center max-w-3xl"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-sm font-semibold text-emerald-400 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {cta.badge}
                    </span>

                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: cta.titleHtml }}
                    />

                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                        {cta.desc}
                    </p>

                    <GlowButton
                        href={brand.lineAddFriendUrl}
                        label={cta.button}
                        variant="primary"
                        size="lg"
                        emoji="🚀"
                        className="w-full sm:w-auto text-lg shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] border-2 border-emerald-400/50"
                        external
                    />
                </motion.div>
            </div>
        </section>
    );
}
