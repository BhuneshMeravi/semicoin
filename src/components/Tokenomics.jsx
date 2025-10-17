import tokenomicsBg from "../assets/tokenomics-bg.png";
import tokenomicsLogo from "../assets/tokenomics-logo.png";

export default function Tokenomics() {
    const tokenDetails = [
        { label: "Token Name", value: "Semicon" },
        { label: "Symbol", value: "SMC" },
        { label: "Total Supply", value: "99,999,000" },
        { label: "Network", value: "BEP 20" },
        { label: "Decimal", value: "18" }
    ];

    return (
        <section id="tokenomics" className="relative py-16 overflow-hidden h-[1595px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={tokenomicsBg}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto mb-36">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="orbitron-regular text-sm mb-2">
                        <span className="bg-gradient-to-r from-[#3FC42B] to-[#FD7C03] text-transparent bg-clip-text">
                            TOKENOMICS
                        </span>
                    </h3>
                    <h2 className="text-white text-2xl md:text-[32px] orbitron-semibold">
                        Economic Model of SMC
                    </h2>
                </div>

                {/* Main Content - Tokenomics Chart */}
                <div className="flex justify-center items-center mb-24">
                    <div className="relative max-w-7xl mx-auto px-24">
                        <img
                            src={tokenomicsLogo}
                            alt="Semicon Tokenomics Chart"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Token Details Below Chart */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                        {tokenDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center bg-black/80 rounded-full px-12 py-2 backdrop-blur-sm border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                                style={{
                                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                                }}
                            >
                                <div className="w-[476px] flex justify-around">
                                    <span className="text-white montserrat-regular text-[26px] mr-8">{detail.label}</span>
                                    <span className="text-white montserrat-semibold text-[26px]">{detail.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}