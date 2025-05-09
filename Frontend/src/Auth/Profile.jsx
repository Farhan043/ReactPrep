import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust path as needed

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center mt-10 text-purple-200">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md bg-purple-900/30 border border-purple-700 text-white">
      <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Date of Birth:</strong> {new Date(user.dob).toLocaleDateString()}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Joined:</strong> {new Date(user.created_at).toLocaleString()}</p>
    </div>
  );
};

export default Profile;
