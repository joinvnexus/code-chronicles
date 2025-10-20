import React from 'react'

export const Objcet = ({ person }) => {
    return (
        <div className="bg-blue-300 p-4 mt-2 rounded-xl border-2 border-green-600">
            <li className='list-none'>persons : person name is {person.name} , and
                person age is {person.age}</li>
        </div>
    )
}

export default Objcet
