import React from 'react';

const features = [
  {
    title: "Buy, Sell & Swap RWAs",
    text: "Trade RWAs like any other token — instantly and permissionlessly.",
    image: "/swap_ui_demo.png"
  },
  {
    title: "Use RWAs as Collateral",
    text: "Unlock liquidity without selling your assets.",
    image: "/borrow_ui_demo.png"
  },
  {
    title: "Discover RWAs",
    text: "Find tokenized treasuries, private credit, and other real-world assets in one place.",
    image: "/discover_ui_demo.png"
  },
  {
    title: "Earn Yield on RWAs",
    text: "Turn RWAs into income-generating assets.",
    image: "/lend_ui_demo.png"
  }
];

export const RwaFeatures: React.FC = () => {
  return (
    <section className="bg-black py-32 px-4 relative overflow-hidden">
      <div className="w-full max-w-[90%] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            A Better Way to Access<br/>
            Real-World Assets
          </h2>
          <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Neko unifies discovery, access, and productivity into a single consumer-friendly marketplace for RWAs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-[#0a0a0a] rounded-[40px] p-10 lg:p-14 border border-white/10 relative overflow-hidden flex flex-col group hover:border-blue-500/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
            >
              {/* Subtle Gradient Accent */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
              
              {/* Text Content */}
              <div className="relative z-10 mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed font-light">{feature.text}</p>
              </div>

              {/* Image Container - Stylized Mockup */}
              <div className="relative z-10 w-full mt-auto bg-[#141414] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center pt-8 px-8 transform group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-auto object-cover rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_40px_rgba(0,0,0,0.8)]" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
