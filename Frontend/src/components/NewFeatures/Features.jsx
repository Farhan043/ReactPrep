import FeatureCard from './FeatureCard';
import { Code2, CalendarDays, UserRound, BookOpen, Bot, Gamepad } from 'lucide-react';
import { FaCog, FaGraduationCap, FaUpload } from "react-icons/fa";
const features = [
  {
    icon: <Code2 />,
    title: 'Interactive Playground',
    description: 'Write, test, and experiment with React code in real-time without any setup',
  },
  {
    icon: <CalendarDays />,
    title: 'Daily Challenges',
    description: 'Practice with a new React coding challenge each day to build your skills',
  },
  {
    icon: <UserRound />,
    title: 'Interview Preparation',
    description: 'Practice with company-specific questions and mock interviews to get job-ready',
  },
  {
    icon: <BookOpen />,
    title: 'Resource Library',
    description: 'Access a curated collection of tutorials, articles, and documentation',
  },
  {
    icon: <Bot />,
    title: 'AI Code Assistant',
    description: 'Get intelligent code suggestions and code optimizations FROM OUR ',
  },
   {
    icon: <Gamepad />,
    title: 'Gaming',
    description: ' Play games to improve your coding skills and have fun while doing it',
  },
];

const Features = () => (
  <div className="relative min-h-screen  bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">

    {/* ⚡ Lightning background */}
       <div className="absolute inset-0 z-0 pointer-events-none">
  {/* Purple Glow */}
  <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(128,0,255,0.5),_transparent_70%)] blur-[150px] animate-float1" />
  
  {/* Cyan Glow */}
  <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,200,255,0.35),_transparent_70%)] blur-[140px] animate-float2" />
  
  {/* Pink Glow */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,0,150,0.3),_transparent_70%)] blur-[160px] animate-float3" />
  
  {/* Green Glow */}
  <div className="absolute bottom-0 left-[25%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,255,150,0.25),_transparent_70%)] blur-[160px] animate-float4" />
  
  {/* Gold Glow (New) */}
  <div className="absolute top-[30%] left-[45%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,165,0,0.3),_transparent_70%)] blur-[140px] animate-float5" />
</div>

    {/* Content */}
    <div className="relative z-10 text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">New Features to Boost Your Learning</h2>
      <p className="text-gray-400 text-sm sm:text-base">
        Explore our latest tools designed to accelerate your React mastery journey
      </p>
    </div>

    <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, idx) => (
        <FeatureCard key={idx} {...feature} />
      ))}
    </div>
 
</div>
  );


export default Features;



