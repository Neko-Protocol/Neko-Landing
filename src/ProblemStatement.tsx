import React from "react";

interface ProblemCardProps {
  title: string;
  text: string;
  imagePath: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  text,
  imagePath,
}) => (
  <div className="group relative bg-[#141414] border border-white/10 rounded-[28px] p-8 overflow-hidden transition-all duration-500 shadow-[0_24px_60px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(51,78,172,0.24)] flex flex-col h-full">
    <div className="absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-t from-[#334EAC]/12 to-transparent pointer-events-none" />

    <div className="relative z-10 flex flex-col h-full">
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight text-left">
          {title}
        </h3>
        <p className="text-sm md:text-base text-slate-400 leading-7 text-left">
          {text}
        </p>
      </div>

      <div className="relative mt-auto pt-8 min-h-[190px] flex items-end justify-center">
        <img
          src={imagePath}
          alt={title}
          className="relative w-full max-w-[260px] h-auto object-contain drop-shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </div>
);

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#040404]">
      {/* Smooth Transition Overlay at the Top */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white to-transparent opacity-[0.04] pointer-events-none" />

      {/* Background radial gradient - Enhanced for dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[#334EAC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-5 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            RWAs Exist. But the <br className="hidden md:block" />
            Experience Is Broken
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real-world assets are moving on-chain, but everyday users still face
            a broken, fragmented, and unproductive experience.
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
