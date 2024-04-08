import React from "react";

const Button = ({ btnTitle }) => {
  return (
    <button className="text-white text-xs border border-slate-100 py-1 px-2 rounded-lg hover:bg-green-700 hover:text-white hover:border-green-700">
      {btnTitle}
    </button>
  );
};

export default Button;
