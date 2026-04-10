import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  cityFromVenueSlug,
  getCoursesForCity,
  VENUE_SLUGS,
} from "@/data/venueCourses";

const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

export function generateStaticParams() {
  return VENUE_SLUGS.map((slug) => ({ slug }));
}

export default async function CoursesByVenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cityFromVenueSlug(slug);
  if (!city) notFound();

  const courses = getCoursesForCity(city);

  return (
    <div className="min-h-screen bg-white text-[12px] leading-[1.35]">
      <Header />

      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-gray-400 mb-6 font-medium flex-wrap">
            <Link href="/" className="hover:text-[#002d80]">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-gray-500">By location</span>
            <ChevronRight size={12} />
            <span className="text-gray-900">{city}</span>
          </nav>

          <p className="text-[#002d80] font-bold uppercase tracking-[0.2em] text-sm mb-3">
            Open courses
          </p>
          <h1
            className="text-3xl font-black text-[#002d80] tracking-tight"
            style={playfair}
          >
            Scheduled courses in {city}
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl text-[13px] leading-relaxed">
            Dates and fees for public programmes currently offered in this city. Select a title
            to view the full outline, objectives, and booking options.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="overflow-x-auto border border-gray-100 rounded-lg">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider">
                  Course title
                </th>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-right">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {courses.map((course, idx) => (
                <tr key={`${course.courseId}-${course.date}-${idx}`} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <Link
                      href={`/courses/${course.courseId}`}
                      className="font-bold text-gray-900 group-hover:text-[#002d80] transition-colors leading-tight block"
                    >
                      {course.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium whitespace-nowrap">
                    {course.date}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{course.venue}</td>
                  <td className="px-6 py-4 font-bold text-[#002d80] text-right">
                    {course.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {courses.length === 0 && (
          <p className="text-center text-gray-600 py-16">
            No open courses are listed for this location yet.{" "}
            <Link href="/" className="text-[#002d80] font-bold hover:underline">
              Return home
            </Link>{" "}
            to explore other formats.
          </p>
        )}

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[#002d80] font-bold text-sm hover:text-[#facc15] transition-colors"
          >
            <ChevronLeft size={14} />
            Back to home
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
