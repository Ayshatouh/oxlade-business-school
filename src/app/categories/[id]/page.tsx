"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChevronRight, Filter, Search, Calendar, MapPin, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { use, useEffect, useMemo, useState } from 'react';
import { siteConfig } from '@/config/site';
import type { CourseCatalogMainCategory, CourseListingRow } from '@/lib/courseContent';
import {
  buildCourseListings,
  extractMonthYear,
  fetchAllCourses,
  fetchCourseCatalog,
  getCategoryLabelFromSlugFromCatalog,
  getListingsForSlugFromData,
  parseListingDateToTimestamp,
  parsePriceValue,
} from '@/lib/courseContent';

export default function CategoryListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [catalog, setCatalog] = useState<CourseCatalogMainCategory[]>([]);
  const [listings, setListings] = useState<CourseListingRow[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    Promise.all([fetchCourseCatalog(), fetchAllCourses()])
      .then(([catalogData, courses]) => {
        if (cancelled) return;
        setCatalog(catalogData);
        setListings(buildCourseListings(courses));
        setLoaded(true);
      })
      .catch(() => {
        if (cancelled) return;
        setCatalog([]);
        setListings([]);
        setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const categoryName = useMemo(
    () => getCategoryLabelFromSlugFromCatalog(id, catalog),
    [id, catalog]
  );
  const ROWS_PER_PAGE = 12;
  const [showFilters, setShowFilters] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVenues, setSelectedVenues] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState('any');
  const [selectedPriceRange, setSelectedPriceRange] = useState('any');
  const [sortBy, setSortBy] = useState('nearest-date');
  const [currentPage, setCurrentPage] = useState(1);

  const availableListings = useMemo(
    () => getListingsForSlugFromData(id, catalog, listings),
    [id, catalog, listings]
  );

  const availableVenues = useMemo(
    () => Array.from(new Set(availableListings.map((item) => item.venue))).sort((a, b) => a.localeCompare(b)),
    [availableListings]
  );

  const availableMonths = useMemo(() => {
    const months = new Set<string>();
    availableListings.forEach((row) => {
      const monthYear = extractMonthYear(row.date);
      if (monthYear) months.add(monthYear);
    });
    return Array.from(months);
  }, [availableListings]);

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    const filtered = availableListings.filter((course) => {
      const matchesSearch =
        term.length === 0 ||
        course.title.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term) ||
        course.venue.toLowerCase().includes(term);

      const matchesVenue =
        selectedVenues.length === 0 || selectedVenues.includes(course.venue);

      const monthYear = extractMonthYear(course.date);
      const matchesMonth =
        selectedMonth === 'any' || monthYear === selectedMonth;

      const price = parsePriceValue(course.price);
      const matchesPrice =
        selectedPriceRange === 'any' ||
        (selectedPriceRange === 'under-2000' && price < 2000) ||
        (selectedPriceRange === '2000-4000' && price >= 2000 && price <= 4000) ||
        (selectedPriceRange === 'over-4000' && price > 4000);

      return matchesSearch && matchesVenue && matchesMonth && matchesPrice;
    });

    const sorted = [...filtered];
    if (sortBy === 'title-az') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price-low') {
      sorted.sort((a, b) => parsePriceValue(a.price) - parsePriceValue(b.price));
    } else {
      sorted.sort((a, b) => {
        const aTs = parseListingDateToTimestamp(a.date);
        const bTs = parseListingDateToTimestamp(b.date);
        if (aTs === null && bTs === null) return a.title.localeCompare(b.title);
        if (aTs === null) return 1;
        if (bTs === null) return -1;
        return aTs - bTs;
      });
    }

    return sorted;
  }, [availableListings, searchTerm, selectedVenues, selectedMonth, selectedPriceRange, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ROWS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedCourses = useMemo(() => {
    const start = (safeCurrentPage - 1) * ROWS_PER_PAGE;
    return filteredCourses.slice(start, start + ROWS_PER_PAGE);
  }, [filteredCourses, safeCurrentPage, ROWS_PER_PAGE]);

  const toggleVenue = (venue: string) => {
    setSelectedVenues((prev) =>
      prev.includes(venue) ? prev.filter((v) => v !== venue) : [...prev, venue]
    );
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const resetToFirstPage = () => setCurrentPage(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Category Hero / Breadcrumbs */}
      <section className="pt-24 md:pt-44 pb-12 bg-zinc-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-zinc-400 mb-8 font-bold uppercase tracking-widest text-[10px]">
            <Link href="/" className="hover:text-[#002d80] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="#categories" className="hover:text-[#002d80] transition-colors">Categories</Link>
            <ChevronRight size={10} />
            <span className="text-[#002d80] font-normal">{categoryName}</span>
          </nav>
          
          <h1 className="text-4xl font-black text-[#002d80] tracking-tight leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
            {categoryName}
            <span className="block text-lg font-bold text-zinc-400 mt-2">Professional Training Programmes</span>
          </h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className={`lg:w-[360px] shrink-0 space-y-8 transition-all duration-300 ${showFilters ? 'block' : 'hidden lg:block opacity-50'}`}>
            <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
              <h3 className="font-black text-[#002d80] uppercase tracking-[0.2em] text-[11px]">Refine Selection</h3>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="text-zinc-400 hover:text-[#002d80] flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors"
              >
                <Filter size={14} /> {showFilters ? 'Hide' : 'Show'}
              </button>
            </div>
            
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <label className="block font-black text-[#002d80] uppercase tracking-widest text-[10px] mb-4">Course Search</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Search keywords..." 
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      resetToFirstPage();
                    }}
                    className="w-full pl-4 pr-12 py-3 bg-white border border-zinc-200 rounded-xl focus:border-[#002d80] focus:ring-4 focus:ring-[#002d80]/5 outline-none transition-all text-[13px] font-medium" 
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#002d80] transition-colors">
                    <Search size={16} />
                  </div>
                </div>
              </div>

              {/* Venue Filter - 2 per line */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#002d80]">
                  <MapPin size={16} className="text-[#facc15]" />
                  <span className="font-black uppercase tracking-widest text-[10px]">Training Venue</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {availableVenues.map(venue => (
                    <label key={venue} className="flex items-center gap-2 p-3 rounded-xl border border-zinc-100 hover:border-[#002d80]/20 hover:bg-zinc-50 cursor-pointer group transition-all">
                      <input
                        type="checkbox"
                        checked={selectedVenues.includes(venue)}
                        onChange={() => {
                          toggleVenue(venue);
                          resetToFirstPage();
                        }}
                        className="w-4 h-4 rounded border-zinc-300 text-[#002d80] focus:ring-[#002d80]"
                      />
                      <span className="text-[12px] font-bold text-zinc-600 group-hover:text-[#002d80] transition-colors">{venue}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Month Filter */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#002d80]">
                  <Calendar size={16} className="text-[#facc15]" />
                  <span className="font-black uppercase tracking-widest text-[10px]">Scheduled Month</span>
                </div>
                <select
                  value={selectedMonth}
                  onChange={(event) => {
                    setSelectedMonth(event.target.value);
                    resetToFirstPage();
                  }}
                  className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:border-[#002d80] outline-none text-[13px] font-bold text-zinc-600"
                >
                  <option value="any">Any Month</option>
                  {availableMonths.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#002d80]">
                  <DollarSign size={16} className="text-[#facc15]" />
                  <span className="font-black uppercase tracking-widest text-[10px]">Investment Range</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { label: 'Any Price', value: 'any' },
                    { label: 'Under £2,000', value: 'under-2000' },
                    { label: '£2,000 - £4,000', value: '2000-4000' },
                    { label: 'Over £4,000', value: 'over-4000' },
                  ].map((range) => (
                    <label key={range.value} className="flex items-center gap-3 px-4 py-2 cursor-pointer group hover:bg-zinc-50 rounded-lg transition-colors">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.value}
                        onChange={() => {
                          setSelectedPriceRange(range.value);
                          resetToFirstPage();
                        }}
                        className="w-4 h-4 border-zinc-300 text-[#002d80] focus:ring-[#002d80]"
                      />
                      <span className="text-[13px] font-bold text-zinc-600 group-hover:text-[#002d80] transition-colors">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Course Table */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[11px] font-black uppercase text-zinc-400 tracking-widest">Showing {filteredCourses.length} Programmes</p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-zinc-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value);
                    resetToFirstPage();
                  }}
                  className="text-[11px] font-black uppercase tracking-widest text-[#002d80] border-none bg-transparent outline-none cursor-pointer"
                >
                  <option value="nearest-date">Nearest Date</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="title-az">Title: A-Z</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto border border-zinc-100 rounded-2xl shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Course Title</th>
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Scheduled Date</th>
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Location</th>
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Duration</th>
                    <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-right">Investment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
              {paginatedCourses.map((course, idx) => (
                    <tr key={idx} className="hover:bg-[#002d80]/[0.02] transition-colors group cursor-pointer">
                      <td className="px-6 py-5">
                        <Link href={`/courses/${course.courseId}`} className="font-normal text-gray-900 group-hover:text-[#002d80] transition-all leading-tight block text-[14px]">
                          {course.title}
                        </Link>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-zinc-500 font-normal text-[13px]">
                          <Calendar size={14} className="text-[#facc15]" />
                          {course.date}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-zinc-500 font-normal text-[13px]">{course.venue}</td>
                      <td className="px-6 py-5 text-zinc-500 font-normal text-[13px]">{course.duration}</td>
                      <td className="px-6 py-5 font-normal text-gray-900 text-right text-[14px]">{course.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="mt-8 p-6 rounded-2xl border border-zinc-100 bg-zinc-50 text-zinc-600 text-sm">
                No programmes match the selected filters. Try clearing one or more filters.
              </div>
            )}

            {filteredCourses.length > 0 && (
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                  Page {safeCurrentPage} of {totalPages}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(safeCurrentPage - 1)}
                    disabled={safeCurrentPage === 1}
                    className="px-4 py-2 rounded-full border border-zinc-200 text-[11px] font-black uppercase tracking-widest text-[#002d80] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => goToPage(safeCurrentPage + 1)}
                    disabled={safeCurrentPage === totalPages}
                    className="px-4 py-2 rounded-full border border-zinc-200 text-[11px] font-black uppercase tracking-widest text-[#002d80] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Marketing / SEO Section */}
        <section className="mt-24 pt-24 border-t border-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-[#002d80] mb-8 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                Master {categoryName} Skills
              </h2>
              <div className="space-y-6 text-zinc-500 leading-relaxed font-normal text-[15px]">
                <p>
                  In today’s competitive business landscape, mastering {categoryName.toLowerCase()} is essential for your professional growth. At {siteConfig.name}, we deliver expert-led courses designed to enhance your capabilities and drive measurable success.
                </p>
                <p>
                  Whether you’re seeking to master innovative marketing strategies or refine your sales techniques, our comprehensive programmes provide you with practical skills you can implement immediately.
                </p>
              </div>
            </div>

            <div className="bg-[#002d80] text-white p-8 md:p-12 rounded-3xl md:rounded-[3rem] relative overflow-hidden shadow-2xl flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h3 className="text-2xl font-black mb-6 relative z-10" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>Ready to elevate your career?</h3>
              <p className="text-white/60 mb-10 relative z-10 leading-relaxed font-normal text-[15px]">
                Our team is ready to help you find the perfect training solution for you or your organisation.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <Link href="/enquiry" className="bg-[#facc15] text-[#002d80] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
                  Submit Enquiry
                </Link>
                <Link href="/enquiry" className="bg-white/10 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/20 transition-all border border-white/10 text-center">
                  Course Brochure
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
