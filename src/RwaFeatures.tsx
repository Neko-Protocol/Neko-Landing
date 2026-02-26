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
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight">
            A Better Way to Access<br/>
            Real-World Assets
          </h2>
          <p className="text-[#8F9BB3] text-xl max-w-2xl mx-auto">
            Neko unifies discovery, access, and productivity into a single consumer-friendly marketplace for RWAs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-[#11131a] rounded-3xl p-8 lg:p-10 border border-[#2A2E3D]/50 relative overflow-hidden flex flex-col group hover:border-[#334EAC]/50 transition-colors duration-500"
            >
              {/* Flame Accent */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#334EAC] opacity-10 rounded-full blur-[80px] pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>
              
              <svg 
                className="absolute -top-4 -right-4 w-48 h-48 text-[#334EAC] opacity-10 transform rotate-12 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 pointer-events-none" 
                viewBox="0 0 200 200" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M45.7,177.3C15.8,147.2,1.3,105.7,11.8,64.4C14.6,53.2,19.3,42.5,25.6,32.7 C25.9,32.2,26.5,31.7,27.1,31.6c0.6-0.1,1.3,0.1,1.8,0.5c0.5,0.4,0.8,1,0.9,1.6c0.1,0.6-0.1,1.3-0.5,1.8 C18.7,48.2,13.6,61,12.3,74.5c-3.1,30.4,8.1,60.8,30.4,82.6c20.5,20.2,48.8,30,77.5,26.9c28.7-3.1,54.4-18.4,70.6-42.3 c1-1.5,1.3-3.4,0.7-5.1c-0.6-1.8-2-3.1-3.8-3.6c-4.4-1.2-8.9-1.8-13.4-1.8c-23,0-44.5,11.5-57.5,30.8c-0.5,0.7-1.3,1.2-2.1,1.3 c-0.8,0.1-1.7-0.1-2.3-0.6c-0.7-0.5-1.1-1.3-1.3-2.1c-0.1-0.8,0.1-1.7,0.6-2.3c15-22.3,40-35.8,66.8-35.8c5.4,0,10.8,0.7,16.1,2.1 c1,0.3,2.1,0.1,2.9-0.5c0.9-0.6,1.4-1.5,1.5-2.6c2.4-19.3-1.5-38.6-11.4-55.8c-10.4-18-26.6-31.9-46-40.2 c-19.1-8.1-40.1-9.9-60.3-5.2c-15.6,3.6-30.2,11.6-42,23.1C35.7,46.5,35,46.5,34.3,45.8c-0.7-0.7-0.7-1.4,0-2.1 c12.4-12.2,27.8-21,44.4-25.1c21.5-5.3,44-3.2,64.4,5.9c20.7,9.3,38,24.5,49.2,43.9c10.7,18.5,14.6,39.5,11.5,59.9 c-3.2,20.8-13.5,39.6-29,53C152.1,199.1,123.6,206.6,94.5,204.4C63.2,202.1,34.4,185.7,15,160.2 C14.5,159.5,14.8,158.4,15.6,158c0.8-0.5,1.8-0.4,2.5,0.3c18.3,24,45.2,39.3,74.6,41.4C121,201.7,148,194.5,168.1,176.7z" />
              </svg>

              {/* Text Content */}
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-[#8F9BB3] text-base leading-relaxed">{feature.text}</p>
              </div>

              {/* Image Container */}
              <div className="relative z-10 w-full mt-auto bg-[#1a1d28] rounded-2xl border border-[#2A2E3D]/50 overflow-hidden flex items-center justify-center pt-6 px-6 transform group-hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-auto object-cover rounded-t-xl opacity-90 group-hover:opacity-100 transition-opacity shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
