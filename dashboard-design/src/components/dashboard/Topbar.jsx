import React from "react";
import { CiSearch, CiSettings } from "react-icons/ci";
import { IoNotificationsOutline, IoWalletOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const Topbar = () => {
  return (
    <>
      <div className="py-3 px-4 flex items-center gap-0 justify-between bg-gray-900">
        <div className="flex justify-start gap-4  items-center">
          <span className="">
            <RxDashboard className="text-white h-5 w-5" />
          </span>
          <div className="flex items-center justify-start gap-0 border-0 w-72 rounded-lg px-3 bg-gray-800">
            <CiSearch className="text-white h-6 w-6" />
            <input
              type="text"
              className="bg-transparent w-full border-0 outline-none py-3 px-2 text-white text-xs"
              placeholder="Search in dashboard..."
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-700 px-2 py-2 rounded-lg flex gap-1 items-center">
            <span>
              <img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                alt=""
                className="w-6 h-5 rounded-full"
              />
            </span>
            <span className="text-sm text-white font-normal ml-2">English</span>
            <RiArrowDropDownLine className="w-6 h-6 text-white ms-0" />
          </div>
          <div className="bg-gray-700 px-3 py-2 rounded-lg">
            <IoWalletOutline className="text-white w-6 h-6" />
          </div>
          <div className="bg-gray-700 px-3 py-2 rounded-lg">
            <CiSettings className="text-white w-6 h-6" />
          </div>
          <div className="bg-gray-700 px-3 py-2 rounded-lg">
            <IoNotificationsOutline className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
