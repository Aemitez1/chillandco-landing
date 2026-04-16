"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PricingContent } from "@/data/content.types";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQItem from "@/components/ui/FAQItem";

export default function FAQSection({ pricing }: { pricing: PricingContent }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleItem = (idx: number) => {
        setOpenIndex((prev) => (prev === idx ? null : idx));
    };

    // Generate JSON-LD for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: pricing.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    };

    return (
        <section id="faq" className="bg-white section-pad scroll-mt-16">
            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container-narrow flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <SectionHeader
                        title={pricing.faqTitle}
                        subtitle={pricing.faqSubtitle}
                        align="center"
                    />
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-3xl flex flex-col gap-4"
                >
                    {pricing.faq.map((item, idx) => (
                        <FAQItem
                            key={idx}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === idx}
                            onToggle={() => toggleItem(idx)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
