import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/users/forgot-password`, { email });
      toast.success('OTP sent to your email');
      

    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter email" />
      <button  type="submit">Send OTP</button>
    </form>
  );
};

export default ForgotPassword;
