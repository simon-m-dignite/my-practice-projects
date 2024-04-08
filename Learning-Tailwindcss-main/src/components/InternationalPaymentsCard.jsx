import React from "react";
import { FaSlack } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";

const InternationalPaymentsCard = () => {
  return (
    <div className="w-full md:px-14 p-4 pb-8">
      <div className="shadow rounded-2xl px-8 flex flex-col md:flex-row items-center gap-4 py-8 md:py-16">
        <div className="w-ful md:w-1/2 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-semibold">
            International Money Payments
          </h2>
          <p className="text-slate-500 text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nam odit maxime ipsa modi ratione?
          </p>
          <button className="border-2 px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-indigo-700 hover:border-indigo-600 hover:text-white">
            Learn More
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="w-ful md:w-1/2 py-0 border-2 flex justify-evenly"></div>
      </div>
    </div>
  );
};

export default InternationalPaymentsCard;
