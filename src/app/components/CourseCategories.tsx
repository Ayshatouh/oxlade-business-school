"use client";

import { useEffect, useState, type ComponentType } from 'react';
import { TrendingUp, Building2, Users, Settings, Landmark, Globe, UserCheck, Scale, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { buildCategoryGroups, fetchCourseCatalog, getCategoryPath } from '@/lib/courseContent';
import type { CourseCategoryGroup } from '@/lib/courseContent';

const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

const iconByCategory: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  'New and Trending': TrendingUp,
  'Digital': Globe,
  'Business Management': Building2,
  'Leadership': Users,
  'Operations Management': Settings,
  'Banking and Finance': Landmark,
  'Specialist Sectors': Globe,
  'Human Resources Management': UserCheck,
  'Law': Scale,
};

export function CourseCategories() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const headingText = "Explore Our Course Categories";
  const [groups, setGroups] = useState<CourseCategoryGroup[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchCourseCatalog()
      .then((catalog) => {
        if (!cancelled) setGroups(buildCategoryGroups(catalog));
      })
      .catch(() => {
        if (!cancelled) setGroups([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <section className="py-6 bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="text-center mb-12 w-full max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-[#002d80] mb-4 tracking-tight leading-tight" style={playfair}>
          {headingText.split("").map((char, i) => (
            <span 
              key={i} 
              className={`inline-block animate-reveal-letter ${char === " " ? "mr-2" : ""}`}
              style={{ 
                animationDelay: `${i * 30}ms`,
                animationFillMode: 'both'
              }}
            >
              <span 
                className="inline-block animate-color-sweep"
                style={{ 
                  animationDelay: `${2000 + (i * 100)}ms`,
                  animationIterationCount: 'infinite'
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h2>
        <p className="text-gray-900 font-medium">
          Comprehensive training solutions across all business disciplines
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {groups.map((category) => {
          const Icon = iconByCategory[category.name] ?? Building2;
          const isOpen = openCategory === category.name;

          return (
            <div
              key={category.name}
              className="bg-white border border-gray-200/50 rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.01)] overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50/80 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#002d80]/5 flex items-center justify-center text-[#002d80]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#002d80] transition-colors leading-tight">
                    {category.name}
                  </h3>
                </div>
                <div className={`w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#002d80] text-white' : ''}`}>
                  <ChevronDown size={14} />
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-gray-50/30">
                  <ul className="space-y-2.5 pb-2">
                    {category.items.map((item) => (
                      <li key={item} className="group">
                        <Link 
                          href={getCategoryPath(item)}
                          className="flex items-start gap-2 text-[12.5px] text-gray-900 font-medium hover:text-[#002d80] transition-all cursor-pointer"
                        >
                          <ChevronRight size={14} className="mt-[2px] flex-shrink-0 text-[#facc15] group-hover:translate-x-1 transition-transform" />
                          <span className="leading-relaxed">{item}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes revealLetter {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes colorSweep {
          0%, 100% {
            color: inherit;
          }
          50% {
            color: #facc15;
          }
        }
        .animate-reveal-letter {
          animation: revealLetter 0.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }
        .animate-color-sweep {
          animation: colorSweep 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}