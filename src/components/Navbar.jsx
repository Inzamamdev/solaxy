import React from "react";
// Replace with actual UFO+text logo if available

const navItems = [
  { label: "ROADMAP", href: "#roadmap" },
  { label: "HOW TO BUY", href: "#how-to-buy" },
  { label: "TOKENOMICS", href: "#tokenomics" },
  { label: "HISTORY", href: "#history" },
  { label: "FAQS", href: "#faqs" },
  { label: "STAKING", href: "#staking" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-4 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      {/* <div className="flex items-center gap-2">
        <img src={logo} alt="Solaxy Logo" className="h-10 w-auto" />
        <div>
          <h1 className="text-2xl font-bold text-[#A85FFF]">SOLAXY</h1>
          <p className="text-xs text-[#5FFF45] -mt-1">SOLANA LAYER 2</p>
        </div>
      </div> */}

      {/* Center: Navigation Tabs */}
      <div className="flex gap-3">
        {navItems.map((item) => (
          <div className="relative w-[150px] h-[60px] bg-no-repeat bg-contain bg-center bg-[url('./assets/tab-one.png')]">
            <span className="font-['DesuzaPro'] absolute inset-0 flex items-center justify-center text-white font-bold text-sm font-[]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Right: Buy Button + Language */}
      {/* <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-gradient-to-r from-lime-400 to-green-600 rounded-md text-black font-bold text-sm">
          BUY SOLX
        </button>
        <div className="text-sm cursor-pointer flex items-center gap-1">
          EN <span>▼</span>
        </div>
      </div> */}
    </nav>
  );
}
