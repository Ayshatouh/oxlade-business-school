"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Calendar, MapPin, Clock, Award, Users, BookOpen, CheckCircle2, FileText, Mail, Phone, ArrowRight, ChevronRight, Download, ChevronDown, Minus, Plus } from 'lucide-react';
import React, { use, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getCourseById } from "@/data/courses";
import { COURSE_CATEGORY_GROUPS, getCategoryPath } from "@/data/courseCategories";
import { notFound } from "next/navigation";




export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const courseData = getCourseById(id);

  if (!courseData) {
    notFound();
  }

  const [openTopics, setOpenTopics] = useState<number[]>([0]); // Opens first topic by default


  const toggleTopic = (index: number) => {
    setOpenTopics(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#facc15] selection:text-[#002d80]">
      <Header />
      
      {/* Course Hero */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-20 bg-[#002d80] text-white relative overflow-hidden">
        <div className="absolute inset-0"
             style={{
               background: "linear-gradient(110deg, rgba(0,45,128,0.95) 0%, rgba(0,45,128,0.85) 35%, rgba(0,45,128,0.7) 65%, rgba(0,45,128,0.4) 100%)"
             }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <nav className="flex items-center gap-2 text-white/50 mb-4 font-bold uppercase tracking-widest text-[10px]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link href="#categories" className="hover:text-white transition-colors">Courses</Link>
              <ChevronRight size={10} />
              <span className="text-[#facc15] font-normal">{courseData.title}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="bg-[#facc15] text-[#002d80] px-4 py-1 text-[11px] font-black uppercase tracking-widest leading-none">
                {courseData.category}
              </span>
              <div className="flex items-center gap-1 text-[#facc15]">
                {[...Array(5)].map((_, i) => <Award key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-black leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
              {courseData.title}
            </h1>
            
            <div className="flex flex-wrap gap-8 mt-4 text-gray-300">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={18} className="text-[#facc15]" />
                <span className="font-semibold text-white">5 Days Duration</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award size={18} className="text-[#facc15]" />
                <span className="font-semibold text-white">CPD Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users size={18} className="text-[#facc15]" />
                <span className="font-semibold text-white">Corporate Group Option</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview */}
            <div id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#002d80] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Description</h2>
              <p className="text-gray-600 leading-relaxed font-normal text-[15px]">
                {courseData.description}
              </p>
            </div>

            {/* Who Should Attend */}
            <div id="attendees" className="bg-zinc-50 p-8 border-l-4 border-[#002d80] rounded-r-2xl border border-zinc-100">
              <h2 className="text-2xl font-bold text-[#002d80] mb-4">Who Should Attend</h2>
              <p className="text-zinc-500 mb-6 font-normal leading-relaxed">{courseData.whoShouldAttend}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courseData.pastDelegates.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-600 text-[14px]">
                    <CheckCircle2 size={16} className="text-[#002d80]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-2xl font-bold text-[#002d80] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Key Learning Outcomes</h2>
              <div className="space-y-4">
                {courseData.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex gap-4 items-start py-2 transition-colors group px-4 hover:bg-zinc-50 rounded-xl border border-transparent hover:border-zinc-100">
                    <div className="w-6 h-6 rounded-full bg-[#facc15]/20 flex items-center justify-center text-[#002d80] flex-shrink-0 font-bold font-normal">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-gray-600 leading-normal font-normal text-[15px] mt-0.5">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics Accordion */}
            <div id="topics" className="scroll-mt-32">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#002d80]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Course Topics</h2>
                <div className="h-0.5 flex-1 mx-8 bg-zinc-100 hidden md:block"></div>
                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">{courseData.topics.length} Sections</span>
              </div>
              
              <div className="space-y-4">
                {courseData.topics.map((topic, idx) => {
                  const isOpen = openTopics.includes(idx);
                  return (
                    <div 
                      key={topic.title} 
                      className={`border transition-all duration-300 rounded-2xl overflow-hidden ${isOpen ? 'border-[#002d80] shadow-lg shadow-[#002d80]/5 bg-white' : 'border-gray-100 bg-white'}`}
                    >
                      <button 
                        onClick={() => toggleTopic(idx)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm transition-colors ${isOpen ? 'bg-[#002d80] text-[#facc15]' : 'bg-zinc-100 text-[#002d80]'}`}>
                            {idx + 1}
                          </span>
                          <h3 className={`text-lg font-black transition-colors ${isOpen ? 'text-[#002d80]' : 'text-gray-800'}`}>{topic.title}</h3>
                        </div>
                        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          {isOpen ? <Minus size={20} className="text-[#002d80]" /> : <Plus size={20} className="text-zinc-400" />}
                        </div>
                      </button>
                      
                      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 pb-8 pt-2 pl-[72px]">
                          <ul className="space-y-4">
                            {topic.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-gray-500 font-normal text-[15px]">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#facc15] shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule Section */}
            <div id="schedule" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#002d80] mb-8 flex items-center gap-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                Course Schedule
              </h2>
              {/* Schedule: Cards on Mobile, Table on Desktop */}
              <div className="lg:hidden space-y-4">
                {courseData.schedule.map((slot, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-[#002d80] font-bold">
                        <MapPin size={16} className="text-[#facc15]" />
                        {slot.venue}
                      </div>
                      <span className="text-xl font-black text-[#002d80]">{slot.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Date</span>
                        <div className="flex items-center gap-2 text-zinc-600 text-[13px]">
                          <Calendar size={14} className="text-[#facc15]" />
                          {slot.date}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Duration</span>
                        <div className="flex items-center gap-2 text-zinc-600 text-[13px]">
                          <Clock size={14} className="text-[#facc15]" />
                          {slot.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block overflow-hidden border border-gray-100 rounded-2xl shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-100">
                      <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-wider text-center">Date</th>
                      <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-wider">Venue</th>
                      <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-wider text-center">Duration</th>
                      <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-wider text-right">Investment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-[14px]">
                    {courseData.schedule.map((slot, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-6 py-5 text-gray-400 font-normal text-center">{slot.date}</td>
                        <td className="px-6 py-5 text-[#002d80] font-normal">{slot.venue}</td>
                        <td className="px-6 py-5 text-gray-400 font-normal text-center">{slot.duration}</td>
                        <td className="px-6 py-5 font-normal text-gray-900 text-right">{slot.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              
              {/* Action Card */}
              <div className="bg-[#002d80] text-white p-8 rounded-3xl shadow-2xl lg:-mt-32 relative z-20">
                <div className="mb-8">
                  <p className="text-[#facc15] text-[10px] uppercase font-black tracking-widest mb-1">Starting From</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">{courseData.schedule[0].price}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/enquiry" className="w-full bg-[#facc15] text-[#002d80] py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-[#facc15]/10 flex items-center justify-center">
                    Register Online
                  </Link>
                  <Link href="/enquiry" className="w-full bg-white/10 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center">
                    Enquire Now
                  </Link>
                  <button className="w-full flex items-center justify-center gap-2 text-white/50 py-4 font-black uppercase tracking-[0.2em] text-[9px] hover:text-[#facc15] transition-colors group">
                    <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                    Course Syllabus PDF
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Admissions Office</p>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-sm font-bold hover:text-[#facc15] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Phone size={14} /></div>
                    {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm font-bold hover:text-[#facc15] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Mail size={14} /></div>
                    {siteConfig.email}
                  </a>

                </div>
              </div>

              {/* All Categories */}
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                <h4 className="font-black text-[#002d80] mb-6 text-[10px] uppercase tracking-[0.2em] border-b border-zinc-200 pb-3">Department Directory</h4>
                <div className="space-y-3">
                  {COURSE_CATEGORY_GROUPS.map((cat) => (
                    <Link key={cat.name} href={getCategoryPath(cat.name)} className="flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-[#002d80] transition-colors group">
                      <ChevronRight size={14} className="text-[#facc15] group-hover:translate-x-1 transition-transform" />
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
