"use client";

import { useState } from 'react';
import { TrendingUp, Building2, Users, Settings, Landmark, Globe, UserCheck, Scale, ChevronRight, ChevronDown } from 'lucide-react';

const categories = [
  { 
    name: 'New and Trending', 
    icon: TrendingUp,
    items: ['Sustainability and Climate Science'] 
  },
  { 
    name: 'Business Management', 
    icon: Building2,
    items: ['Personal Effectiveness', 'Strategic Planning and Management', 'Sales and Marketing', 'Public and Media Relations', 'Office Administration'] 
  },
  { 
    name: 'Leadership', 
    icon: Users,
    items: ['Strategic Leadership', 'Driving Organisational Change', 'Executive Coaching and Mentoring', 'Environmental, Social and Governance', 'Governance and Risk Management'] 
  },
  { 
    name: 'Operations Management', 
    icon: Settings,
    items: ['Project Management', 'Business Process Improvement', 'Facilities Management', 'Logistics and Supply Chain Management', 'Contract Management and Procurement', 'Hospitality, Tourism, and Events Management'] 
  },
  { 
    name: 'Banking and Finance', 
    icon: Landmark,
    items: ['Reporting and Budgeting', 'Corporate Finance', 'Audit and Accounting', 'Financial Regulation and Compliance', 'Financial Modelling'] 
  },
  { 
    name: 'Specialist Sectors', 
    icon: Globe,
    items: ['Oil and Gas', 'Renewable Energy', 'Sports Business', 'Engineering', 'Real Estate', 'Construction', 'Law', 'Islamic Finance'] 
  },
  { 
    name: 'Human Resources Management', 
    icon: UserCheck,
    items: ['Recruitment and Talent Acquisition', 'Employee Wellbeing and Diversity', 'Learning and Development', 'Performance Management', 'Neurodiversity in the Workplace'] 
  },
  { 
    name: 'Law', 
    icon: Scale, 
    items: ['Legislative and Policy Framework', 'Dispute Management', 'Legal Reasoning', 'Business Law', 'Cyber Law', 'Corporate Islamic Law'] 
  },
];

export function CourseCategories() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <section className="pt-4 pb-16 bg-zinc-50 dark:bg-black">
      <div className="text-center mb-10 w-full max-w-3xl mx-auto">
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#0b3d91] mb-3 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
          Explore Our Course Categories
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Comprehensive training solutions across all business disciplines
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {categories.map((category) => {
          const Icon = category.icon;
          const isOpen = openCategory === category.name;

          return (
            <div
              key={category.name}
              className="bg-white border border-gray-200/60 rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0b3d91]/5 flex items-center justify-center text-[#0b3d91]">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0b3d91] transition-colors">
                    {category.name}
                  </h3>
                </div>
                <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0b3d91] text-white' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50">
                  <ul className="space-y-3 pb-6">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[14px] text-gray-700 font-medium hover:text-[#0b3d91] transition-colors cursor-pointer group">
                        <ChevronRight size={16} className="mt-[2px] flex-shrink-0 text-[#facc15] group-hover:translate-x-1 transition-transform" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}