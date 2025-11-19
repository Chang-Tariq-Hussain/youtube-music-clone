import React from "react";

interface ChipProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-1.5 my-4 rounded-md text-sm whitespace-nowrap
        transition-all duration-200
        ${
          active
            ? "bg-white text-black font-semibold"
            : "bg-[#1f1f1f] text-white"
        }
      `}
    >
      {text}
    </button>
  );
};
