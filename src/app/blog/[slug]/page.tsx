import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Tag, Calendar } from "lucide-react";
import { brand } from "@/data/content";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Chill&Co Works`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            url: `${brand.url}/blog/${slug}`,
            images: post.coverImage ? [post.coverImage] : ["/og-image.jpg"],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 pt-24 pb-20">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    {/* Back */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-8"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        ดูบทความทั้งหมด
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-snug mb-4">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <article
                        className="prose prose-zinc prose-headings:font-bold prose-h2:text-xl prose-h3:text-lg prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-800 prose-li:text-zinc-700 prose-p:text-zinc-700 prose-p:leading-relaxed max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />

                    {/* CTA Banner */}
                    <div className="mt-16 p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 text-center">
                        <p className="text-lg font-bold text-zinc-900 mb-2">
                            พร้อมให้ AI ทำงานแทนคุณแล้วหรือยัง?
                        </p>
                        <p className="text-sm text-zinc-500 mb-5">
                            ทดลองใช้ฟรี 7 วัน ไม่ต้องผูกมัด ยกเลิกได้ทุกเมื่อ
                        </p>
                        <a
                            href={brand.lineAddFriendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md shadow-emerald-200"
                        >
                            <span>💚</span> เพิ่มเพื่อน LINE OA
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
