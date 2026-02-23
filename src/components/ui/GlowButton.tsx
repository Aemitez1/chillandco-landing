import { cn } from "@/lib/utils";

interface GlowButtonProps {
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    external?: boolean;
    emoji?: string;
}

export default function GlowButton({
    href,
    label,
    variant = "primary",
    size = "md",
    className,
    external = false,
    emoji,
}: GlowButtonProps) {
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm md:text-base",
        lg: "px-8 py-4 text-base md:text-lg",
    };

    const variants = {
        primary: "bg-emerald-500 hover:bg-emerald-600 text-white glow-emerald",
        secondary: "bg-zinc-900 hover:bg-zinc-800 text-white",
        outline:
            "border-2 border-zinc-200 hover:border-emerald-500 text-zinc-700 hover:text-emerald-600 bg-transparent",
    };

    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
                sizes[size],
                variants[variant],
                className
            )}
        >
            {emoji && <span className="text-lg leading-none">{emoji}</span>}
            {label}
        </a>
    );
}
