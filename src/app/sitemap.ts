import { MetadataRoute } from "next";
import { brand } from "@/data/content-th";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${brand.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: brand.url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${brand.url}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...blogUrls,
    ];
}
