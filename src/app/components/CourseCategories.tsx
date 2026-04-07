import { Monitor, Users, TrendingUp, UserCheck, Scale, Heart, Building2, Lightbulb, Shield } from 'lucide-react';

const categories = [
  { name: 'Digital & Tech', icon: Monitor, color: 'from-blue-500 to-blue-600' },
  { name: 'Leadership', icon: Users, color: 'from-[#facc15] to-[#e5b805]' },
  { name: 'Finance & Accounting', icon: TrendingUp, color: 'from-[#0b3d91] to-[#083068]' },
  { name: 'Human Resources', icon: UserCheck, color: 'from-purple-500 to-purple-600' },
  { name: 'Legal & Compliance', icon: Scale, color: 'from-red-500 to-red-600' },
  { name: 'Healthcare', icon: Heart, color: 'from-pink-500 to-pink-600' },
  { name: 'Project Management', icon: Building2, color: 'from-green-500 to-green-600' },
  { name: 'Innovation', icon: Lightbulb, color: 'from-yellow-500 to-yellow-600' },
  { name: 'Risk & Security', icon: Shield, color: 'from-gray-600 to-gray-700' },
];

export function CourseCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0b3d91] mb-4">
            Explore Our Course Categories
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive training solutions across all business disciplines
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className={`group relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10 text-white">
                  <Icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="mt-2 text-white/80">
                    Discover courses
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon size={100} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}