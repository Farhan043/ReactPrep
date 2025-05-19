import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(180); // 3 minutes
  const [canResend, setCanResend] = useState(false);
  const otpInputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract email from location state or previous route
  const email = location.state?.email || '';

  useEffect(() => {
    // Redirect if no email is present
    if (!email) {
      navigate('/forgot-password');
      return;
    }

    // Start countdown timer
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          setCanResend(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [email, navigate]);

  const handleOtpChange = (index, value) => {
    // Only allow numeric input
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      toast.error('Please enter the complete 6-digit OTP');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/verify-otp`, 
        { email, otp: otpCode }
      );

      if (response.status === 200) {
        toast.success('OTP Verified Successfully!');
        // Navigate to reset password or next step
        navigate('/reset-password', { 
          state: { email, verified: true } 
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'OTP Verification Failed');
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;

    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/users/forgot-password`, { email });
      toast.success('New OTP sent to your email');
      setTimer(180);
      setCanResend(false);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to resend OTP');
    }
  };

  // Format timer to MM:SS
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
              Verify OTP
            </h2>
            <p className="text-purple-200 mt-2 opacity-80 text-sm">
              Enter the 6-digit code sent to {email}
            </p>
          </div>

          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={(el) => otpInputRefs.current[index] = el}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-white bg-purple-900/30 border border-purple-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-purple-300">
                Time Remaining: {formatTimer()}
              </p>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer mt-2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white p-3 rounded-xl hover:opacity-90 transition duration-300 font-medium shadow-lg shadow-purple-700/30 text-sm"
            >
              Verify OTP
            </button>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={!canResend}
                className={`text-sm ${
                  canResend 
                    ? 'text-blue-400 hover:text-purple-300' 
                    : 'text-gray-500 cursor-not-allowed'
                }`}
              >
                Resend OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
