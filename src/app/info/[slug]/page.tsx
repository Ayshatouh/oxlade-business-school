import { siteConfig } from '@/config/site';
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChevronRight, ArrowRight, BookOpen, CheckCircle, UserPlus } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVenueCityLinks } from '@/data/venueCourses';
import { TRAINING_CONSULTANTS } from '@/data/trainingConsultants';
import { CareersPageContent } from '@/app/components/careers/CareersPageContent';
import { BlogPageContent } from '@/app/components/blog/BlogPageContent';
import { FaqAccordion } from '@/app/components/FaqAccordion';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || '';
  const title =
    slug === 'our-training-venues'
      ? 'Our Training Venues'
      : slug === 'our-training-consultants'
        ? 'Our Training Consultants'
        : slug === 'careers'
          ? 'Careers'
          : slug === 'blog'
            ? 'News & Insights'
            : slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | ${siteConfig.name}`,
    description:
      slug === 'our-training-venues'
        ? `Professional training venues and learning environments at ${siteConfig.name}.`
        : slug === 'our-training-consultants'
          ? `Meet the training consultants and subject experts at ${siteConfig.name}.`
          : slug === 'careers'
            ? `Career opportunities at ${siteConfig.name}.`
            : slug === 'blog'
              ? `Latest news and insights from ${siteConfig.name}.`
              : undefined,
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

  const locationCardImages: Record<string, string> = {
    barcelona: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    istanbul: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    singapore: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
  };

  const LOCATION_ROW_ORDER = ['barcelona', 'dubai', 'istanbul', 'london', 'singapore'] as const;
  const orderedLocationCards = getVenueCityLinks()
    .filter((l) => l.slug !== 'abuja')
    .sort(
      (a, b) =>
        LOCATION_ROW_ORDER.indexOf(a.slug as (typeof LOCATION_ROW_ORDER)[number]) -
        LOCATION_ROW_ORDER.indexOf(b.slug as (typeof LOCATION_ROW_ORDER)[number])
    );

  const trainingVenuesRoomImage =
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80';

  const compactInfoHero =
    slug === 'our-training-venues' ||
    slug === 'our-training-consultants' ||
    slug === 'careers' ||
    slug === 'blog';

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Header />
      
      <main className="flex-1 w-full flex flex-col pt-24 pb-16">
        {compactInfoHero ? (
          <section className="mt-12 md:mt-14 bg-[#002d80] text-white">
            <div className="max-w-5xl mx-auto px-6 py-8 md:py-10">
              <nav className="flex items-center gap-1.5 text-white/55 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={10} className="text-white/35 shrink-0" />
                <span className="text-white/75">
                  {slug === 'our-training-venues'
                    ? 'Venues'
                    : slug === 'our-training-consultants'
                      ? 'Consultants'
                      : slug === 'blog'
                        ? 'Blog'
                        : 'Careers'}
                </span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                {slug === 'our-training-venues'
                  ? 'Our Training Venues'
                  : slug === 'our-training-consultants'
                    ? 'Our Training Consultants'
                    : slug === 'blog'
                      ? 'News & Insights'
                      : 'Careers with Oxlade Business School'}
              </h1>
              <p className="text-white/85 text-sm md:text-[15px] leading-relaxed max-w-2xl">
                {slug === 'our-training-venues' ? (
                  <>
                    Venues are chosen for comfort, AV reliability, and a professional setting so you can focus on learning and collaboration—whether in a major business city or a dedicated seminar space.
                  </>
                ) : slug === 'our-training-consultants' ? (
                  <>
                    Our consultants combine deep subject expertise with practical delivery experience—supporting delegates from diagnosis through to measurable workplace application.
                  </>
                ) : slug === 'blog' ? (
                  <>
                    Deep dives into corporate training trends, venue updates, and real-world case notes from our instructional design team.
                  </>
                ) : (
                  <>
                    We are building a team of rigorous, client-centred professionals across delivery, programmes, and operations. If you thrive in high-trust environments and care about learning impact, we would like to hear from you.
                  </>
                )}
              </p>
            </div>
          </section>
        ) : (
          <section className="relative w-full h-[250px] flex items-center justify-center mt-12 md:mt-16 overflow-hidden">
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
        )}

        {/* Content Section */}
        <section
          className={
            slug === 'our-training-venues' ||
            slug === 'our-training-consultants' ||
            slug === 'careers' ||
            slug === 'blog'
              ? 'py-10 md:py-12 px-6'
              : 'py-20 px-6'
          }
        >
          <div
            className={
              slug === 'our-course-locations' ||
              slug === 'our-training-venues' ||
              slug === 'our-training-consultants' ||
              slug === 'careers' ||
              slug === 'blog'
                ? 'max-w-7xl mx-auto'
                : 'max-w-4xl mx-auto'
            }
          >
            <div className="bg-white">
              {slug === 'careers' ? (
                <CareersPageContent />
              ) : slug === 'blog' ? (
                <BlogPageContent />
              ) : slug === 'our-training-consultants' ? (
                <div>
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-3xl mb-8">
                    Meet a selection of our faculty and associate consultants. Each profile reflects the calibre of practitioner-led delivery you can expect across our open programmes and in-house assignments.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
                    {TRAINING_CONSULTANTS.map((consultant) => (
                      <div key={consultant.id} className="flex flex-col">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={consultant.imageUrl}
                          alt={consultant.name}
                          className="aspect-square w-full object-cover rounded-2xl border border-zinc-200/80 bg-zinc-100"
                        />
                        <h2 className="mt-3 text-[15px] font-bold text-[#0f172a] leading-snug">
                          {consultant.name}
                        </h2>
                        <Link
                          href={consultant.bioHref ?? '/enquiry'}
                          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#002d80] bg-white px-2 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[#002d80] transition-colors hover:bg-[#002d80] hover:text-white"
                        >
                          <UserPlus size={14} strokeWidth={2} aria-hidden />
                          Read Biography
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slug === 'our-training-venues' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-[15px]">
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-black text-[#002d80] tracking-tight">
                        The Perfect Spaces to Develop and Network
                      </h2>
                      <div className="h-0.5 w-14 rounded-full bg-[#facc15]" aria-hidden />
                    </div>
                    <p>
                      Rooms are set up for discussion, group work, and presentations, with consistent standards for layout, lighting, and acoustics across programmes.
                    </p>
                    <p>
                      Open courses and in-house delivery follow the same venue principles so delegates get a dependable, executive-appropriate experience every time.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl border-2 border-[#002d80]/15 shadow-md bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={trainingVenuesRoomImage}
                      alt="Professional training room with conference table and presentation display"
                      className="w-full h-full min-h-[260px] object-cover"
                    />
                  </div>
                </div>
              ) : slug === 'our-course-locations' ? (
                <>
                  <p className="text-gray-700 leading-relaxed text-lg mb-10">
                    From Barcelona to Singapore and London to Dubai, each of our corporate training course locations is specifically chosen to enhance your learning experience. Whether you are looking for sector-specific programmes in Dubai or leadership development in London, our locations and course options are designed to suit individual and organisational requirements.
                  </p>

                  <div className="flex flex-nowrap gap-4 md:gap-5 w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {orderedLocationCards.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/courses/by-venue/${location.slug}`}
                        className="border border-[#7ed0c5] rounded-xl p-2 bg-white hover:shadow-md transition-all group min-w-[160px] flex-[1_1_0] shrink-0"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            locationCardImages[location.slug] ??
                            'https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1200&q=80'
                          }
                          alt={location.label}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="pt-4 pb-2 text-center">
                          <h3 className="text-2xl font-black text-[#1f2041] tracking-tight">{location.label}</h3>
                          <span className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-[#1f2041]">
                            View Courses
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6">
                    {slug === 'terms-and-conditions' ? 'Terms & Conditions' : 
                     slug === 'privacy-policy' ? 'Privacy Policy' :
                     slug === 'accredetation' ? 'Professional Accreditation' :
                     slug === 'accomodation' ? 'Accommodation Services' :
                     slug === 'airport-transfers' ? 'Airport Transfers' :
                     slug === 'visas' ? 'Visa Support' :
                     slug === 'clients' ? 'Our Corporate Clients' :
                     slug === 'case-studies' ? 'Case Studies' :
                     slug === 'faqs' ? 'Frequently Asked Questions' :
                     slug === 'blog' ? 'News & Insights' :
                     formattedTitle}
                  </h2>
                  
                  <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6 md:text-[20px] text-[18px]">
                    {slug === 'clients' && (
                      <p>We are proud to partner with leading organizations globally, delivering tailored training solutions that drive measurable business impact. From multinational corporations to dynamic SMEs, our client portfolio reflects our commitment to excellence across every sector.</p>
                    )}
                    {slug === 'accredetation' && (
                      <p>Quality assurance is at the heart of what we do. Our programs are designed to align with strict professional standards, ensuring that your certification carries weight and recognition in the global marketplace. We are actively engaged with leading industry awarding bodies.</p>
                    )}
                    {slug === 'accomodation' && (
                      <p>To ensure a comfortable learning experience, we maintain partnerships with premium hotels near our training venues across all our locations. Our delegate support team can assist you with securing exclusive corporate rates during your stay.</p>
                    )}
                    {slug === 'airport-transfers' && (
                      <p>We understand the importance of seamless travel. For our international delegates, we offer coordinated airport transfer services. Please reach out to our logistics team upon booking to arrange your executive transport securely.</p>
                    )}
                    {slug === 'policies' && (
                      <p>Oxlade Business School operates with the highest degree of transparency and ethical standards. Our corporate policies govern everything from equal opportunity and diversity to health, safety, and operational excellence.</p>
                    )}
                    {slug === 'visas' && (
                      <div className="space-y-6">
                        <p>Following receipt of full payment of course fees, we are permitted by the United Kingdom Visa & Immigration (UKVI) to support visa applications. Delegates will be provided with a visa letter to support their application at the British Embassy / High Commission.</p>
                        
                        <p>All applicants attending our courses must apply for a Standard Visitor visas. As we are accredited by the British Accreditation Council (BAC) for independent further and higher education – a UKVI approved accreditation body, all delegates applying for Standard Visitor visas will be successful provided all the necessary supporting documentation is included.</p>
                        
                        <p>Following is a list of recommended documents that delegates can include as part of their visa applications:</p>
                        
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-[#002d80]">
                          <li><span className="text-gray-600">Two recent passport-sized colour photographs with a white background</span></li>
                          <li><span className="text-gray-600">Passport or travel document, valid for at least six months (the passport must have at least one clear page for the visa)</span></li>
                          <li><span className="text-gray-600">Correct application form fully completed in English</span></li>
                          <li><span className="text-gray-600">Visa support letter from {siteConfig.name}</span></li>
                          <li><span className="text-gray-600">Letter of employment</span></li>
                          <li><span className="text-gray-600">Six months itemised bank statements/evidence of assets</span></li>
                          <li><span className="text-gray-600">Letter from your sponsor (employer), confirming they are paying for the course</span></li>
                          <li><span className="text-gray-600">Evidence of accommodation in London</span></li>
                          <li><span className="text-gray-600">Relevant diplomas or educational certificates that you have achieved (it is helpful to submit mark sheets/passing certificates)</span></li>
                          <li><span className="text-gray-600">Original IELTS/TOEFL Certificate, or other evidence of your ability to speak English</span></li>
                          <li><span className="text-gray-600">Detailed information with regard to visa requirements can be found on your local British Embassy’s web site</span></li>
                        </ul>
                      </div>
                    )}
                    {slug === 'terms-and-conditions' && (
                      <p>Our Terms and Conditions outline the framework of our engagement, covering bookings, cancellations, intellectual property, and delegate responsibilities. We ensure that our terms are clear and fair for both individual learners and corporate sponsors.</p>
                    )}
                    {slug === 'privacy-policy' && (
                      <p>We are committed to protecting your personal and corporate data. Our Privacy Policy details how we collect, store, and utilize your information in strict compliance with global data protection regulations.</p>
                    )}
                    {slug === 'brochures-and-calenders' && (
                      <p>Looking for a comprehensive overview? Our digital brochures and annual training calendars are available upon request. These materials provide deep insights into our curriculum methodologies and upcoming schedule.</p>
                    )}
                    {slug === 'case-studies' && (
                      <p>Discover how our training interventions have transformed teams and optimized operations for our clients. Our case studies detail the precise challenges faced, the solutions deployed, and the tangible ROI achieved.</p>
                    )}
                    
                    {slug === 'faqs' && (
                      <FaqAccordion />
                    )}
                    
                    {/* Fallback for completely unknown slugs */}
                    {!['blog', 'faqs', 'clients', 'accredetation', 'accomodation', 'airport-transfers', 'policies', 'visas', 'terms-and-conditions', 'privacy-policy', 'brochures-and-calenders', 'case-studies'].includes(slug) && (
                      <p>
                        Welcome to the <strong>{formattedTitle}</strong> hub. Our commitment to excellence ensures that our resources and communications are designed to meet the highest professional standards for our corporate clients and delegates.
                      </p>
                    )}

                    <div className="bg-zinc-50 border border-gray-100 rounded-xl p-8 my-10 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-[#002d80] opacity-5 rounded-bl-full"></div>
                       <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                         <CheckCircle size={20} className="text-[#002d80]" />
                         Need specific details?
                       </h3>
                       <p className="text-sm">
                         If you have immediate operational questions, require specific corporate documentation, or wish to speak with one of our training advisors regarding {formattedTitle.toLowerCase()}, please do not hesitate to reach out to our support team directly.
                       </p>
                    </div>
                  </div>
                </>
              )}

              {slug !== 'our-training-venues' &&
                slug !== 'our-training-consultants' &&
                slug !== 'careers' &&
                slug !== 'blog' && (
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
              )}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
