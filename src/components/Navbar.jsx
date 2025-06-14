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
    <nav className="w-full   text-white py-3 flex items-center justify-evenly font-display">
      {/* Left: Logo */}
      <div className="flex items-center ">
        <img
          src="../../public/assets/images/svg-icons/logo.svg"
          alt="Solaxy Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Center: Navigation Tabs */}
      {/* <div className="flex gap-1">
        {navItems.map((item) => (
          <div className="relative w-[150px] h-[55px] bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')]">
            <span className="font-['DesuzaPro'] absolute inset-0 flex mt-2 justify-center text-white  text-sm ">
              {item.label}
            </span>
          </div>
        ))}
      </div> */}
      <div className="flex gap-3">
        <div className="relative w-[130px] h-[60px] bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('../../public/assets/images/png/tab-active.png')] cursor-pointer">
          <span className="font-['DesuzaPro'] absolute inset-0 flex mt-3 justify-center text-white  text-sm hover:text-black transition-colors duration-300">
            ROADMAP
          </span>
        </div>
        <div className="relative w-[140px] h-[60px] bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('../../public/assets/images/png/tab-active.png')] cursor-pointer">
          <span className="font-['DesuzaPro'] absolute inset-0 flex mt-3 justify-center text-white  text-sm hover:text-black transition-colors duration-300">
            HOW TO BUY
          </span>
        </div>
        <div className="relative w-[140px] h-[60px] bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('../../public/assets/images/png/tab-active.png')] cursor-pointer">
          <span className="font-['DesuzaPro'] absolute inset-0 flex mt-3 justify-center text-white  text-sm hover:text-black transition-colors duration-300">
            TOKENOMICS
          </span>
        </div>
        <div className="relative w-[120px]  bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('../../public/assets/images/png/tab-active.png')] cursor-pointer">
          <span className="font-['DesuzaPro'] absolute inset-0 flex mt-3 justify-center text-white  text-sm hover:text-black transition-colors duration-300">
            HISTORY
          </span>
        </div>
        <div className="relative w-[120px] h-[60px] bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('../../public/assets/images/png/tab-active.png')] cursor-pointer">
          <span className="font-['DesuzaPro'] absolute inset-0 flex mt-3 justify-center text-white  text-sm hover:text-black transition-colors duration-300">
            FAQS
          </span>
        </div>
        <div className="relative w-[120px] h-[60px] bg-no-repeat bg-contain bg-center bg-[url('../../public/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('../../public/assets/images/png/tab-active.png')] cursor-pointer">
          <span className="font-['DesuzaPro'] absolute inset-0 flex mt-3 justify-center text-white  text-sm hover:text-black transition-colors duration-300">
            STAKING
          </span>
        </div>
      </div>
      {/* Right: Buy Button + Language */}
      <div className="flex items-center gap-4">
        <button className="text-xs text-black py-2.5 px-5 rounded-2xl bg-gradient-to-b from-lime-300 to-green-500 shadow-md border-2 border-white ">
          BUY SOLX
        </button>
        <div className="text-xs cursor-pointer flex items-center gap-1">
          EN <span>▼</span>
        </div>
      </div>
    </nav>
  );
}
