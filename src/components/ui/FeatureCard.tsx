import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
    icon: string;
    iconColor: string;
    iconBg: string;
    title: string;
    desc: string;
    highlight?: boolean;
}

export default function FeatureCard({
    icon,
    iconColor,
    iconBg,
    title,
    desc,
    highlight = false,
}: FeatureCardProps) {
    // Dynamic Lucide icon lookup
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[icon];

    return (
        <div
            className={cn(
                "p-6 rounded-2xl transition-all duration-300 border h-full flex flex-col items-start gap-4",
                highlight
                    ? "bg-emerald-50 border-emerald-200/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                    : "bg-white border-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-200"
            )}
        >
            <div
                className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0",
                    iconBg
                )}
            >
                {IconComponent ? (
                    <IconComponent className={cn("w-6 h-6", iconColor)} />
                ) : null}
            </div>
            <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 leading-tight">
                    {title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
