import React, { useState, useEffect, useRef } from 'react';
import { Users, Code, Book, Trophy } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-10 h-10 text-blue-400" />,
    value: 15000,
    label: "Active Learners",
    suffix: "+",
    description: "Developers improving their React skills"
  },
  {
    icon: <Code className="w-10 h-10 text-green-400" />,
    value: 500,
    label: "Practice Problems",
    suffix: "+",
    description: "Covering all React concepts from basics to advanced"
  },
  {
    icon: <Book className="w-10 h-10 text-pink-400" />,
    value: 98,
    label: "Success Rate",
    suffix: "%",
    description: "Of our users pass their technical interviews"
  },
  {
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    value: 250,
    label: "Top Companies",
    suffix: "+",
    description: "Where our graduates work worldwide"
  }
];

const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value]);

  return (
    <span ref={countRef} className="text-4xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[45%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,165,0,0.3),_transparent_70%)] blur-[140px] animate-float5" />
        <div className="absolute bottom-0 left-[25%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,255,150,0.25),_transparent_70%)] blur-[160px] animate-float4" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">ReactPrep by the Numbers</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Join thousands of developers who are accelerating their careers with our platform
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-[#0f0f1a] border border-purple-900/30 p-6 rounded-xl flex flex-col items-center text-center"
          >
            <div className="mb-4 bg-[#1a1a2e] p-4 rounded-full">{stat.icon}</div>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <h3 className="text-xl font-semibold mt-2 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {stat.label}
            </h3>
            <p className="text-sm text-gray-400">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 