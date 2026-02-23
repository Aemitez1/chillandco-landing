import { cn } from "@/lib/utils";
import GlowButton from "@/components/ui/GlowButton";
import { CheckCircle2 } from "lucide-react";

interface PricingCardProps {
    name: string;
    emoji: string;
    price: number | null;
    priceLabel: string;
    limit: string;
    features: string[];
    cta: { label: string; url: string };
    highlight: boolean;
    badge?: string;
    currency: string;
    billingNote: string;
}

export default function PricingCard({
    name,
    emoji,
    price,
    priceLabel,
    limit,
    features,
    cta,
    highlight,
    badge,
    currency,
    billingNote,
}: PricingCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col p-8 rounded-3xl border transition-all duration-300 bg-white h-full",
                highlight
                    ? "border-emerald-500 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] md:scale-[1.03] z-10"
                    : "border-zinc-200 shadow-sm"
            )}
        >
            {/* Badge highlight */}
            {badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold uppercase rounded-full shadow-md tracking-wider">
                    {badge}
                </span>
            )}

            {/* Header */}
            <div className="flex flex-col gap-2 mb-6">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    <span>{emoji}</span> {name}
                </h3>
                <p className="text-zinc-500 font-medium">{limit}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
                <div className="flex items-end gap-2 text-zinc-900">
                    {price !== null ? (
                        <>
                            <span className="text-4xl md:text-5xl font-extrabold">{price}</span>
                            <span className="text-zinc-500 font-medium mb-1">
                                {currency} / เดือน
                            </span>
                        </>
                    ) : (
                        <span className="text-3xl font-extrabold text-emerald-600">
                            {priceLabel}
                        </span>
                    )}
                </div>
                <p className="text-xs text-zinc-400 mt-2">{billingNote}</p>
            </div>

            {/* Button */}
            <div className="mb-8">
                <GlowButton
                    href={cta.url}
                    label={cta.label}
                    variant={highlight ? "primary" : "outline"}
                    size="lg"
                    className="w-full text-base"
                    external
                />
            </div>

            {/* Features List */}
            <div className="mt-auto">
                <p className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-wider">
                    ฟีเจอร์ที่ได้รับ
                </p>
                <ul className="flex flex-col gap-4">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2
                                className={cn(
                                    "w-5 h-5 shrink-0",
                                    highlight ? "text-emerald-500" : "text-zinc-400"
                                )}
                            />
                            <span className="text-zinc-600 text-sm leading-tight">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
