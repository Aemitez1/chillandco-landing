import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQItem({
    question,
    answer,
    isOpen,
    onToggle,
}: FAQItemProps) {
    return (
        <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white hover:border-emerald-500/50 transition-colors shadow-sm">
            <button
                type="button"
                onClick={onToggle}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onToggle();
                    }
                }}
                className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none focus-visible:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-bold text-zinc-900 pr-8">{question}</span>
                <div
                    className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-full shrink-0 transition-all duration-300",
                        isOpen ? "bg-emerald-100 text-emerald-600" : "bg-zinc-100 text-zinc-500"
                    )}
                >
                    <ChevronDown
                        className={cn(
                            "w-5 h-5 transition-transform duration-300 ease-in-out",
                            isOpen ? "rotate-180" : "rotate-0"
                        )}
                    />
                </div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-zinc-600 leading-relaxed text-base">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
