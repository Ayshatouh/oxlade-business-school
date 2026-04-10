"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChevronRight, Filter, Search, Calendar, MapPin, ArrowRight, DollarSign, Clock } from 'lucide-react';
import Link from 'next/link';
import { use, useState } from 'react';

const courses = [
  { title: 'Account Management & Key Customer Growth', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Omni‑Channel Customer Experience', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Marketing Analytics & ROI', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Sales Negotiation & Closing Mastery', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Social Media Marketing Strategy', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Core Sales Skills', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Advanced Digital Sales Techniques', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Customer-Centric Sales Strategies', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Digital Marketing Essentials', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Digital Marketing Mastery', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Integrated Marketing Communications', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Strategic Sales Leadership', date: '27 Apr - 1 May 2026', venue: 'London', price: '£4,495' },
  { title: 'Account Management & Key Customer Growth', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
  { title: 'Omni‑Channel Customer Experience', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
  { title: 'Marketing Analytics & ROI', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
  { title: 'Sales Negotiation & Closing Mastery', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
  { title: 'Social Media Marketing Strategy', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
  { title: 'Core Sales Skills', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
  { title: 'Advanced Digital Sales Techniques', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
  { title: 'Customer-Centric Sales Strategies', date: '13 - 17 Jul 2026', venue: 'London', price: '£4,495' },
];

export default function CategoryListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const categoryName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Category Hero / Breadcrumbs */}
      <section className="pt-44 pb-12 bg-zinc-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-zinc-400 mb-8 font-bold uppercase tracking-widest text-[10px]">
            <Link href="/" className="hover:text-[#002d80] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="#categories" className="hover:text-[#002d80] transition-colors">Categories</Link>
            <ChevronRight size={10} />
            <span className="text-[#002d80] font-normal">{categoryName}</span>
          </nav>
          
          <h1 className="text-4xl font-black text-[#002d80] tracking-tight leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
            {categoryName}
            <span className="block text-lg font-bold text-zinc-400 mt-2">Professional Training Programmes</span>
          </h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className={`lg:w-[360px] shrink-0 space-y-8 transition-all duration-300 ${showFilters ? 'block' : 'hidden lg:block opacity-50'}`}>
            <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
              <h3 className="font-black text-[#002d80] uppercase tracking-[0.2em] text-[11px]">Refine Selection</h3>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="text-zinc-400 hover:text-[#002d80] flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors"
              >
                <Filter size={14} /> {showFilters ? 'Hide' : 'Show'}
              </button>
            </div>
            
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <label className="block font-black text-[#002d80] uppercase tracking-widest text-[10px] mb-4">Course Search</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Search keywords..." 
                    className="w-full pl-4 pr-12 py-3 bg-white border border-zinc-200 rounded-xl focus:border-[#002d80] focus:ring-4 focus:ring-[#002d80]/5 outline-none transition-all text-[13px] font-medium" 
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#002d80] transition-colors">
                    <Search size={16} />
                  </div>
                </div>
              </div>

              {/* Venue Filter - 2 per line */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#002d80]">
                  <MapPin size={16} className="text-[#facc15]" />
                  <span className="font-black uppercase tracking-widest text-[10px]">Training Venue</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['London', 'Dubai', 'Abuja', 'Singapore', 'Barcelona', 'Online'].map(venue => (
                    <label key={venue} className="flex items-center gap-2 p-3 rounded-xl border border-zinc-100 hover:border-[#002d80]/20 hover:bg-zinc-50 cursor-pointer group transition-all">
                      <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-[#002d80] focus:ring-[#002d80]" />
                      <span className="text-[12px] font-bold text-zinc-600 group-hover:text-[#002d80] transition-colors">{venue}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Month Filter */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#002d80]">
                  <Calendar size={16} className="text-[#facc15]" />
                  <span className="font-black uppercase tracking-widest text-[10px]">Scheduled Month</span>
                </div>
                <select className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:border-[#002d80] outline-none text-[13px] font-bold text-zinc-600">
                  <option>Any Month</option>
                  <option>May 2026</option>
                  <option>June 2026</option>
                  <option>July 2026</option>
                  <option>August 2026</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#002d80]">
                  <DollarSign size={16} className="text-[#facc15]" />
                  <span className="font-black uppercase tracking-widest text-[10px]">Investment Range</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {['Under £2,000', '£2,000 - £4,000', 'Over £4,000'].map(range => (
                    <label key={range} className="flex items-center gap-3 px-4 py-2 cursor-pointer group hover:bg-zinc-50 rounded-lg transition-colors">
                      <input type="radio" name="price" className="w-4 h-4 border-zinc-300 text-[#002d80] focus:ring-[#002d80]" />
                      <span className="text-[13px] font-bold text-zinc-600 group-hover:text-[#002d80] transition-colors">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Course Table */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[11px] font-black uppercase text-zinc-400 tracking-widest">Showing {courses.length} Programmes</p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-zinc-400">Sort by:</span>
                <select className="text-[11px] font-black uppercase tracking-widest text-[#002d80] border-none bg-transparent outline-none cursor-pointer">
                  <option>Nearest Date</option>
                  <option>Price: Low to High</option>
                  <option>Title: A-Z</option>
                </select>
              </div>
            </div>

            <div className="overflow-hidden border border-zinc-100 rounded-2xl shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Course Title</th>
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Scheduled Date</th>
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Location</th>
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-right">Investment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {courses.map((course, idx) => (
                    <tr key={idx} className="hover:bg-[#002d80]/[0.02] transition-colors group cursor-pointer">
                      <td className="px-6 py-5">
                        <Link href="/courses/fraud-detection" className="font-normal text-gray-900 group-hover:text-[#002d80] transition-all leading-tight block text-[14px]">
                          {course.title}
                        </Link>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-zinc-500 font-normal text-[13px]">
                          <Calendar size={14} className="text-[#facc15]" />
                          {course.date}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-zinc-500 font-normal text-[13px]">{course.venue}</td>
                      <td className="px-6 py-5 font-normal text-gray-900 text-right text-[14px]">{course.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center bg-[#002d80] text-white rounded-xl font-black shadow-lg shadow-[#002d80]/20">1</button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 text-[#002d80] rounded-xl font-black transition-colors">2</button>
              <button className="flex items-center gap-2 pl-4 pr-2 py-2 hover:bg-zinc-100 text-[#002d80] rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors">
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Marketing / SEO Section */}
        <section className="mt-24 pt-24 border-t border-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-[#002d80] mb-8 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                Master {categoryName} Skills
              </h2>
              <div className="space-y-6 text-zinc-500 leading-relaxed font-normal text-[15px]">
                <p>
                  In today’s competitive business landscape, mastering {categoryName.toLowerCase()} is essential for your professional growth. At Oxlade Business Training School, we deliver expert-led courses designed to enhance your capabilities and drive measurable success.
                </p>
                <p>
                  Whether you’re seeking to master innovative marketing strategies or refine your sales techniques, our comprehensive programmes provide you with practical skills you can implement immediately.
                </p>
              </div>
            </div>

            <div className="bg-[#002d80] text-white p-12 rounded-[3rem] relative overflow-hidden shadow-2xl flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h3 className="text-2xl font-black mb-6 relative z-10" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Ready to elevate your career?</h3>
              <p className="text-white/60 mb-10 relative z-10 leading-relaxed font-normal text-[15px]">
                Our team is ready to help you find the perfect training solution for you or your organisation.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <Link href="/enquiry" className="bg-[#facc15] text-[#002d80] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
                  Submit Enquiry
                </Link>
                <Link href="/enquiry" className="bg-white/10 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/20 transition-all border border-white/10 text-center">
                  Course Brochure
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
