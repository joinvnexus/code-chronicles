import { useState } from "react"
function Condation() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (name === "projoy" && password === "123456") {
            setMessage("✅ Login success!");
        } else if (!name || !password) {
            setMessage("Please enter name and password");
        }
        else {
            setMessage("Login failed!");
        }
    }
    return (
        <div className=" p-8 max-w-sm rounded-xl shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-center">My name is {name || "Guest"}</h2>

            <input 
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>Submit</button>

            {message && <p className="text-center font-semibold">{message}</p>}

        </div>
    )
}
export default Condation