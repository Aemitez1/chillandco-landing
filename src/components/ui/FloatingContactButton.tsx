"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BrandContent } from "@/data/content.types";

export default function FloatingContactButton({ brand, ariaLabel }: { brand: BrandContent; ariaLabel: string }) {
    return (
        <motion.a
            href={brand.lineAddFriendUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-14 h-14 bg-[#00B900] text-white rounded-full shadow-[0_4px_14px_rgba(0,185,0,0.5)] hover:shadow-[0_6px_20px_rgba(0,185,0,0.6)] focus:outline-none focus:ring-4 focus:ring-[#00B900]/50 transition-shadow duration-300"
            aria-label={ariaLabel}
        >
            <MessageCircle className="w-7 h-7" />

            {/* Absolute ping animation wrapper */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
        </motion.a>
    );
}
