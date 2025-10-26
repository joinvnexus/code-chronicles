import React, { useState, useEffect } from "react";
const LazyComponent = () => {
    // 
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => setData(data))
    }, [])
    if (!data) {
        throw new Promise(() => { });
    }
    return (
        <div>
            <h1>Lazy Component</h1>

            <h1>Lazy Component</h1>
            <h2>{data.name}</h2>
            <p>Email: {data.email}</p>
            <p>Username: {data.username}</p>


        </div>
    )
}

export default LazyComponent