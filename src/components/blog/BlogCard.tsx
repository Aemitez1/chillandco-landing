import Link from "next/link";
import Image from "next/image";
import { PostMeta, formatDate } from "@/lib/blog";
import { Tag, Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
    post: PostMeta;
    readMoreString: string;
}

export default function BlogCard({ post, readMoreString }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-200 overflow-hidden"
        >
            {/* Cover image */}
            <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-pink-50">
                {post.coverImage ? (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl select-none">📝</div>
                )}
            </div>

            <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full"
                            >
                                <Tag className="w-2.5 h-2.5" />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h2 className="font-bold text-zinc-900 text-base leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 flex-1">
                    {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-50">
                    <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 group-hover:gap-2 transition-all">
                        {readMoreString}
                        <ArrowRight className="w-3 h-3" />
                    </span>
                </div>
            </div>
        </Link>
    );
}
