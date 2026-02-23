"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import StepCard from "@/components/ui/StepCard";

export default function HowItWorksSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="how-it-works" className="bg-zinc-50 section-pad scroll-mt-16">
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
                        title={howItWorks.title}
                        subtitle={howItWorks.subtitle}
                        badge="Flow"
                        align="center"
                    />
                </motion.div>

                {/* Timeline Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full relative"
                >
                    {/* Mobile connecting line */}
                    <div className="absolute left-8 top-16 bottom-0 w-[2px] bg-zinc-200 block sm:hidden" />

                    <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-4 w-full relative z-10">
                        {howItWorks.steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="relative flex-1"
                            >
                                <StepCard
                                    {...step}
                                    isLast={idx === howItWorks.steps.length - 1}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
