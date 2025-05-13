import React from 'react';
import { ExternalLink, Code, FileCode, BookOpen, Download, Coffee, Github, Lightbulb } from 'lucide-react';

// Developer tools and resources data
const devTools = [
  {
    id: 1,
    title: "React Developer Cheatsheet",
    description: "A comprehensive PDF reference of React hooks, patterns, and best practices",
    icon: <FileCode className="text-blue-400" />,
    action: "Download PDF",
    actionIcon: <Download size={14} />,
    link: "#",
    category: "Reference"
  },
  {
    id: 2,
    title: "Component Structure Generator",
    description: "Generate well-structured React components with TypeScript typing",
    icon: <Code className="text-green-400" />,
    action: "Use Tool",
    actionIcon: <ExternalLink size={14} />,
    link: "#",
    category: "Tool"
  },
  {
    id: 3,
    title: "React Performance Checklist",
    description: "Step-by-step guide to identify and fix common React performance issues",
    icon: <BookOpen className="text-purple-400" />,
    action: "View Guide",
    actionIcon: <ExternalLink size={14} />,
    link: "#",
    category: "Guide"
  },
  {
    id: 4,
    title: "React Hooks Playground",
    description: "Interactive environment to experiment with React hooks and see results",
    icon: <Lightbulb className="text-yellow-400" />,
    action: "Try Now",
    actionIcon: <ExternalLink size={14} />,
    link: "#",
    category: "Tool"
  },
  {
    id: 5,
    title: "VSCode Extension Pack",
    description: "Curated collection of VSCode extensions for React development",
    icon: <Download className="text-red-400" />,
    action: "Install",
    actionIcon: <ExternalLink size={14} />,
    link: "#",
    category: "Extension"
  },
  {
    id: 6,
    title: "React Project Boilerplate",
    description: "Production-ready React starter with TypeScript, testing, and best practices",
    icon: <Github className="text-gray-400" />,
    action: "View on GitHub",
    actionIcon: <ExternalLink size={14} />,
    link: "#",
    category: "Template"
  },
  {
    id: 7,
    title: "Buy Me a Coffee",
    description: "Support ReactPrep development and get access to premium resources",
    icon: <Coffee className="text-amber-400" />,
    action: "Support Us",
    actionIcon: <ExternalLink size={14} />,
    link: "#",
    category: "Support"
  }
];

// Group tools by category
const categories = [...new Set(devTools.map(tool => tool.category))];

export default function DevTools() {
  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(128,0,255,0.5),_transparent_70%)] blur-[150px] animate-float1" />
        <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,200,255,0.35),_transparent_70%)] blur-[140px] animate-float2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Developer Tools & Resources</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Accelerate your workflow with our curated collection of React development tools
        </p>
      </div>

      {/* Tools Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Category sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devTools.map((tool) => (
            <div 
              key={tool.id} 
              className="bg-[#0f0f1a] border border-purple-900/30 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(128,0,255,0.2)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1a1a2e] rounded-lg">
                  {tool.icon}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">{tool.title}</h3>
                    <span className="text-xs px-2 py-1 bg-[#1a1a2e] text-purple-300 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    {tool.description}
                  </p>
                  <a 
                    href={tool.link} 
                    className="mt-auto inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                  >
                    {tool.action}
                    {tool.actionIcon}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Hub CTA */}
      <div className="relative z-10 text-center mt-12">
        <a href="/resources" className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-purple-600 text-purple-500 hover:text-white font-semibold py-3 px-6 border border-purple-500 hover:border-transparent rounded-full transition-all duration-300">
          Visit Resource Hub
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
} 