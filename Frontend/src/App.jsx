import React from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster } from "./components/ui/sonner";
import Profile from "./Auth/Profile";
import LogoutButton from "./Auth/LogoutButton";
import ProtectedRoute from "./components/ProtectedRoute"; // Assuming you’ve made this
import Dashboard from "./components/Dashboard";
import Practice from "./components/Practice";
import PlayGround from "./components/PlayGround";
import Gaming from "./components/Gaming";
import Challenges from "./components/Challenges";
import Interview from "./components/Interview";
import Resources from "./components/Resources";
import Admin from "./components/Admin";
import Assistant from "./components/Assistant";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
         <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
               </ProtectedRoute>
            }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/challenge" element={<Challenges />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/assistant" element={<Assistant />} />



        
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <div>
                <Profile />
                <LogoutButton />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
