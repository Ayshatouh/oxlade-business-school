import { siteConfig } from '@/config/site';
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChevronRight, ArrowRight, BookOpen, CheckCircle, UserPlus } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVenueCityLinks } from '@/data/venueCourses';
import { TRAINING_CONSULTANTS } from '@/data/trainingConsultants';
import { CareersPageContent } from '@/app/components/careers/CareersPageContent';

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
    slug === 'careers';

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
                      : 'Careers'}
                </span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                {slug === 'our-training-venues'
                  ? 'Our Training Venues'
                  : slug === 'our-training-consultants'
                    ? 'Our Training Consultants'
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
                ) : (
                  <>
                    We are building a team of rigorous, client-centred professionals across delivery, programmes, and operations. If you thrive in high-trust environments and care about learning impact, we would like to hear from you.
                  </>
                )}
              </p>
            </div>
          </section>
        ) : (
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
        )}

        {/* Content Section */}
        <section
          className={
            slug === 'our-training-venues' ||
            slug === 'our-training-consultants' ||
            slug === 'careers'
              ? 'py-10 md:py-12 px-6'
              : 'py-20 px-6'
          }
        >
          <div
            className={
              slug === 'our-course-locations' ||
              slug === 'our-training-venues' ||
              slug === 'our-training-consultants' ||
              slug === 'careers'
                ? 'max-w-7xl mx-auto'
                : 'max-w-4xl mx-auto'
            }
          >
            <div className="bg-white">
              {slug === 'careers' ? (
                <CareersPageContent />
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
                </>
              )}

              {slug !== 'our-training-venues' &&
                slug !== 'our-training-consultants' &&
                slug !== 'careers' && (
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
