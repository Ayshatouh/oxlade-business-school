import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Chief Operating Officer',
    company: 'TechCorp Global',
    text: 'The leadership programme at Oxlade transformed our management team. The practical insights and real-world case studies were invaluable.',
    rating: 5,
  },
  {
    name: 'James Robertson',
    role: 'Finance Director',
    company: 'Sterling Financial',
    text: 'Outstanding training quality. The instructors are industry experts who bring decades of practical experience to every session.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'HR Manager',
    company: 'Innovate Industries',
    text: 'We\'ve sent over 50 employees through Oxlade programmes. The ROI is measurable, and the feedback is consistently excellent.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Digital Marketing Lead',
    company: 'BrandForward',
    text: 'The digital marketing course was exactly what I needed to advance my career. Highly practical and immediately applicable.',
    rating: 5,
  },
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0b3d91] mb-4">
            What Our Delegates Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from professionals who've transformed their careers
          </p>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <Quote className="text-[#facc15] mb-4" size={40} />
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#facc15] text-xl">★</span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="font-semibold text-[#0b3d91]">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-[#facc15]">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}