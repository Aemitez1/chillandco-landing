import { cn } from "@/lib/utils";
import GlowButton from "@/components/ui/GlowButton";
import { CheckCircle2, XCircle } from "lucide-react";

interface FeatureItem {
    key: string;
    label: string;
    isNew: boolean;
}

interface PricingCardProps {
    name: string;
    emoji: string;
    price: number | string | null;
    priceLabel: string;
    limit: string;
    targetDesc: string;
    allFeatures: FeatureItem[];
    includedFeatures: string[];
    cta: { label: string; url: string };
    highlight: boolean;
    badge?: string;
    currency: string;
    billingNote: string;
    cardConfigs: { month: string; included: string; isNew: string };
}

export default function PricingCard({
    name,
    emoji,
    price,
    priceLabel,
    limit,
    targetDesc,
    allFeatures,
    includedFeatures,
    cta,
    highlight,
    badge,
    currency,
    billingNote,
    cardConfigs,
}: PricingCardProps) {
    const includedSet = new Set(includedFeatures);

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
            <div className="flex flex-col gap-1 mb-6">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    <span>{emoji}</span> {name}
                </h3>
                <p className={cn("text-sm font-semibold", highlight ? "text-emerald-600" : "text-zinc-500")}>
                    {limit}
                </p>
                <p className="text-xs text-zinc-400">{targetDesc}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
                <div className="flex items-end gap-2 text-zinc-900">
                    {price !== null ? (
                        <>
                            <span className="text-4xl md:text-5xl font-extrabold">{price}</span>
                            <span className="text-zinc-500 font-medium mb-1">
                                {currency} / {cardConfigs.month}
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

            {/* Feature Comparison List */}
            <div className="mt-auto">
                <p className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-wider">
                    {cardConfigs.included}
                </p>
                <ul className="flex flex-col gap-3">
                    {allFeatures.map((feature) => {
                        const included = includedSet.has(feature.key);
                        return (
                            <li
                                key={feature.key}
                                className={cn(
                                    "items-start gap-3",
                                    included ? "flex" : "hidden sm:flex"
                                )}
                            >
                                {included ? (
                                    <CheckCircle2
                                        className={cn(
                                            "w-5 h-5 shrink-0 mt-0.5",
                                            highlight ? "text-emerald-500" : "text-emerald-400"
                                        )}
                                    />
                                ) : (
                                    <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-zinc-200" />
                                )}
                                <span
                                    className={cn(
                                        "text-sm leading-snug flex items-center gap-1.5 flex-wrap",
                                        included ? "text-zinc-700" : "text-zinc-300"
                                    )}
                                >
                                    {feature.label}
                                    {feature.isNew && included && (
                                        <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-700 rounded-full leading-none uppercase tracking-wide">
                                            {cardConfigs.isNew}
                                        </span>
                                    )}
                                    {feature.isNew && !included && (
                                        <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold bg-zinc-100 text-zinc-400 rounded-full leading-none uppercase tracking-wide">
                                            {cardConfigs.isNew}
                                        </span>
                                    )}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
