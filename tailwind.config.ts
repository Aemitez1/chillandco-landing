import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "var(--font-noto-sans-thai)", "sans-serif"],
            },
            colors: {
                brand: {
                    pink: {
                        100: "#fce7f3",
                        200: "#fbcfe8",
                        300: "#f9a8d4",
                        400: "#f472b6",
                    },
                    emerald: {
                        400: "#34d399",
                        500: "#10b981",
                        600: "#059669",
                    },
                },
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "counter": "counter 1.5s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                slideUp: {
                    from: { opacity: "0", transform: "translateY(30px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
