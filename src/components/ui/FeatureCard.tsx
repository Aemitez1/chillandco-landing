import { cn } from "@/lib/utils";

interface FeatureCardProps {
    emoji: string;
    title: string;
    desc: string;
    highlight?: boolean;
}

export default function FeatureCard({
    emoji,
    title,
    desc,
    highlight = false,
}: FeatureCardProps) {
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
                    "w-12 h-12 flex items-center justify-center rounded-xl text-2xl mb-2 flex-shrink-0",
                    highlight ? "bg-emerald-100/50" : "bg-zinc-50"
                )}
            >
                {emoji}
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
