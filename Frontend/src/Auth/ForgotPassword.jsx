import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/users/forgot-password`, { email });
      toast.success('OTP sent to your email');
      
      // Navigate to OTP verification with email in state
      navigate('/verify-otp', { state: { email } });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          className="absolute min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2023/07/22/172788-847869832_tiny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-20 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4 sm:px-0">
        <div className="bg-black/50 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl border border-purple-500/30">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Forgot Password
            </h2>
            <p className="text-purple-200 mt-2 opacity-80 text-sm">
              Enter your email to receive a reset OTP
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-purple-200 block mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 pr-10 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300/50 text-sm"
                  placeholder="your@email.com"
                  required
                />
                <svg className="w-5 h-5 absolute right-3 top-3 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer mt-2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white p-3 rounded-xl hover:opacity-90 transition duration-300 font-medium shadow-lg shadow-purple-700/30 text-sm"
            >
              Send OTP
            </button>

            <div className="text-center mt-4">
              <p className="text-xs text-purple-300">
                Remember your password? {" "}
                <a href="/login" className="text-blue-400 hover:text-purple-300 font-medium">
                  Back to Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
