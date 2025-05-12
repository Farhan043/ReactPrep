import { ArrowRight } from 'lucide-react';


const FeatureCard = ({ icon, title, description }) => (
  <>
  <div className="relative cursor-pointer bg-[#0f0f1a] border-4 text-white p-6 rounded-xl animated-border">
    <div className="absolute top-1 right-1 bg-purple-500 text-xs px-2 py-1 rounded-bl-md font-semibold">NEW</div>
    <div className="text-9xl bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-6">{title}</h3>
    <p className="text-sm text-gray-300 mb-4">{description}</p>
    <button className="text-sm cursor-pointer font-medium flex items-center gap-1 text-white hover:underline">
      Explore Now <ArrowRight size={14} />
    </button>
  </div>

  
  </>

);

export default FeatureCard;





