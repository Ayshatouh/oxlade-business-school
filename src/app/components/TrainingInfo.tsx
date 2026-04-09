import { Globe, Users } from 'lucide-react';

export function TrainingInfo() {
  return (
    <section className="py-16 bg-zinc-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Multiple Training Formats */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#0b3d91]/5 flex items-center justify-center text-[#0b3d91] mb-6">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-[1.75rem] font-extrabold text-[#0b3d91] mb-5 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
              Multiple Training Formats
            </h2>
            <p className="text-gray-900 leading-relaxed font-medium">
              We offer different training formats, including classroom open (public) courses, in-house classroom customised courses, and online training courses, all fully designed to suit client requirements.
            </p>
            <a href="#" className="mt-8 text-[#0b3d91] font-bold hover:text-[#facc15] transition-colors uppercase tracking-wide text-sm">
              Explore Formats &rarr;
            </a>
          </div>

          {/* International Training Venues */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#0b3d91]/5 flex items-center justify-center text-[#0b3d91] mb-6">
              <Globe size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-[1.75rem] font-extrabold text-[#0b3d91] mb-5 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
              International Training Venues
            </h2>
            <p className="text-gray-900 leading-relaxed font-medium">
              We offer open (public) courses in leading international locations across the world, including Abuja, Barcelona, Dubai, Istanbul, London, New York and Singapore and customised courses anywhere in the world to meet client requirements.
            </p>
            <a href="#" className="mt-8 text-[#0b3d91] font-bold hover:text-[#facc15] transition-colors uppercase tracking-wide text-sm">
              View Venues &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
