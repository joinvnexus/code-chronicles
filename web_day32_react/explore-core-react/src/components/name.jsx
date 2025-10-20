import React from 'react'

const name = ({ User }) => {
    return (
        <div className="bg-blue-600 p-4 mt-2 rounded-xl border-2 border-green-600">
            <li className='list-none text-white'>name :  {User}</li>
        </div>
    )
}

export default name