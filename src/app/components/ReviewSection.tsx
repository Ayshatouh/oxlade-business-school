import Link from "next/link";
import { Quote } from "lucide-react";

const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

export function ReviewSection() {
  return (
    <section className="py-20 bg-zinc-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-black text-[#002d80] mb-5 tracking-tight"
          style={playfair}
        >
          Your experience matters to us!
        </h2>
        <p className="text-gray-700 text-[13px] md:text-sm leading-relaxed mb-8">
          If you enjoyed one of our courses, we&apos;d be thrilled if you could take a moment to
          share your thoughts. Your review helps us improve and lets others know what to expect.
        </p>
        <Link
          href="#"
          className="inline-block bg-[#002d80] text-white px-8 py-3 rounded-lg text-xs font-extrabold uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Leave A Review
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-16 pt-16 border-t border-gray-200">
        <h3
          className="text-center text-xl font-bold text-[#002d80] mb-8 tracking-tight"
          style={playfair}
        >
          What our clients have to say
        </h3>
        <figure className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm text-left">
          <Quote className="text-[#facc15] mb-4" size={36} strokeWidth={1.5} aria-hidden />
          <blockquote className="text-gray-800 text-[13px] md:text-sm leading-relaxed mb-6">
            The programme was practical from day one—our team came away with tools they used in
            board papers the same month. Oxlade understood our sector and kept the discussion
            grounded in real decisions, not theory.
          </blockquote>
          <figcaption className="text-sm">
            <cite className="not-italic font-bold text-[#002d80]">Sarah Mitchell</cite>
            <span className="text-gray-600 block mt-1">Chief Operating Officer, TechCorp Global</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
