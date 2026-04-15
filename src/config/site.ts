export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Oxlade Business School",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+44 (0)20 7123 4567",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@oxlade.com",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "London, United Kingdom",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.oxladebusinessschool.com",
  siteTitle:
    process.env.NEXT_PUBLIC_SITE_TITLE ||
    "Oxlade Business School | Corporate Training Courses",
  siteDescription:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Over 30 years of delivering premium corporate training. Explore 500+ intensive courses across leadership, finance, digital and more.",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
};
