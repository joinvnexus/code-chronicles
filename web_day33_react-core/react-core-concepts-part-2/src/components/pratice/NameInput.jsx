
import { useState } from "react";
const NameInput = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                
            />
            <p>Your name is: {name}</p>
            
        </div>
    )
}
export default NameInput;
