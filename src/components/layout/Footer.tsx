import Link from "next/link";
import { footer, nav, brand } from "@/data/content";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-400 pt-12 pb-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-zinc-800">
                    {/* Brand */}
                    <div className="flex flex-col gap-2 max-w-xs">
                        <span className="font-bold text-white text-base">
                            Chill<span className="text-pink-400">&</span>Co Works
                        </span>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            {footer.tagline}
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">เมนู</p>
                            {nav.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">ติดต่อ</p>
                            {footer.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    {...(link.href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-zinc-600">{footer.copyright}</p>
                    <p className="text-xs text-zinc-600">
                        Powered by{" "}
                        <span className="text-zinc-500">Google Gemini × LINE Messaging API</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
