import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseCategories } from './components/CourseCategories';
import { TrustSection } from './components/TrustSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  const boardroomImage = "https://images.unsplash.com/photo-1539872209618-fb1770aa6ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWxzJTIwbW9kZXJuJTIwTG9uZG9uJTIwYm9hcmRyb29tJTIwbWVldGluZ3xlbnwxfHx8fDE3NzU1MDEwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Header />
      <Hero imageUrl={boardroomImage} />
      <CourseCategories />
      <TrustSection />
      <Testimonials />
      <Footer />
    </div>
  );
}