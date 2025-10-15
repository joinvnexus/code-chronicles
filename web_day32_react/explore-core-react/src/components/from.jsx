import { useState } from 'react'

const FormExample = () => {
    const [name, setname] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${name}`)
        setname('')
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit</button>
        </form>
    )
}

export default FormExample