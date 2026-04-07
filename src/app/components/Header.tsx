"use client";
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';
export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTopMenu, setActiveTopMenu] = useState<string | null>(null);

  const topNavItems = {
    'About': [
      { category: 'Company', items: ['Our Story', 'Team', 'Careers', 'Accreditation'] },
      { category: 'Why Choose Us', items: ['Quality Guarantee', 'Client Success', 'Industry Recognition'] },
    ],
    'Info': [
      { category: 'Getting Started', items: ['How to Book', 'Payment Options', 'Cancellation Policy'] },
      { category: 'Support', items: ['Help Centre', 'Technical Support', 'Accessibility'] },
    ],
    'Resources': [
      { category: 'Library', items: ['Case Studies', 'Whitepapers', 'Guides', 'Templates'] },
      { category: 'Tools', items: ['Skills Assessment', 'ROI Calculator', 'Training Planner'] },
    ],
  };

  const mainNavItems = {
    'Open Courses': [
      { 
        category: 'Digital', 
        items: ['Digital Transformation', 'Data Analytics', 'Cybersecurity', 'Artificial Intelligence'] 
      },
      { 
        category: 'Business Management', 
        items: ['Personal Effectiveness', 'Strategic Planning and Management', 'Sales and Marketing', 'Public and Media Relations', 'Office Administration'] 
      },
      { 
        category: 'Leadership', 
        items: ['Strategic Leadership', 'Driving Organisational Change', 'Executive Coaching and Mentoring', 'Environmental, Social and Governance', 'Governance and Risk Management'] 
      },
      { 
        category: 'Operations Management', 
        items: ['Project Management', 'Business Process Improvement', 'Facilities Management', 'Logistics and Supply Chain Management', 'Contract Management and Procurement', 'Hospitality, Tourism, and Events Management'] 
      },
      { 
        category: 'Banking and Finance', 
        items: ['Reporting and Budgeting', 'Corporate Finance', 'Audit and Accounting', 'Financial Regulation and Compliance', 'Financial Modelling'] 
      },
      { 
        category: 'Specialist Sectors', 
        items: ['Oil and Gas', 'Renewable Energy', 'Sports Business', 'Engineering', 'Real Estate', 'Construction', 'Law', 'Islamic Finance and Law'] 
      },
      { 
        category: 'Human Resources Management', 
        items: ['Recruitment and Talent Acquisition', 'Employee Wellbeing and Diversity', 'Learning and Development', 'Performance Management', 'Neurodiversity in the Workplace'] 
      },
      { 
        category: 'Law', 
        items: ['Legislative and Policy Framework', 'Dispute Management', 'Legal Reasoning', 'Business Law', 'Cyber Law', 'Corporate Islamic Law'] 
      },
      { 
        category: 'New and Trending', 
        items: ['Sustainability and Climate Science'] 
      },
    ],
    'Training Locations': [
      { category: 'UK', items: ['London', 'Manchester', 'Birmingham', 'Edinburgh'] },
      { category: 'Europe', items: ['Paris', 'Berlin', 'Amsterdam', 'Madrid'] },
      { category: 'Americas', items: ['New York', 'Toronto', 'São Paulo'] },
      { category: 'Asia', items: ['Singapore', 'Hong Kong', 'Dubai', 'Tokyo'] },
      { category: 'Africa', items: ['Cape Town', 'Lagos', 'Nairobi', 'Cairo'] },
    ],
    'Training Formats': [
      { category: 'Learning Styles', items: ['In-Person', 'Virtual Live', 'On-Demand', 'Hybrid'] },
      { category: 'Duration', items: ['1-Day Intensive', '3-Day Programme', 'Weekly Sessions', 'Bespoke Programme'] },
    ],
  };

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#0b3d91] text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+442071234567" className="flex items-center gap-2 hover:text-[#facc15] transition-colors">
              <Phone size={16} />
              <span className="text-sm">+44 (0)20 7123 4567</span>
            </a>
            <a href="mailto:info@oxlade.com" className="flex items-center gap-2 hover:text-[#facc15] transition-colors">
              <Mail size={16} />
              <span className="text-sm">info@oxlade.com</span>
            </a>
          </div>
          
          {/* Top Navigation */}
          <div className="flex gap-6 items-center">
            {Object.keys(topNavItems).map((menuItem) => (
              <div
                key={menuItem}
                className="relative"
                onMouseEnter={() => setActiveTopMenu(menuItem)}
                onMouseLeave={() => setActiveTopMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm hover:text-[#facc15] transition-colors">
                  {menuItem}
                  <ChevronDown size={14} />
                </button>

                {activeTopMenu === menuItem && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-700 shadow-xl border border-gray-200 rounded-lg min-w-[500px] p-6 z-50 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-6">
                      {topNavItems[menuItem as keyof typeof topNavItems].map((category) => (
                        <div key={category.category}>
                          <h4 className="font-semibold text-[#0b3d91] mb-3">{category.category}</h4>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-[#facc15] transition-colors text-sm"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <a href="#faqs" className="text-sm hover:text-[#facc15] transition-colors">FAQs</a>
            <a href="#blog" className="text-sm hover:text-[#facc15] transition-colors">Blog</a>
            <a href="#contact" className="text-sm hover:text-[#facc15] transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#0b3d91]">
            OXLADE
          </div>

          <div className="flex gap-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-[#0b3d91] transition-colors font-medium">
              Home
            </a>

            {Object.keys(mainNavItems).map((menuItem) => (
              <div
                key={menuItem}
                className="relative"
              >
                <button 
                  onClick={() => toggleMenu(menuItem)}
                  className="flex items-center gap-1 py-2 text-gray-700 hover:text-[#0b3d91] transition-all duration-300 font-medium group"
                >
                  <span className="relative">
                    {menuItem}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#facc15] group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${activeMenu === menuItem ? 'rotate-180' : ''}`}
                  />
                </button>

                {activeMenu === menuItem && (
                  <div className="absolute top-full left-0 mt-0 bg-white shadow-2xl border border-gray-200 rounded-lg min-w-[900px] p-8 animate-slideDown">
                    <div className={`grid gap-8 ${menuItem === 'Open Courses' ? 'grid-cols-3' : 'grid-cols-3'}`}>
                      {mainNavItems[menuItem as keyof typeof mainNavItems].map((category) => (
                        <div key={category.category} className="space-y-3">
                          <h4 className="font-bold text-[#0b3d91] mb-3 text-base border-b border-gray-200 pb-2">{category.category}</h4>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-[#facc15] hover:translate-x-1 transition-all duration-200 text-sm block"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a href="#group-programmes" className="text-gray-700 hover:text-[#0b3d91] transition-colors font-medium">
              Group Programmes
            </a>

            <a href="#calendar" className="text-gray-700 hover:text-[#0b3d91] transition-colors font-medium">
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}