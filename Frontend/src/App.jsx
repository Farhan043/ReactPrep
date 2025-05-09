import React from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
