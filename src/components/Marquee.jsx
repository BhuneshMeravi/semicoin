import Marquee from "react-fast-marquee";

import pancakeswap from "../assets/feature-icons/pancackcap.png";
import trustwallet from "../assets/feature-icons/trustwallet.png";
import bscscan from "../assets/feature-icons/bscscan.png";
import coinmarketcap from "../assets/feature-icons/coinmarketcap.png";
import coinstore from "../assets/feature-icons/coinstore.png";
import metamask from "../assets/feature-icons/metamask.png";

const Marquees = () => {
    const data = [
        { id: 1, logo: pancakeswap },
        { id: 2, logo: trustwallet },
        { id: 3, logo: bscscan },
        { id: 4, logo: coinmarketcap },
        { id: 5, logo: coinstore },
        { id: 6, logo: metamask },
    ];

    const duplicatedData = [...data, ...data];

    return (
        <section className="px-2 sm:px-4 py-2 overflow-x-hidden text-center text-white bg-[#171717]">
            <div className="relative w-full py-2 sm:py-4 overflow-hidden bg-transparent">
                <div className="flex gap-4 sm:gap-8 md:gap-10 animate-marquee">
                    <Marquee gradient={false} speed={60}>
                        {duplicatedData.map((d, i) => (
                            <img
                                key={i}
                                src={d.logo}
                                alt={d.id}
                                className="object-contain h-9 mr-4 sm:mr-8 md:mr-24"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Marquees;