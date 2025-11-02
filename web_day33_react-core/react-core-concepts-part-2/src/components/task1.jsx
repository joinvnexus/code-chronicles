import { useState } from "react"
const FunctionComponent = ( {name, age, isMarried}) => {
 
    const [count , setCount] = useState(0)
    const styleDiv = {
        border: '2px solid green',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        textAlign: 'center'
    }
    const itemStyle = {
        border: '2px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        textAlign: 'center'
    }
    const handleClick = () => {
        // alert('clicked')
        setCount(count + 1)

    }
    return (
        <div style={styleDiv}>
            <h1>Function Component</h1>


            <div style={itemStyle}>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Married: {isMarried ? 'Yes' : 'No'}</p>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Click</button>

            </div>


        </div>
    )
}

export default FunctionComponent


