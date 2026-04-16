"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AmbassadorContent } from "@/data/content.types";
import GlowButton from "@/components/ui/GlowButton";
import { TrendingUp, Clock, MessageCircle, Quote, Star } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    TrendingUp,
    Clock,
    MessageCircle,
};

export default function AmbassadorSection({ ambassador }: { ambassador: AmbassadorContent }) {
    return (
        <section id="ambassador" className="bg-gradient-to-b from-white via-pink-50/30 to-white section-pad scroll-mt-16 overflow-hidden">
            <div className="container-narrow">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-sm font-semibold">
                        <Star className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                        {ambassador.badge}
                    </span>
                </motion.div>

                {/* === MOBILE / TABLET: Centered card layout === */}
                <div className="lg:hidden flex flex-col items-center gap-8">
                    {/* Photo + name */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-5"
                    >
                        {/* Glow */}
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-pink-200/40 blur-2xl scale-110" />
                            <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-pink-100/60 z-10">
                                <Image
                                    src={ambassador.imagePath}
                                    alt={`${ambassador.name} — Brand Ambassador Chill&Co Works`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 160px, 224px"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Name card below photo */}
                        <div className="text-center">
                            <p className="font-bold text-zinc-900 text-lg leading-tight">
                                {ambassador.name}
                                <span className="text-zinc-400 font-normal text-sm ml-1.5">
                                    ({ambassador.nameEn})
                                </span>
                            </p>
                            <p className="text-sm text-zinc-500 mt-0.5">{ambassador.title}</p>
                        </div>
                    </motion.div>

                    {/* Quote */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative bg-white border border-zinc-100 rounded-2xl px-6 pt-8 pb-6 shadow-sm text-center max-w-md mx-auto"
                    >
                        <Quote className="absolute top-4 left-5 w-7 h-7 text-emerald-100 fill-emerald-100" />
                        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
                            &ldquo;{ambassador.quote}&rdquo;
                        </p>
                    </motion.blockquote>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-3 gap-3 w-full max-w-md"
                    >
                        {ambassador.highlights.map((h) => {
                            const Icon = iconMap[h.icon];
                            return (
                                <div
                                    key={h.label}
                                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white border border-zinc-100 shadow-sm text-center"
                                >
                                    {Icon && (
                                        <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-emerald-600" />
                                        </div>
                                    )}
                                    <span className="text-sm font-bold text-zinc-900 leading-tight">{h.value}</span>
                                    <span className="text-[10px] text-zinc-500 leading-tight">{h.label}</span>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-2 w-full max-w-xs"
                    >
                        <GlowButton
                            href={ambassador.cta.url}
                            label={ambassador.cta.label}
                            variant="primary"
                            size="lg"
                            emoji="💚"
                            external
                            className="w-full"
                        />
                        <p className="text-xs text-zinc-400 text-center">
                            {ambassador.cancelNote.replace('{name}', ambassador.name)}
                        </p>
                    </motion.div>
                </div>

                {/* === DESKTOP: 2-column layout === */}
                <div className="hidden lg:grid grid-cols-2 gap-16 xl:gap-20 items-center">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="relative flex justify-center pb-8"
                    >
                        {/* Glow ring */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-pink-200/40 via-emerald-100/30 to-transparent blur-3xl" />
                        </div>

                        {/* Photo */}
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-pink-100/50 z-10">
                            <Image
                                src={ambassador.imagePath}
                                alt={`${ambassador.name} — Brand Ambassador Chill&Co Works`}
                                fill
                                className="object-cover"
                                sizes="320px"
                                priority
                            />
                        </div>

                        {/* Floating name card */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-xl px-5 py-3 flex flex-col items-center border border-zinc-100 min-w-[200px]"
                        >
                            <p className="font-bold text-zinc-900 text-base leading-tight">
                                {ambassador.name}
                                <span className="text-zinc-400 font-normal text-sm ml-1">({ambassador.nameEn})</span>
                            </p>
                            <p className="text-xs text-zinc-500 mt-0.5">{ambassador.title}</p>
                        </motion.div>
                    </motion.div>

                    {/* Content side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col gap-8"
                    >
                        {/* Quote */}
                        <div className="relative">
                            <Quote className="absolute -top-4 -left-2 w-10 h-10 text-emerald-100 fill-emerald-100" />
                            <blockquote className="relative z-10 text-xl xl:text-2xl font-semibold text-zinc-800 leading-relaxed pl-4">
                                &ldquo;{ambassador.quote}&rdquo;
                            </blockquote>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-3 gap-4">
                            {ambassador.highlights.map((h) => {
                                const Icon = iconMap[h.icon];
                                return (
                                    <div
                                        key={h.label}
                                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-center"
                                    >
                                        {Icon && (
                                            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-emerald-600" />
                                            </div>
                                        )}
                                        <span className="text-lg font-bold text-zinc-900 leading-tight">{h.value}</span>
                                        <span className="text-xs text-zinc-500">{h.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div>
                            <GlowButton
                                href={ambassador.cta.url}
                                label={ambassador.cta.label}
                                variant="primary"
                                size="lg"
                                emoji="💚"
                                external
                            />
                            <p className="text-xs text-zinc-400 mt-3">
                                {ambassador.cancelNote.replace('{name}', ambassador.name)}
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
