import React, { useState } from "react";
import { MyContext } from "./context/MyContext";

const MyProvider = ({ children }) => {
  const [text, setText] = useState("Initial value");
  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
