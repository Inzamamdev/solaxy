import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options = [], defaultValue = null, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className=" flex justify-around items-center gap-2 px-4 py-2 rounded-3xl bg-white text-black  font-bold shadow hover:bg-gray-700 transition min-w-[160px] text-left">
        <div className="bg-green-400 rounded-full w-5 h-5"></div>
        <button onClick={() => setOpen((prev) => !prev)}>{selected}</button>
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </div>

      {open && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <ul className="py-1">
            {options.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                  option === selected ? "font-bold text-black" : ""
                }`}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
