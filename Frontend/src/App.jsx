import React from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster } from "./components/ui/sonner";
import Profile from "./Auth/Profile";
import LogoutButton from "./Auth/LogoutButton";
import ProtectedRoute from "./components/ProtectedRoute"; // Assuming you’ve made this

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
