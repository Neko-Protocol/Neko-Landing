import React from 'react';
import { ArrowRight, CircleDollarSign, Zap, Wallet } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Generated 3D Flames Image Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/flames.png" 
          alt="3D Flames" 
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom mix-blend-screen opacity-80"
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Floating 3D Icons (Enlarged) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left: PayPal-style */}
        <div className="absolute left-[12%] top-[25%] w-20 h-20 bg-[#3B82F6] rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(59,130,246,0.5),inset_0_-4px_8px_rgba(0,0,0,0.3)] animate-float transform -rotate-12 border border-white/20">
           <span className="text-white font-bold text-3xl italic">P</span>
        </div>

        {/* Bottom Left: USDC-style */}
        <div className="absolute left-[8%] bottom-[20%] w-18 h-18 bg-[#2775CA] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(39,117,202,0.4),inset_0_-4px_6px_rgba(0,0,0,0.3)] animate-float-delayed border border-white/20">
           <CircleDollarSign className="text-white w-10 h-10" />
        </div>

        {/* Bottom Center: Yellow 'e'-style */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] w-20 h-20 bg-[#FACC15] rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(250,204,21,0.4),inset_0_-4px_8px_rgba(0,0,0,0.3)] animate-float transform rotate-6 border border-white/20">
           <span className="text-black font-black text-4xl">e</span>
        </div>

        {/* Top Right: Stellar-style */}
        <div className="absolute right-[12%] top-[20%] w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.5),inset_0_4px_8px_rgba(255,255,255,0.1)] animate-float-delayed transform rotate-12 border border-white/10">
           <Zap className="text-white w-10 h-10" />
        </div>

        {/* Bottom Right: Dark Blue Logo-style */}
        <div className="absolute right-[10%] bottom-[25%] w-18 h-18 bg-[#1E3A8A] rounded-2xl flex items-center justify-center shadow-[0_15px_35px_rgba(30,58,138,0.4),inset_0_-4px_6px_rgba(0,0,0,0.3)] animate-float transform -rotate-6 border border-white/20">
           <Wallet className="text-white w-9 h-9" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 max-w-5xl">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
          All-in-one Platform that Unifies<br />Access to RWAs on Stellar.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
          Discover, access, and activate tokenized real-world assets, all in one place on Stellar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-6 justify-center items-center">
          <a
            href="https://dapp.nekoprotocol.xyz"
            className="px-10 py-4 bg-white text-black rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            Launch App
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a
            href="https://dapp.nekoprotocol.xyz/oracle"
            className="px-10 py-4 bg-white/5 text-white rounded-full font-bold text-base border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-md shadow-xl"
          >
            Explore Assets
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-15px) rotate(var(--tw-rotate)); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
