import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    badge?: string;
    align?: "left" | "center";
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    badge,
    align = "center",
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-3",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {badge}
                </span>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
