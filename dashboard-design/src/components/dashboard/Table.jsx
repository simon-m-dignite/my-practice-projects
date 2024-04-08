import React from "react";
import { FaBitcoin } from "react-icons/fa";

const Table = () => {
  return (
    <table className="w-full text-left text-white text-sm font-thin">
      <thead className="border-b">
        <tr>
          <th className="font-thin py-4">Coin</th>
          <th className="font-thin py-4">Transaction</th>
          <th className="font-thin py-4">ID</th>
          <th className="font-thin py-4">Date</th>
          <th className="font-thin py-4">Status</th>
          <th className="font-thin py-4">Fees</th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td className="py-2">
            <FaBitcoin className="w-7 h-7 text-yellow-500" />
          </td>
          <td className="flex flex-col gap-0 py-2">
            <span className="fw-semibold text-lg">$569.0</span>
            <span className="font-thin text-xs text-slate-300">
              Withdraw USDT
            </span>
          </td>
          <td className="text-sm font-thin py-2">#1234567</td>
          <td className="text-sm font-thin py-2">Mar 21, 2022</td>
          <td className="py-2">
            <span className="text-green-600 py-2 px-3 bg-gray-700 rounded-lg">
              Completed
            </span>
          </td>
          <td className="text-sm font-thin py-2">0.12345678</td>
        </tr>
        <tr className="">
          <td className="py-2">
            <FaBitcoin className="w-7 h-7 text-yellow-500" />
          </td>
          <td className="flex flex-col gap-0 py-2">
            <span className="fw-semibold text-lg">$569.0</span>
            <span className="font-thin text-xs text-slate-300">
              Withdraw USDT
            </span>
          </td>
          <td className="text-sm font-thin py-2">#1234567</td>
          <td className="text-sm font-thin py-2">Mar 21, 2022</td>
          <td className="py-2">
            <span className="text-green-600 py-2 px-3 bg-gray-700 rounded-lg">
              Completed
            </span>
          </td>
          <td className="text-sm font-thin py-2">0.12345678</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
