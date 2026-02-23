"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { nav, brand } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100"
                    : "bg-transparent"
            )}
        >
            <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                        <Image
                            src={brand.logoPath}
                            alt={brand.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold text-zinc-900 text-sm md:text-base">
                        Chill<span className="text-pink-400">&</span>Co Works
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {nav.links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a
                    href={nav.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 glow-emerald"
                >
                    <span className="text-base">💚</span>
                    {nav.cta.label}
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-zinc-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
                    {nav.links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-700 font-medium py-2 px-3 rounded-lg hover:bg-zinc-50 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={nav.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center justify-center gap-2 bg-emerald-500 text-white font-semibold px-4 py-3 rounded-full"
                    >
                        <span>💚</span>
                        {nav.cta.label}
                    </a>
                </div>
            )}
        </header>
    );
}
