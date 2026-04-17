"use client";

import { useMemo, useState } from "react";
import { Quote } from "lucide-react";
import {
  REVIEW_SHOWCASE_ITEMS,
  REVIEW_SHOWCASE_TABS,
  type ReviewShowcaseTab,
} from "@/data/reviewsShowcase";

export function ReviewsShowcaseTabs() {
  const [tab, setTab] = useState<ReviewShowcaseTab>("delegates");

  const items = useMemo(
    () => REVIEW_SHOWCASE_ITEMS.filter((r) => r.tab === tab),
    [tab]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2 border-b border-zinc-200 pb-1">
        {REVIEW_SHOWCASE_TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-t-md px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                active
                  ? "bg-[#002d80] text-white"
                  : "bg-zinc-100 text-[#002d80] hover:bg-zinc-200"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <ul className="space-y-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-5 md:p-6"
          >
            <Quote className="mb-3 h-8 w-8 text-[#facc15]" strokeWidth={1.75} aria-hidden />
            <blockquote className="text-sm md:text-[15px] leading-relaxed text-gray-700">
              “{item.quote}”
            </blockquote>
            <footer className="mt-4 text-xs font-bold uppercase tracking-wide text-[#002d80]">
              {item.attribution}
              {item.context ? (
                <span className="mt-1 block font-medium normal-case tracking-normal text-gray-500">
                  {item.context}
                </span>
              ) : null}
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}
