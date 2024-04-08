import React from "react";
import { GoDotFill } from "react-icons/go";

const Count = ({ heading, subheading, bgColor, borderCol }) => {
  return (
    <div className="w-1/5 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-white mb-0">{heading} USD</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className="z-10">
          <GoDotFill
            className={`${bgColor} rounded-lg text-white z-20 w-4 h-4`}
          />
        </span>
        <span className="text-xs font-light text-white">{subheading}</span>
      </div>
      <div className="w-full h-1 rounded-lg flex justify-start items-start bg-gray-900">
        <div className={`h-1 w-3/5 border-2 ${borderCol} rounded-lg`}></div>
      </div>
    </div>
  );
};

export default Count;
