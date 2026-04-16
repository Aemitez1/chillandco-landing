"use client";

import { motion } from "framer-motion";
import { HeroContent } from "@/data/content.types";
import GlowButton from "@/components/ui/GlowButton";

export default function HeroSection({ hero }: { hero: HeroContent }) {
    return (
        <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent -z-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[100px] -translate-x-1/2 -z-10" />

            <div className="container-narrow section-pad flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6 max-w-4xl"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-sm font-medium text-zinc-700">
                        <span>{hero.badge}</span>
                    </div>

                    {/* Headline */}
                    <h1 
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: hero.headlineHtml }}
                    />

                    {/* Description */}
                    <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-2">
                        {hero.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
                        <GlowButton
                            href={hero.cta.primary.url}
                            label={hero.cta.primary.label}
                            variant="primary"
                            size="lg"
                            emoji="💚"
                            external
                            className="w-full sm:w-auto"
                        />
                        <GlowButton
                            href={hero.cta.secondary.url}
                            label={hero.cta.secondary.label}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto bg-white/50 backdrop-blur-sm"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
