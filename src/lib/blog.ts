import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    coverImage?: string;
}

export interface Post extends PostMeta {
    contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(BLOG_DIR, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title as string,
            description: data.description as string,
            date: data.date as string,
            tags: (data.tags as string[]) ?? [],
            coverImage: data.coverImage as string | undefined,
        };
    });

    // Sort by date descending
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const processed = await remark().use(html, { sanitize: false }).process(content);
    const contentHtml = processed.toString();

    return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        coverImage: data.coverImage as string | undefined,
        contentHtml,
    };
}

export function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
