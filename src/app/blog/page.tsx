import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "บทความ AI LINE OA | Chill&Co Works",
    description:
        "บทความและคู่มือสำหรับเจ้าของร้านที่ต้องการใช้ AI ตอบ LINE OA อัตโนมัติ — เคล็ดลับ วิธีตั้งค่า และเปรียบเทียบตัวเลือก",
    openGraph: {
        title: "บทความ AI LINE OA | Chill&Co Works",
        description:
            "บทความและคู่มือสำหรับเจ้าของร้านที่ต้องการใช้ AI ตอบ LINE OA อัตโนมัติ",
        type: "website",
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 pt-24 pb-20">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    {/* Header */}
                    <div className="mb-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            กลับหน้าหลัก
                        </Link>
                    </div>

                    <div className="mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
                            บทความ
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                            คู่มือและเคล็ดลับ LINE OA
                        </h1>
                        <p className="text-zinc-500 text-base max-w-xl">
                            บทความสำหรับเจ้าของร้านที่ต้องการให้ AI ช่วยตอบลูกค้าบน LINE ได้อย่างมีประสิทธิภาพ
                        </p>
                    </div>

                    {/* Grid */}
                    {posts.length === 0 ? (
                        <p className="text-zinc-400 text-center py-20">ยังไม่มีบทความ</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
