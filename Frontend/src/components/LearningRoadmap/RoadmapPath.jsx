import React from 'react';
import { GraduationCap, Clock, Check, ChevronRight, Play } from 'lucide-react';

const RoadmapPath = ({ path }) => {
  // Calculate progress percentage
  const completedTopics = path.topics.filter(topic => topic.completed).length;
  const progressPercentage = (completedTopics / path.topics.length) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Left Column - Path Info */}
      <div className="lg:col-span-2 bg-[#0f0f1a] rounded-xl p-6 border border-purple-900/30">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-white">{path.title}</h3>
          <p className="text-gray-400 mb-4">{path.description}</p>
          
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-purple-400" />
              <span className="text-sm text-gray-300">{path.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-purple-400" />
              <span className="text-sm text-gray-300">{path.duration}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">Your Progress</span>
            <span className="text-sm font-medium text-purple-400">{progressPercentage.toFixed(0)}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-indigo-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors">
            <Play size={16} />
            {completedTopics > 0 ? "Continue Learning" : "Start Learning"}
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-purple-500 text-purple-400 p-3 rounded-lg hover:bg-purple-900/20 transition-colors">
            View Curriculum
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Right Column - Topics List */}
      <div className="lg:col-span-3 bg-[#0f0f1a] rounded-xl p-6 border border-purple-900/30">
        <h4 className="text-lg font-semibold mb-6 flex items-center">
          <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Course Curriculum
          </span>
          <span className="text-xs text-gray-500">({path.topics.length} topics)</span>
        </h4>
        
        <div className="grid gap-3">
          {path.topics.map((topic, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg flex items-center justify-between ${
                topic.completed ? 'bg-purple-900/20' : 'bg-[#1a1a2e]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  topic.completed 
                    ? 'bg-purple-600' 
                    : 'border border-gray-600'
                }`}>
                  {topic.completed && <Check size={14} className="text-white" />}
                </div>
                <span className={topic.completed ? 'text-white' : 'text-gray-300'}>
                  {topic.title}
                </span>
              </div>
              {!topic.completed && (
                <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                  Start
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPath; 