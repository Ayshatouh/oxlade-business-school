import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { fetchAllBlogs } from '@/lib/blogContent';

export async function BlogPageContent() {
  const posts = await fetchAllBlogs();
  const featuredPost = posts.find(post => post.featured) || posts[0];
  const otherPosts = posts.filter(post => post.id !== featuredPost?.id);

  if (!featuredPost) return <div className="p-8 text-center text-gray-500">No content available at the moment.</div>;

  return (
    <div className="w-full">
      {/* Blog Header */}
      <div className="mb-16 border-b border-gray-100 pb-10">
        <div className="flex items-center gap-2 text-[#002d80] text-sm font-bold uppercase tracking-widest mb-4">
          <span>From Oxlade Business School</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#131030] tracking-tight mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
          News & Insights
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Deep dives into corporate training trends, venue updates, and real-world case notes from our instructional design team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Main Content (Featured + Recent) */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Featured Post */}
          <article className="group cursor-pointer block">
            <Link href={`/info/blog/${featuredPost.id}`}>
              <div className="relative w-full h-[360px] md:h-[480px] rounded-2xl overflow-hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded text-[11px] font-black uppercase tracking-widest text-[#002d80]">
                  {featuredPost.category}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-semibold text-gray-500">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#facc15]" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#facc15]" /> {featuredPost.readTime} reading time</span>
                </div>
                <h2 className="text-3xl font-black text-[#131030] group-hover:text-[#002d80] transition-colors leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-[16px] leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[#002d80] font-bold text-sm uppercase tracking-wider group-hover:text-[#facc15] transition-colors">
                  Read story <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </article>

          {/* Divider */}
          <div className="h-px w-full bg-gray-100" />

          {/* Other Posts List */}
          <div className="space-y-12">
            {otherPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <Link href={`/info/blog/${post.id}`} className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2 relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-3 space-y-3">
                    <div className="text-[11px] font-black uppercase tracking-widest text-[#002d80] mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-black text-[#131030] group-hover:text-[#002d80] transition-colors leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} read</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#002d80] font-bold text-[13px] uppercase tracking-wider">
                        Read <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-zinc-50 border border-zinc-100 p-8 rounded-3xl">
            <h4 className="font-black text-[#131030] mb-6 text-sm uppercase tracking-widest border-b border-zinc-200 pb-3">Archive</h4>
            <div className="space-y-4">
              {['April 2026', 'March 2026', 'February 2026'].map((month) => (
                <Link key={month} href="#" className="flex items-center justify-between group">
                  <span className="text-[14px] font-bold text-gray-500 group-hover:text-[#002d80] transition-colors">{month}</span>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-[#facc15] transition-colors group-hover:translate-x-1" />
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-black text-[#131030] mb-6 text-sm uppercase tracking-widest border-b border-zinc-200 pb-3">Topic Filter</h4>
              <div className="flex flex-wrap gap-2">
                {['Programmes', 'Operations', 'Case note', 'Faculty', 'Alumni'].map((topic) => (
                  <Link key={topic} href="#" className="px-3 py-1.5 bg-white border border-gray-200 text-gray-500 text-[12px] font-bold rounded-lg hover:border-[#002d80] hover:text-[#002d80] transition-colors">
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
