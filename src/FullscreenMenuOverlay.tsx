import React, { useEffect, useRef, useCallback } from "react";
import { X, Twitter, Linkedin, Instagram, Github, Discord } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Neko from "/Neko.svg";

interface FullscreenMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenuOverlay: React.FC<FullscreenMenuOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusableElements = overlayRef.current?.querySelectorAll(
        'button, a, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstFocusableRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const menuSections = [
    {
      title: "About",
      items: [
        { name: "About Us", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Social Media",
      items: [
        { name: "Twitter", href: "https://twitter.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "GitHub", href: "https://github.com" },
      ],
    },
    {
      title: "Team",
      items: [
        { name: "Members", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Join", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Discord, href: "https://discord.com", label: "Discord" },
  ];

  const handleClickOutside = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClickOutside}
          className="fixed inset-0 z-40 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Gradient Background */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#081F5C] via-[#334EAC]/80 to-[#081F5C] pointer-events-none" />

          {/* Content */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative min-h-screen flex flex-col"
          >
            {/* Top Bar Inside Overlay */}
            <div className="px-6 py-4 border-b border-white/10">
              <div className="mx-auto max-w-7xl flex items-center justify-between">
                {/* Left: Close Icon & "Menu" */}
                <button
                  ref={firstFocusableRef}
                  onClick={onClose}
                  className="flex items-center gap-2 text-white hover:text-[#FFF9F0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#334EAC] rounded-lg px-3 py-2"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                  <span className="text-sm font-medium hidden sm:inline">
                    Close
                  </span>
                </button>

                {/* Center: Logo */}
                <a
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#334EAC] rounded-lg px-3 py-2"
                >
                  <img src={Neko} alt="Neko Logo" className="h-8 w-auto" />
                </a>

                {/* Right: Discover Button & Language Selector */}
                <div className="flex items-center gap-3">
                  <button className="hidden md:inline px-4 py-2 text-white border border-white/30 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    Discover
                  </button>
                  <select className="px-3 py-2 bg-white/10 text-white border border-white/30 rounded-lg text-xs md:text-sm font-medium hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white appearance-none cursor-pointer">
                    <option value="en" className="text-[#081F5C]">
                      English
                    </option>
                    <option value="es" className="text-[#081F5C]">
                      Spanish
                    </option>
                    <option value="fr" className="text-[#081F5C]">
                      French
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 py-12">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
                  {/* Menu Columns */}
                  <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                    {menuSections.map((section, index) => (
                      <motion.div
                        key={section.title}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      >
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                          {section.title}
                        </h3>
                        <nav className="space-y-4">
                          {section.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={onClose}
                              className="block text-lg md:text-xl font-medium text-white hover:text-[#FFF9F0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#334EAC] rounded-lg px-3 py-2"
                            >
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Side Visual */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="hidden lg:flex items-center justify-center"
                  >
                    <div className="relative w-48 h-64 rounded-3xl bg-gradient-to-br from-[#FF9F3C] to-[#FF7A3C] flex items-center justify-center shadow-2xl">
                      <img
                        src={Neko}
                        alt="Neko Logo"
                        className="w-32 h-auto opacity-90"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Footer with Social Icons */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="px-6 py-8 border-t border-white/10"
            >
              <div className="mx-auto max-w-7xl flex flex-col items-center gap-8">
                <div className="flex items-center gap-6">
                  {socialIcons.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        ref={
                          social.label === "Discord" ? lastFocusableRef : null
                        }
                        href={social.href}
                        className="text-white hover:text-[#FF9F3C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#334EAC] rounded-lg p-2"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-white/50 text-sm">
                  © 2024 Neko Protocol. All rights reserved.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMenuOverlay;
