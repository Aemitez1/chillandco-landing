import { cn } from "@/lib/utils";

interface StepCardProps {
    step: string;
    emoji: string;
    title: string;
    desc: string;
    color: string;
    note?: string;
    isLast?: boolean;
}

export default function StepCard({
    step,
    emoji,
    title,
    desc,
    color,
    note,
    isLast = false,
}: StepCardProps) {
    // Tailwind dynamic classes workaround
    const colorMap: Record<string, string> = {
        blue: "bg-blue-100 text-blue-600 border-blue-200",
        indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
        violet: "bg-violet-100 text-violet-600 border-violet-200",
        emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
        amber: "bg-amber-100 text-amber-600 border-amber-200",
    };

    const defaultColorClass = "bg-zinc-100 text-zinc-600 border-zinc-200";

    return (
        <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left gap-4 group">
            {/* Icon Circle */}
            <div
                className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border-2 shadow-sm shrink-0 z-10 transition-transform group-hover:scale-110",
                    colorMap[color] || defaultColorClass
                )}
            >
                {emoji}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold leading-none">
                        {step}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-[280px]">
                    {desc}
                </p>
                {note && (
                    <span className="inline-block mt-1 text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-500 font-medium">
                        {note}
                    </span>
                )}
            </div>

            {/* Connecting Line (Desktop) */}
            {!isLast && (
                <div className="hidden sm:block absolute top-8 left-16 w-full h-[2px] bg-zinc-100 -z-0">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            )}
        </div>
    );
}
