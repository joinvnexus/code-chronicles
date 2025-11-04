import { useState, useEffect } from "react";

export default function Team() {
    const styleDiv = {
        border: "2px solid yellow",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
    };

    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, []);


    return (
        <div style={styleDiv}>
            <h1>Team {team.length}</h1>
            {
                team.map((play) => (
                    <div key={play.id} style={styleDiv}>
                        <h2 >{play.name}</h2>
                        <p>Email: {play.email}</p>
                        <p>Username: {play.username}</p>
                    </div>
                ))
            }
        </div>
    )
}