"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building, Book } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getAllCourseInterestOptions } from "@/data/courseCategories";


export default function EnquiryPage() {
  const courseInterestOptions = getAllCourseInterestOptions();
  const w3FormsAccessKey = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 md:pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column: Content */}
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-[#facc15]/20 text-[#002d80] rounded-full text-[11px] font-black uppercase tracking-widest mb-6">
                Direct Inquiry
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#002d80] mb-8 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                Ready to elevate <br /> your career?
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-12 font-medium max-w-xl">
                Our team is ready to help you find the perfect training solution for you or your organisation. 
                Whether you have a specific course in mind or need guidance on team development, we&apos;re here to assist.
              </p>

              <div className="grid gap-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100">
                    <Mail className="text-[#002d80]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#002d80] uppercase tracking-widest text-[11px] mb-1">Email Us</h4>
                    <p className="text-gray-900 font-bold">{siteConfig.email}</p>

                    <p className="text-gray-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100">
                    <Phone className="text-[#002d80]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#002d80] uppercase tracking-widest text-[11px] mb-1">Call Us</h4>
                    <p className="text-gray-900 font-bold">{siteConfig.phone}</p>

                    <p className="text-gray-400 text-sm">Mon - Fri, 9am - 6pm BST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-2xl p-6 md:p-12 border border-zinc-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#facc15] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <form
                  className="space-y-6 relative z-10"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                >
                  <input type="hidden" name="access_key" value={w3FormsAccessKey} />
                  <input type="hidden" name="subject" value={`New Enquiry Form Submission - ${siteConfig.name}`} />
                  <input type="hidden" name="from_name" value={`${siteConfig.name} Website Enquiry Form`} />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase text-zinc-400 tracking-widest px-1">Full Name</label>
                      <div className="relative">
                        <input required name="name" type="text" placeholder="Full Name" className="w-full pl-11 pr-4 py-2.5 bg-black/5 border border-gray-300 rounded text-sm focus:bg-white focus:border-[#002d80] outline-none transition-all" />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase text-zinc-400 tracking-widest px-1">Email Address</label>
                      <div className="relative">
                        <input required name="email" type="email" placeholder="youremail@gmail.com" className="w-full pl-11 pr-4 py-2.5 bg-black/5 border border-gray-300 rounded text-sm focus:bg-white focus:border-[#002d80] outline-none transition-all" />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase text-zinc-400 tracking-widest px-1">Organisation</label>
                      <div className="relative">
                        <input name="organization" type="text" placeholder="Company Name" className="w-full pl-11 pr-4 py-2.5 bg-black/5 border border-gray-300 rounded text-sm focus:bg-white focus:border-[#002d80] outline-none transition-all" />
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase text-zinc-400 tracking-widest px-1">Course Interest</label>
                      <div className="relative">
                        <select name="course_interest" className="w-full pl-11 pr-4 py-2.5 bg-black/5 border border-gray-300 rounded text-sm focus:bg-white focus:border-[#002d80] outline-none transition-all text-gray-700">
                          <option>Select a category</option>
                          {courseInterestOptions.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                        <Book className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-zinc-400 tracking-widest px-1">Your Message</label>
                    <div className="relative">
                      <textarea required name="message" rows={4} placeholder="How can we help you?" className="w-full pl-11 pr-4 py-2.5 bg-black/5 border border-gray-300 rounded text-sm focus:bg-white focus:border-[#002d80] outline-none transition-all resize-none"></textarea>
                      <MessageSquare className="absolute left-4 top-4 text-zinc-300" size={18} />
                    </div>
                  </div>

                  <button className="w-full bg-[#002d80] text-[#facc15] py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[12px] hover:bg-[#facc15] hover:text-[#002d80] transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3">
                    <Send size={18} />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
