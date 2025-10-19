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
        <section id="tokenomics" className="relative py-8 md:py-16 overflow-hidden min-h-screen lg:h-[1595px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={tokenomicsBg}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-36">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h3 className="orbitron-regular text-xs sm:text-sm mb-2">
                        <span className="bg-gradient-to-r from-[#3FC42B] to-[#FD7C03] text-transparent bg-clip-text">
                            TOKENOMICS
                        </span>
                    </h3>
                    <h2 className="text-white text-xl sm:text-2xl md:text-[32px] orbitron-semibold">
                        Economic Model of SMC
                    </h2>
                </div>

                {/* Main Content - Tokenomics Chart */}
                <div className="flex justify-center items-center mb-12 md:mb-24">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
                        <img
                            src={tokenomicsLogo}
                            alt="Semicon Tokenomics Chart"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Token Details Below Chart */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-8">
                        {tokenDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center bg-black/80 rounded-full px-4 sm:px-6 md:px-8 lg:px-12 py-2 backdrop-blur-sm border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 w-full sm:w-auto"
                                style={{
                                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                                }}
                            >
                                <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[476px] flex justify-between sm:justify-around">
                                    <span className="text-white montserrat-regular text-sm sm:text-lg md:text-xl lg:text-[26px] mr-2 sm:mr-4 md:mr-8">{detail.label}</span>
                                    <span className="text-white montserrat-semibold text-sm sm:text-lg md:text-xl lg:text-[26px]">{detail.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}