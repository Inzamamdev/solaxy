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
    <nav className="w-full  text-white py-3 flex items-center justify-center font-display">
      {/* Left: Logo */}
      <div className="flex items-center ">
        <img
          src="../../public/assets/images/svg-icons/logo.svg"
          alt="Solaxy Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Center: Navigation Tabs */}
      <div className="flex gap-1">
        {navItems.map((item) => (
          <div className="relative w-[150px] h-[55px] bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')]">
            <span className="font-['DesuzaPro'] absolute inset-0 flex items-center  justify-center text-white  text-sm ">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Right: Buy Button + Language */}
      <div className="flex items-center gap-4">
        <button className="font-bold text-black p-2 px-4 rounded-xl bg-gradient-to-b from-lime-300 to-green-500 shadow-md border border-white/40">
          BUY SOLX
        </button>
        <div className="text-sm cursor-pointer flex items-center gap-1">
          EN <span>▼</span>
        </div>
      </div>
    </nav>
  );
}
