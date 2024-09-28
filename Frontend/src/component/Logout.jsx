import React from "react";
import { useAuth } from "../context/Authcontext";
import toast from "react-hot-toast";
export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    setAuthUser({
      ...authUser,
      user: null,
    });
    localStorage.removeItem("User");
    toast.success("Logout succesfully");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div>
      <button
        className="bg-red-500 text-white rounded-md px-2 py-1 cursor-pointer"
        onClick={handleLogout}
      >
        {" "}
        Logout
      </button>
    </div>
  );
}
