import { siteConfig } from '@/config/site';
import { Target, Lightbulb, Users, Award, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}'s mission, vision, and our commitment to educational excellence.`,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      
      <main className="flex-1 w-full flex flex-col bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-[#002d80] text-white py-20 px-6 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">About {siteConfig.name}</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Leading the way in professional development and corporate training with innovative, industry-focused programs designed to drive career growth and organizational success.
          </p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
              Founded on the belief that continuous learning is the cornerstone of professional and organizational success, {siteConfig.name} has grown into a premier destination for corporate training. We provide specialized programs that bridge the gap between academic theory and practical, real-world application.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Our experienced trainers and consultants are drawn from various industries, bringing extensive practical expertise and theoretical knowledge. We ensure that our learners are equipped with cutting-edge skills and forward-thinking mindsets to master today's dynamic business environment.
            </p>
          </div>
          <div className="bg-[#f8f9fa] rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#facc15] opacity-10 rounded-bl-full border-b border-l border-[#facc15]"></div>
            
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#002d80] rounded-lg flex items-center justify-center text-white">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-16">
                To empower professionals and organizations by delivering world-class, accessible, and transformative training that drives measurable performance improvements.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#facc15] rounded-lg flex items-center justify-center text-[#002d80]">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-16">
                To be the globally recognized partner of choice for exceptional professional development, fostering a culture of lifelong learning and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-zinc-50 py-20 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These fundamental beliefs guide our actions and behavior, ensuring we consistently deliver outstanding value to our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "We strive for the highest quality in every course, material, and interaction." },
              { icon: Shield, title: "Integrity", desc: "We operate with honesty, transparency, and the highest ethical standards." },
              { icon: Users, title: "Collaboration", desc: "We believe in the power of working together to achieve extraordinary results." },
              { icon: Globe, title: "Innovation", desc: "We continuously evolve our programs to meet the demands of tomorrow." },
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-[#002d80]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#002d80] transition-colors duration-300">
                    <Icon size={28} className="text-[#002d80] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Contact our training consultants to discuss your custom organizational needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-[#002d80] text-white border-2 border-[#002d80] px-8 py-3.5 rounded-lg font-bold hover:bg-[#002d80]/90 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
