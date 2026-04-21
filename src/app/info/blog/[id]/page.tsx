import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { fetchBlogById, fetchAllBlogs } from '@/lib/blogContent';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = await fetchBlogById(resolvedParams.id);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | ${siteConfig.name} Insights`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await fetchAllBlogs();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await fetchBlogById(resolvedParams.id);

  if (!post) {
    notFound();
  }

  // Parse markdown-like content to simple HTML paragraphs based on line breaks
  const paragraphs = post.content.split('\n\n').filter(p => p.trim());

  return (
    <article className="min-h-screen bg-white">
      {/* Blog Hero Segment */}
      <div className="bg-[#f8f9fa] pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/info/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#002d80] hover:text-[#001740] mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to News & Insights
          </Link>
          
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#002d80] mb-6">
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-black text-[#131030] leading-tight mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-6 text-sm font-semibold text-gray-500">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#facc15]" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-[#facc15]" /> {post.readTime} reading time</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-400">Share:</span>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#002d80] hover:border-[#002d80] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#002d80] hover:border-[#002d80] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#002d80] hover:border-[#002d80] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 lg:-mt-16 mb-16">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-12">
          {post.excerpt}
        </p>

        <div className="prose prose-lg prose-blue max-w-none">
          {paragraphs.map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-2xl font-bold text-[#131030] mt-10 mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                  {paragraph.replace('###', '').trim()}
                </h3>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-3xl font-bold text-[#131030] mt-12 mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            }
            return (
              <p key={index} className="text-[#3c4043] text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Written By segment */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#002d80] text-xl text-white font-black flex items-center justify-center">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Written by</p>
            <p className="text-lg font-black text-[#131030]">{post.author}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
