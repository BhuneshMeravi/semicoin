import { useState } from 'react';
import cardBg from '../assets/card-bg.png';

const useCasesData = [
  {
    id: 1,
    title: "AI Hardware Development Funding",
    description: "SMC Fuels Global Innovation By Funding Semiconductor Research And AI Hardware Development. Through Decentralized Token-Based Grants, Researchers, Hardware Labs, And Tech Innovators Gain Access To Transparent, Community-Powered Funding For Chip Design, Neural Processing Units, And Computational Infrastructure, Accelerating Next-Generation Technological Advancement Without Traditional Financial Barriers.",
    image: "/api/placeholder/300/400"
  },
  {
    id: 2,
    title: "Machine Coding Ecosystem",
    description: "Revolutionary platform enabling automated code generation and machine learning integration for enhanced development workflows.",
    image: "/api/placeholder/300/400"
  },
  {
    id: 3,
    title: "Crypto Hardware Mining Integration",
    description: "Optimized mining solutions with advanced hardware integration for maximum efficiency and sustainable blockchain operations.",
    image: "/api/placeholder/300/400"
  },
  {
    id: 4,
    title: "Education & Research Grants",
    description: "Supporting academic institutions and research facilities with funding for semiconductor and AI research initiatives.",
    image: "/api/placeholder/300/400"
  },
  {
    id: 5,
    title: "AI Marketplace & Payments",
    description: "Decentralized marketplace for AI services and tools with seamless SMC-powered payment integration.",
    image: "/api/placeholder/300/400"
  },
  {
    id: 6,
    title: "Staking & Yield Farming",
    description: "Earn rewards by staking SMC tokens and participating in yield farming programs with competitive APY rates.",
    image: "/api/placeholder/300/400"
  }
];

export default function UseCases() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="max-w-full mx-auto px-6 py-16 my-2">
      <div className="text-center mb-12">
        <h3 className="orbitron-regular text-sm mb-4">
          <span className="bg-gradient-to-r from-[#3FC42B] to-[#FD7C03] text-transparent bg-clip-text">
            Use Cases
          </span>
        </h3>
        <h2 className="text-[32px] orbitron-semibold text-white">
          Core Utilities Of Semicon
        </h2>
      </div>

      <div className="flex justify-center gap-4 overflow-x-auto pb-4">
        {useCasesData.map((useCase) => (
          <div
            key={useCase.id}
            className={`relative cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${expandedCard === useCase.id
                ? 'w-80 md:w-96'
                : 'w-20 md:w-44'
              } h-96 rounded-lg overflow-hidden group`}
            onClick={() => handleCardClick(useCase.id)}
          >
            {/* Background Image */}
            <div className="absolute p-[2px] inset-0 z-10">
              <img
                src={cardBg}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div> */}
            </div>

            {/* Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3FC42B] via-[#FD7C03] to-[#0E8FF7] p-[2px] rounded-lg">
              <div className="w-full h-full bg-black/90 rounded-lg"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Vertical Title (when collapsed) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${expandedCard === useCase.id ? 'opacity-0' : 'opacity-100'
                }`}>
                <h3 className="text-white text-sm font-medium transform -rotate-90 whitespace-nowrap orbitron-regular">
                  {useCase.title}
                </h3>
              </div>

              {/* Expanded Content */}
              <div className={`transition-all duration-500 ${expandedCard === useCase.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
                } px-8 py-16 h-full flex flex-col justify-between items-center text-center`}>
                <div>
                  <h3 className="text-white text-xl orbitron-bold mb-4 leading-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-[#DBDBDB] text-xs montserrat-regular leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}