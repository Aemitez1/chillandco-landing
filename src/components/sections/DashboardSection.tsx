"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { dashboard } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { LayoutDashboard, Users, RefreshCcw, Bot, Settings, MessageSquare, FileText, Headphones, LucideIcon, CheckCircle2 } from "lucide-react";

// Helper map to dynamically render Lucide icons by name
const iconMap: Record<string, LucideIcon> = {
    LayoutDashboard,
    Users,
    RefreshCcw,
    Bot,
    Settings,
    MessageSquare,
    FileText,
    Headphones,
};

export default function DashboardSection() {
    const [activeDevice, setActiveDevice] = useState(0);

    return (
        <section id="dashboard" className="bg-white section-pad scroll-mt-16">
            <div className="container-narrow flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SectionHeader
                        title={dashboard.title}
                        subtitle={dashboard.subtitle}
                        badge="Dashboard"
                        align="center"
                    />
                </motion.div>

                <div className="w-full flex flex-col lg:flex-row gap-12 items-start">
                    {/* Layout Left: Interactive Screenshot Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full flex flex-col gap-6"
                    >
                        {/* Device Tabs */}
                        <div className="flex gap-2 p-1 bg-zinc-100 rounded-xl self-start">
                            {dashboard.screenshots.map((screen, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveDevice(idx)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeDevice === idx
                                            ? "bg-white text-zinc-900 shadow-sm"
                                            : "text-zinc-500 hover:text-zinc-700"
                                        }`}
                                >
                                    {screen.device}
                                </button>
                            ))}
                        </div>

                        {/* Carousel Viewer */}
                        <div className="relative w-full aspect-video bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDevice}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 w-full h-full flex items-center justify-center p-2 md:p-4"
                                >
                                    <div className={`relative w-full h-full ${activeDevice === 2 ? 'max-w-[320px] mx-auto' : ''}`}>
                                        <Image
                                            src={dashboard.screenshots[activeDevice].src}
                                            alt={dashboard.screenshots[activeDevice].alt}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Layout Right: Features List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/3 flex flex-col gap-6"
                    >
                        <h3 className="text-xl font-bold text-zinc-900">
                            ควบคุมทุกอย่างได้เอง
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {dashboard.features.map((feature, idx) => {
                                const Icon = iconMap[feature.icon] || CheckCircle2;
                                return (
                                    <li key={idx} className="flex gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100 transition-colors hover:border-emerald-200 hover:bg-emerald-50/50">
                                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-lg border border-zinc-200 text-emerald-600 shadow-sm">
                                            <Icon size={20} />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-zinc-900">{feature.title}</span>
                                            <span className="text-sm text-zinc-600">{feature.desc}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
