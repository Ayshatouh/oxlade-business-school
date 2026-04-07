"use client";
import { Phone, Mail, ChevronDown, ChevronRight, MapPin, Monitor, Users, BookOpen, Building } from 'lucide-react';
import { useState, useRef, useEffect, Fragment } from 'react';

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTopMenu, setActiveTopMenu] = useState<string | null>(null);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const topMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
      if (topMenuRef.current && !topMenuRef.current.contains(event.target as Node)) {
        setActiveTopMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const navMenus = [
    { name: 'Home', href: '#home' },
    { name: 'Open Courses', hasDropdown: true },
    { name: 'Group Programmes', href: '#group-programmes' },
    { name: 'Training Locations', hasDropdown: true },
    { name: 'Training Formats', hasDropdown: true },
    { name: 'Calendar', href: '#calendar' }
  ];

  const openCourses = [
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
  ];

  const trainingLocations = ['Barcelona', 'Cape Town', 'Dubai', 'Istanbul', 'London', 'New York', 'Paris', 'Riyadh', 'Singapore'];
  
  const trainingFormats = [
    { label: 'Classroom Training', icon: BookOpen },
    { label: 'Online Training', icon: Monitor },
    { label: 'In-House Training', icon: Building }
  ];

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const renderDropdownContent = (menuName: string) => {
    switch (menuName) {
      case 'Open Courses':
        return (
          <div className="absolute top-[calc(100%+16px)] left-0 w-full bg-[#f8f9fa] shadow-2xl border border-gray-200 rounded-b-xl p-6 z-50 animate-slideDownFade overflow-hidden">
            <div className="grid grid-cols-4 gap-x-6 gap-y-8">
              {openCourses.map((category) => (
                <div key={category.category} className="space-y-2.5">
                  <h4 className="text-gray-800 text-sm font-medium border-b border-gray-300 pb-1.5">
                    {category.category}
                  </h4>
                  <ul className="space-y-1.5">
                    {category.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="flex items-start gap-1.5 text-gray-600 hover:text-[#0b3d91] group/item transition-all duration-200 text-[13px]"
                        >
                          <ChevronRight size={13} className="mt-0.5 flex-shrink-0 text-gray-400 group-hover/item:text-[#0b3d91]" />
                          <span className="leading-snug">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Training Locations':
        return (
          <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-[#f4f5f7] shadow-xl border border-gray-200 rounded-xl px-4 py-8 z-50 animate-slideDownFade overflow-hidden flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-y-6 flex-row w-full">
              {trainingLocations.map((loc, index) => (
                <Fragment key={loc}>
                  <a href="#" className="flex items-center gap-1.5 text-gray-700 hover:text-[#0b3d91] transition-colors group px-4 whitespace-nowrap">
                    <MapPin size={14} className="text-[#3b82f6] group-hover:text-[#facc15] transition-colors" />
                    <span className="text-[12px] font-semibold tracking-wide uppercase whitespace-nowrap">{loc}</span>
                  </a>
                  {index < trainingLocations.length - 1 && (
                    <span className="w-px h-6 bg-gray-300 hidden md:block"></span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        );

      case 'Training Formats':
        return (
          <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[600px] w-auto bg-[#f4f5f7] shadow-xl border border-gray-200 rounded-xl px-12 py-8 z-50 animate-slideDownFade overflow-hidden flex items-center justify-center">
            <div className="flex items-center justify-center gap-x-10 flex-row">
              {trainingFormats.map((format, index) => {
                const Icon = format.icon;
                return (
                  <Fragment key={format.label}>
                    <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#0b3d91] transition-colors group whitespace-nowrap">
                      <Icon size={15} className="text-[#3b82f6] group-hover:text-[#facc15] transition-colors" />
                      <span className="text-[12px] font-semibold tracking-wide uppercase whitespace-nowrap">{format.label}</span>
                    </a>
                    {index < trainingFormats.length - 1 && (
                      <span className="w-px h-6 bg-gray-300 hidden md:block"></span>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#0b3d91] text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center" ref={topMenuRef}>
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
                onClick={() => setActiveTopMenu(activeTopMenu === menuItem ? null : menuItem)}
              >
                <button className="flex items-center gap-1 text-sm hover:text-[#facc15] transition-colors">
                  {menuItem}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeTopMenu === menuItem ? 'rotate-180' : ''}`}/>
                </button>

                {activeTopMenu === menuItem && (
                  <div className="absolute top-full right-0 mt-2 bg-white text-gray-700 shadow-xl border border-gray-200 rounded-lg min-w-[500px] p-6 z-50 animate-slideDownFade">
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
        <div className="max-w-7xl mx-auto flex justify-between items-center relative" ref={menuRef}>
          <div
            className="text-2xl font-bold text-[#0b3d91]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", letterSpacing: "0.06em" }}
          >
            OXLADE
          </div>

          <div className="flex gap-8 items-center">
            {navMenus.map((navItem) => (
              <Fragment key={navItem.name}>
                {navItem.hasDropdown ? (
                  <div className="relative">
                    <button 
                      onClick={() => toggleMenu(navItem.name)}
                      className="flex items-center gap-1 py-4 -my-4 text-gray-700 hover:text-[#0b3d91] transition-all duration-300 font-medium group"
                    >
                      <span className="relative">
                        {navItem.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#facc15] group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${activeMenu === navItem.name ? 'rotate-180 text-[#0b3d91]' : ''}`}
                      />
                    </button>
                    {/* The dropdown will be rendered inside this relative wrapper or absolute to the root */}
                  </div>
                ) : (
                  <a href={navItem.href} className="text-gray-700 hover:text-[#0b3d91] transition-colors font-medium relative group py-2">
                    {navItem.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#facc15] group-hover:w-full transition-all duration-300"></span>
                  </a>
                )}
              </Fragment>
            ))}

            {/* Render the active dropdown */}
            {activeMenu && renderDropdownContent(activeMenu)}
          </div>
        </div>
      </nav>
    </header>
  );
}