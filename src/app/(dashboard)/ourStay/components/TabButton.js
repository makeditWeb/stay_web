import React from "react";

export default function TabButton({ active, onClick, label }) {
  return (
    <div
      className={`${
        active ? "bg-[#203d1e] text-white" : ""
      } rounded-full md:px-10 px-5 py-2 flex-shrink-0 cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
