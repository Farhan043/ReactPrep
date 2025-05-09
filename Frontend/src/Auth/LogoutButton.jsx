import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust path
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
