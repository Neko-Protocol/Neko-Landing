import React from "react";

interface ProblemCardProps {
  title: string;
  text: string;
  imagePath: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, text, imagePath }) => (
  <div className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-500 cursor-pointer hover:border-[#334EAC]/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#334EAC]/10 flex flex-col h-full">
    {/* Subtle Gradient Glow on Hover */}
    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#334EAC]/5 rounded-full blur-[60px] group-hover:bg-[#334EAC]/15 transition-all duration-500" />

    <div className="relative z-10 space-y-6 flex flex-col h-full">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white leading-tight text-left">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm text-left">
          {text}
        </p>
      </div>

      {/* 3D Illustration Space - Bottom aligned */}
      <div className={`mt-auto pt-12 flex relative bottom-[-20px] right-[-20px] ${imagePath === '/problemcardIcon/cardThreeIcon.png' ? 'left-[-40px]' : 'left-0'} items-end justify-end`}>
        <img
          src={imagePath}
          alt={title}
          className="w-full h-auto object-contain max-h-[200px] drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
);

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#0a0a0a]">
      {/* Smooth Transition Overlay at the Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-[0.03] pointer-events-none" />

      {/* Background radial gradient - Enhanced for dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#334EAC]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            RWAs Exist. But the <br className="hidden md:block" />
            Experience Is Broken
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real-world assets are moving on-chain, but everyday users still
            face a broken, fragmented, and unproductive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <ProblemCard
            title="Fragmented & Complex Ecosystem"
            text="RWAs are scattered across disconnected platforms with no unified marketplace. Users must jump between multiple sites just to explore and manage assets."
            imagePath="/problemcardIcon/cardOneIcon.png"
          />

          <ProblemCard
            title="No Consumer-Friendly Discovery"
            text="RWAs are not presented in a way that feels approachable for everyday users. There is no simple place to browse and compare RWAs like other crypto assets."
            imagePath="/problemcardIcon/cardTwoIcon.png"
          />

          <ProblemCard
            title="Unproductive Assets"
            text="Most RWAs sit idle after being acquired. They don’t generate yield, unlock liquidity, or integrate into DeFi."
            imagePath="/problemcardIcon/cardThreeIcon.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
