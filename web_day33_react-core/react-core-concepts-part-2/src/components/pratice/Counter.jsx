import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleCount = (type) => {
    if (type === 'inc') {
      setCount(count + 1)

    } else if (type === 'dec') {
      setCount(count - 1)
    }

  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => handleCount("inc")}>Increase</button>
      <button onClick={() => handleCount("dec")} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </div>
  )
}
export default Counter;
