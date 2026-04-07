import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const featuredCourses = [
  {
    title: 'Advanced Strategic Leadership & Management',
    category: 'Leadership',
    date: '15 - 19 Aug 2026',
    location: 'London, UK',
    price: '£3,450',
    tags: ['In-Person', 'Popular']
  },
  {
    title: 'Mini MBA in Business Management',
    category: 'Business Management',
    date: '02 - 06 Sep 2026',
    location: 'Dubai, UAE',
    price: '£3,800',
    tags: ['In-Person']
  },
  {
    title: 'Data Analytics for Decision Makers',
    category: 'Digital & Tech',
    date: 'Flexible Start',
    location: 'Online',
    price: '£1,950',
    tags: ['Online', 'New']
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#0b3d91] mb-3 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Highly recommended programmes starting soon
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-[#0b3d91] font-bold hover:text-[#facc15] transition-colors">
            View all schedule <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(11,61,145,0.12)] transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex gap-2 mb-4">
                  {course.tags.map(tag => (
                    <span key={tag} className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${tag === 'Popular' ? 'bg-[#facc15]/20 text-[#b38f00]' : tag === 'New' ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-[#0b3d91]'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug hover:text-[#0b3d91] transition-colors cursor-pointer">
                  {course.title}
                </h3>
                
                <p className="text-[#0b3d91] font-semibold text-sm mb-6 uppercase tracking-wide">
                  {course.category}
                </p>
                
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                    <Calendar size={18} className="text-gray-400" />
                    {course.date}
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                    <MapPin size={18} className="text-gray-400" />
                    {course.location}
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xl font-bold text-[#0b3d91]">{course.price}</div>
                <button className="px-5 py-2 bg-white border border-[#0b3d91] text-[#0b3d91] rounded-lg font-bold hover:bg-[#0b3d91] hover:text-white transition-colors text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
