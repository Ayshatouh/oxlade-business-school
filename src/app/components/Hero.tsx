import Image from "next/image";
import { siteConfig } from "@/config/site";


interface HeroProps {
  imageUrl: string;
}

const bulletPoints = [
  "With over 30 years of delivering premium corporate training, explore over 500 intensive corporate training courses.",
  "Reach your full potential through transformational learning experiences.",
  "Positively impact the performance of your organisation. We are proud to have trained over 50,000 delegates from more than 500 clients from around the world.",
];

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "380px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="London city skyline with modern skyscrapers"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        {/*
          Gradient overlay using brand blue (#002d80), stronger on the left for text contrast,
          fading right so the city image stays visible.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(0,45,128,0.95) 0%, rgba(0,45,128,0.85) 35%, rgba(0,45,128,0.55) 65%, rgba(0,45,128,0.22) 100%)",
          }}
        />
      </div>

      {/* Content — padded top to clear the fixed navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-32 md:pt-48 pb-12 md:pb-20">
        <div className="max-w-2xl">
          {/* Heading — Playfair Display */}
          <h1
            className="text-white mb-6 tracking-tight uppercase"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              textShadow: "0 2px 16px rgba(0,0,0,0.4)",
            }}
          >
            {siteConfig.name.split(" ").slice(0, 2).join(" ")}
            <br />
            {siteConfig.name.split(" ").slice(2).join(" ")}

          </h1>

          {/* Bullet Points — Inter body font */}
          <ul className="space-y-4 md:space-y-5">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 md:gap-4">
                {/* Arrow icon — brand yellow accent */}
                <span
                  className="mt-1 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    background: "rgba(250,204,21,0.15)",
                    border: "1.5px solid rgba(250,204,21,0.75)",
                  }}
                  aria-hidden="true"
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                      stroke="#facc15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="text-white/90 leading-relaxed font-medium"
                  style={{
                    fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                    fontSize: "clamp(0.85rem, 2vw, 1rem)",
                  }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* White wave separator at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "60px" }}
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}