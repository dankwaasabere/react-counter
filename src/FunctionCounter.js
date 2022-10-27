import React, { useState } from "react";
import "./Function.css";

const FunctionState = () => {
  const [number, setNumber] = useState(1);

  console.log("function counter");

  return (
    <div className="thisFunction">
      <br />
      <h1>CounterFunction:{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={() => setNumber(number - 1)}>Decrease</button>
    </div>
  );
};

export default FunctionState;
