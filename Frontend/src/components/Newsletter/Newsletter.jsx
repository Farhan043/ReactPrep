import React, { useState } from 'react';
import { Send, Check, X } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,0,150,0.3),_transparent_70%)] blur-[160px] animate-float3" />
        <div className="absolute bottom-0 left-[25%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,255,150,0.25),_transparent_70%)] blur-[160px] animate-float4" />
      </div>

      {/* Newsletter Card */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-[#0f0f1a] rounded-xl p-8 md:p-12 border-t-4 border-r-4 border-b-4 border-l-4 
                border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-green-500 
                shadow-[0_0_40px_#00bfff40]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated with React Trends</h2>
              <p className="text-gray-400 mb-4">
                Get weekly React tips, interview questions, and exclusive learning resources directly to your inbox.
              </p>
              <ul className="space-y-2">
                {["Interview preparation guides", "React best practices", "New feature announcements", "Exclusive discount codes"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="bg-purple-600 rounded-full p-1">
                      <Check size={12} className="text-white" />
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-4 pr-12 bg-[#1a1a2e] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'submitting' || status === 'success'}
                  />
                  {status === 'error' && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
                      <X size={20} />
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`flex items-center justify-center gap-2 p-4 rounded-lg font-medium transition-all duration-300 ${
                    status === 'success' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : status === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Check size={20} />
                      <span>Subscribed Successfully!</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <X size={20} />
                      <span>Please enter a valid email</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Subscribe to Newsletter</span>
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
                We'll never spam you or share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}