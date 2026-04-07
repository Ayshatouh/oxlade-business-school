import Image from "next/image";

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
          Gradient overlay matching brand colors:
          Deep navy-blue (#0b3d91) on the left darkening toward the text,
          fading to a semi-transparent teal-dark on the right so the city shows through.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(11,61,145,0.92) 0%, rgba(11,61,145,0.78) 35%, rgba(5,30,80,0.60) 65%, rgba(0,20,60,0.35) 100%)",
          }}
        />
      </div>

      {/* Content — padded top to clear the fixed navbar (top bar ≈36px + main nav ≈64px = 100px) */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{
          paddingTop: "160px",
          paddingBottom: "80px",
          paddingLeft: "clamp(24px, 5vw, 64px)",
          paddingRight: "clamp(24px, 5vw, 64px)",
          maxWidth: "640px",
        }}
      >
        {/* Heading — Playfair Display */}
        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
            letterSpacing: "-0.01em",
          }}
        >
          Corporate
          <br />
          Training Courses
        </h1>

        {/* Bullet Points — Inter body font */}
        <ul className="space-y-4">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* Arrow icon — brand yellow accent */}
              <span
                className="mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: "22px",
                  height: "22px",
                  minWidth: "22px",
                  background: "rgba(250,204,21,0.15)",
                  border: "1.5px solid rgba(250,204,21,0.75)",
                }}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                    stroke="#facc15"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                  fontSize: "clamp(0.82rem, 1.5vw, 0.92rem)",
                  color: "rgba(255,255,255,0.93)",
                  lineHeight: 1.55,
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
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