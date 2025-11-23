import React from "react";
import Neko from "/Neko.svg";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "Dashboard", path: "https://dapp.nekoprotocol.xyz/dashboard" },
    { name: "Swap", path: "https://dapp.nekoprotocol.xyz/swap" },
    { name: "Borrow", path: "https://dapp.nekoprotocol.xyz/borrow" },
    { name: "Lend", path: "https://dapp.nekoprotocol.xyz/lend" },
    { name: "Oracle", path: "https://dapp.nekoprotocol.xyz/oracle" },
  ];

  return (
    <header className="sticky top-0 z-40 mx-auto w-full max-w-7xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side: Logo & Name */}
        <div className="flex items-center gap-4">
          <a href="https://dapp.nekoprotocol.xyz" className="flex items-center gap-3">
            <img src={Neko} alt="Neko Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-[#081F5C] tracking-wide">
              Neko
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center bg-[#081F5C] rounded-full px-4 py-2 shadow-lg border border-[#334EAC]/30">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="px-6 py-2 rounded-full text-sm font-medium text-[#BAD6EB] hover:text-white hover:bg-[#334EAC]/20 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
