import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import { Menu, Globe, ChevronDown } from "lucide-react";
import Neko from "/Neko.svg";
import FullscreenMenuOverlay from "./FullscreenMenuOverlay";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        ref={navbarRef}
        className="sticky top-0 z-50 w-full px-6 py-4"
      >
        <div className="mx-auto max-w-7xl">
          {/* Navbar Container - Pill Style */}
          <div className="flex items-center justify-between rounded-full bg-[#081F5C]/70 backdrop-blur-md px-6 py-3 shadow-lg border border-white/10 transition-all duration-300">
            
            {/* Left: Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-white hover:text-[#FFF9F0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#334EAC] rounded-lg px-3 py-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
              <span className="text-sm font-medium hidden sm:inline">Menu</span>
            </button>

            {/* Center: Logo & Wordmark */}
            <a 
              href="/" 
              className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#334EAC] rounded-lg px-3 py-2"
            >
              <img src={Neko} alt="Neko Logo" className="h-8 w-auto" />
              <span className="text-lg font-bold text-white tracking-wide hidden sm:inline">Neko</span>
            </a>

            {/* Right: Navigation Links & Launch Button */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="#"
                className="hidden lg:inline text-white hover:text-[#FFF9F0] text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#334EAC] rounded-lg px-3 py-2"
              >
                Explore Assets
              </a>
              <a
                href="https://dapp.nekoprotocol.xyz"
                className="px-4 md:px-6 py-2 md:py-2.5 bg-white text-[#081F5C] rounded-full font-semibold text-xs md:text-sm hover:bg-[#FFF9F0] hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <FullscreenMenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
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
