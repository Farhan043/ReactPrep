

// components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Practice", path: "/practice" },
    { name: "Playground", path: "/playground" },
    { name: "Gaming", path: "/gaming" },
    { name: "Challenges", path: "/challenge" },
    { name: "Interview", path: "/interview" },
    { name: "Resources", path: "/resources" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <div className=" bg-black text-white">
      <nav className="backdrop-blur-xl px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="text-white">React</span>
            <span className="text-white font-semibold">Prep</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center text-sm">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <Link to={link.path}>{link.name}</Link>
                {link.name === "Playground" && (
                  <span className="absolute -top-4 -right-4 text-xs text-white bg-purple-600 px-1.5 rounded-md">
                    New
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="flex items-center cursor-pointer bg-transparent border border-purple-500 text-purple-400 px-3 py-1 rounded-md text-sm hover:bg-purple-500/10"
              onClick={() => navigate("/assistant")}
            >
              💡 AI Assistant
              <span className="w-2 h-2 bg-green-400 rounded-full ml-2"></span>
            </button>

            <div
              className="relative group"
              onClick={() => navigate("/profile")}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="w-10 h-10 cursor-pointer rounded-full bg-orange-300 flex items-center justify-center">
                      👤
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 bg-zinc-900  rounded-lg shadow-lg p-4 space-y-3">
            <ul className="space-y-2 text-white text-base">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between hover:text-purple-400 transition"
                  >
                    <span>{link.name}</span>
                    {link.name === "Playground" && (
                      <span className="text-xs bg-purple-600 px-1.5 rounded-md">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* AI Assistant Button */}
            <div
              className="flex items-center justify-between border border-purple-500 text-purple-400 px-3 py-2 rounded-md text-sm hover:bg-purple-500/10 transition cursor-pointer"
              onClick={() => {
                setOpen(false);
                navigate("/assistant");
              }}
            >
              💡 AI Assistant
              <span className="w-2 h-2 bg-green-400 rounded-full ml-2"></span>
            </div>

            {/* Profile Icon */}
            <div
              className="flex items-center gap-2 mt-3 cursor-pointer hover:text-orange-300 transition"
              onClick={() => {
                setOpen(false);
                navigate("/profile");
              }}
            >
              <div className="w-9 h-9 flex items-center justify-center bg-orange-300 rounded-full">
                👤
              </div>
              <span className="text-white text-sm">Profile</span>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;












