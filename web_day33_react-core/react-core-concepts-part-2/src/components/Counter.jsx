import { useState } from "react"

function Counter (){

    const [count, setCount] = useState(0)

    const handleClick = () =>{
        const newCount = count + 1
        setCount(newCount)
        
    }
    const counterStyle = {
        border: '2px solid blue',
        padding: '5px',
        margin: '10px'
    }
    return(
        <div  style={counterStyle}>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default Counter