import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

import { AuthContext } from "../context/AuthContext";

const Register = () => {
  // Declare state variables for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [role, setRole] = useState("");


  // Get the setUser function from the UserDataContext
 const { setUser } = useContext(AuthContext);
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Function to validate the form
  const validateForm = () => {
    // Check if any of the input fields are empty
    if (!name || !email || !password || !dob || !role) {
      // If any of the input fields are empty, show an error message
      toast.error("All fields are required.", {
        position: "top-right",
        theme: "dark",
      });
      return false;
    }
    // Check if the password is at least 6 characters long
    if (password.length < 7) {
      // If the password is less than 6 characters, show an error message
      toast.error("Password must be at least 7 characters long.", {
        position: "top-right",
        theme: "dark",
      });
      return false;
    }
    // If all the input fields are valid, return true
    return true;
  };

  // Function to handle form submission
  const submitHandler = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Validate the form
    if (!validateForm()) return;

    // Create a new user object with the input values
    const newUser = { name, email, password, dob, role };

    try {
      // Send a POST request to the server to register the new user
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );
      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        setUser(data.user); // Uncomment if using context
        localStorage.setItem("token", data.token);
        toast.success("Registration successful!", {
          position: "top-right",
          theme: "dark",
        });
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      // If there is an error, show an error message
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
        theme: "dark",
      });
    }

    // Reset the input fields
    setName("");
    setEmail("");
    setPassword("");
    setDob("");
    setRole("");
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      {/* Background video - using the iStock particles video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://media.istockphoto.com/id/1337346349/video/a-bunch-of-jellyfish-swimming.mp4?s=mp4-480x480-is&k=20&c=-GRPl8fGrf7MV-lBWIDGW5XR_wLO2-n4RmIUjjShAwo="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-20 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4 sm:px-0 max-h-screen">
        <div className="bg-black/50 backdrop-blur-xl p-5 sm:p-6 rounded-3xl shadow-2xl border border-purple-500/20 overflow-y-auto max-h-[95vh]">
          <div className="mb-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              ReactPrep
            </h1>
            <p className="text-purple-200 mt-1 opacity-80 text-sm">
              Create your account
            </p>
          </div>

       

          <form onSubmit={submitHandler} className="mt-2 space-y-3">
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-purple-200 block mb-1"
                >
                  {" "}
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300/50 text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-purple-200 block mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300/50 text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-xs font-medium text-purple-200 block mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Min. 7 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2.5 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300/50 text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="text-xs font-medium text-purple-200 block mb-1"
                >
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-2.5 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="text-xs font-medium text-purple-200 block mb-1"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2.5 border border-purple-700/50 rounded-xl bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm"
                  required
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-5 cursor-pointer bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white p-3 rounded-xl hover:opacity-90 transition duration-300 font-medium shadow-lg shadow-purple-700/30 text-sm"
            >
              SignUp
            </button>

           <div className="text-center mt-3 space-y-1 text-purple-200/80 text-xs">
  <p>
    Already have an account?{" "}
    <Link to="/login" className="text-blue-400 hover:text-purple-300 font-medium">
      Log in
    </Link>
  </p>
  <p>
    Forgot password?{" "}
    <Link to="/forgot-password" className="text-blue-400 hover:text-purple-300 font-medium">
      Reset it here
    </Link>
  </p>
</div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
