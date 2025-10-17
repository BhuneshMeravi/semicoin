import PresalePanel from "../ui/PresalePanel";
import HowToBuy from "../ui/HowToBuy";

export default function Presale(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-[46px] orbitron-semibold neon">Join The Future — Semicon Presale</h1>
          <p className="text-[#DBDBDB] montserrat-regular test-sm mt-4 max-w-xl">Join early and secure SMC at the lowest launch price—built for innovators and early backers of the AI-blockchain future.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="bg-semiblue text-black px-4 py-2 rounded">Buy Now</a>
            <a href="#" className="border border-gray-700 px-4 py-2 rounded text-gray-300">Whitepaper</a>
          </div>

          <HowToBuy className="mt-12" />
        </div>

        <div>
          <PresalePanel />
        </div>
      </div>

      {/* CTA / unlock */}
      <section className="mt-12 card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Unlock The Future Of Tech Investments!</h3>
            <p className="text-gray-300">Revolutionize your portfolio with SMC — where semiconductor innovation meets blockchain utility for investing and staking.</p>
          </div>
          <a href="/presale" className="bg-semiblue px-4 py-2 rounded text-black">Get Started</a>
        </div>
      </section>
    </div>
  );
}
