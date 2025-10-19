import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png"
import facebook from "../assets/social-media-icons/facebook.png"
import telegram from "../assets/social-media-icons/telegram.png"
import instagram from "../assets/social-media-icons/instagram.png"
import twitter from "../assets/social-media-icons/twitter.png"

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-[#DBDBDB]">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src={logo} alt="" className="h-[118px] w-auto" />
            </div>
            <p className="text-[#DBDBDB] text-center text-xs leading-relaxed max-w-xs">
              Semicon (SMC) is a BEP-20 Token Driving AI, IoT And Semiconductor Innovation Through Decentralized Blockchain Finance
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-around">
            <div>
              <h3 className="text-white orbitron-regular text-base mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/tokenomics" className="hover:text-white transition-colors">Tokenomics</Link></li>
                <li><Link to="/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
                <li><Link to="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                <li><Link to="/whitepaper" className="hover:text-white transition-colors">Whitepaper</Link></li>
              </ul>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h3 className="text-white orbitron-regular text-base mb-4">Legal & Compliance</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Join Us On */}
          <div className="mx-auto">
            <h3 className="text-white orbitron-regular text-center sm:text-start text-base mb-4">Join Us On</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={facebook} alt="" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={instagram} alt="" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={telegram} alt="" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-gray-800 mt-8 py-4">
          <div className="text-center text-[10px]">
            © {new Date().getFullYear()} Semicon (SMC). All Rights Reserved. Built For The Future Of Decentralized Innovation.
          </div>
        </div>
      </div>
    </footer>
  );
}
