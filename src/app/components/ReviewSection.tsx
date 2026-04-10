'use client';

import Link from "next/link";
import { Quote, MessageSquarePlus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

const testimonials = [
  {
    quote: "The programme was practical from day one—our team came away with tools they used in board papers the same month. Oxlade understood our sector and kept the discussion grounded in real decisions, not theory.",
    author: "Sarah Mitchell",
    role: "Chief Operating Officer, TechCorp Global",
    image: "/pictures/sarah.png"
  },
  {
    quote: "Highly intensive yet incredibly rewarding. The facilitators' ability to translate complex strategic frameworks into actionable business plans was exactly what our leadership team needed.",
    author: "David Chen",
    role: "Director of Strategy, Meridian Finance",
    image: "/pictures/david.png"
  }
];

export function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingText = "Voices of Experience";

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#002d80] mb-4 tracking-tight leading-tight" style={playfair}>
            {headingText.split("").map((char, i) => (
              <span 
                key={i} 
                className={`inline-block animate-reveal-letter ${char === " " ? "mr-2" : ""}`}
                style={{ 
                  animationDelay: `${i * 30}ms`,
                  animationFillMode: 'both'
                }}
              >
                <span 
                  className="inline-block animate-color-sweep"
                  style={{ 
                    animationDelay: `${2000 + (i * 100)}ms`,
                    animationIterationCount: 'infinite'
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* Minimalist Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative shrink-0">
              {/* Main Portrait Frame */}
              <div className="w-48 h-64 md:w-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Subtle background glow - No hidden quote icon */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#facc15] opacity-10 rounded-full -z-10 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#002d80] opacity-5 rounded-full -z-10 blur-2xl"></div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl font-medium text-[#002d80] leading-relaxed mb-8 italic" style={playfair}>
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div>
                <cite className="not-italic font-black text-[#002d80] text-lg block">{testimonials[activeIndex].author}</cite>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1 block">{testimonials[activeIndex].role}</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
                <button onClick={prevTestimonial} className="p-3 rounded-full border border-gray-200 hover:border-[#002d80] hover:text-[#002d80] transition-all bg-white shadow-sm hover:shadow-md">
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-[#002d80]' : 'w-2 bg-gray-200'}`} />
                  ))}
                </div>
                <button onClick={nextTestimonial} className="p-3 rounded-full border border-gray-200 hover:border-[#002d80] hover:text-[#002d80] transition-all bg-white shadow-sm hover:shadow-md">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 py-12 bg-zinc-50 rounded-[2rem] border border-gray-100 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-[#002d80] mb-3" style={playfair}>
              Your experience matters to us!
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed mb-6 max-w-md mx-auto">
              If you enjoyed one of our courses, share your thoughts. Your feedback helps us maintain our high academic standards.
            </p>
            <Link
              href="/review"
              className="inline-flex items-center gap-2 bg-[#002d80] text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#facc15] hover:text-[#002d80] transition-all transform hover:-translate-y-1 shadow-md"
            >
              <MessageSquarePlus size={14} />
              Leave A Review
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes revealLetter {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes colorSweep {
          0%, 100% { color: inherit; }
          50% { color: #facc15; }
        }
        .animate-reveal-letter {
          animation: revealLetter 0.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }
        .animate-color-sweep {
          animation: colorSweep 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
