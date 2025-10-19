
import paymentImg from "../assets/payment-gateway.png"
import coinLogo from "../assets/coin-logo.png"

export default function PresalePanel() {
  // mock values — replace with live data fetch later
  const totalUSD = "$15,756,435.59";
  const totalCoins = "7,208,727,308";
  const progressPct = 55;

  return (
    <div className="bg-gradient-to-r from-[#3FC42B] via-[#FD7C03] to-[#0E8FF7] p-[1px] rounded-2xl max-w-md mx-auto">
      <div className="bg-[#0A0A0A] rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400 text-sm">Current Batch</div>
          <div className="text-white font-bold text-lg">BATCH 1</div>
        </div>

        {/* Stats Container */}
        <div className="bg-[#121212] border border-[#3D3D3D] rounded-xl p-6 mb-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-2">Total Coin Sales USD</div>
              <div className="text-white font-bold text-lg">{totalUSD}</div>
            </div>
            <div className="text-center border-l border-[#8D8D8D] pl-8">
              <div className="text-gray-400 text-sm mb-2">Total Coins Sold</div>
              <div className="text-white font-bold text-lg">{totalCoins}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-800 rounded-xl h-10 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-end pr-4"
                style={{ width: `${progressPct}%` }}
              >
                <span className="text-white font-bold text-lg">{progressPct}%</span>
              </div>
            </div>
          </div>

          {/* Price Info */}
          <div className="flex justify-between text-gray-300 text-sm mb-6">
            <div>0.0045 USDT = 1 SMC</div>
            <div>Next Batch: 0.005</div>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-2 rounded-xl mb-8 flex items-center justify-between px-4 gap-3 transition-all">
            <span>Buy Coins</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-500 text-sm"><img src={coinLogo} alt="" className="w-5" /></span>
            </div>
          </button>

          {/* <div className="flex">
            <input type="text" /><input type="text" />
          </div> */}
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center gap-3 mb-6">
          <img src={paymentImg} alt="" />
        </div>

        {/* Referral Code */}
        <div className="text-center text-gray-400 text-sm">
          Do you any referral code? <span className="text-cyan-400 font-semibold">Yes</span>
        </div>
      </div>
    </div>
  );
}
