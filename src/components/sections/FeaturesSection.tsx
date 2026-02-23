"use client";

import { motion } from "framer-motion";
import { features } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

export default function FeaturesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="features" className="bg-white section-pad scroll-mt-16">
            <div className="container-narrow flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionHeader
                        title={features.title}
                        subtitle={features.subtitle}
                        badge="Features"
                        align="center"
                    />
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full"
                >
                    {features.items.map((item, idx) => (
                        <motion.li
                            key={idx}
                            variants={itemVariants}
                            className="list-none h-full"
                        >
                            <FeatureCard {...item} />
                        </motion.li>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
