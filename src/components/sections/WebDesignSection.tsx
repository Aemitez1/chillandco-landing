"use client";

import { motion } from "framer-motion";
import { webDesign } from "@/data/content";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Color map for accent colors per plan
const colorMap: Record<string, {
    accent: string;
    badgeBg: string;
    badgeText: string;
    checkColor: string;
    border: string;
    glow: string;
    highlightBorder: string;
    priceBg: string;
}> = {
    violet: {
        accent: "from-violet-500 to-purple-500",
        badgeBg: "bg-violet-100",
        badgeText: "text-violet-700",
        checkColor: "text-violet-500",
        border: "border-violet-200 hover:border-violet-400",
        glow: "hover:shadow-violet-100",
        highlightBorder: "border-violet-400 ring-2 ring-violet-200",
        priceBg: "bg-violet-50",
    },
    emerald: {
        accent: "from-emerald-500 to-green-400",
        badgeBg: "bg-emerald-100",
        badgeText: "text-emerald-700",
        checkColor: "text-emerald-500",
        border: "border-emerald-200 hover:border-emerald-400",
        glow: "hover:shadow-emerald-100",
        highlightBorder: "border-emerald-400 ring-2 ring-emerald-200",
        priceBg: "bg-emerald-50",
    },
    blue: {
        accent: "from-blue-500 to-cyan-400",
        badgeBg: "bg-blue-100",
        badgeText: "text-blue-700",
        checkColor: "text-blue-500",
        border: "border-blue-200 hover:border-blue-400",
        glow: "hover:shadow-blue-100",
        highlightBorder: "border-blue-400 ring-2 ring-blue-200",
        priceBg: "bg-blue-50",
    },
    pink: {
        accent: "from-pink-500 to-rose-400",
        badgeBg: "bg-pink-100",
        badgeText: "text-pink-700",
        checkColor: "text-pink-500",
        border: "border-pink-200 hover:border-pink-400",
        glow: "hover:shadow-pink-100",
        highlightBorder: "border-pink-400 ring-2 ring-pink-200",
        priceBg: "bg-pink-50",
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WebDesignSection() {
    return (
        <section id="web-design" className="relative bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white section-pad scroll-mt-16 overflow-hidden">

            {/* Background orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-narrow flex flex-col items-center relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white/90 backdrop-blur-sm">
                        <span className="text-base">{webDesign.badge.split(" ")[0]}</span>
                        <span>{webDesign.badge.split(" ").slice(1).join(" ")}</span>
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                        {webDesign.title.split("&").map((part, i, arr) => (
                            <span key={i}>
                                {i > 0 && (
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-300">
                                        &
                                    </span>
                                )}
                                {part}
                            </span>
                        ))}
                    </h2>

                    <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                        {webDesign.subtitle}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {webDesign.plans.map((plan) => {
                        const c = colorMap[plan.color] ?? colorMap.emerald;
                        return (
                            <motion.div
                                key={plan.name}
                                variants={itemVariants}
                                className={`relative flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden hover:shadow-2xl ${plan.highlight
                                    ? c.highlightBorder
                                    : `border-white/10 hover:border-white/25`
                                    } ${c.glow}`}
                            >
                                {/* Highlight top bar */}
                                {plan.highlight && (
                                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${c.accent}`} />
                                )}

                                {/* Popular badge */}
                                {plan.badge && (
                                    <div className="absolute top-4 right-4">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.badgeBg} ${c.badgeText}`}>
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="flex flex-col flex-1 p-6 gap-5">
                                    {/* Emoji + Name */}
                                    <div className="flex flex-col gap-2">
                                        <span className="text-3xl">{plan.emoji}</span>
                                        <div>
                                            <h3 className="text-lg font-bold text-white leading-tight">
                                                {plan.name}
                                            </h3>
                                            <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                                                {plan.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className={`rounded-xl px-4 py-3 ${c.priceBg}/10 border border-white/10`}>
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-xs text-zinc-400 font-medium">เริ่มต้นที่</span>
                                        </div>
                                        <div className="flex items-baseline gap-2 mt-0.5">
                                            <span className={`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${c.accent}`}>
                                                ฿{plan.price}
                                            </span>
                                        </div>
                                        <span className="text-xs text-zinc-500">{plan.priceUnit}</span>
                                    </div>

                                    {/* Features */}
                                    <ul className="flex flex-col gap-2.5 flex-1">
                                        {plan.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                                                <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${c.checkColor}`} />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Pricing note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 text-sm text-zinc-500 text-center"
                >
                    {webDesign.note}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-10"
                >
                    <a
                        href={webDesign.cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.03] transition-all duration-300"
                    >
                        <span>{webDesign.cta.label}</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
