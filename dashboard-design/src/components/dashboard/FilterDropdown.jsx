import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterDropdown = ({ title }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleShowDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="flex flex-col gap-1">
      <div
        className="flex gap-8 items-center text-white bg-gray-900 py-2 px-3 rounded-lg cursor-pointer text-sm"
        onClick={handleShowDropdown}
      >
        <span>{title}</span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
      {/* {openDropdown && (
        <div className="w-36 h-36 bg-gray-800 rounded-lg absolute top-14 right-6"></div>
      )} */}
    </div>
  );
};

export default FilterDropdown;
