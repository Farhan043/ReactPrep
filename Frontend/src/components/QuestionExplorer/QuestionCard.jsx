import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

// Difficulty color mapping
const difficultyColors = {
  Easy: "bg-green-500",
  Medium: "bg-amber-500",
  Hard: "bg-red-500"
};

// Company logo mapping (this would be real logos in production)
const companyLogos = {
  Meta: "/logos/meta.svg",
  Google: "/logos/google.svg",
  Amazon: "/logos/amazon.svg",
  Netflix: "/logos/netflix.svg",
  Twitter: "/logos/twitter.svg",
  Airbnb: "/logos/airbnb.svg",
  Microsoft: "/logos/microsoft.svg"
};

const QuestionCard = ({ question }) => {
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-[#0f0f1a] border border-purple-900/30 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(128,0,255,0.3)] transition-all duration-300 h-full flex flex-col">
      {/* Card Header with Company and Difficulty */}
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-2">
          {/* Company logo or company badge */}
          <div className="w-6 h-6 opacity-70">
            {companyLogos[question.company] ? (
              <img 
                src={companyLogos[question.company]} 
                alt={`${question.company} logo`} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : null}
          </div>
          <span className="text-sm font-medium text-gray-300">{question.company}</span>
        </div>
        
        {/* Difficulty badge */}
        <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[question.difficulty]}`}>
          {question.difficulty}
        </span>
      </div>
      
      {/* Card Body */}
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-white">{question.title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{question.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {question.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs px-2 py-1 bg-[#1a1a2e] text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="p-4 border-t border-gray-800 flex justify-between items-center">
        {/* Date posted */}
        <div className="flex items-center text-xs text-gray-400">
          <Calendar size={14} className="mr-1" />
          <span>{formatDate(question.datePosted)}</span>
        </div>
        
        {/* Solve button */}
        <button className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
          Solve Now
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard; 