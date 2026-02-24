"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: string;
}

export default function AnimatedCounter({ value }: AnimatedCounterProps) {
    // Regex to extract prefix, the number, and suffix
    const match = value.match(/^(\D*)(\d+)(.*)$/);

    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 40,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView && match) {
            const targetNumber = parseInt(match[2], 10);
            motionValue.set(targetNumber);
        }
    }, [isInView, match, motionValue]);

    useEffect(() => {
        if (!match) return;
        const prefix = match[1];
        const suffix = match[3];

        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
            }
        });
    }, [springValue, match]);

    if (!match) {
        return <span>{value}</span>;
    }

    const prefix = match[1];
    const suffix = match[3];

    return <span ref={ref}>{prefix}0{suffix}</span>;
}
