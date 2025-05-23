import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Code, Target } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  }
  const handleClick2 = () => {
    navigate("/practice");
  }
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden font-inter">
      {/* Enhanced Professional Background Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Purple Glow */}
        <div className="absolute top-[10%] left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[radial-gradient(circle,_rgba(128,0,255,0.5),_transparent_70%)] blur-[100px] md:blur-[150px] animate-float1" />
        
        {/* Cyan Glow */}
        <div className="absolute bottom-[10%] right-[5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[radial-gradient(circle,_rgba(0,200,255,0.35),_transparent_70%)] blur-[100px] md:blur-[140px] animate-float2" />
      </div>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Code Showcase Section */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:order-2">
            <div className="space-y-4">
              {[
                {
                  title: "React Component",
                  code: `function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="profile">
      {user && <h1>{user.name}</h1>}
    </div>
  );
}`,
                  icon: <Code className="text-blue-400 w-6 h-6" />
                },
                {
                  title: "Performance Optimization",
                  code: `const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
                  icon: <CheckCircle className="text-green-400 w-6 h-6" />
                }
              ].map((section, idx) => (
                <div 
                  key={idx} 
                  className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {section.icon}
                    <h3 className="text-sm font-medium text-gray-300">{section.title}</h3>
                  </div>
                  <pre className="text-xs text-gray-200 bg-black/40 rounded-lg p-3 overflow-x-auto">
                    {section.code}
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Text Section with Typewriter Effect */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="uppercase text-xs sm:text-sm tracking-wide text-purple-300 mb-2 sm:mb-3 font-medium">
                Ace Your React Interviews
              </h2>
            
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl h-20 sm:h-24 lg:h-32 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 font-bold mb-4 sm:mb-6">
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
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                ReactPrep helps you prepare for your next React role with tailored questions, hands-on coding challenges, and interview simulations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={handleClick2} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <Target className="w-4 sm:w-5 h-4 sm:h-5" />
                  Start Practicing
                </button>
                <button 
                  onClick={handleClick} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-purple-600/10 shadow-md"
                >
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}







