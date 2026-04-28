import React from "react";
import { Menu, Globe, ChevronDown } from "lucide-react";
import Neko from "/Neko.svg";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-6xl lg:max-w-7xl px-4">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-10 py-5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Left: Menu */}
        <button className="flex items-center gap-3 text-white/80 hover:text-white transition-all group">
          <div className="flex flex-col gap-1.5 w-7">
            <div className="h-0.5 w-full bg-current transition-all group-hover:w-full"></div>
            <div className="h-0.5 w-2/3 bg-current transition-all group-hover:w-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Menu</span>
        </button>

        {/* Center: Logo */}
        <a href="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 hover:scale-105 transition-transform">
          <img src={Neko} alt="Neko Logo" className="h-10 w-auto" />
          <span className="text-3xl font-black text-white tracking-tighter">Neko</span>
        </a>

        {/* Right: Discover & English */}
        <div className="flex items-center gap-8">
          <a href="#discover" className="hidden md:block text-sm font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest">
            Discover
          </a>
          <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">English</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
