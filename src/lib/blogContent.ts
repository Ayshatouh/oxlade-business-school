export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  author: string;
}

import BLOGS_DATA from '@/data/blogs.json';

const DEFAULT_BLOGS_PATH = "/src/data/blogs.json";

function normalizeBaseUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

function getContentBaseUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;
  if (!raw || raw.trim().length === 0) return null;
  return normalizeBaseUrl(raw.trim());
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store", next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} (${res.status})`);
  }
  return (await res.json()) as T;
}

export async function fetchAllBlogs(): Promise<BlogPost[]> {
  const baseUrl = getContentBaseUrl();
  if (baseUrl && baseUrl.startsWith("http")) { // Ensure it's not a relative path if used on client
    try {
      return await fetchJson<BlogPost[]>(`${baseUrl}${DEFAULT_BLOGS_PATH}`);
    } catch {
      console.warn("API fetch failed for blogs, falling back to local static data");
    }
  }
  return BLOGS_DATA as BlogPost[];
}

export async function fetchBlogById(id: string): Promise<BlogPost | null> {
  const allBlogs = await fetchAllBlogs();
  return allBlogs.find(blog => blog.id === id) || null;
}
