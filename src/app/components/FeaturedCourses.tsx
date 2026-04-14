import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getAllCourseIds, getCourseById } from '@/data/courses';

const featuredImages: Record<string, string> = {
  'fraud-detection': '/pictures/pic1.jpg',
  'mini-mba': '/pictures/pic2.jpg',
  'data-analytics': '/pictures/pic3.jpg',
};

export function FeaturedCourses() {
  const featuredCourses = getAllCourseIds()
    .map((courseId) => getCourseById(courseId))
    .filter((course): course is NonNullable<typeof course> => course !== null)
    .slice(0, 3)
    .map((course) => ({
      id: course.id,
      title: course.title,
      category: course.category,
      duration: course.schedule[0]?.duration ?? 'TBC',
      date: course.schedule[0]?.date ?? 'TBC',
      venue: course.schedule[0]?.venue ?? 'TBC',
      price: course.schedule[0]?.price ?? 'TBC',
      image: featuredImages[course.id] ?? '/pictures/pic1.jpg',
    }));

  return (
    <section className="py-10 bg-[#002d80] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#facc15] font-bold uppercase tracking-[0.2em] text-sm mb-4">Find a Course</p>
          <h2 className="text-3xl font-black mb-4 tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
            Featured Courses
          </h2>
          <div className="w-24 h-1.5 bg-[#facc15] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCourses.map((course, index) => (
            <div key={index} className="bg-white/10 flex flex-col group overflow-hidden border border-white/15 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden p-6 pb-0">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-8 left-8 bg-[#facc15] text-[#002d80] px-3 py-1 font-black text-[10px] uppercase tracking-tighter">
                  {course.category}
                </div>
              </div>
              
              <div className="p-8 pt-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-6 leading-tight min-h-[3rem] group-hover:text-[#facc15] transition-colors">
                  {course.title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-400 text-[13px] font-medium">
                    <Calendar size={16} className="text-[#facc15]" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-[13px] font-medium">
                    <MapPin size={16} className="text-[#facc15]" />
                    <span>{course.venue}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-[13px] font-medium">
                    <Clock size={16} className="text-[#facc15]" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Price</span>
                    <span className="text-xl font-black text-[#facc15]">{course.price}</span>
                  </div>
                  <Link 
                    href={`/courses/${course.id}`}
                    className="bg-[#facc15] text-[#002d80] px-6 py-2.5 font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all transform hover:-translate-y-0.5"
                  >
                
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

