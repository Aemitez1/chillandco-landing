"use client";

import { motion } from "framer-motion";
import { pricing } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingCard from "@/components/ui/PricingCard";

export default function PricingSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="pricing" className="bg-zinc-50 section-pad scroll-mt-16">
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
                        title={pricing.title}
                        subtitle={pricing.subtitle}
                        badge="Pricing"
                        align="center"
                    />
                </motion.div>

                {/* Pricing Cards Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative"
                >
                    {pricing.plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={itemVariants}
                            className="flex-1"
                        >
                            <PricingCard
                                name={plan.name}
                                emoji={plan.emoji}
                                price={plan.price}
                                priceLabel={plan.priceLabel}
                                limit={plan.limit}
                                targetDesc={plan.targetDesc}
                                allFeatures={pricing.allFeatures}
                                includedFeatures={plan.includedFeatures}
                                cta={plan.cta}
                                highlight={plan.highlight}
                                badge={plan.badge}
                                currency={pricing.currency}
                                billingNote={pricing.billingNote}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
