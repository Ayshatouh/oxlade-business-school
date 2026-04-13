'use client';

import { CheckCircle2, GraduationCap, Handshake, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";


const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

const strengths = [
  "Expert facilitators with practical sector experience",
  "Curricula aligned to real business challenges",
  "Global delivery options for individuals and teams",
  "Action-focused learning for immediate application",
];

const highlights = [
  { icon: GraduationCap, label: "Industry-Relevant Programmes" },
  { icon: Handshake, label: "Trusted By Corporate Teams" },
  { icon: Sparkles, label: "Premium Learning Experience" },
];

export function WelcomeSection() {
  const headingText = `Why professionals choose ${siteConfig.name}`;

  
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <p className="text-[#002d80] font-bold uppercase tracking-[0.3em] text-[10px] py-1 px-4 bg-[#facc15]/10 rounded-full inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full"></span>
              Welcome
            </p>
          </div>
          
          <h2 className="text-3xl font-black text-[#002d80] mb-6 tracking-tight leading-tight" style={playfair}>
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

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              At {siteConfig.name}, we blend academic depth with practical execution so delegates gain skills they can use immediately. 
              Our programmes are designed to strengthen leadership, technical capability, and strategic decision-making 
              in fast-moving business environments.
            </p>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-l-4 border-[#facc15] pl-4">Core Strengths</h3>
              <div className="grid gap-3">
                {strengths.map((item, i) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#002d80]/10 hover:shadow-xl hover:shadow-[#002d80]/5 transition-all duration-300 group bg-white"
                  >
                    <div className="bg-[#002d80] text-white p-1.5 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-800 font-bold text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:mt-0">
            <div className="bg-[#002d80] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 tracking-tight" style={playfair}>Built for growth-oriented leaders</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-10 font-medium">
                  Whether you are an individual aiming for career progression or an organisation developing high-impact 
                  teams, our learning model supports measurable growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex flex-col items-center text-center gap-3 bg-white/5 rounded-2xl px-4 py-6 border border-white/10 hover:bg-[#facc15] hover:text-[#002d80] transition-all duration-500 group/item">
                        <Icon size={24} className="text-[#facc15] group-hover/item:text-[#002d80]" />
                        <span className="font-bold text-[11px] uppercase tracking-wider leading-tight">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Abstract design elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#facc15]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            </div>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-gray-100">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#002d80]/40 font-black">
            Professional learning · measurable results
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes revealLetter {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes colorSweep {
          0%, 100% {
            color: inherit;
          }
          50% {
            color: #facc15;
          }
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
