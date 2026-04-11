"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Star, MessageSquarePlus, User, BookOpen, Send, Quote } from "lucide-react";
import { useState } from "react";

export default function ReviewPage() {
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-44 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#facc15]/20 text-[#002d80] rounded-full text-[11px] font-black uppercase tracking-widest mb-6">
              Share Your Experience
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#002d80] mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
              Leave a Review
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Your feedback is invaluable to us. It helps us maintain our high academic standards 
              and ensures we continue to deliver world-class professional training.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100 shadow-xl relative overflow-hidden">
            {/* Background elements - Blue quote removed as requested */}
            
            <form className="relative z-10 space-y-10">
              {/* Star Rating */}
              <div className="text-center space-y-4">
                <label className="text-[11px] font-black uppercase text-[#002d80] tracking-widest">Rate Your Experience</label>
                <div className="flex justify-center gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-all transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        size={40}
                        className={star <= rating ? "text-[#facc15] fill-[#facc15]" : "text-zinc-200"}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs font-bold text-zinc-400">{rating > 0 ? `${rating} Stars Selected` : 'Select star rating'}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-[#002d80] tracking-widest px-1">Your Name</label>
                  <div className="relative">
                    <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-2.5 bg-black/5 border border-gray-300 rounded focus:border-[#002d80] focus:bg-white outline-none transition-all text-sm" />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-[#002d80] tracking-widest px-1">Course Attended</label>
                  <div className="relative">
                    <input type="text" placeholder="Course Title" className="w-full pl-12 pr-4 py-2.5 bg-black/5 border border-gray-300 rounded focus:border-[#002d80] focus:bg-white outline-none transition-all text-sm" />
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-[#002d80] tracking-widest px-1">Your Thoughts</label>
                <div className="relative">
                  <textarea rows={6} placeholder="How can we help you?" className="w-full pl-12 pr-6 py-2.5 bg-black/5 border border-gray-300 rounded focus:border-[#002d80] focus:bg-white outline-none transition-all text-sm resize-none"></textarea>
                  <MessageSquarePlus className="absolute left-4 top-5 text-zinc-300" size={20} />
                </div>
              </div>

              <button className="w-full bg-[#002d80] text-[#facc15] py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[13px] hover:bg-[#facc15] hover:text-[#002d80] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#002d80]/20 flex items-center justify-center gap-4 group">
                Submit Review
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
