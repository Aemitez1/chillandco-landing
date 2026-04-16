import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/data/dictionaries";
import { i18n, Locale } from "@/i18n-config";
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

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const dict = await getDictionary(params.lang);
    const brand = dict.brand;

    return {
        title: dict.seo.defaultTitle,
        description: dict.seo.defaultDesc,
        metadataBase: new URL(brand.url),
        openGraph: {
            title: dict.seo.defaultTitle,
            description: dict.seo.defaultDesc,
            images: ["/og-image.jpg"],
            url: brand.url,
            siteName: brand.name,
            locale: params.lang === "th" ? "th_TH" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: dict.seo.defaultTitle,
            description: dict.seo.defaultDesc,
            images: ["/og-image.jpg"],
        },
        keywords: dict.seo.keywords,
        robots: {
            index: true,
            follow: true,
        },
    };
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const dict = await getDictionary(params.lang);
    const brand = dict.brand;
    
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
        <html lang={params.lang} className={`${inter.variable} ${notoSansThai.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
                />
            </head>
            <body>
                {children}
                <FloatingContactButton brand={dict.brand} ariaLabel={dict.floatingContact.ariaLabel} />
            </body>
        </html>
    );
}
