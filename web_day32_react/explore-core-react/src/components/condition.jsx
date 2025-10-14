import { useState } from "react"
function condation() {
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
        <div className="container">
            <h2>My name is {name || "Guest"}</h2>

            <input type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Submit</button>

            {/* {message && <p>{message}</p>} */}
            <p>{message && <p>{message}</p>}</p>

        </div>
    )
}
export default condation