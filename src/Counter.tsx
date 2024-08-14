import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(100);
  // state harus ada 2 variable, yang asli dan untuk merubah
  const buttonPlus = () => {
    setCounter(counter + 1);
  };

  const buttonMinus = () => {
    setCounter(counter - 1);
  };
  console.log(counter);
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={buttonPlus}>+</button>
      <button onClick={buttonMinus}>-</button>
    </div>
  );
}

export default Counter;