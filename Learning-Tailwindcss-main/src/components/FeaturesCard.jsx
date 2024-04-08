import React from "react";

const FeaturesCard = ({ heading, childCardColor }) => {
  return (
    <div className="w-full sm:w-1/2 shadow rounded-3xl flex flex-col items-start gap-6 py-10 px-12">
      <h2 className="text-3xl font-semibold text-left">{heading}</h2>
      <p className="text-slate-500 text-left text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui odio
        officia dolorem soluta?
      </p>
      <button className="border-2 px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-indigo-700 hover:text-white hover:border-indigo-700">
        Learn More{" "}
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
      <div
        className={`${childCardColor} py-6 ps-4 w-full rounded-2xl flex justify-start items-center`}
      >
        <div className="bg-white md:w-1/2 rounded-2xl py-4 px-4">
          <div className="flex flex-col justify-start md:px-6 items-start gap-4">
            <div className="w-14 h-14 bg-black rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold">$2,000.00</h3>
            <div className="flex gap-2 justify-start items-center">
              <span className="mx-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 font-medium"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span className="mx-0 text-sm font-medium">
                One Time Instant Payment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
