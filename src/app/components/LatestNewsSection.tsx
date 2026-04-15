import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

const latestNews = [
  {
    title: "London April intake: one place left on the fraud audit week",
    excerpt:
      "We added a second May cohort after the first filled; if you need board-ready reporting skills before Q2 closes, this is the last April start in the City.",
    date: "04 Apr 2026",
    readMins: "4 min",
    category: "Programmes",
    image: "/pictures/pic1.jpg",
    href: "/courses/fraud-detection",
  },
  {
    title: "What changed in our Dubai venue checklist for 2026",
    excerpt:
      "Airport transfers, hotel blocks, and classroom tech—here is what we standardised so overseas delegates spend less time on logistics and more on the course.",
    date: "28 Mar 2026",
    readMins: "6 min",
    category: "Operations",
    image: "/pictures/pic2.jpg",
    href: "#",
  },
  {
    title: "Case note: turning a generic finance workshop into a bank-specific run",
    excerpt:
      "A risk team asked for IFRS examples from their own loan book. We rewrote three modules in ten working days—without pushing the delivery date.",
    date: "17 Mar 2026",
    readMins: "5 min",
    category: "Case note",
    image: "/pictures/pic3.jpg",
    href: "#",
  },
];

export function LatestNewsSection() {
  const [featured, ...rest] = latestNews;

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-[#002d80] font-bold uppercase tracking-[0.2em] text-sm mb-3">From {siteConfig.name}</p>
            <h2 className="text-3xl font-black text-[#002d80] tracking-tight" style={playfair}>
              News & insights
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#002d80] hover:underline underline-offset-4 transition-colors"
          >
            Archive <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 group flex flex-col sm:flex-row rounded-2xl border border-gray-200 bg-[#002d80] text-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative w-full sm:w-[min(44%,320px)] shrink-0 aspect-[4/3] sm:aspect-auto sm:min-h-[240px]">
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002d80]/90 via-transparent to-transparent sm:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 sm:pl-6">
              <span className="inline-flex w-fit rounded-full bg-[#facc15]/20 text-[#facc15] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 mb-3">
                {featured.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3" style={playfair}>
                {featured.title}
              </h3>
              <p className="text-white/75 text-[13px] leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <span className="inline-flex items-center gap-2 text-[11px] text-white/60 font-semibold">
                  <Clock size={13} className="text-[#facc15]" />
                  {featured.date} · {featured.readMins}
                </span>
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-[#facc15] hover:text-white transition-colors"
                >
                  Read story <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {rest.map((item) => (
              <article
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-gray-200 bg-zinc-50 p-4 hover:border-[#002d80]/30 hover:shadow-md transition-all"
              >
                <div className="relative w-28 shrink-0 aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </div>
                <div className="flex min-w-0 flex-col py-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#002d80]/80 mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-[#002d80] leading-snug mb-2 line-clamp-2" style={playfair}>
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-gray-600 leading-relaxed line-clamp-2 mb-3">{item.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between gap-2">
                    <span className="text-[10px] text-gray-500 font-semibold">
                      {item.date} · {item.readMins}
                    </span>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#002d80] hover:underline underline-offset-2 shrink-0"
                    >
                      Read <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
