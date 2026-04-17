"use client";
import { Phone, Mail, ChevronDown, ChevronRight, MapPin, Monitor, Users, BookOpen, Building, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getVenueCityLinks } from '@/data/venueCourses';
import { buildCategoryGroups, fetchCourseCatalog, getCategoryPath } from '@/lib/courseContent';
import type { CourseCategoryGroup } from '@/lib/courseContent';


export const getTopNavLink = (item: string) => {
  switch (item) {
    case 'About': return '/about';
    case 'Our Team': return '/team';
    default: return `/info/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTopMenu, setActiveTopMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);

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

  const [openCourses, setOpenCourses] = useState<CourseCategoryGroup[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchCourseCatalog()
      .then((catalog) => {
        if (!cancelled) setOpenCourses(buildCategoryGroups(catalog));
      })
      .catch(() => {
        if (!cancelled) setOpenCourses([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const topNavItems = {
    'About': ['About', 'Our Team', 'Our Course Locations', 'Our Training Venues', 'Our Training Consultants', 'Careers', 'Reviews'],
    'Info': ['Clients', 'Accredetation', 'Accomodation', 'Airport Transfers', 'Policies', 'Visas', 'Terms and Conditions', 'Privacy Policy'],
    'Resources': ['Brochures and Calenders', 'Case Studies'],
  };

  const navMenus = [
    { name: 'Home', href: '/' },
    { name: 'Open Courses', hasDropdown: true },
    { name: 'Group Programmes', href: '#group-programmes' },
    { name: 'Training Locations', hasDropdown: true },
    { name: 'Training Formats', hasDropdown: true },
    { name: 'Calendar', href: '#calendar' }
  ];

  const trainingLocations = getVenueCityLinks().map(link => link.label);

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
          <div className="absolute top-[calc(100%+16px)] left-0 w-full bg-[#f8f9fa] shadow-2xl border border-gray-200 rounded-b-xl p-6 z-50 animate-slideDownFade overflow-hidden hidden lg:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              {openCourses.map((category) => (
                <div key={category.name} className="space-y-2.5">
                  <h4 className="text-gray-800 text-sm font-medium border-b border-gray-300 pb-1.5">
                    {category.name}
                  </h4>
                  <ul className="space-y-1.5">
                    {category.items.map((item) => (
                      <li key={item}>
                        <Link
                          href={getCategoryPath(item)}
                          className="flex items-start gap-1.5 text-gray-800 hover:text-[#002d80] focus-visible:text-[#002d80] focus-visible:outline-none group/item transition-colors duration-200 text-[13px]"
                        >
                          <ChevronRight
                            size={13}
                            className="mt-0.5 flex-shrink-0 text-gray-500 group-hover/item:text-[#002d80] group-focus-visible/item:text-[#002d80]"
                            aria-hidden
                          />
                          <span className="leading-snug">{item}</span>
                        </Link>
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
          <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-[#f4f5f7] shadow-xl border border-gray-200 rounded-xl px-4 py-8 z-50 animate-slideDownFade overflow-hidden hidden lg:flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-y-6 flex-row w-full">
              {trainingLocations.map((loc, index) => (
                <Fragment key={loc}>
                  <a href="#" className="flex items-center gap-1.5 text-black hover:text-[#002d80] transition-colors group px-4 whitespace-nowrap">
                    <MapPin size={14} className="text-[#002d80] group-hover:text-[#facc15] transition-colors" />
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
          <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[600px] w-[90%] max-w-6xl bg-[#f4f5f7] shadow-xl border border-gray-200 rounded-xl px-12 py-8 z-50 animate-slideDownFade overflow-hidden hidden lg:flex items-center justify-center">
            <div className="flex items-center justify-center gap-x-10 flex-row">
              {trainingFormats.map((format, index) => {
                const Icon = format.icon;
                return (
                  <Fragment key={format.label}>
                    <a href="#" className="flex items-center gap-2 text-black hover:text-[#002d80] transition-colors group whitespace-nowrap">
                      <Icon size={15} className="text-[#002d80] group-hover:text-[#facc15] transition-colors" />
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
      <div className="bg-[#002d80] text-white py-2 px-6 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2" ref={topMenuRef}>
          <div className="flex gap-6">
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-[#facc15] transition-colors">
              <Phone size={16} />
              <span className="text-[13px] font-medium">{siteConfig.phone}</span>
            </a>

            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[#facc15] transition-colors">
              <Mail size={16} />
              <span className="text-[13px] font-medium">{siteConfig.email}</span>
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
                <button className="flex items-center gap-1 text-[13px] font-medium hover:text-[#facc15] transition-colors">
                  {menuItem}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeTopMenu === menuItem ? 'rotate-180' : ''}`} />
                </button>

                {activeTopMenu === menuItem && (
                  <div className="absolute top-full right-0 mt-0 bg-[#002d80] text-white shadow-2xl min-w-[240px] z-50 animate-slideDownFade border border-white/5">
                    <ul className="flex flex-col">
                      {topNavItems[menuItem as keyof typeof topNavItems].map((item, idx) => (
                        <li key={item} className="border-b border-white/5 last:border-0">
                          <a
                            href={getTopNavLink(item)}
                            className="block px-6 py-3.25 text-[13px] hover:bg-white/5 transition-colors whitespace-nowrap"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <a href="#faqs" className="text-[13px] font-medium hover:text-[#facc15] transition-colors">FAQs</a>
            <a href="#blog" className="text-[13px] font-medium hover:text-[#facc15] transition-colors">Blog</a>
            <a href="#contact" className="text-[13px] font-medium hover:text-[#facc15] transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative" ref={menuRef}>
          <a href="/" className="block">
            <img
              src="/pictures/oxladebiz.png"
              alt={`${siteConfig.name} Logo`}
              className="h-12 w-auto object-contain"
            />

          </a>
          
          <button 
            className="lg:hidden p-2 text-[#002d80] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden lg:flex gap-8 items-center">
            {navMenus.map((navItem) => (
              <Fragment key={navItem.name}>
                {navItem.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleMenu(navItem.name)}
                      className="flex items-center gap-1 py-4 -my-4 text-gray-900 hover:text-[#002d80] transition-all duration-300 font-medium text-[15px] group"
                    >
                      <span className="relative">
                        {navItem.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#facc15] group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${activeMenu === navItem.name ? 'rotate-180 text-[#002d80]' : ''}`}
                      />
                    </button>
                    {/* The dropdown will be rendered inside this relative wrapper or absolute to the root */}
                  </div>
                ) : (
                  <a href={navItem.href} className="text-gray-900 hover:text-[#002d80] transition-colors font-medium text-[15px] relative group py-2">
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-white z-[60] overflow-y-auto pb-20 animate-slideInLeft">
          <div className="px-6 py-8 space-y-8">
            {/* Quick Contact for Mobile */}
            <div className="sm:hidden grid grid-cols-1 gap-4 pb-6 border-b border-gray-100">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-gray-800">
                <div className="w-10 h-10 bg-[#002d80]/5 rounded-full flex items-center justify-center text-[#002d80]">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold">{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-gray-800">
                <div className="w-10 h-10 bg-[#002d80]/5 rounded-full flex items-center justify-center text-[#002d80]">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-bold">{siteConfig.email}</span>
              </a>

            </div>

            {/* Main Nav Items */}
            <ul className="space-y-6">
              {navMenus.map((item) => (
                <li key={item.name} className="border-b border-gray-50 pb-4">
                  {item.hasDropdown ? (
                    <div>
                      <button 
                        onClick={() => {
                          setExpandedMobileMenus(prev => 
                            prev.includes(item.name) ? prev.filter(m => m !== item.name) : [...prev, item.name]
                          );
                        }}
                        className="flex items-center justify-between w-full text-lg font-black text-[#002d80]"
                      >
                        {item.name}
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${expandedMobileMenus.includes(item.name) ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {expandedMobileMenus.includes(item.name) && (
                        <div className="mt-4 pl-4 border-l-2 border-[#facc15] space-y-4">
                          {item.name === 'Open Courses' ? (
                            openCourses.map(cat => (
                              <div key={cat.name}>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{cat.name}</h4>
                                <ul className="space-y-2">
                                  {cat.items.slice(0, 3).map(course => (
                                    <li key={course}>
                                      <Link 
                                        href={getCategoryPath(course)}
                                        className="text-gray-700 text-[15px] font-medium block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {course}
                                      </Link>
                                    </li>
                                  ))}
                                  {cat.items.length > 3 && (
                                    <li>
                                      <Link href="#" className="text-[#002d80] text-xs font-bold" onClick={() => setIsMobileMenuOpen(false)}>See More...</Link>
                                    </li>
                                  )}
                                </ul>
                              </div>
                            ))
                          ) : item.name === 'Training Locations' ? (
                            <div className="grid grid-cols-2 gap-3">
                              {trainingLocations.map(loc => (
                                <a key={loc} href="#" className="text-gray-700 text-[15px] font-medium flex items-center gap-2">
                                  <MapPin size={14} className="text-[#facc15]" />
                                  {loc}
                                </a>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {trainingFormats.map(format => {
                                const Icon = format.icon;
                                return (
                                  <a key={format.label} href="#" className="flex items-center gap-3 text-gray-700 text-[15px] font-medium">
                                    <Icon size={18} className="text-[#002d80]" />
                                    {format.label}
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href || '#'} 
                      className="text-lg font-black text-[#002d80] block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Support Nav for Mobile */}
            <div className="grid grid-cols-2 gap-4 pt-10 border-t border-gray-100">
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">About Us</h4>
                <ul className="space-y-2">
                  {topNavItems['About'].slice(0, 4).map(link => (
                    <li key={link}><a href={getTopNavLink(link)} className="text-gray-600 text-sm">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Helpful Information</h4>
                <ul className="space-y-2">
                  {topNavItems['Info'].slice(0, 4).map(link => (
                    <li key={link}><a href={getTopNavLink(link)} className="text-gray-600 text-sm">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}