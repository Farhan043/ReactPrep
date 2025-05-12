import { ArrowRight } from "lucide-react";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Enhanced Professional Background Lighting */}
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

{/* Floating Tech Stack Icons */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  {[
    { src: "/nodejs.png", style: "left-[10%] top-[-10%] animate-down" },
    { src: "/js.png", style: "left-[20%] top-[110%] animate-up" },
    { src: "/mongodb.png", style: "right-[10%] top-[-10%] animate-down" },
    { src: "/express-js.png", style: "left-[-10%] top-[40%] animate-right" },
    { src: "/talwindcss.png", style: "right-[-10%] top-[60%] animate-left" },
    { src: "/react.png", style: "left-[50%] top-[-10%] animate-down" },
    { src: "/next-js.png", style: "left-[70%] top-[120%] animate-up" },
    { src: "/vite.svg", style: "right-[-10%] top-[30%] animate-left" },
    { src: "/redux.png", style: "left-[-10%] top-[70%] animate-right" },
  ].map((icon, idx) => (
    <img
      key={idx}
      src={icon.src}
      alt="tech-icon"
      className={`absolute w-10 h-10 opacity-60 blur-[0.5px] drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${icon.style}`}
    />
  ))}
</div>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section with Typewriter Effect */}
          <div className="flex-1 text-center">
            <h2 className="uppercase text-sm tracking-wide text-purple-400 mb-2">Ace Your React Interviews</h2>
         
            <h1 className="text-4xl sm:text-5xl h-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold mb-4">
              <Typewriter
                options={{
                  strings: [
                    
                    "Practice with real-world React questions",
                    "Get instant feedback",
                    "Track your progress",                    
                    "Land your dream job"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h1>
            <p className=" w-2/4 mx-auto  mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-xl">
              ReactPrep helps you prepare for your next React role with tailored questions, hands-on coding challenges, and interview simulations.
            </p>
            <div className="flex items-center justify-center gap-4">
            <button className="bg-purple-500 text-black px-6 py-2 cursor-pointer rounded-full font-semibold   transition">Start Practicing</button>
            <button className="bg-black text-white  border-2 border-purple-600 cursor-pointer px-6 py-2 rounded-full font-semibold transition">View Profile</button>
            </div>
          </div>
        </div>

            <div className="flex gap-4 mt-12 items-center justify-center ">
  {/* Card 1 */}
  <div className="bg-[#111827] border border-gray-700 rounded-xl p-4 w-64 text-white shadow-lg shadow-blue-500/20 transition-all">
    <h3 className="text-lg font-semibold mb-2">Featured Challenges</h3>
    <div className="flex items-center gap-3">
      <div className="p-2 bg-[#0f172a] rounded-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="w-3/4 h-2 bg-gray-700 rounded"></div>
        <div className="w-1/2 h-2 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-[#111827] border border-gray-700 rounded-xl p-4 w-64 text-white shadow-lg shadow-purple-500/20 transition-all">
    <h3 className="text-lg font-semibold mb-2">Recently Solved</h3>
    <div className="flex items-center gap-3">
      <div className="p-2 bg-[#0f172a] rounded-lg">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      </div>
      <div className="flex-1 space-y-1">
        <div className="w-3/4 h-2 bg-gray-700 rounded"></div>
        <div className="w-1/2 h-2 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
</div>

        {/* Code Blocks - ReactPrep Style */}

 <div className="mt-12 w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* App.jsx */}
          <div className="bg-black/90 rounded-xl p-4 overflow-hidden border-t-4 border-r-4 border-b-4 border-l-4 
                border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-green-500 
                shadow-[0_0_40px_#00bfff40]">

              <p className="text-sm text-cyan-400 mb-2">App.jsx</p>
              <Typewriter
                options={{
                  strings: [
                    `import React from "react"; </br>
import Register from "./Register"; </br>
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; </br>

export default function App() { </br>
  return ( </br>
    <Router> </br>
      <Routes> </br>
        <Route path="/" element={<Register />} /> </br>
      </Routes> </br>
    </Router> </br>
  ); </br>
}`
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                }}
              />
            </div>
              


            {/* Registration Form */}
              <div className="bg-black/90 rounded-xl p-4 overflow-hidden border-t-4 border-r-4 border-b-4 border-l-4 
                border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-green-500 
                shadow-[0_0_40px_#00bfff40]">
              <p className="text-sm text-pink-400 mb-2">Tailwind Registration Form</p>
              <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap mb-4">
{`<form className="bg-gray-900 p-6 rounded-lg space-y-4">
  <input type="text" placeholder="Full Name" className="w-full p-2 rounded bg-gray-800 text-white" />
  <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-800 text-white" />
  <input type="password" placeholder="Password" className="w-full p-2 rounded bg-gray-800 text-white" />
  <button className="w-full py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition">Register</button>
</form>`}
              </pre>
        
            </div>

            {/* CSS Snippet */}
              <div className="bg-black/90 rounded-xl p-4 overflow-hidden border-t-4 border-r-4 border-b-4 border-l-4 
                border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-green-500 
                shadow-[0_0_40px_#00bfff40]">
              <p className="text-sm text-blue-300 mb-2">CSS Snippet</p>
              <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
{`@keyframes slide {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

.animated-preview {
  animation: slide 2s infinite;
}`}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}