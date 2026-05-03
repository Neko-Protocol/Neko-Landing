import React from 'react';
import { ArrowRight, CircleDollarSign, Zap, Wallet } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Immersive 3D Flames with Parallax-style Motion */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/flames.png" 
          alt="3D Flames" 
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom mix-blend-screen opacity-80 animate-parallax-flames"
        />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Floating Dust Particles/Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400/30 rounded-full blur-[1px] animate-dust"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 10 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      {/* Floating 3D Icons (Enlarged Squircular Shapes) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left: PayPal-style */}
        <div className="absolute left-[10%] top-[20%] animate-float">
          <div className="w-24 h-24 bg-[#3B82F6] rounded-[35%] flex items-center justify-center shadow-[0_20px_50px_rgba(59,130,246,0.5),inset_0_-4px_8px_rgba(0,0,0,0.3)] -rotate-12 border border-white/20 backdrop-blur-sm transition-transform hover:scale-110">
             <span className="text-white font-bold text-4xl italic">P</span>
          </div>
        </div>

        {/* Bottom Left: USDC-style */}
        <div className="absolute left-[12%] bottom-[22%] animate-float-delayed">
          <div className="w-22 h-22 bg-[#2775CA] rounded-[35%] flex items-center justify-center shadow-[0_20px_45px_rgba(39,117,202,0.4),inset_0_-4px_6px_rgba(0,0,0,0.3)] rotate-12 border border-white/20 backdrop-blur-sm transition-transform hover:scale-110">
             <CircleDollarSign className="text-white w-12 h-12" />
          </div>
        </div>

        {/* Bottom Center: Yellow 'e'-style */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[8%] animate-float">
          <div className="w-24 h-24 bg-[#FACC15] rounded-[35%] flex items-center justify-center shadow-[0_20px_50px_rgba(250,204,21,0.4),inset_0_-4px_8px_rgba(0,0,0,0.3)] rotate-6 border border-white/20 backdrop-blur-sm transition-transform hover:scale-110">
             <span className="text-black font-black text-5xl">e</span>
          </div>
        </div>

        {/* Top Right: Stellar-style */}
        <div className="absolute right-[10%] top-[15%] animate-float-delayed">
          <div className="w-24 h-24 bg-[#1a1a1a] rounded-[35%] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_4px_8px_rgba(255,255,255,0.1)] rotate-12 border border-white/10 backdrop-blur-sm transition-transform hover:scale-110">
             <Zap className="text-white w-12 h-12" />
          </div>
        </div>

        {/* Bottom Right: Dark Blue Logo-style */}
        <div className="absolute right-[8%] bottom-[20%] animate-float">
          <div className="w-22 h-22 bg-[#1E3A8A] rounded-[35%] flex items-center justify-center shadow-[0_20px_45px_rgba(30,58,138,0.4),inset_0_-4px_6px_rgba(0,0,0,0.3)] -rotate-6 border border-white/20 backdrop-blur-sm transition-transform hover:scale-110">
             <Wallet className="text-white w-11 h-11" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
          All-in-one Platform that Unifies<br />Access to RWAs on Stellar.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
          Discover, access, and activate tokenized real-world assets, all in one place on Stellar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-6 justify-center items-center">
          <a
            href="https://dapp.nekoprotocol.xyz"
            className="group relative px-10 py-4 bg-white text-black rounded-full font-bold text-base overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative">Launch App</span>
            <ArrowRight className="w-5 h-5 relative" />
          </a>
          
          <a
            href="https://dapp.nekoprotocol.xyz/oracle"
            className="group relative px-10 py-4 bg-white/5 text-white rounded-full font-bold text-base border border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-md shadow-xl hover:scale-105"
          >
            <span className="relative">Explore Assets</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes dust {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes parallax-flames {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-dust {
          animation: dust linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .animate-parallax-flames {
          animation: parallax-flames 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
