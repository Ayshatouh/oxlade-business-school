import Link from "next/link";
import { ArrowRight, Building2, Laptop, Briefcase, Globe2, MapPin } from "lucide-react";
import { getVenueCityLinks } from "@/data/venueCourses";

const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

const formats = [
  {
    kicker: "In the room",
    title: "Classroom",
    description:
      "Public dates in major cities, or a private cohort for your team only. You get printed materials, whiteboard work, and time after each block to ask questions that relate to your own policies and controls.",
    points: ["Fixed public intakes", "Private cohort option", "Same facilitator start to finish"],
    icon: Building2,
    href: "/courses/by-venue/london",
    cta: "View London dates",
  },
  {
    kicker: "Wherever you log in",
    title: "Live online",
    description:
      "Not recorded videos sent by email: real-time sessions with breaks, chat, and short tasks. We keep groups small so facilitators can spot who needs a follow-up, just like in the training room.",
    points: ["Scheduled live modules", "Materials and recordings where agreed", "Works across time zones"],
    icon: Laptop,
    href: "/courses/data-analytics",
    cta: "See an online example",
  },
  {
    kicker: "Your brief, your cases",
    title: "In-house & tailored",
    description:
      "We run a short scoping call, agree learning outcomes with your sponsor, then rebuild examples and exercises around your industry vocabulary. Delivery can be on-site, off-site, or blended.",
    points: ["Needs-led design", "Your templates and scenarios", "Metrics agreed up front"],
    icon: Briefcase,
    href: "/categories/business-management",
    cta: "Browse topics to tailor",
  },
];

const cityLinks = getVenueCityLinks();

export function TrainingFormatsSection() {
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#002d80] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Training delivery
          </p>
          <h2
            className="text-3xl font-black text-[#002d80] mb-4 tracking-tight"
            style={playfair}
          >
            Formats that fit how you work
          </h2>
          <p className="text-gray-700 text-[13px] leading-relaxed">
            Pick open classroom seats, join a live online cohort, or ask us to shape something around your organisation.
            The syllabus stays rigorous; only the wrapper changes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formats.map((format) => {
            const Icon = format.icon;
            return (
              <article
                key={format.title}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-zinc-50/80 pl-5 pr-6 pt-7 pb-6 shadow-sm transition-all hover:border-[#002d80]/35 hover:shadow-md"
              >
                <div
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-[#facc15]"
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#002d80]/70 mb-1">
                      {format.kicker}
                    </p>
                    <h3 className="text-lg font-bold text-[#002d80] tracking-tight" style={playfair}>
                      {format.title}
                    </h3>
                  </div>
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#002d80]/10 text-[#002d80] flex items-center justify-center">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                </div>
                <p className="text-gray-800 text-[13px] leading-relaxed mb-5">{format.description}</p>
                <ul className="space-y-2 mb-6 text-[12px] text-gray-600">
                  {format.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#facc15] font-bold shrink-0">·</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={format.href}
                  className="mt-auto inline-flex items-center gap-2 text-[#002d80] text-[11px] font-extrabold uppercase tracking-widest group-hover:underline group-hover:underline-offset-2 transition-colors"
                >
                  {format.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-6 bg-[#002d80] text-white rounded-2xl px-7 py-7 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          <div className="flex items-start gap-3 min-w-0">
            <Globe2 size={22} className="text-[#facc15] mt-0.5 shrink-0" />
            <p className="text-[13px] md:text-sm leading-relaxed text-white/90 max-w-xl">
              Open and in-house programmes run in key cities worldwide—tap a location to see what is scheduled there.
            </p>
          </div>
          <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 no-scrollbar lg:overflow-visible">
            {cityLinks.map(({ slug, label }) => (
              <Link
                key={slug}
                href={`/courses/by-venue/${slug}`}
                className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-[#facc15] hover:border-[#facc15] hover:text-[#002d80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15] shadow-sm"
              >
                <MapPin size={12} className="opacity-90" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
