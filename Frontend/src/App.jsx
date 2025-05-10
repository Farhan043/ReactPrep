import React from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster } from "./components/ui/sonner";
import Profile from "./Auth/Profile";
import LogoutButton from "./Auth/LogoutButton";
import ProtectedRoute from "./components/NavComponents/ProtectedRoute"; // Assuming you’ve made this
import Dashboard from "./components/NavComponents/Dashboard";
import Practice from "./components/NavComponents/Practice";
import PlayGround from "./components/NavComponents/PlayGround";
import Gaming from "./components/NavComponents/Gaming";
import Challenges from "./components/NavComponents/Challenges";
import Interview from "./components/NavComponents/Interview";
import Resources from "./components/NavComponents/Resources";
import Admin from "./components/NavComponents/Admin";
import Assistant from "./components/NavComponents/Assistant";

const App = () => {
  return (
    <div>
      <Routes>
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
