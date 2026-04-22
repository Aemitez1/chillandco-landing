"use client";

import { motion } from "framer-motion";
import { PageAdminContent } from "@/data/content.types";
import { CheckCircle2, ArrowRight, Clock, Calendar, FileText } from "lucide-react";

const colorMap: Record<string, {
    accent: string;
    badgeBg: string;
    badgeText: string;
    checkColor: string;
    border: string;
    glow: string;
    highlightBorder: string;
    priceBg: string;
    cardGlow: string;
}> = {
    blue: {
        accent: "from-blue-500 to-cyan-400",
        badgeBg: "bg-blue-100",
        badgeText: "text-blue-700",
        checkColor: "text-blue-500",
        border: "border-blue-200 hover:border-blue-400",
        glow: "hover:shadow-blue-100",
        highlightBorder: "border-blue-400 ring-2 ring-blue-200",
        priceBg: "bg-blue-50",
        cardGlow: "shadow-blue-100",
    },
    amber: {
        accent: "from-amber-500 to-orange-400",
        badgeBg: "bg-amber-100",
        badgeText: "text-amber-700",
        checkColor: "text-amber-500",
        border: "border-amber-200 hover:border-amber-400",
        glow: "hover:shadow-amber-100",
        highlightBorder: "border-amber-400 ring-2 ring-amber-200",
        priceBg: "bg-amber-50",
        cardGlow: "shadow-amber-200",
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PageAdminSection({ pageAdmin }: { pageAdmin: PageAdminContent }) {
    return (
        <section id="page-admin" className="relative bg-gradient-to-b from-white via-orange-50/30 to-white section-pad scroll-mt-16 overflow-hidden">

            {/* Background orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-400/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-narrow flex flex-col items-center relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55 }}
                    className="flex flex-col items-center text-center gap-4 mb-14"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-sm font-semibold text-amber-700">
                        <span className="text-base">{pageAdmin.badge.split(" ")[0]}</span>
                        <span>{pageAdmin.badge.split(" ").slice(1).join(" ")}</span>
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                        {pageAdmin.title}
                    </h2>

                    <p className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed">
                        {pageAdmin.subtitle}
                    </p>

                    {/* Experience tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-sm text-zinc-600 font-medium">
                        <span className="text-lg">💼</span>
                        {pageAdmin.experience}
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14"
                >
                    {pageAdmin.services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center gap-3 p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 group"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                {service.emoji}
                            </span>
                            <h3 className="text-sm font-bold text-zinc-800 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-xs text-zinc-500 leading-relaxed hidden sm:block">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Info Bar: Work Hours + Platforms */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col sm:flex-row gap-4 mb-14"
                >
                    {/* Work hours card */}
                    <div className="flex-1 flex items-center gap-4 bg-white rounded-2xl border border-zinc-100 shadow-sm px-6 py-5">
                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 flex-shrink-0">
                            <Clock size={20} className="text-blue-500" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                                {pageAdmin.workHoursLabel}
                            </p>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                <span className="flex items-center gap-1.5 text-sm font-semibold text-zinc-800">
                                    <Calendar size={13} className="text-zinc-400" />
                                    {pageAdmin.workDays}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm font-semibold text-zinc-800">
                                    <Clock size={13} className="text-zinc-400" />
                                    {pageAdmin.workHours}
                                </span>
                            </div>
                            <p className="text-xs text-zinc-400 mt-1">{pageAdmin.workFlexNote}</p>
                        </div>
                    </div>

                    {/* Platforms card */}
                    <div className="flex-1 flex items-start gap-4 bg-white rounded-2xl border border-zinc-100 shadow-sm px-6 py-5">
                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-amber-50 flex-shrink-0">
                            <span className="text-xl">🌐</span>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                                {pageAdmin.platformsLabel}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {pageAdmin.platforms.map((platform) => (
                                    <span
                                        key={platform}
                                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200"
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Report card */}
                    <div className="flex items-center gap-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 shadow-sm px-6 py-5 sm:w-auto">
                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white shadow-sm flex-shrink-0">
                            <FileText size={20} className="text-amber-500" />
                        </div>
                        <p className="text-sm font-semibold text-amber-800 whitespace-nowrap">
                            {pageAdmin.reportNote}
                        </p>
                    </div>
                </motion.div>

                {/* Pricing Plans */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
                >
                    {pageAdmin.plans.map((plan) => {
                        const c = colorMap[plan.color] ?? colorMap.blue;
                        return (
                            <motion.div
                                key={plan.name}
                                variants={itemVariants}
                                className={`relative flex flex-col bg-white rounded-2xl border transition-all duration-300 overflow-hidden hover:shadow-xl ${plan.highlight
                                    ? `${c.highlightBorder} shadow-lg ${c.cardGlow}`
                                    : `border-zinc-200 hover:border-zinc-300 hover:shadow-md`
                                    }`}
                            >
                                {/* Highlight top bar */}
                                {plan.highlight && (
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.accent}`} />
                                )}

                                {/* Popular badge */}
                                {plan.badge && (
                                    <div className="absolute top-5 right-5">
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badgeBg} ${c.badgeText}`}>
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="flex flex-col flex-1 p-8 gap-6">
                                    {/* Emoji + Name */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl">{plan.emoji}</span>
                                        <div>
                                            <h3 className="text-xl font-extrabold text-zinc-900">{plan.name}</h3>
                                            <p className="text-sm text-zinc-500">{plan.priceUnit}</p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className={`rounded-2xl px-5 py-4 ${c.priceBg} border border-opacity-50 ${plan.color === 'amber' ? 'border-amber-200' : 'border-blue-200'}`}>
                                        <p className="text-xs text-zinc-500 font-medium mb-1">{pageAdmin.startingAt}</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${c.accent}`}>
                                                ฿{plan.price}
                                            </span>
                                            <span className="text-sm text-zinc-400 ml-1">/ เดือน</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <ul className="flex flex-col gap-3 flex-1">
                                        {plan.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                                                <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${c.checkColor}`} />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-sm text-zinc-400 text-center mb-8"
                >
                    {pageAdmin.note}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href={pageAdmin.cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 text-white font-bold text-base shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 hover:scale-[1.03] transition-all duration-300"
                    >
                        <span>{pageAdmin.cta.label}</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
