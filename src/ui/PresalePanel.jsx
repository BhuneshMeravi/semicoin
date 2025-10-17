

export default function PresalePanel(){
  // mock values — replace with live data fetch later
  const totalUSD = "$15,756,435.59";
  const totalCoins = "7,208,727,308";
  const progressPct = 55;

  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-400">Current Batch</div>
        <div className="font-semibold">BATCH 1</div>
      </div>

      <div className="bg-gray-900 p-4 rounded">
        <div className="flex justify-between text-sm text-gray-300 mb-3">
          <div>
            <div className="text-xs text-gray-400">Total Coin Sales USD</div>
            <div className="font-bold">{totalUSD}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Total Coins Sold</div>
            <div className="font-bold">{totalCoins}</div>
          </div>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-semiblue to-accent" style={{width: `${progressPct}%`}}></div>
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-3">
          <div>0.0045 USDT = 1 SMC</div>
          <div>Next Batch: 0.005</div>
        </div>

        <button className="mt-4 w-full bg-semiblue py-2 rounded text-black font-semibold">Buy Coins</button>

        <div className="mt-4 text-center text-sm">
          <div className="text-gray-400">Supported</div>
          <div className="flex items-center justify-center gap-3 mt-2 text-xs">
            <div className="p-2 bg-gray-800 rounded">MetaMask</div>
            <div className="p-2 bg-gray-800 rounded">Trust</div>
            <div className="p-2 bg-gray-800 rounded">Card</div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          Do you any referral code? <span className="text-semiblue">Yes</span>
        </div>
      </div>
    </div>
  );
}
