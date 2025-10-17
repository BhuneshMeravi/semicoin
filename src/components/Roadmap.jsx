export default function Roadmap() {
  const roadmapData = [
    {
      title: "Foundation (Q4 2025)",
      items: [
        "Smart Contract Deployment (BEP-20)",
        "Token Listing On PancakeSwap",
        "Logo Trademark And Branding Completion",
        "Whitepaper Release (V1.0)"
      ]
    },
    {
      title: "Ecosystem Growth (Q1-Q2 2026)",
      items: [
        "Integration With EduTejas AI Labs",
        "Cross-Chain Bridge (TRC-20, ERC-20)",
        "Launch Of Staking And Reward Systems",
        "Collaborations With Semiconductor Innovators"
      ]
    },
    {
      title: "Market Expansion (Q3 2026)",
      items: [
        "Listing On CoinMarketCap & CoinGecko",
        "Exchange Listings (Bybit, KuCoin, Gate.io)",
        "Global Marketing Campaign",
        "Launch Of Hardware-Based Token Mining"
      ]
    },
    {
      title: "Global Development (2027)",
      items: [
        "Launch Of Semicon Blockchain (Layer 1 For AI Hardware)",
        "Integration With Industrial And Educational Sectors Worldwide",
        "Development Of Quantum-Secure AI Hardware Wallet"
      ]
    }
  ];

  const phases = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v4H3V3zm0 6h18v4H3V9zm0 6h18v4H3v-4z" />
        </svg>
      ),
      label: "Phase 1",
      active: false
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M3 21h18v-2H3v2z" />
        </svg>
      ),
      label: "Phase 2",
      active: true
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      label: "Phase 3",
      active: false
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      label: "Phase 4",
      active: false
    }
  ];

  return (
    <section id="roadmap" className="bg-black py-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="orbitron-regular text-sm mb-4">
            <span className="bg-gradient-to-r from-[#3FC42B] to-[#FD7C03] text-transparent bg-clip-text">
              Development Roadmap
            </span>
          </h3>
          <h2 className="text-[32px] orbitron-semibold text-white">
            Semicon Growth Phases
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Roadmap phases */}
          <div className="space-y-6">
            {roadmapData.map((phase, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                <h3 className="text-white text-xl orbitron-medium mb-4">
                  {phase.title}
                </h3>
                {/* Border Gradient */}
                <div className=" inset-0 bg-gradient-to-r from-[#3FC42B] via-[#FD7C03] to-[#0E8FF7] p-[1px] rounded-lg max-w-sm">
                  {/* Content */}
                  <div className="relative z-10 p-6 bg-black rounded-lg">
                    <ul className="space-y-1">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-white text-sm montserrat-regular flex items-start"
                        >
                          <span className="text-white mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right side - Phases panel */}
          <div className="lg:sticky lg:top-8 flex justify-center">
              {/* Gradient border effect */}
              <div className="inset-0 rounded-2xl bg-[linear-gradient(to_bottom_right,#11AEFD_0%,black_12.5%,black_87.5%,#FD7C03_100%)] m-8 p-2 -z-10 max-w-sm">
                <div className="relative bg-black border border-[#444444] rounded-2xl px-12 py-4">
                  <h3 className="text-white text-[32px] orbitron-semibold mb-12 text-center tracking-wider">
                    Phases
                  </h3>

                  <div className="space-y-2">
                    {phases.map((phase, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center space-x-6 p-1 rounded-xl transition-all duration-300 ${phase.active
                          ? ''
                          : 'bg-transparent hover:bg-gray-800/30'
                          }`}
                      >
                        {/* Icon container */}
                        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${phase.active
                          ? 'bg-gradient-to-br from-cyan-100 to-blue-200 shadow-lg shadow-cyan-300/40'
                          : 'bg-gray-700/50 text-gray-400'
                          }`}>
                          {/* Glow effect for active phase */}
                          {phase.active && (
                            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl animate-pulse"></div>
                          )}
                          <div className={`relative z-10 ${phase.active ? 'text-black' : 'text-gray-400'}`}>
                            {phase.icon}
                          </div>
                        </div>

                        {/* Phase label */}
                        <span className={`text-2xl orbitron-medium tracking-wide transition-colors duration-300 ${phase.active ? 'text-white' : 'text-gray-400'
                          }`}>
                          {phase.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="absolute top-56 left-1/2 -translate-x-1/2 mt-10 flex items-center justify-center">
          <div className="bg-gradient-to-l from-[#11AEFD] to-black h-1.5 w-64 rounded-full"></div>
          <div className="bg-green-500 h-px w-48"></div>
        </div>
      </div>
    </section>
  );
}