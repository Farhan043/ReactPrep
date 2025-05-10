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
      <main className="relative z-10 px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section with Typewriter Effect */}
          <div className="flex-1 text-center">
            <h2 className="uppercase text-sm tracking-wide text-purple-400 mb-2">Ace Your React Interviews</h2>
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
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
            <p className=" text-gray-400 mb-8">
              ReactPrep helps you prepare for your next React role with tailored questions, hands-on coding challenges, and interview simulations.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</button>
          </div>
        </div>

        {/* Code Blocks - ReactPrep Style */}

 <div className="mt-24 w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* App.jsx */}
            <div className="bg-[#0e0e0e] border border-[#2e2e2e] rounded-xl p-4 shadow-[0_0_40px_#00bfff40] overflow-hidden">
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
            <div className="bg-gradient-to-br from-[#111] via-[#1c1c24] to-[#1f1f28] border border-[#333] rounded-xl p-4 shadow-[0_0_40px_#8000ff40] text-white">
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
            <div className="bg-[#10101a] border border-[#2a2a3a] rounded-xl p-4 shadow-[0_0_40px_#8b5cf640] text-white">
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