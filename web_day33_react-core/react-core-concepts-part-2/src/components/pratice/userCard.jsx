import { use } from "react"
import Card from "./Card"

export default function UserCard({ userPromise }) {

    const users = use(userPromise);
    console.log(users)
    const styleDiv = {
        border: "2px solid yellow",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
        padding: "10px",

    }
    return (
        <>
            <h1>User Card</h1>
            {/* <div> {JSON.stringify(userPromise)}</div> */}
            <div  style={styleDiv}>
                {/* {
                    users.map((user) => (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                        </div>
                    ))
                } */}

                <h1> users : {users.length}</h1>
                {
                    users.map((user) => <Card key={user.id} user={user}></Card>)
                }
            </div>
        </>
    )
}