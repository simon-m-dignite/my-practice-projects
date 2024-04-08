import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";
import { GiCirclingFish } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { RiExchangeFundsLine, RiExchangeLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <>
      <div className="w-full py-2 flex justify-center items-center gap-2 mb-2">
        <GiCirclingFish className="w-12 h-12 text-green-700" />
        <span className="text-xl text-white font-semibold">Oyefin</span>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-2">
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt=""
          className="w-14 h-14 rounded-xl"
        />
        <p className="font-medium">Ravi</p>
        <p className="text-xs font-light">Verified</p>
      </div>
      <nav className="py-6 w-full">
        <ul className="w-full flex flex-col items-center">
          <li className="my-2 w-3/5">
            <a
              href="/"
              className="bg-green-700 px-6 py-2 rounded-lg flex items-center justify-start gap-3 text-base font-light"
            >
              <RxDashboard className="w-4 h-4" />
              <span className="font-light text-sm">Dashboard</span>
            </a>
          </li>
          <li className="my-2 w-3/5">
            <a
              href="/"
              className="hover:bg-green-700 px-6 py-2 rounded-lg flex items-center justify-start gap-3 text-base font-light"
            >
              <RiExchangeLine className="w-4 h-4" />
              <span className="font-light text-sm">Exchange</span>
            </a>
          </li>
          <li className="my-2 w-3/5">
            <a
              href="/"
              className="hover:bg-green-700 px-4 py-2 rounded-lg flex items-center justify-start gap-3 text-base font-light"
            >
              <RiExchangeFundsLine className="w-4 h-4" />
              <span className="font-light text-sm">Live Prices</span>
            </a>
          </li>
          <li className="my-2 w-3/5">
            <a
              href="/"
              className="hover:bg-green-700 px-6 py-2 rounded-lg flex items-center justify-start gap-3 text-base font-light"
            >
              <IoWalletOutline className="w-4 h-4" />
              <span className="font-light text-sm">Wallet</span>
            </a>
          </li>
          <li className="my-2 w-3/5">
            <a
              href="/"
              className="hover:bg-green-700 px-6 py-2 rounded-lg flex items-center justify-start gap-3 text-base font-light"
            >
              <BsShopWindow className="w-4 h-4" />
              <span className="font-light text-sm">NFt Market</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="w-full text-center ps-20 pt-10">
        <button className="text-base flex gap-2 ps-1 items-center">
          <BiMessageRounded className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
