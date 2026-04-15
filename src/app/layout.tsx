import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import "./globals.css";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
  icons: {
    icon: [{ url: "/pictures/oxladelogo.png", type: "image/png", sizes: "337x337" }],
    shortcut: ["/pictures/oxladelogo.png"],
    apple: [{ url: "/pictures/oxladelogo.png", type: "image/png", sizes: "180x180" }],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.siteDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "UK",
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        {siteConfig.gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.gaId}');
              `}
            </Script>
          </>
        ) : null}
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationStructuredData)}
        </Script>
        {children}
      </body>
    </html>
  );
}
