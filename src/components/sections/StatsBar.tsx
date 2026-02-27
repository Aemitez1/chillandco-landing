"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export default function StatsBar() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="bg-zinc-900 text-white py-12 md:py-16">
            <div className="container-narrow px-4 md:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-zinc-800"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            {/* Render prefix + value + suffix as separate spans to avoid Thai combining-char bug */}
                            <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-400 mb-2">
                                {stat.prefix && (
                                    <span className="mr-0.5">{stat.prefix}</span>
                                )}
                                <span>{stat.value}</span>
                                {stat.suffix && (
                                    <span>{stat.suffix}</span>
                                )}
                            </span>
                            <span className="text-sm md:text-base text-zinc-400 font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
