import React from 'react'

const learn = () => {
    const name = "projoy";
    const age = 20;
    const color = "blue";
    return (
        <div className=' bg-pink-300 px-4 '>
            <h1>jsX</h1>
            <h2>my name is {name}</h2>
            <h3>i am {age} years old</h3>
            <p>My favorite color is <span style={{ color }}>{color}</span></p>
            <p>Current Year: {new Date().getFullYear()}</p>


        </div>
    )
}

export default learn