import React from 'react'
import { useState } from 'react'
const Message = () => {
    const [age, setAge] = useState(20);
    let message;
    let isLoggedIn = true;
    if (age > 18 && isLoggedIn) {
        message = <p>you can vote</p>
    } else {
        message = <p>you can not vote</p>
    }
    return (
        < div className=' mt-4 p-4 rounded-xl border-2 border-green-600'>
            <h2 className='mb-4 '>{message}</h2>
            <p>your age is {age}</p>
            <button
            className=' p-4 bg-green-900 text-white text-xl rounded-lg '
                onClick={() => setAge(age + 1)}
            >Increase Age</button>


        </div>
    )
}

export default Message