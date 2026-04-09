"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChevronRight, Filter, Search, Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

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

  return (
    <div className="min-h-screen bg-white text-[12px] leading-[1.35]">
      <Header />
      
      {/* Category Hero / Breadcrumbs */}
      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-gray-400 mb-6 font-medium">
            <Link href="/" className="hover:text-[#0b3d91]">Home</Link>
            <ChevronRight size={12} />
            <Link href="#categories" className="hover:text-[#0b3d91]">Categories</Link>
            <ChevronRight size={12} />
            <span className="text-gray-900">{categoryName}</span>
          </nav>
          
          <h1 className="text-3xl font-black text-[#110e26] tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
            {categoryName} Training Courses
          </h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="font-bold text-[#110e26] uppercase tracking-widest text-[10px]">Filter Results</h3>
              <button className="text-gray-400 hover:text-[#0b3d91] flex items-center gap-1 font-bold">
                <Filter size={12} /> Hide filter
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block font-bold text-gray-900 mb-2">Search Course</label>
                <div className="relative">
                  <input type="text" placeholder="e.g. Sales" className="w-full pl-3 pr-10 py-2 border border-gray-200 rounded focus:border-[#0b3d91] outline-none" />
                  <Search size={14} className="absolute right-3 top-2.5 text-gray-400" />
                </div>
              </div>
              
              <div>
                <label className="block font-bold text-gray-900 mb-2">Location</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded focus:border-[#0b3d91] outline-none">
                  <option>All Locations</option>
                  <option>London</option>
                  <option>Dubai</option>
                  <option>Cape Town</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-900 mb-2">Duration</label>
                <div className="space-y-2">
                  {['1 - 3 Days', '5 Days', '2 Weeks'].map(dur => (
                    <label key={dur} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-[#0b3d91] focus:ring-[#0b3d91]" />
                      <span className="text-gray-700 group-hover:text-gray-900">{dur}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Course Table */}
          <div className="lg:col-span-3">
            <div className="overflow-x-auto border border-gray-100 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider">Course title</th>
                    <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider">Venue</th>
                    <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {courses.map((course, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                      <td className="px-6 py-4">
                        <Link href="/courses/fraud-detection" className="font-bold text-gray-900 group-hover:text-[#0b3d91] transition-colors leading-tight block">
                          {course.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-gray-600 font-medium whitespace-nowrap">{course.date}</td>
                      <td className="px-6 py-4 text-gray-600">{course.venue}</td>
                      <td className="px-6 py-4 font-bold text-[#0b3d91] text-right">{course.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-8 flex justify-center items-center gap-2">
              <span className="px-3 py-1 bg-[#110e26] text-white rounded font-bold">1</span>
              <span className="px-3 py-1 hover:bg-gray-100 rounded cursor-pointer font-bold">2</span>
              <span className="px-3 py-1 hover:bg-gray-100 rounded cursor-pointer font-bold flex items-center gap-1">Next <ChevronRight size={12} /></span>
            </div>
          </div>

        </div>

        {/* Marketing / SEO Section */}
        <section className="mt-24 space-y-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-black text-[#110e26] mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
              Master {categoryName} Skills with Professional Training Courses
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed font-medium">
              <p>
                In today’s competitive business landscape, mastering {categoryName.toLowerCase()} is essential for your professional growth. At Oxlade Business School, we deliver expert-led courses designed to enhance your capabilities and drive measurable success.
              </p>
              <p>
                Whether you’re seeking to master innovative marketing strategies or refine your sales techniques, our comprehensive programmes provide you with practical skills you can implement immediately.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#110e26] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Why Choose Oxlade's {categoryName} Courses?</h3>
              <p className="text-gray-700 mb-6 font-medium">Transform your approach to {categoryName.toLowerCase()} with training that delivers real results:</p>
              <ul className="space-y-4">
                {[
                  { title: 'Expert-Led Training', text: 'Learn directly from industry leaders who bring extensive global market experience' },
                  { title: 'Immediate Impact', text: 'Gain practical skills you can apply to your role straight away' },
                  { title: 'Flexible Learning Options', text: 'Choose from in-person or online courses that fit around your schedule' },
                  { title: 'Global Recognition', text: 'Join professionals from over 100 countries who trust Oxlade for their training needs' },
                  { title: 'Proven Results', text: 'Our courses align with international best practices and deliver measurable outcomes' }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#facc15] mt-1.5 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-0.5">{item.title}:</span>
                      <span className="text-gray-600 block leading-normal">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#110e26] text-white p-10 rounded-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
              <h3 className="text-2xl font-black mb-6 relative z-10" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Ready to elevate your career?</h3>
              <p className="text-gray-300 mb-8 relative z-10 leading-relaxed font-medium">
                Our team is ready to help you find the perfect training solution for you or your organisation.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <button className="bg-[#facc15] text-[#110e26] px-8 py-3 rounded font-black uppercase tracking-widest text-[10px] hover:bg-white transition-colors">
                  Contact Us
                </button>
                <button className="bg-white/10 text-white px-8 py-3 rounded font-black uppercase tracking-widest text-[10px] hover:bg-white/20 transition-colors">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
