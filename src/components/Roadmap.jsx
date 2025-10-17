import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

export default function Roadmap() {
  const roadmapData = [
    {
      title: "Foundation (Q4 2025)",
      items: [
        "Smart Contract Deployment (BEP-20)",
        "Token Listing On PancakeSwap",
        "Logo Trademark And Branding Completion",
        "Whitepaper Release (V1.0)",
      ],
    },
    {
      title: "Ecosystem Growth (Q1-Q2 2026)",
      items: [
        "Integration With EduTejas AI Labs",
        "Cross-Chain Bridge (TRC-20, ERC-20)",
        "Launch Of Staking And Reward Systems",
        "Collaborations With Semiconductor Innovators",
      ],
    },
    {
      title: "Market Expansion (Q3 2026)",
      items: [
        "Listing On CoinMarketCap & CoinGecko",
        "Exchange Listings (Bybit, KuCoin, Gate.io)",
        "Global Marketing Campaign",
        "Launch Of Hardware-Based Token Mining",
      ],
    },
    {
      title: "Global Development (2027)",
      items: [
        "Launch Of Semicon Blockchain (Layer 1 For AI Hardware)",
        "Integration With Industrial And Educational Sectors Worldwide",
        "Development Of Quantum-Secure AI Hardware Wallet",
      ],
    },
  ];

  const phases = [
    { label: "Phase 1" },
    { label: "Phase 2" },
    { label: "Phase 3" },
    { label: "Phase 4" },
  ];

  // Track current active phase
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className="grid lg:grid-cols-2 gap-8 items-center max-h-[500px]">
          {/* LEFT SIDE - Swiper for roadmap */}
          <Swiper
            direction="vertical"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            mousewheel={true}
            slidesPerView={2}
            spaceBetween={40}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 👈 track active slide
            modules={[Autoplay, Mousewheel]}
            className="h-[500px] rounded-lg "
          >
            {roadmapData.map((phase, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-lg overflow-hidden group transition-transform duration-300 ">
                  <h3 className="text-white text-xl orbitron-medium mb-4">
                    {phase.title}
                  </h3>

                  <div className="inset-0 bg-gradient-to-r from-[#3FC42B] via-[#FD7C03] to-[#0E8FF7] p-[1px] rounded-lg max-w-sm">
                    <div className="relative z-10 p-6 bg-black rounded-lg">
                      <ul className="space-y-1">
                        {phase.items.map((item, i) => (
                          <li
                            key={i}
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT SIDE - Phase list */}
          <div className="flex justify-center h-[500px] items-center">
            <div className="inset-0 rounded-2xl bg-[linear-gradient(to_bottom_right,#11AEFD_0%,black_12.5%,black_87.5%,#FD7C03_100%)] m-8 p-2 max-w-sm">
              <div className="relative bg-black border border-[#444444] rounded-2xl px-12 py-4">
                <h3 className="text-white text-[32px] orbitron-semibold mb-12 text-center tracking-wider">
                  Phases
                </h3>

                <div className="space-y-6">
                  {phases.map((phase, index) => (
                    <div
                      key={index}
                      className={`flex justify-center items-center space-x-4 p-2 rounded-xl transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/20 scale-105"
                          : "bg-transparent hover:bg-gray-800/30"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-gradient-to-br from-cyan-100 to-blue-200 shadow-lg shadow-cyan-300/40"
                            : "bg-gray-700/50"
                        }`}
                      />
                      <span
                        className={`text-xl orbitron-medium tracking-wide transition-all duration-300 ${
                          activeIndex === index
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {phase.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
