import React from "react";
import Button from "./Button";

const Stats = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-white">Portfolio Stats</span>
        <div className="flex gap-2">
          <Button btnTitle="All" />
          <Button btnTitle="1M" />
          <Button btnTitle="6M" />
          <Button btnTitle="1Y" />
          <Button btnTitle="YTD" />
        </div>
      </div>
      <div className=" h-80"></div>
    </>
  );
};

export default Stats;
