import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const dict = await getDictionary(params.lang);
    return {
        title: dict.seo.blogTitle,
        description: dict.seo.blogDesc,
        openGraph: {
            title: dict.seo.blogTitle,
            description: dict.seo.blogDesc,
            type: "website",
        },
    };
}

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/data/dictionaries";

export default async function BlogPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const posts = getAllPosts();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar nav={dict.nav} lang={params.lang} brand={dict.brand} />

            <main className="flex-1 pt-24 pb-20">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    {/* Header */}
                    <div className="mb-4">
                        <Link
                            href={`/${params.lang}`}
                            className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            {dict.blog.backHome}
                        </Link>
                    </div>

                    <div className="mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
                            {dict.blog.badge}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                            {dict.blog.header}
                        </h1>
                        <p className="text-zinc-500 text-base max-w-xl">
                            {dict.blog.desc}
                        </p>
                    </div>

                    {/* Grid */}
                    {posts.length === 0 ? (
                        <p className="text-zinc-400 text-center py-20">{dict.blog.empty}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} readMoreString={dict.blog.readMore} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer footer={dict.footer} nav={dict.nav} brand={dict.brand} />
        </div>
    );
}
