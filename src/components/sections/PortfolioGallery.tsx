"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Tag } from "lucide-react";
import { PortfolioPageContent } from "@/data/content.types";

// Color map สำหรับ category badge
const categoryColorMap: Record<string, {
    bg: string;
    text: string;
    border: string;
    dot: string;
}> = {
    orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", dot: "bg-orange-400" },
    teal: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200", dot: "bg-teal-400" },
    green: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-400" },
    blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-400" },
    purple: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-400" },
    pink: { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200", dot: "bg-pink-400" },
};

const tagColorCycle = [
    "bg-blue-100 text-blue-700",
    "bg-violet-100 text-violet-700",
    "bg-emerald-100 text-emerald-700",
    "bg-orange-100 text-orange-700",
    "bg-pink-100 text-pink-700",
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -16, scale: 0.96, transition: { duration: 0.25 } },
};

export default function PortfolioGallery({
    portfolio,
    lineUrl,
}: {
    portfolio: PortfolioPageContent;
    lineUrl: string;
}) {
    const allTypes = [portfolio.filterAll, ...Array.from(new Set(portfolio.projects.map((p) => p.type)))];
    const [activeFilter, setActiveFilter] = useState(portfolio.filterAll);

    const filtered =
        activeFilter === portfolio.filterAll
            ? portfolio.projects
            : portfolio.projects.filter((p) => p.type === activeFilter);

    return (
        <>
            {/* Filter Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
            >
                {allTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setActiveFilter(type)}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeFilter === type
                            ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white border-transparent shadow-lg shadow-violet-300/40 scale-105"
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-violet-300 hover:text-violet-600"
                            }`}
                    >
                        {type}
                        {type !== portfolio.filterAll && (
                            <span className="ml-1.5 text-xs opacity-70">
                                ({portfolio.projects.filter((p) => p.type === type).length})
                            </span>
                        )}
                    </button>
                ))}
            </motion.div>

            {/* Cards Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
                >
                    {filtered.map((project) => {
                        const c = categoryColorMap[project.categoryColor] ?? categoryColorMap.blue;
                        return (
                            <motion.article
                                key={project.id}
                                variants={cardVariants}
                                className="group relative flex flex-col bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-violet-100/50 hover:-translate-y-1 transition-all duration-400"
                            >
                                {/* Screenshot preview */}
                                <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <a
                                            href={lineUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                                        >
                                            <ExternalLink size={11} />
                                            {portfolio.viewLabel}
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6 gap-4">
                                    {/* Category badge */}
                                    <div className="flex items-center gap-2">
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${c.bg} ${c.text} ${c.border}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-extrabold text-zinc-900 leading-tight group-hover:text-violet-700 transition-colors duration-200">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                                        {project.desc}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={tag}
                                                className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${tagColorCycle[idx % tagColorCycle.length]}`}
                                            >
                                                <Tag size={9} />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </AnimatePresence>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-1 shadow-2xl shadow-violet-300/40"
            >
                <div className="relative rounded-[calc(1.5rem-4px)] bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 px-8 py-14 text-center overflow-hidden">
                    {/* Glow orbs */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center gap-5">
                        <span className="text-4xl">🚀</span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                            {portfolio.ctaTitle}
                        </h2>
                        <p className="text-white/80 text-base max-w-md">
                            {portfolio.ctaDesc}
                        </p>
                        <a
                            href={lineUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-violet-700 font-bold text-base rounded-full shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300"
                        >
                            <span>{portfolio.ctaButton}</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
