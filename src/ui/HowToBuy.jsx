

const steps = [
    { title: "Connect Wallet", desc: "Use MetaMask or Trust Wallet and switch to BEP-20 (BSC) network." },
    { title: "Fund Your Wallet", desc: "Deposit BNB, USDT (BEP-20) or BUSD to your wallet for purchasing SMC." },
    { title: "Visit Presale Page", desc: "Go to the official Semicon presale portal and connect your wallet securely." },
    { title: "Enter Purchase Amount", desc: "Select the number of SMC tokens you want to buy and confirm the transaction." },
    { title: "Claim Tokens", desc: "Once the presale ends, claim your SMC tokens directly from the claim portal dashboard." }
];

export default function HowToBuy({ className = "" }) {
    return (
        <div className={`mt-6 ${className}`}>
            <h3 className="text-xl font-bold mb-4">How To Buy?</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-40">
                        <img src="/assets/presale.png" alt="cart" className="rounded" />
                    </div>
                    <div className="hidden md:block text-gray-400">
                        Visual: follow the steps to purchase tokens quickly and safely.
                    </div>
                </div>

                <div>
                    <ol className="space-y-4">
                        {steps.map((s, idx) => (
                            <li key={idx} className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-semiblue to-accent flex items-center justify-center font-bold text-black">{idx + 1}</div>
                                <div>
                                    <div className="font-semibold">{s.title}</div>
                                    <div className="text-sm text-gray-300">{s.desc}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
