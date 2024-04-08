import React from "react";
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col md:flex-row justify-around pt-28 md:pt-32 md:px-14">
      <div className="w-full md:w-3/5 flex flex-col gap-6 items-start px-4 md:px-0">
        <div className="bg-slate-100 w-auto px-3 py-2 rounded-md">
          <span className="font-semibold text-lime-800 text-sm">
            Simple and Secure Payments
          </span>
        </div>
        <h1 className="text-6xl font-semibold">
          The New Era of Global Payments
        </h1>
        <p className="font-normal text-slate-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          minus autem accusamus ea ab suscipit, veniam delectus facilis
          corporis. Sequi, obcaecati praesentium?
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-700 text-white font-medium px-4 py-3 border-2 border-indigo-700 rounded-md hover:bg-indigo-600">
            Get Started
          </button>
          <button className="px-4 py-3 rounded-md font-medium border-2 hover:bg-indigo-700 hover:border-indigo-600 hover:text-white flex items-center gap-x-1">
            <IoPlayOutline className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>
        <div className="md:pt-4">
          <span className="text-slate-600 font-medium">
            Trusted 13,000+ Businesses Worldwide
          </span>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex justify-center md:justify-end items-start pt-8 md:pt-6 pb-0">
        {/* <img
          src="https://images.unsplash.com/photo-1556741533-2c7e140cd038?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-10/12 md:h-96 h-full rounded-md mx-0"
        /> */}
        <img
          src="https://plus.unsplash.com/premium_photo-1682284079685-657fb4f33de5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-lg w-11/12 h-4/6"
        />
      </div>
    </div>
  );
};

export default Hero;
