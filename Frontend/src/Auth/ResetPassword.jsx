import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user has been verified via OTP
  useEffect(() => {
    const verified = location.state?.verified;
    const email = location.state?.email;

    if (!verified || !email) {
      // Redirect to forgot password if not verified
      navigate('/forgot-password');
    }
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Password strength validation
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    try {
      const email = location.state?.email;
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/reset-password`, 
        { email, newPassword: password }
      );

      if (response.status === 200) {
        toast.success('Password reset successfully');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to reset password');
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
              Reset Password
            </h2>
            <p className="text-purple-200 mt-2 opacity-80 text-sm">
              Create a new password for your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-purple-200 block mb-1">New Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pr-10 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300/50 text-sm"
                  placeholder="Enter new password"
                  required
                  minLength="8"
                />
                <svg className="w-5 h-5 absolute right-3 top-3 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-purple-200 block mb-1">Confirm New Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 pr-10 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300/50 text-sm"
                  placeholder="Confirm new password"
                  required
                  minLength="8"
                />
                <svg className="w-5 h-5 absolute right-3 top-3 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer mt-2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white p-3 rounded-xl hover:opacity-90 transition duration-300 font-medium shadow-lg shadow-purple-700/30 text-sm"
            >
              Reset Password
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

export default ResetPassword;
