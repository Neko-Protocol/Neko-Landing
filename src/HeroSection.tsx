import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Realistic Blue Flame Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Flame Group */}
        <div className="absolute left-0 bottom-0 w-[400px] h-[600px] lg:w-[500px] lg:h-[700px]">
          <svg viewBox="0 0 400 700" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="leftFlame1" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#93C5FD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Main flame */}
            <path
              d="M 0,700 Q 40,650 60,580 Q 80,510 100,450 Q 120,390 110,330 Q 100,270 80,220 Q 60,170 50,120 Q 40,70 30,20 L 0,0 Z"
              fill="url(#leftFlame1)"
              filter="url(#glow)"
            />
            {/* Secondary flame */}
            <path
              d="M 80,700 Q 120,630 140,550 Q 160,470 170,400 Q 180,330 165,270 Q 150,210 130,160 Q 110,110 95,60 L 80,0 Z"
              fill="url(#leftFlame1)"
              opacity="0.7"
              filter="url(#glow)"
            />
            {/* Tertiary flame */}
            <path
              d="M 150,700 Q 180,640 190,570 Q 200,500 205,440 Q 210,380 200,320 Q 190,260 175,200 Q 160,140 150,80 L 140,0 Z"
              fill="url(#leftFlame1)"
              opacity="0.5"
              filter="url(#glow)"
            />
          </svg>
        </div>

        {/* Right Flame Group */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[750px] lg:w-[650px] lg:h-[900px]">
          <svg viewBox="0 0 500 900" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="rightFlame1" x1="100%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#93C5FD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Main flame */}
            <path
              d="M 500,900 Q 460,830 440,740 Q 420,650 400,570 Q 380,490 390,420 Q 400,350 420,280 Q 440,210 450,140 Q 460,70 470,20 L 500,0 Z"
              fill="url(#rightFlame1)"
              filter="url(#glow)"
            />
            {/* Secondary flame */}
            <path
              d="M 420,900 Q 380,810 360,710 Q 340,610 330,530 Q 320,450 335,380 Q 350,310 370,240 Q 390,170 405,100 L 420,0 Z"
              fill="url(#rightFlame1)"
              opacity="0.7"
              filter="url(#glow)"
            />
            {/* Tertiary flame */}
            <path
              d="M 350,900 Q 320,820 300,730 Q 280,640 275,560 Q 270,480 280,410 Q 290,340 310,270 Q 330,200 345,130 L 360,0 Z"
              fill="url(#rightFlame1)"
              opacity="0.5"
              filter="url(#glow)"
            />
          </svg>
        </div>

        {/* Bottom Flame Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px]">
          <svg viewBox="0 0 1400 300" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bottomFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M 0,200 Q 100,150 200,170 Q 300,190 400,160 Q 500,130 600,150 Q 700,170 800,140 Q 900,110 1000,130 Q 1100,150 1200,120 Q 1300,90 1400,110 L 1400,300 L 0,300 Z"
              fill="url(#bottomFlame)"
              filter="url(#glow)"
            />
            <path
              d="M 0,230 Q 150,190 300,210 Q 450,230 600,200 Q 750,170 900,190 Q 1050,210 1200,180 Q 1300,165 1400,175 L 1400,300 L 0,300 Z"
              fill="url(#bottomFlame)"
              opacity="0.6"
              filter="url(#glow)"
            />
          </svg>
        </div>
      </div>

      {/* Floating Icon Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side icons */}
        <div className="absolute left-[8%] top-[25%] w-16 h-16 lg:w-20 lg:h-20 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/40 animate-float">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
        </div>
        <div className="absolute left-[12%] bottom-[35%] w-14 h-14 lg:w-16 lg:h-16 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/40 animate-float-delayed">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            Ø
          </div>
        </div>

        {/* Right side icons */}
        <div className="absolute right-[10%] top-[20%] w-14 h-14 lg:w-16 lg:h-16 bg-gray-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-400/40 animate-float">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-full"></div>
        </div>
        <div className="absolute right-[8%] bottom-[40%] w-16 h-16 lg:w-20 lg:h-20 bg-blue-400/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-300/40 animate-float-delayed">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-full"></div>
        </div>

        {/* Bottom center icon */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[25%] w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-300/50 animate-float">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
            e
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight px-4">
          All-in-one Platform that Unifies<br />
          Access to RWAs on Stellar.
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed font-light px-4">
          Discover, access, and activate tokenized real-world assets, all in one place on Stellar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <a
            href="https://dapp.nekoprotocol.xyz"
            className="group px-10 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-2xl w-full sm:w-auto justify-center"
            aria-label="Launch the Neko Protocol application"
          >
            Launch App
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://dapp.nekoprotocol.xyz/oracle"
            className="px-10 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center shadow-xl"
            aria-label="Explore available assets on Neko Protocol"
          >
            Explore Assets
          </a>
        </div>

        {/* Stats/Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$1M+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">RWA Assets</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Decentralized</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
