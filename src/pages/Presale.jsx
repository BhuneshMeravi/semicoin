import PresalePanel from "../ui/PresalePanel";
import HowToBuy from "../ui/HowToBuy";
import getStart from "../assets/getstarted.png"
import presaleBgVideo from "../assets/presale-bg-video.mp4"

export default function Presale() {
  return (
    <div className="relative max-w-7xl mx-auto ">
      {/* presale hero section  */}
      <div className="relative w-full h-full px-6 py-12">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 -z-5"
        >
          <source src={presaleBgVideo} type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent -z-4"></div>
        <div className="relative grid md:grid-cols-2 gap-10 items-start">

          <div className="relative">
            <h1 className="text-[46px] orbitron-semibold neon text-center sm:text-left">Join The Future — Semicon Presale</h1>
            <p className="text-[#DBDBDB] montserrat-regular test-sm text-center sm:text-left mt-4 max-w-xl">Join early and secure SMC at the lowest launch price—built for innovators and early backers of the AI-blockchain future.</p>
            <div className="mt-6 flex justify-center sm:justify-start gap-4 montserrat-bold text-sm">
              <a href="#" className="bg-semiblue hover:brightness-110 px-6 py-2 rounded-full text-white transition-colors">
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

          <div className="relative">
            <PresalePanel />
          </div>
        </div>
      </div>

      <HowToBuy className="mt-12" />
      {/* CTA / unlock */}
      <section className="mt-12 p-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="montserrat-semibold text-[26px]">Unlock The Future Of Tech Investments!</h3>
            <p className="text-white montserrat-regular text-sm">Revolutionize your portfolio with SMC—where semiconductor innovation meets blockchain utility for seamless investing and staking.</p>
          </div>
          <a href="/presale" className="bg-semiblue hover:brightness-110 px-6 py-2 rounded-full text-white transition-colors montserrat-bold text-sm">Get Started</a>
        </div>
        <img src={getStart} alt="" />
      </section>
    </div>
  );
}
