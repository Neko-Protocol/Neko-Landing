import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Blue gradient flame/wave shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left flame */}
        <div className="absolute left-0 bottom-0 w-64 h-96 opacity-80">
          <svg viewBox="0 0 200 300" className="w-full h-full">
            <defs>
              <linearGradient id="flameGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>
            <path
              d="M 0,300 Q 30,250 40,200 Q 50,150 60,120 Q 70,90 50,60 Q 30,30 20,0 L 0,0 Z"
              fill="url(#flameGradient1)"
              opacity="0.7"
            />
            <path
              d="M 40,300 Q 70,240 80,180 Q 90,130 100,100 Q 110,70 90,40 Q 70,10 60,0 L 40,0 Z"
              fill="url(#flameGradient1)"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Right flame */}
        <div className="absolute right-0 bottom-0 w-80 h-[500px] opacity-80">
          <svg viewBox="0 0 250 400" className="w-full h-full">
            <defs>
              <linearGradient id="flameGradient2" x1="100%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>
            <path
              d="M 250,400 Q 220,340 210,280 Q 200,220 190,180 Q 180,140 200,100 Q 220,60 230,0 L 250,0 Z"
              fill="url(#flameGradient2)"
              opacity="0.7"
            />
            <path
              d="M 210,400 Q 180,330 170,260 Q 160,200 150,160 Q 140,120 160,80 Q 180,40 190,0 L 210,0 Z"
              fill="url(#flameGradient2)"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              d="M 0,100 Q 150,50 300,80 Q 450,110 600,70 Q 750,30 900,60 Q 1050,90 1200,50 L 1200,200 L 0,200 Z"
              fill="url(#waveGradient)"
              opacity="0.6"
            />
            <path
              d="M 0,120 Q 200,80 400,100 Q 600,120 800,90 Q 1000,60 1200,80 L 1200,200 L 0,200 Z"
              fill="url(#waveGradient)"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          The Marketplace for Real-World Assets On-Chain
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          Discover, access, and put tokenized real-world assets to work, all in one place on Stellar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://dapp.nekoprotocol.xyz"
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            aria-label="Launch the Neko Protocol application"
          >
            Launch App
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://dapp.nekoprotocol.xyz/oracle"
            className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white/40 hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
            aria-label="Explore available assets on Neko Protocol"
          >
            Explore Assets
          </a>
        </div>
      </div>

      {/* Floating decorative elements (optional) */}
      <div className="absolute top-32 left-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute top-48 right-32 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-700 hidden lg:block" />
      <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500 hidden lg:block" />
    </section>
  );
};

export default HeroSection;
