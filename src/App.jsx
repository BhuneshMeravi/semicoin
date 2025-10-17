import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Presale from "./pages/Presale";

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
