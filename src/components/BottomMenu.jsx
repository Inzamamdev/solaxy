import React from "react";
const navItems = [
  {
    label: "THE CHAIN",
    href: "#roadmap",
    source: "/assets/images/svg-icons/tab-icon-one.svg",
  },
  {
    label: "UTILITY",
    href: "#how-to-buy",
    source: "/assets/images/svg-icons/tab-icon-two.svg",
  },
  {
    label: "DEV UPDATES",
    href: "#tokenomics",
    source: "/assets/images/svg-icons/tab-icon-three.svg",
  },
];
export default function BottomMenu() {
  return (
    <div className="flex justify-around h-fit mb-5 gap-3 p-2">
      {navItems.map((items) => (
        <div className="relative w-full bg-no-repeat bg-cover h-full pb-8 pt-5  bg-center bg-[url('/assets/images/png/tab-one.png')] transition-all duration-300 ease-in-out  hover:bg-[url('/assets/images/png/tab-active.png')] cursor-pointer">
          <span className=" font-['DesuzaPro']  flex items-center mt-3   justify-around  text-white  text-sm hover:text-black transition-colors duration-300">
            <img src={items.source} className="h-[40px] align-middle" />
            <p>{items.label}</p>
          </span>
        </div>
      ))}
    </div>
  );
}
