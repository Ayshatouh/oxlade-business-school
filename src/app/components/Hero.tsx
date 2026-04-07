import { Search } from 'lucide-react';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0b3d91] leading-tight">
              Elevate Your Professional Impact
            </h1>
            <p className="text-xl text-gray-600">
              World-class training programmes designed for ambitious professionals and forward-thinking organizations.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-2">
              <Search className="text-gray-400 ml-2" size={20} />
              <input
                type="text"
                placeholder="Search courses, topics, or skills..."
                className="flex-1 px-4 py-3 outline-none text-gray-700"
              />
              <button className="bg-[#0b3d91] text-white px-6 py-3 rounded-md hover:bg-[#083068] transition-colors font-medium whitespace-nowrap">
                Find a Course
              </button>
            </div>

            <div className="flex gap-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-[#0b3d91]">Popular:</span>
                <span className="ml-2">Leadership, Digital Marketing, Finance</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={imageUrl}
                alt="Professionals in a modern London boardroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3d91]/20 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border-l-4 border-[#facc15]">
              <div className="text-3xl font-bold text-[#0b3d91]">30+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}