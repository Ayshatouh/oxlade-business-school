import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '30+',
    label: 'Years Experience',
    description: 'Industry-leading training since 1995',
  },
  {
    icon: Users,
    value: '50,000+',
    label: 'Delegates Trained',
    description: 'Professionals transformed worldwide',
  },
  {
    icon: Globe,
    value: '25+',
    label: 'Global Locations',
    description: 'Training centres across continents',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Satisfaction Rate',
    description: 'Consistently exceeding expectations',
  },
];

export function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0b3d91] to-[#083068]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-white/80">
            A proven track record of excellence in corporate training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#facc15] rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-[#0b3d91]" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-[#facc15] mb-2">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-center text-white/60 mb-8 uppercase tracking-wider text-sm">
            Trusted by Fortune 500 Companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['HSBC', 'Deloitte', 'BP', 'Barclays', 'Unilever'].map((company) => (
              <div
                key={company}
                className="text-white text-2xl font-bold text-center hover:opacity-100 transition-opacity"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}