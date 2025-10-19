
import coinLogo from "../assets/coin-logo.png"
import usdtImg from "../assets/usdt.png"
import bnbImg from "../assets/bnb.png"

export default function PresalePanel() {
  return (
    <div className="bg-gradient-to-br from-[#0E8FF7] via-white to-[#0E8FF7] p-[2px] rounded-3xl max-w-xl mx-auto">
      <div className="bg-black rounded-3xl p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl orbitron-regular mb-6">Semicon <span className="text-[#D3BCBC]">Presale</span></h1>
          <p className="text-gray-300 text-base text-left montserrat-regular leading-tight">
            Join the Semicon (SMC) Presale and step into the future of
            AI-powered blockchain innovation. Secure your tokens
            early to enjoy exclusive presale rewards and become part
            of the next tech revolution with Semicon!
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#23201C] via-[#0E8FF7] to-[#23201C] h-[2px] w-full"></div>

        {/* Price Info */}
        <div className="pt-8 mb-8">
          <div className="flex items-center justify-between text-xl">
            <div className="text-gray-300 montserrat-regular">
              Listing Price : <span className="text-[#11AEFD]">$ 0.20</span>
            </div>
            <div className="text-white text-2xl">→</div>
            <div className="text-gray-300 montserrat-regular">
              Next Price : <span className="text-[#11AEFD]">$ 0.40</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#23201C] via-[#0E8FF7] to-[#23201C] h-[2px] w-full"></div>

        {/* Buy With Section */}
        <div className="pt-8">
          <div className="text-white text-[15px] montserrat-regular mb-6">Buy With</div>

          {/* Currency Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-white text-black px-6 py-1 rounded-lg font-bold flex items-center gap-2 flex-1/2">
              <span className="text-xl"><img src={usdtImg} alt="" className="w-6" /></span>
              USDT
            </button>
            <button className="border border-yellow-500 text-white px-6 py-1 rounded-lg font-bold flex items-center gap-2 flex-1/2">
              <span className="text-yellow-500 text-xl"><img src={bnbImg} alt="" className="w-6" /></span>
              BNB
            </button>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-white montserrat-regular text-[15px] mb-3 flex justify-between">
                <span>USDT YOU PAY</span>
                <span className="">MAX</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent border border-cyan-400 rounded-xl px-4 py-2 text-white text-xl"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-orange-500 text-xl"><img src={usdtImg} alt="" className="w-6" /></span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-white montserrat-regular text-[15px] mb-3">SEMICON YOU RECEIVE</div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent border border-cyan-400 rounded-xl px-4 py-2 text-white text-xl"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <img src={coinLogo} alt="SMC" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div className="flex justify-center">

            <button className="w-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white py-2 rounded-xl text-xl flex items-center justify-center gap-3 transition-all">
              <span className="text-[15px] gilroy-semibold">💳</span>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
