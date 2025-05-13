import React, { useState } from 'react';
import { GraduationCap, Target, ChevronRight, Check, Clock, ArrowRight } from 'lucide-react';
import RoadmapPath from './RoadmapPath';

// Learning path data
const learningPaths = [
  {
    id: 'beginner',
    title: 'React Fundamentals',
    description: 'Master the basics of React and build a solid foundation',
    level: 'Beginner',
    duration: '4 weeks',
    image: '/images/beginner-path.jpg',
    topics: [
      { title: 'React Core Concepts', completed: true },
      { title: 'Components & Props', completed: true },
      { title: 'State & Lifecycle', completed: false },
      { title: 'Event Handling', completed: false },
      { title: 'Conditional Rendering', completed: false },
      { title: 'Lists & Keys', completed: false },
      { title: 'Forms & Controlled Components', completed: false },
      { title: 'Component Composition', completed: false }
    ]
  },
  {
    id: 'intermediate',
    title: 'React Ecosystem',
    description: 'Explore essential tools and libraries in the React ecosystem',
    level: 'Intermediate',
    duration: '6 weeks',
    image: '/images/intermediate-path.jpg',
    topics: [
      { title: 'React Router', completed: false },
      { title: 'React Context API', completed: false },
      { title: 'Hooks (Advanced)', completed: false },
      { title: 'State Management (Redux)', completed: false },
      { title: 'API Integration', completed: false },
      { title: 'Authentication', completed: false },
      { title: 'Testing React Apps', completed: false },
      { title: 'Performance Optimization', completed: false }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced React Patterns',
    description: 'Master professional patterns and techniques used at top companies',
    level: 'Advanced',
    duration: '8 weeks',
    image: '/images/advanced-path.jpg',
    topics: [
      { title: 'Advanced Component Patterns', completed: false },
      { title: 'React Server Components', completed: false },
      { title: 'Custom Hooks (Advanced)', completed: false },
      { title: 'React Suspense & Concurrent Mode', completed: false },
      { title: 'GraphQL with Apollo', completed: false },
      { title: 'React + TypeScript', completed: false },
      { title: 'Micro-Frontends with React', completed: false },
      { title: 'Test-Driven Development', completed: false }
    ]
  }
];

export default function Roadmap() {
  const [activePath, setActivePath] = useState(learningPaths[0].id);

  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[45%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,165,0,0.3),_transparent_70%)] blur-[140px] animate-float5" />
        <div className="absolute bottom-0 left-[25%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,255,150,0.25),_transparent_70%)] blur-[160px] animate-float4" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Structured Learning Roadmaps</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Follow our carefully crafted paths from beginner to advanced React developer
        </p>
      </div>

      {/* Path Selection Tabs */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-10">
        {learningPaths.map((path) => (
          <button
            key={path.id}
            onClick={() => setActivePath(path.id)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activePath === path.id
                ? 'bg-purple-600 text-white'
                : 'bg-[#1a1a2e] text-gray-300 hover:bg-[#252542]'
            }`}
          >
            {path.level}
          </button>
        ))}
      </div>

      {/* Active Path Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {learningPaths.map((path) => (
          <div
            key={path.id}
            className={`transition-opacity duration-300 ${
              activePath === path.id ? 'block' : 'hidden'
            }`}
          >
            <RoadmapPath path={path} />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative z-10 text-center mt-16">
        <a href="/learning-paths" className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
          Explore All Learning Paths
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
} 