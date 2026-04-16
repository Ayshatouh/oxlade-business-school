import { siteConfig } from '@/config/site';
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChevronRight, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | ${siteConfig.name}`,
  };
}

export default async function InfoPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || '';
  
  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Determine a specific image or default based on the slug
  let heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"; // Office building
  
  if (slug.includes('venue') || slug.includes('location')) {
    heroImage = "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"; // Conference room
  } else if (slug.includes('career') || slug.includes('consultant')) {
    heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"; // People meeting
  } else if (slug.includes('client') || slug.includes('review') || slug.includes('case-study')) {
    heroImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"; // Handshake/business
  } else if (slug.includes('accredetation') || slug.includes('policy') || slug.includes('terms')) {
     heroImage = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"; // Legal/compliance
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Header />
      
      <main className="flex-1 w-full flex flex-col pt-24 pb-16">
        {/* Dynamic Hero Section */}
        <section className="relative w-full h-[400px] flex items-center justify-center mt-12 md:mt-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#002d80]/80 z-10 mix-blend-multiply"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium mb-6 uppercase tracking-widest">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight size={14} />
              <span className="text-white">{formattedTitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {formattedTitle}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6">
                Overview & Information
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  Welcome to the <strong>{formattedTitle}</strong> page of {siteConfig.name}. We are currently generating specific content for this section. 
                  Our commitment to excellence ensures that whether you are looking for venue information, corporate policies, or career opportunities, our resources are designed to meet the highest professional standards.
                </p>
                <p>
                  At Oxlade, we pride ourselves on delivering not only top-tier training but also transparent, accessible information for our corporate clients, individual delegates, and industry partners.
                </p>

                <div className="bg-zinc-50 border border-gray-100 rounded-xl p-8 my-10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#002d80] opacity-5 rounded-bl-full"></div>
                   <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                     <CheckCircle size={20} className="text-[#002d80]" />
                     Why Choose {siteConfig.name}?
                   </h3>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-3">
                       <ArrowRight size={18} className="text-[#facc15] mt-1 flex-shrink-0" />
                       <span>Industry-leading professional development programs and certifications.</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <ArrowRight size={18} className="text-[#facc15] mt-1 flex-shrink-0" />
                       <span>Global network of state-of-the-art training venues.</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <ArrowRight size={18} className="text-[#facc15] mt-1 flex-shrink-0" />
                       <span>Expert consultants with genuine, real-world corporate experience.</span>
                     </li>
                   </ul>
                </div>

                <p>
                  If you have immediate operational questions, require specific corporate documentation, or wish to speak with one of our training advisors regarding {formattedTitle.toLowerCase()}, please do not hesitate to reach out to our support team directly.
                </p>
              </div>

              {/* Action Box */}
              <div className="mt-16 bg-[#002d80] rounded-2xl p-10 text-center shadow-lg">
                <BookOpen size={40} className="text-[#facc15] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Require More Details?</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Our corporate advisors are actively available to provide dedicated support and detailed documentation tailored directly to your organizational requirements.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-2 bg-[#facc15] text-[#002d80] px-8 py-3.5 rounded-lg font-bold hover:bg-white transition-colors shadow-sm">
                  Contact Support <ArrowRight size={18} />
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
