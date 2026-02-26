import React from "react";

interface ProblemCardProps {
  title: string;
  text: string;
  imagePath: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, text, imagePath }) => (
  <div className="group relative bg-white/50 backdrop-blur-sm border border-[#081F5C]/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 cursor-pointer hover:border-[#334EAC]/30 hover:scale-[0.97] hover:shadow-inner">
    {/* Gradient Glow */}
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#334EAC]/5 rounded-full blur-[80px] group-hover:bg-[#334EAC]/10 transition-all duration-500" />
    
    <div className="relative z-10 space-y-6 flex flex-col h-full">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#081F5C] leading-tight text-left">
          {title}
        </h3>
        <p className="text-[#081F5C]/70 leading-relaxed text-sm text-left">
          {text}
        </p>
      </div>

      <div className="min-h-[180px]">

      </div>
      
      {/* 3D Illustration Space */}
      <div className={`mt-auto pt-8 flex absolute bottom-[-30px] right-[-30px] ${imagePath === '/problemcardIcon/cardThreeIcon.png' ? 'left-[-70px]' : 'left-0'} items-center justify-center  min-h-[180px]`}>
        <img 
          src={imagePath} 
          alt={title} 
          className="w-full h-auto object-contain max-h-[280px] drop-shadow-2xl transform "
        />
      </div>
    </div>
  </div>
);

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Background radial gradient - softened for light mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#334EAC]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#081F5C] tracking-tight">
            RWAs Exist. But the <br className="hidden md:block" />
            Experience Is Broken
          </h2>
          <p className="text-[#081F5C]/60 text-lg max-w-2xl mx-auto">
            Real-world assets are moving on-chain, but everyday users still 
            face a broken, fragmented, and unproductive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
