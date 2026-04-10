import { CheckCircle2, GraduationCap, Handshake, Sparkles } from "lucide-react";

const playfair = { fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" };

const strengths = [
  "Expert facilitators with practical sector experience",
  "Curricula aligned to real business challenges",
  "Global delivery options for individuals and teams",
  "Action-focused learning for immediate application",
];

const highlights = [
  { icon: GraduationCap, label: "Industry-Relevant Programmes" },
  { icon: Handshake, label: "Trusted By Corporate Teams" },
  { icon: Sparkles, label: "Premium Learning Experience" },
];

export function WelcomeSection() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <article className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
            <p className="text-[#002d80] font-bold uppercase tracking-[0.2em] text-sm mb-3">Welcome</p>
            <h2
              className="text-3xl font-black text-[#002d80] mb-4 tracking-tight"
              style={playfair}
            >
              Why professionals choose Oxlade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-7">
              At Oxlade, we blend academic depth with practical execution so delegates gain skills they can use
              immediately. Our programmes are designed to strengthen leadership, technical capability, and strategic
              decision-making in fast-moving business environments.
            </p>

            <ul className="space-y-3">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-800">
                  <CheckCircle2 size={18} className="text-[#002d80] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="bg-[#002d80] rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-5 tracking-tight" style={playfair}>
                Built for growth-oriented leaders
              </h3>
              <p className="text-white/85 leading-relaxed mb-8">
                Whether you are an individual aiming for career progression or an organisation developing high-impact
                teams, our learning model supports measurable growth.
              </p>
              <div className="space-y-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                      <Icon size={18} className="text-[#facc15]" />
                      <span className="font-semibold text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#facc15] font-bold mt-8">
              Professional learning · measurable results
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
