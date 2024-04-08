import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="bg-gray-900 pr-1 pl-2 rounded-lg flex items-center gap-1">
      <CiSearch className="text-white" />
      <input
        type="0"
        className="bg-transparent text-slate-100 border-none outline-none py-2 text-xs"
      />
      <button className="bg-red-600 h-full p-1 rounded-lg">
        <IoFilterOutline className="text-white" />
      </button>
    </div>
  );
};

export default SearchInput;
