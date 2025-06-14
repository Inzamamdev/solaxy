import React from "react";
const navItems = [
  {
    label: "THE CHAIN",
    href: "#roadmap",
    source: "../../public/assets/images/svg-icons/tab-icon-one.svg",
  },
  {
    label: "UTILITY",
    href: "#how-to-buy",
    source: "../../public/assets/images/svg-icons/tab-icon-two.svg",
  },
  {
    label: "DEV UPDATES",
    href: "#tokenomics",
    source: "../../public/assets/images/svg-icons/tab-icon-three.svg",
  },
];
export default function BottomMenu() {
  return (
    <div className="flex gap-1">
      {navItems.map((items) => (
        <div className="relative w-[280px] h-[81px] bg-no-repeat bg-contain  bg-center bg-[url('../../public/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('../../public/assets/images/png/tab-active.png')] cursor-pointer">
          <span className=" font-['DesuzaPro']  flex bg-red-600 h-10 items-center mt-3   justify-between  text-white  text-sm hover:text-black transition-colors duration-300">
            <img src={items.source} className="h-[40px] align-middle" />
            {items.label}
          </span>
        </div>
      ))}
    </div>
  );
}
