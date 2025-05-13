import React from 'react';
import { Star, Quote } from 'lucide-react';

const companyLogos = {
  google: "/logos/google.svg",
  meta: "/logos/meta.svg",
  netflix: "/logos/netflix.svg",
  amazon: "/logos/amazon.svg"
};

const TestimonialCard = ({ name, role, avatar, content, rating, company }) => {
  // Generate star rating display
  const stars = Array(5).fill(0).map((_, i) => (
    <Star
      key={i}
      size={16}
      className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}
    />
  ));

  return (
    <div className="relative bg-[#0f0f1a] border border-purple-900/30 text-white p-6 rounded-xl hover:shadow-[0_0_30px_rgba(128,0,255,0.3)] transition-all duration-300 h-full flex flex-col">
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3 bg-purple-600 rounded-full p-2">
        <Quote size={16} className="text-white" />
      </div>

      {/* Company logo if available */}
      {company && companyLogos[company] && (
        <div className="absolute top-4 right-4 w-8 h-8 opacity-30">
          <img 
            src={companyLogos[company]} 
            alt={`${company} logo`} 
            className="w-full h-full object-contain" 
          />
        </div>
      )}

      {/* Content */}
      <div className="mb-4 flex-grow">
        <p className="text-gray-300 italic text-sm">"{content}"</p>
      </div>

      {/* Rating */}
      <div className="flex mb-4">
        {stars}
      </div>

      {/* Author info */}
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-purple-500">
          <img 
            src={avatar || "https://via.placeholder.com/40"} 
            alt={name}
            className="w-full h-full object-cover" 
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/40?text=User";
            }}
          />
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 