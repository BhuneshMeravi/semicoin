import FeatureCard from "../ui/FeatureCard";
import copyImg from "../assets/copy.png"
import aboutVideo from "../assets/aboutVideo.mp4"
import heroImg from "../assets/website2.png"
import Marquees from "../components/Marquee";
import Tokenomics from "../components/Tokenomics";
import UseCases from "../components/UseCases";
import Roadmap from "../components/Roadmap";
import "./Home.css"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black bg-cover bg-center min-h-[580px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 h-full min-h-[500px] flex">
          {/* Left Stats Panel */}
          <div className="w-1/4 flex flex-col justify-center space-y-8 text-white">
            <div className="text-center montserrat-regular text-[#efefef]">
              <div className="text-3xl text-white orbitron-regular">$1</div>
              <div className="text-sm">Stable Peg</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white orbitron-regular">24/7</div>
              <div className="text-sm">Global Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white orbitron-regular">0.1%</div>
              <div className="text-sm">Transaction Fee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white orbitron-regular">100M SMC</div>
              <div className="text-sm">Total Supply</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-3/4 flex flex-col justify-center items-end text-right pl-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-[46px] leading-tight text-white orbitron-semibold mb-6">
                Powering The Future Of Smart Digital Innovation
              </h1>
              <p className="text-[#DBDBDB] text-sm mb-8 montserrat-regular">
                Semicon (SMC) Empowers Global Decentralized Innovation With Secure, Low-Cost, And Always Accessible Blockchain Solutions For Seamless Digital Payments And Connectivity.
              </p>
              <div className="flex gap-4 justify-end montserrat-bold text-sm">
                <a href="/presale" className="bg-semiblue hover:brightness-110 px-6 py-2 rounded-full text-white transition-colors">
                  Buy Now
                </a>
                <a href="#whitepaper" className="relative group">
                  <div className="bg-gradient-to-r from-[#3FC42B] via-[#FD7C03] to-[#0E8FF7] p-[2px] rounded-full">
                    <div className="bg-black hover:bg-gray-900 px-6 py-2 rounded-full transition-colors">
                      <span className="text-gray-300 group-hover:text-white">Whitepaper</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* strategic partners  */}
      <Marquees />

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-10 my-20">
        <h3 className="orbitron-regular text-sm"><span className="bg-gradient-to-r from-[#3FC42B] to-[#FD7C03] text-transparent bg-clip-text">About Semicon</span></h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[32px] orbitron-semibold mb-3">What Is Semicon (SMC)?</h2>
            <div className="space-y-4">
              <p className="text-[#DBDBDB] text-sm">Semicon (SMC) is a decentralized digital asset powering the Semicon ecosystem — a blockchain-driven platform that integrates AI, IoT, and fintech innovations to create a smarter, more connected global economy.</p>
              <p className="text-[#DBDBDB] text-sm">Built on the Binance Smart Chain (BEP-20), Semicon delivers speed, security, and minimal transaction costs, making it ideal for fintech applications, supply chain management, and decentralized app ecosystems.</p>
            </div>
          </div>
          <div className="p-6 inset-0 bg-gradient-to-r from-black via-transparent to-black">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-48 rounded object-cover"
            >
              <div className="inset-0 bg-[#091E2C]"></div>
              <source src={aboutVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Core Utilities / Use Cases */}
      <UseCases />

      {/* Roadmap */}
      <Roadmap />

      {/* Tokenomics */}
      <Tokenomics />

      {/* Contract Address  */}
      <section id="contract" className="bg-black py-12 mb-36">
        <div className="h-px bg-gradient-to-r from-[#3FC42B] via-[#FD7C03] to-[#0E8FF7]"></div>
        <div className="max-w-6xl mx-auto px-6 text-center my-6">
          <div className="text-sm orbitron-regular mb-2 tracking-wider"><span className="bg-gradient-to-r from-[#3FC42B] to-[#FD7C03] text-transparent bg-clip-text"> Contract Address </span></div>
          <h3 className="text-white text-2xl md:text-[32px] orbitron-semibold mb-12 tracking-wide">OFFICIAL CONTRACT ADDRESS</h3>

          <div className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto">
            <div className="text-white text-base md:text-3xl break-all">
              0xAbC12345Ef67890bCD12Ef3456789aBCdEf12345
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText('0xAbC12345Ef67890bCD12Ef3456789aBCdEf12345');
                // You can add a toast notification here
              }}
              className="bg-semiblue hover:brightness-110 text-white px-6 py-1 rounded-full montserrat-bold transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Copy
              <img src={copyImg} alt="" />
            </button>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-[#3FC42B] via-[#FD7C03] to-[#0E8FF7]"></div>
      </section>
    </div>
  );
}
