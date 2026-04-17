"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CAREER_LISTINGS, CAREER_TABS, type CareerTabId } from "@/data/careersContent";

export function CareersPageContent() {
  const [activeTab, setActiveTab] = useState<CareerTabId>("delivery");

  const listings = useMemo(
    () => CAREER_LISTINGS.filter((job) => job.tab === activeTab),
    [activeTab]
  );

  return (
    <div>
      <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-3xl mb-6">
        We hire people who care about learning outcomes and professional standards. Roles span delivery, programme design, and the client journey—often in close partnership with global organisations.
      </p>

      <Link
        href="/enquiry"
        className="mb-8 flex w-full items-center justify-center bg-[#facc15] py-3.5 text-sm font-black uppercase tracking-widest text-[#002d80] transition-colors hover:bg-[#fde047]"
      >
        Send us your CV
      </Link>

      <div className="mb-8 flex flex-wrap gap-2 border-b border-zinc-200 pb-1">
        {CAREER_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-t-md px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                isActive
                  ? "bg-[#002d80] text-white"
                  : "bg-zinc-100 text-[#002d80] hover:bg-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-10">
        {listings.length === 0 ? (
          <p className="text-sm text-gray-500">
            There are no open roles in this category right now. You can still send a CV—we keep strong applications on file.
          </p>
        ) : (
          listings.map((job) => (
            <article key={job.id} className="border-b border-zinc-100 pb-10 last:border-0 last:pb-0">
              <h2 className="text-lg font-bold text-gray-900">{job.title}</h2>
              <dl className="mt-3 space-y-1 text-sm text-gray-700">
                <div>
                  <dt className="inline font-bold text-gray-900">Location: </dt>
                  <dd className="inline">{job.location}</dd>
                </div>
                {job.languages ? (
                  <div>
                    <dt className="inline font-bold text-gray-900">Languages: </dt>
                    <dd className="inline">{job.languages}</dd>
                  </div>
                ) : null}
                {job.compensation ? (
                  <div>
                    <dt className="inline font-bold text-gray-900">Compensation: </dt>
                    <dd className="inline">{job.compensation}</dd>
                  </div>
                ) : null}
              </dl>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600">
                {job.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="font-bold text-gray-900">{section.heading}</h3>
                    {section.paragraphs.map((p, i) => (
                      <p key={`${section.heading}-${i}`} className="mt-2">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
