import Link from "next/link";
import { footer, brand } from "@/data/content";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-400 py-10 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-bold text-white text-sm">
                        Chill<span className="text-pink-400">&</span>Co Works
                    </span>
                    <p className="text-xs text-zinc-500 text-center md:text-left">
                        {footer.tagline}
                    </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                    {footer.links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-xs text-zinc-600 text-center md:text-right">
                    {footer.copyright}
                </p>
            </div>
        </footer>
    );
}
