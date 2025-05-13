import React, { useState } from 'react';
import { ArrowRight, Search, Filter, SlidersHorizontal } from 'lucide-react';
import QuestionCard from './QuestionCard';

// Sample question data - in a real app, this would come from an API
const questions = [
  {
    id: 1,
    title: "Implement a Custom useDebounce Hook",
    description: "Create a custom React hook that debounces a value to optimize performance in input fields.",
    company: "Meta",
    difficulty: "Medium",
    datePosted: "2023-11-15",
    tags: ["Hooks", "Performance"]
  },
  {
    id: 2,
    title: "Build a Responsive Image Gallery",
    description: "Develop a responsive image gallery component with lazy loading and modal previews.",
    company: "Google",
    difficulty: "Hard",
    datePosted: "2023-12-02",
    tags: ["UI", "Performance"]
  },
  {
    id: 3,
    title: "State Management with Context API",
    description: "Implement a theme switcher using React's Context API without external libraries.",
    company: "Amazon",
    difficulty: "Medium",
    datePosted: "2023-10-28",
    tags: ["Context", "State Management"]
  },
  {
    id: 4,
    title: "Create a Star Rating Component",
    description: "Build an accessible and interactive star rating component from scratch.",
    company: "Netflix",
    difficulty: "Easy",
    datePosted: "2023-11-20",
    tags: ["UI", "Accessibility"]
  },
  {
    id: 5,
    title: "Implement Infinite Scroll",
    description: "Create an infinite scroll component that fetches and displays data as the user scrolls.",
    company: "Twitter",
    difficulty: "Hard",
    datePosted: "2023-12-10",
    tags: ["Performance", "API"]
  },
  {
    id: 6,
    title: "Build a Custom Form Validator",
    description: "Develop a reusable form validation hook that supports multiple validation rules.",
    company: "Airbnb",
    difficulty: "Medium",
    datePosted: "2023-11-05",
    tags: ["Forms", "Hooks"]
  },
  {
    id: 7,
    title: "Optimize React Renders",
    description: "Fix performance issues in a component that renders a large list of items.",
    company: "Meta",
    difficulty: "Hard",
    datePosted: "2023-12-05",
    tags: ["Performance", "Optimization"]
  },
  {
    id: 8,
    title: "Build a Custom Dropdown Menu",
    description: "Create an accessible dropdown menu component with keyboard navigation.",
    company: "Microsoft",
    difficulty: "Medium",
    datePosted: "2023-11-22",
    tags: ["UI", "Accessibility"]
  }
];

// Company filter options
const companies = ["All", "Meta", "Google", "Amazon", "Netflix", "Twitter", "Airbnb", "Microsoft"];
// Difficulty filter options
const difficulties = ["All", "Easy", "Medium", "Hard"];

export default function QuestionExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [companyFilter, setCompanyFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Filter questions based on search term and filters
  const filteredQuestions = questions.filter(question => {
    const matchesSearch = 
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      question.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCompany = companyFilter === 'All' || question.company === companyFilter;
    const matchesDifficulty = difficultyFilter === 'All' || question.difficulty === difficultyFilter;
    
    return matchesSearch && matchesCompany && matchesDifficulty;
  });

  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(128,0,255,0.5),_transparent_70%)] blur-[150px] animate-float1" />
        <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,200,255,0.35),_transparent_70%)] blur-[140px] animate-float2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Practice React Questions Asked by Top Companies</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Real interview questions from FAANG and other top tech companies to help you prepare
        </p>
      </div>

      {/* Search and Filters */}
      <div className="relative z-10 max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10 p-3 bg-[#1a1a2e] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto w-full flex items-center justify-center gap-2 p-3 bg-[#1a1a2e] border border-gray-800 rounded-lg hover:bg-[#252542] transition-colors"
          >
            <Filter size={20} />
            <span>Filters</span>
            <span className="bg-purple-600 text-xs px-2 py-1 rounded-full">{(companyFilter !== 'All' ? 1 : 0) + (difficultyFilter !== 'All' ? 1 : 0)}</span>
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-4 p-4 bg-[#1a1a2e] border border-gray-800 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                <select
                  value={companyFilter}
                  onChange={(e) => setCompanyFilter(e.target.value)}
                  className="w-full p-2 bg-[#0f0f1a] border border-gray-800 rounded text-white"
                >
                  {companies.map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty</label>
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="w-full p-2 bg-[#0f0f1a] border border-gray-800 rounded text-white"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setCompanyFilter('All');
                    setDifficultyFilter('All');
                  }}
                  className="w-full p-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Questions Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(question => (
            <QuestionCard key={question.id} question={question} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-400 text-lg">No questions match your current filters.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setCompanyFilter('All');
                setDifficultyFilter('All');
              }}
              className="mt-4 text-purple-500 hover:text-purple-400"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* View More Button */}
      <div className="relative z-10 text-center mt-12">
        <button className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
          View All Questions
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
} 