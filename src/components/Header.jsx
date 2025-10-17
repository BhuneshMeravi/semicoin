import { Link, NavLink } from "react-router-dom";
import logo from "../assets/main-logo.png"

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex gap-6">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-gray-300">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "hover:text-white"}>Home</NavLink>
            <NavLink to="/presale" className={({ isActive }) => isActive ? "text-white" : "hover:text-white"}>Presale</NavLink>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
            <a href="#roadmap" className="hover:text-white">Partners</a>
            <a href="#tokenomics" className="hover:text-white">FAQ</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/presale" className="bg-semiblue text-sm hover:brightness-110 py-2 px-4 rounded-full text-white montserrat-bold">Buy Now</Link>
          <button className="md:hidden text-gray-300">☰</button>
        </div>
      </div>
    </header>
  );
}
