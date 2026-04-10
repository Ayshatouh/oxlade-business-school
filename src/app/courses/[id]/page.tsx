"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Calendar, MapPin, Clock, Award, Users, BookOpen, CheckCircle2, FileText, Mail, Phone, ArrowRight, ChevronRight, Download } from 'lucide-react';
import React, { use } from "react";

const courseData = {
  id: 'fraud-detection',
  title: 'Fraud Detection and Prevention in Internal Auditing',
  category: 'Banking and Finance',
  description: 'Delegates explore audit frameworks specific to banking and financial institutions. The course covers regulatory expectations, risk-based planning, and internal control evaluation. Participants learn to address compliance, operational, and financial risks effectively. The programme prepares professionals to deliver audits that safeguard institutional stability and credibility.',
  whoShouldAttend: 'Risk, audit, and compliance professionals ensuring organisational integrity and control. Past delegates have included:',
  pastDelegates: [
    'Risk Managers',
    'Internal Auditors',
    'Compliance Officers',
    'Governance Specialists',
    'Finance Directors'
  ],
  outcomes: [
    'Identify fraud risk indicators through analytical and behavioural assessment techniques.',
    'Design audit tests and controls to detect and prevent financial irregularities.',
    'Investigate anomalies using forensic evidence collection and data analytics tools.',
    'Report fraud findings in line with legal and professional requirements.',
    'Promote a culture of ethical conduct and zero tolerance for fraud.'
  ],
  topics: [
    {
      title: 'Identifying Fraud Risks and Red Flags',
      bullets: [
        'Understand common fraud schemes and behavioural indicators.',
        'Assess fraud risk factors across finance, procurement, and HR.',
        'Integrate fraud considerations into the audit plan and fieldwork.',
        'Use analytics and forensic tools to identify suspicious patterns.'
      ]
    },
    {
      title: 'Developing Fraud Prevention Frameworks',
      bullets: [
        'Design fraud prevention controls aligned with governance structures.',
        'Promote awareness and ethical culture across the organisation.',
        'Collaborate with management to enhance anti-fraud measures.',
        'Evaluate whistleblowing systems and incident reporting channels.'
      ]
    },
    {
      title: 'Effective Audit Reporting and Stakeholder Communication',
      bullets: [
        'Draft concise, evidence-based audit reports that clearly convey risk and impact.',
        'Deliver findings and recommendations that drive tangible management actions.',
        'Use visual tools and rating systems to highlight key audit priorities.',
        'Engage confidently with senior stakeholders to discuss outcomes and next steps.'
      ]
    },
    {
      title: 'Evaluating and Strengthening Internal Controls',
      bullets: [
        'Assess control design and operating effectiveness through walkthroughs and testing.',
        'Apply data analytics to identify control gaps and process inefficiencies.',
        'Link control weaknesses to root causes and provide practical recommendations.',
        'Establish follow-up mechanisms to ensure timely remediation and accountability.'
      ]
    },
    {
      title: 'Regulatory and Ethical Compliance in Auditing',
      bullets: [
        'Apply relevant international standards (IIA, ISA) throughout the audit lifecycle.',
        'Maintain objectivity, confidentiality, and independence in all engagements.',
        'Comply with internal quality assurance and external regulatory frameworks.',
        'Align audit processes with organisational ethics and governance expectations.'
      ]
    }
  ],
  schedule: [
    { date: '25 - 29 May 2026', venue: 'London', duration: '5 days', price: '£4,495' },
    { date: '3 - 7 Aug 2026', venue: 'London', duration: '5 days', price: '£4,495' },
    { date: '19 - 23 Oct 2026', venue: 'London', duration: '5 days', price: '£4,495' },
    { date: '7 - 11 Dec 2026', venue: 'London', duration: '5 days', price: '£4,495' },
    { date: '6 - 11 Jul 2026', venue: 'Cape Town', duration: '5 days', price: '£4,495' },
    { date: '3 Aug - 11 Jul 2026', venue: 'Cape Town', duration: '5 days', price: '£4,495' },
    { date: '7 - 12 Sep 2026', venue: 'Riyadh', duration: '5 days', price: '£4,495' },
    { date: '5 - 10 Oct 2026', venue: 'Dubai', duration: '5 days', price: '£4,495' },
    { date: '2 - 7 Nov 2026', venue: 'Singapore', duration: '5 days', price: '£4,495' },
  ]
};

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-white selection:bg-[#facc15] selection:text-[#002d80]">
      <Header />
      
      {/* Course Hero */}
      <section className="pt-40 pb-20 bg-[#002d80] text-white relative overflow-hidden">
        <div className="absolute inset-0"
             style={{
               background: "linear-gradient(110deg, rgba(17,14,38,0.95) 0%, rgba(17,14,38,0.85) 35%, rgba(17,14,38,0.60) 65%, rgba(17,14,38,0.35) 100%)"
             }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="bg-[#facc15] text-[#002d80] px-4 py-1 text-[11px] font-black uppercase tracking-widest leading-none">
                {courseData.category}
              </span>
              <div className="flex items-center gap-1 text-[#facc15]">
                {[...Array(5)].map((_, i) => <Award key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-black leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
              {courseData.title}
            </h1>
            
            <div className="flex flex-wrap gap-8 mt-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-[#facc15]" />
                <span className="font-semibold text-white">5 Days Duration</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-[#facc15]" />
                <span className="font-semibold text-white">Certified Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-[#facc15]" />
                <span className="font-semibold text-white">CPD Accredited</span>
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
            
            {/* Schedule Section */}
            <div id="schedule" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#002d80] mb-8 flex items-center gap-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                <Calendar className="text-[#facc15]" /> Course Schedule
              </h2>
              <div className="overflow-hidden border border-gray-100 rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-6 py-4 text-[13px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-gray-500 uppercase tracking-wider">Venue</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-gray-500 uppercase tracking-wider text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {courseData.schedule.map((slot, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-6 py-4 text-[15px] font-semibold text-gray-900">{slot.date}</td>
                        <td className="px-6 py-4 text-[15px] text-gray-700">{slot.venue}</td>
                        <td className="px-6 py-4 text-[14px] text-gray-600">{slot.duration}</td>
                        <td className="px-6 py-4 text-[15px] font-bold text-[#002d80] text-right">{slot.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">
                Please note: prices shown above are exclusive of VAT (20%).
              </p>
            </div>

            {/* Overview */}
            <div id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#002d80] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Course Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {courseData.description}
              </p>
            </div>

            {/* Who Should Attend */}
            <div id="attendees" className="bg-[#facc15]/5 p-8 border-l-4 border-[#facc15]">
              <h2 className="text-2xl font-bold text-[#002d80] mb-4">Who Should Attend</h2>
              <p className="text-gray-700 mb-6 font-medium">{courseData.whoShouldAttend}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courseData.pastDelegates.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-800 text-[15px]">
                    <CheckCircle2 size={16} className="text-[#002d80]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-2xl font-bold text-[#002d80] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Course Outcomes</h2>
              <div className="space-y-4">
                {courseData.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex gap-4 items-start py-1 transition-colors group">
                    <div className="w-5 h-5 rounded-full bg-[#facc15]/10 flex items-center justify-center text-[#002d80] flex-shrink-0 font-bold border border-[#facc15]/20 group-hover:bg-[#facc15] transition-colors">
                      <CheckCircle2 size={12} className="text-[#002d80]" />
                    </div>
                    <p className="text-gray-700 leading-normal font-medium mt-0.5">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div id="topics" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#002d80] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Course Topics</h2>
              <div className="space-y-10">
                {courseData.topics.map((topic, idx) => (
                  <div key={topic.title} className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#facc15]"></div>
                    <h3 className="text-xl font-bold text-[#002d80] mb-4">{topic.title}</h3>
                    <ul className="space-y-3">
                      {topic.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight size={18} className="text-[#facc15] mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              
              {/* Action Card */}
              <div className="bg-[#002d80] text-white p-8 rounded-2xl shadow-xl lg:-mt-40 relative z-20">
                <div className="mb-8">
                  <p className="text-[#facc15] text-[10px] uppercase font-black tracking-widest mb-1">Starting From</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">{courseData.schedule[0].price}</span>
                    <span className="text-gray-400 text-xs">+ VAT (20%)</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-[#facc15] text-[#002d80] py-3.5 rounded font-black uppercase tracking-widest text-[12px] hover:bg-white transition-all transform active:scale-95">
                    Apply for this course
                  </button>
                  <button className="w-full bg-white/10 text-white py-3.5 rounded font-black uppercase tracking-widest text-[12px] hover:bg-white/20 transition-all">
                    Enquire about this course
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 text-white/70 py-4 font-bold text-sm hover:text-[#facc15] transition-colors group">
                    <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                    Download Course PDF
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Quick Contact</p>
                  <a href="tel:+442071234567" className="flex items-center gap-3 text-sm hover:text-[#facc15] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Phone size={14} /></div>
                    +44 (0)20 7123 4567
                  </a>
                  <a href="mailto:info@oxlade.com" className="flex items-center gap-3 text-sm hover:text-[#facc15] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Mail size={14} /></div>
                    info@oxlade.com
                  </a>
                </div>
              </div>

              {/* All Categories */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-[#002d80] mb-5 pb-2 border-b border-gray-200 text-sm uppercase tracking-wider">All Categories</h4>
                <div className="space-y-3">
                  {[
                    'New and Trending',
                    'Business Management',
                    'Leadership',
                    'Operations Management',
                    'Banking and Finance',
                    'Specialist Sectors',
                    'Human Resources Management',
                    'Law'
                  ].map((cat) => (
                    <a key={cat} href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#002d80] transition-colors group">
                      <ChevronRight size={14} className="text-[#facc15]" />
                      <span>{cat}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Other Courses */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#002d80] mb-5 text-sm uppercase tracking-wider">Other Courses</h4>
                <div className="space-y-6">
                  {[
                    { title: 'Mini MBA in Business Management', price: '£3,800' },
                    { title: 'Data Analytics for Decision Makers', price: '£1,950' }
                  ].map((course) => (
                    <div key={course.title} className="group cursor-pointer">
                      <h5 className="text-[13px] font-bold text-gray-900 group-hover:text-[#002d80] transition-colors leading-tight mb-1">
                        {course.title}
                      </h5>
                      <p className="text-[#facc15] font-black text-xs">{course.price}</p>
                    </div>
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
