import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CourseCategories } from "./components/CourseCategories";
import { Hero } from "./components/Hero";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { TrainingFormatsSection } from "./components/TrainingFormatsSection";
import { WelcomeSection } from "./components/WelcomeSection";
import { LatestNewsSection } from "./components/LatestNewsSection";
import { ReviewSection } from "./components/ReviewSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Header />
      <Hero imageUrl="/pictures/pic2.jpg" />
      <main className="flex-1 w-full flex flex-col">
        <CourseCategories />
        <FeaturedCourses />
        <TrainingFormatsSection />
        <WelcomeSection />
        <LatestNewsSection />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
}
