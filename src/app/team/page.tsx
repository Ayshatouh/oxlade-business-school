import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Our Team | ${siteConfig.name}`,
  description: `Meet the experienced professionals and subject matter experts behind ${siteConfig.name}.`,
};

const teamMembers = [
  {
    name: "Omolabake Oluwatosin Olatubosun",
    role: "Director",
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-zinc-50 py-20 px-6 mt-8 md:mt-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Meet Our Team</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our success is driven by an incredible team of industry experts, academics, and strategic consultants dedicated to advancing your professional potential.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="group max-w-sm w-full">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-sm border border-gray-100 bg-gray-50 aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002d80]/90 via-[#002d80]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002d80] hover:bg-[#facc15] hover:text-[#002d80] transition-colors">
                        <LinkedinIcon size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002d80] hover:bg-[#facc15] hover:text-[#002d80] transition-colors">
                        <TwitterIcon size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002d80] hover:bg-[#facc15] hover:text-[#002d80] transition-colors">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#002d80] font-medium text-[15px] uppercase tracking-wide">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="bg-[#002d80] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Growing Team</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Are you a passionate educator, industry specialist, or consultant? We are always looking for exceptional talent to enrich our programs.
          </p>
          <a href="/#contact" className="inline-block bg-[#facc15] text-[#002d80] px-8 py-3.5 rounded-lg font-bold hover:bg-white transition-colors shadow-sm">
            Work With Us
          </a>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
