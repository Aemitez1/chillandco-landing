"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { NavContent, BrandContent } from "@/data/content.types";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";

export default function Navbar({ nav, lang, brand }: { nav: NavContent; lang: Locale; brand: BrandContent }) {
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
                            sizes="32px"
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold text-zinc-900 text-sm md:text-base">
                        Chill<span className="text-pink-400">&</span>Co Works
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-600 font-medium">
                    {nav.links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={`/${lang}${link.href.startsWith('/') ? link.href : '/' + link.href}`}
                                className="hover:text-zinc-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Language Switcher & CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href={lang === 'th' ? '/en' : '/th'}
                        className="flex items-center justify-center p-2 text-zinc-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-full transition-all"
                        title={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
                    >
                        <Globe className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase ml-1">{lang === 'th' ? 'EN' : 'TH'}</span>
                    </Link>

                    <a
                        href={nav.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 glow-emerald"
                    >
                        <span className="text-base">💚</span>
                        {nav.cta.label}
                    </a>
                </div>

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
                            href={`/${lang}${link.href.startsWith('/') ? link.href : '/' + link.href}`}
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-700 font-medium py-2 px-3 rounded-lg hover:bg-zinc-50 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* Language Switcher Mobile */}
                    <div className="flex items-center gap-4 py-2 px-3 border-t border-zinc-100 mt-2 pt-4">
                        <Link href={`/th`} onClick={() => setIsOpen(false)} className={cn("flex items-center gap-2 font-medium transition-colors", lang === 'th' ? 'text-emerald-500' : 'text-zinc-500 hover:text-zinc-900')}>
                            <span className="text-lg leading-none">🇹🇭</span> ไทย
                        </Link>
                        <span className="text-zinc-300">|</span>
                        <Link href={`/en`} onClick={() => setIsOpen(false)} className={cn("flex items-center gap-2 font-medium transition-colors", lang === 'en' ? 'text-emerald-500' : 'text-zinc-500 hover:text-zinc-900')}>
                            <span className="text-lg leading-none">🇺🇸</span> Eng
                        </Link>
                    </div>
                    
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
