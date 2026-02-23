"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { knowledgeBase } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function KnowledgeBaseSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-zinc-900 text-white section-pad scroll-mt-16">
            <div className="container-narrow flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16 text-center"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Knowledge Base
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                        {knowledgeBase.title}
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        {knowledgeBase.subtitle}
                    </p>
                </motion.div>

                {/* content */}
                <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-10">
                    {/* Tab Selection */}
                    <div className="flex flex-col gap-3 w-full md:w-1/3 shrink-0">
                        {knowledgeBase.sections.map((section, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={cn(
                                    "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border",
                                    activeTab === idx
                                        ? "bg-zinc-800 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                                        : "bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-700"
                                )}
                            >
                                <div className="text-3xl w-8 text-center">{section.emoji}</div>
                                <div className="flex flex-col">
                                    <span
                                        className={cn(
                                            "text-xs font-bold font-mono tracking-wider mb-0.5",
                                            activeTab === idx ? "text-emerald-400" : "text-zinc-500"
                                        )}
                                    >
                                        {section.label}
                                    </span>
                                    <span
                                        className={cn(
                                            "font-medium",
                                            activeTab === idx ? "text-white" : "text-zinc-300"
                                        )}
                                    >
                                        {section.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                        <div className="mt-4 text-center md:text-left text-xs text-zinc-500 font-mono bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50">
                            Limit: {knowledgeBase.limit}
                        </div>
                    </div>

                    {/* Active Tab Content Window */}
                    <div className="flex-1 bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden min-h-[250px] relative shadow-2xl">
                        {/* Mock Window Header */}
                        <div className="h-10 bg-zinc-900 border-b border-zinc-700 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            <div className="ml-4 font-mono text-xs text-zinc-500 select-none">
                                {knowledgeBase.sections[activeTab].label}_DATA.json
                            </div>
                        </div>

                        {/* Mock Window Body */}
                        <div className="p-6 md:p-8 h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-4 h-full"
                                >
                                    <div className="text-4xl mb-2">
                                        {knowledgeBase.sections[activeTab].emoji}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {knowledgeBase.sections[activeTab].title}
                                    </h3>
                                    <p className="text-zinc-300 leading-relaxed text-lg font-medium">
                                        {knowledgeBase.sections[activeTab].desc}
                                    </p>

                                    {/* Mock Data skeleton for visual effect */}
                                    <div className="mt-auto pt-6 flex flex-col gap-3 opacity-30 select-none">
                                        <div className="w-3/4 h-3 bg-zinc-600 rounded-full" />
                                        <div className="w-full h-3 bg-zinc-600 rounded-full" />
                                        <div className="w-5/6 h-3 bg-zinc-600 rounded-full" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
