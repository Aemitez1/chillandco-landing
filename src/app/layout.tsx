import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { brand } from "@/data/content";
import FloatingContactButton from "@/components/ui/FloatingContactButton";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
    subsets: ["thai"],
    variable: "--font-noto-sans-thai",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Chill&Co Works — AI Sales Assistant สำหรับ LINE OA",
    description:
        "ระบบ AI ตอบลูกค้า LINE OA อัตโนมัติ 24/7 ไม่ต้องเขียนโค้ด พร้อม Dashboard จัดการ Real-time",
    metadataBase: new URL(brand.url),
    openGraph: {
        title: "Chill&Co Works — AI Sales Assistant สำหรับ LINE OA",
        description:
            "ระบบ AI ตอบลูกค้า LINE OA อัตโนมัติ 24/7 ไม่ต้องเขียนโค้ด พร้อม Dashboard จัดการ Real-time",
        images: ["/og-image.jpg"],
        url: brand.url,
        siteName: "Chill&Co Works",
        locale: "th_TH",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chill&Co Works — AI Sales Assistant สำหรับ LINE OA",
        description: "ระบบ AI ตอบลูกค้า LINE OA อัตโนมัติ 24/7 ไม่ต้องเขียนโค้ด",
        images: ["/og-image.jpg"],
    },
    keywords: [
        "LINE OA",
        "AI Chatbot",
        "SaaS",
        "LINE Bot",
        "ระบบตอบแชทอัตโนมัติ",
        "AI ตอบแชท",
        "LINE OA AI",
        "Chill&Co Works",
    ],
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const softwareAppSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": brand.name,
        "description": brand.description,
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "url": brand.url,
        "offers": {
            "@type": "Offer",
            "price": "490",
            "priceCurrency": "THB"
        }
    };

    return (
        <html lang="th" className={`${inter.variable} ${notoSansThai.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
                />
            </head>
            <body>
                {children}
                <FloatingContactButton />
            </body>
        </html>
    );
}
