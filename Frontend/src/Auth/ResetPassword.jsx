import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/reset-password`, {
        email,
        otp,
        newPassword,
      });

      toast.success(response.data.message || 'Password reset successful');
      setTimeout(() => navigate("/reset-password"), 1500);
      // Optional: Redirect to login
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleReset} className="bg-purple-950 p-6 rounded-xl w-full max-w-md shadow-lg border border-purple-700/40">
        <h2 className="text-xl text-center text-purple-200 font-semibold mb-4">Reset Your Password</h2>

        <div className="mb-4">
          <label className="block text-purple-300 text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-purple-800/40 border border-purple-600 text-white rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-purple-300 text-sm mb-1">OTP</label>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full px-3 py-2 bg-purple-800/40 border border-purple-600 text-white rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-purple-300 text-sm mb-1">New Password</label>
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full px-3 py-2 bg-purple-800/40 border border-purple-600 text-white rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white py-2 rounded hover:opacity-90"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
