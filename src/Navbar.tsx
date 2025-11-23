import React from "react";
import { Link } from "react-router-dom";
import Neko from "/Neko.svg";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "Get Started", path: "#cta" },
  ];

  return (
    <header className="sticky top-0 z-40 mx-auto w-full max-w-7xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side: Logo & Name */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={Neko} alt="Neko Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-[#081F5C] tracking-wide">
              Neko
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center bg-[#081F5C] rounded-full px-6 py-2 shadow-xl border border-[#334EAC]/30">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-10 py-2 rounded-full text-m font-medium transition-all duration-200 text-[#BAD6EB] hover:text-[#FFF9F0] hover:bg-[#334EAC]/20"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
