import { useState } from "react";

function Increment() {


    const [count, setCount] = useState(0);

    const increment=() => setCount(count +1);
    const decrement=() => {
        if (count >0 ){
            setCount(count -1)
        }
    }

    return (
        <div className="text-center space-y-4 border border-blue-500 p-4 rounded-lg shadow-md text-left">
            <p className="text-2xl font-bold">Count: {count}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={increment}>➕ increment</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>➖ decrement</button>
        </div>
    )
}

export default Increment