import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CourseCategories } from "./components/CourseCategories";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        <Hero imageUrl="/hero.jpg" />
        <CourseCategories />
      </main>
      <Footer />
    </div>
  );
}
