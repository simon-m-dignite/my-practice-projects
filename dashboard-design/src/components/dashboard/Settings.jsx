import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsOutline, IoWalletOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Settings = () => {
  return (
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
  );
};

export default Settings;
