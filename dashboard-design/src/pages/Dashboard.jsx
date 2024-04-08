import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import Count from "../components/dashboard/Count";
import Stats from "../components/dashboard/Stats";
import FilterDropdown from "../components/dashboard/FilterDropdown";
import Table from "../components/dashboard/Table";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import Settings from "../components/dashboard/Settings";
import Topbar from "../components/dashboard/Topbar";
import RightSideBar from "../components/dashboard/RightSideBar";
import SearchInput from "../components/dashboard/SearchInput";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="w-full flex">
        <div className="w-4/5 px-5">
          <div className="py-3 flex justify-between items-center">
            <Count
              heading={"1,077.3"}
              subheading={"Main Account"}
              bgColor="bg-green-700"
              borderCol="border-green-700"
            />
            <Count
              heading={"1,077.3"}
              subheading={"Trading Account"}
              bgColor="bg-green-500"
              borderCol="border-green-500"
            />
            <Count
              heading={"1,077.3"}
              subheading={"Margin Account"}
              bgColor="bg-red-700"
              borderCol="border-red-700"
            />
            <Count
              heading={"1,077.3"}
              subheading={"Futures Account"}
              bgColor="bg-red-500"
              borderCol="border-red-500"
            />
          </div>
          <div className="py-4">
            <Stats />
          </div>
          <div className="py-3 relative flex gap-2 items-center justify-between">
            <span className="text-medium text-lg text-white">
              Recent Activities
            </span>
            <FilterDropdown title={"Last 30 days"} />
            <FilterDropdown title={"Aug 2022"} />
            <SearchInput />
          </div>
          <div className="pt-4">
            <Table />
          </div>
        </div>
        <div className="w-1/5 bg-gray-800 pt-3 ps-8">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
