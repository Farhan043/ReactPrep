import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at Google",
    avatar: "/avatars/sarah.jpg",
    content: "ReactPrep was instrumental in my journey to landing a role at Google. The practice questions were spot-on with what I encountered in my actual interviews.",
    rating: 5,
    company: "google"
  },
  {
    name: "Michael Chen",
    role: "React Engineer at Meta",
    avatar: "/avatars/michael.jpg",
    content: "The interactive playground and AI assistant helped me strengthen my React skills in ways I never thought possible. Highly recommend for anyone serious about React.",
    rating: 5,
    company: "meta"
  },
  {
    name: "Priya Patel",
    role: "Senior Developer at Netflix",
    avatar: "/avatars/priya.jpg",
    content: "Daily challenges kept me consistent in my practice. Within 3 months, I went from junior to senior developer positions. Worth every minute spent!",
    rating: 5,
    company: "netflix"
  },
  {
    name: "James Wilson",
    role: "UI Engineer at Amazon",
    avatar: "/avatars/james.jpg",
    content: "The mock interviews gave me confidence to face real interviews without anxiety. The feedback system is incredibly helpful for improvement.",
    rating: 4,
    company: "amazon"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects - Matching existing site aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Purple Glow */}
        <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(128,0,255,0.5),_transparent_70%)] blur-[150px] animate-float1" />
        
        {/* Cyan Glow */}
        <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,200,255,0.35),_transparent_70%)] blur-[140px] animate-float2" />
        
        {/* Pink Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,0,150,0.3),_transparent_70%)] blur-[160px] animate-float3" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Success Stories</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Hear from developers who accelerated their careers with ReactPrep
        </p>
      </div>

      {/* Desktop View - Grid */}
      <div className="relative z-10 hidden lg:grid gap-6 grid-cols-2 xl:grid-cols-4 mb-8">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>

      {/* Mobile/Tablet Carousel View */}
      <div className="relative z-10 lg:hidden">
        <div className="flex justify-center mb-8">
          <TestimonialCard {...testimonials[activeIndex]} />
        </div>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-1">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full ${idx === activeIndex ? 'bg-purple-500' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 mt-16 text-center">
        <p className="text-lg font-semibold mb-4">Ready to write your success story?</p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
          Start Your Journey
        </button>
      </div>
    </div>
  );
} 