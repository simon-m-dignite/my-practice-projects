import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const UserForm = () => {
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <p>Data: {text}</p>
      <button onClick={() => setText("Value Changed")}>Click</button>
    </div>
  );
};

export default UserForm;
