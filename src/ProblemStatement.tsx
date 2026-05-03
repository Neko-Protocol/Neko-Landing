import React from "react";

interface ProblemCardProps {
  title: string;
  text: string;
  imagePath: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, text, imagePath }) => (
  <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-[40px] p-10 overflow-hidden transition-all duration-700 cursor-pointer hover:border-blue-500/30 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)] flex flex-col h-full">
    {/* Subtle Gradient Glow on Hover */}
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-all duration-700" />

    <div className="relative z-10 space-y-8 flex flex-col h-full">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white leading-tight text-left tracking-tight">
          {title}
        </h3>
        <p className="text-white/50 leading-relaxed text-base text-left font-light">
          {text}
        </p>
      </div>

      {/* 3D Illustration Space - Bottom aligned */}
      <div className={`mt-auto pt-16 flex relative bottom-[-30px] right-[-30px] ${imagePath === '/problemcardIcon/cardThreeIcon.png' ? 'left-[-40px]' : 'left-0'} items-end justify-end transform group-hover:scale-105 transition-transform duration-700`}>
        <img
          src={imagePath}
          alt={title}
          className="w-full h-auto object-contain max-h-[220px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  </div>
);

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[90%] mx-auto relative z-10">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight max-w-5xl mx-auto leading-[1.1]">
            RWAs Exist. But the <br className="hidden md:block" />
            Experience Is Broken
          </h2>
          <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Real-world assets are moving on-chain, but everyday users still
            face a broken, fragmented, and unproductive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          <ProblemCard
            title="Fragmented Ecosystem"
            text="RWAs are scattered across disconnected platforms with no unified marketplace. Users must jump between multiple sites just to explore and manage assets."
            imagePath="/problemcardIcon/cardOneIcon.png"
          />

          <ProblemCard
            title="Discovery Bottleneck"
            text="RWAs are not presented in a way that feels approachable for everyday users. There is no simple place to browse and compare RWAs like other crypto assets."
            imagePath="/problemcardIcon/cardTwoIcon.png"
          />

          <ProblemCard
            title="Idle Assets"
            text="Most RWAs sit idle after being acquired. They don’t generate yield, unlock liquidity, or integrate into DeFi."
            imagePath="/problemcardIcon/cardThreeIcon.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
