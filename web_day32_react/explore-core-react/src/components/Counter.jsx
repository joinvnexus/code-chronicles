import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (operation) => {
    if (operation === "increment") {
      setCount(count + 1);
    } else if (operation === "decrement") {
      setCount(count - 1);
    }
  };

  return (
    <div className="text-center">
      <h2>Count: {count}</h2>
      <button
        onClick={() => handleClick("increment")}
        className="bg-blue-500 
      hover:bg-blue-700 
      text-white font-bold py-2
       px-4 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => handleClick("decrement")}
        className="bg-red-500 
       hover:bg-red-700 
       text-white font-bold py-2
        px-4 rounded px-4 rounded mt-2"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
