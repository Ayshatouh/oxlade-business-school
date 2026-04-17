"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ReviewsShowcaseTabs } from "@/app/components/reviews/ReviewsShowcaseTabs";
import { Star, MessageSquarePlus, User, BookOpen, Send, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const w3FormsAccessKey = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex flex-col pt-24 pb-16 md:pb-20">
        <section className="mt-12 md:mt-14 bg-[#002d80] text-white">
          <div className="max-w-5xl mx-auto px-6 py-8 md:py-10">
            <nav className="mb-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/55">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight size={10} className="shrink-0 text-white/35" />
              <span className="text-white/75">Reviews</span>
            </nav>
            <h1
              className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              }}
            >
              Reviews &amp; feedback
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-white/85 md:text-[15px]">
              Read what delegates and clients say about our programmes—then share your own experience. Your feedback helps us refine content, delivery, and support.
            </p>
          </div>
        </section>

        <section className="px-6 py-10 md:py-12">
          <div className="mx-auto max-w-5xl">
            <a
              href="#leave-review"
              className="mb-10 flex w-full items-center justify-center bg-[#facc15] py-3.5 text-sm font-black uppercase tracking-widest text-[#002d80] transition-colors hover:bg-[#fde047]"
            >
              Leave a review
            </a>

            <ReviewsShowcaseTabs />
          </div>
        </section>

        <section id="leave-review" className="scroll-mt-28 border-t border-zinc-100 bg-zinc-50/50 px-6 py-12 md:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-center text-xl font-black text-[#002d80] md:text-2xl">
              Submit your review
            </h2>
            <p className="mb-8 text-center text-sm text-gray-600">
              Rate your experience and tell us what worked well. Submissions are reviewed by our quality team.
            </p>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
              <form
                className="relative z-10 space-y-8"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input type="hidden" name="access_key" value={w3FormsAccessKey} />
                <input
                  type="hidden"
                  name="subject"
                  value={`New Review Submission - ${siteConfig.name}`}
                />
                <input
                  type="hidden"
                  name="from_name"
                  value={`${siteConfig.name} Website Review Form`}
                />
                <input type="hidden" name="rating" value={rating ? `${rating}/5` : "Not selected"} />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="space-y-4 text-center">
                  <label className="text-[11px] font-black uppercase tracking-widest text-[#002d80]">
                    Rate your experience
                  </label>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="transform transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star
                          size={36}
                          className={
                            star <= rating
                              ? "fill-[#facc15] text-[#facc15]"
                              : "text-zinc-200"
                          }
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-zinc-400">
                    {rating > 0 ? `${rating} / 5 selected` : "Tap a star to select"}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="px-1 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                      Your name
                    </label>
                    <div className="relative">
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Full name"
                        className="w-full rounded-lg border border-zinc-200 bg-zinc-50/80 py-2.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-[#002d80] focus:bg-white"
                      />
                      <User className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="px-1 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                      Course attended
                    </label>
                    <div className="relative">
                      <input
                        required
                        name="course_attended"
                        type="text"
                        placeholder="Course title"
                        className="w-full rounded-lg border border-zinc-200 bg-zinc-50/80 py-2.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-[#002d80] focus:bg-white"
                      />
                      <BookOpen className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-300" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="px-1 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                    Your review
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Share your experience…"
                      className="w-full resize-none rounded-lg border border-zinc-200 bg-zinc-50/80 py-2.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-[#002d80] focus:bg-white"
                    />
                    <MessageSquarePlus className="absolute left-4 top-4 size-5 text-zinc-300" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#002d80] py-4 text-[12px] font-black uppercase tracking-[0.2em] text-[#facc15] shadow-lg transition-all hover:bg-[#003a9e]"
                >
                  Submit review
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
