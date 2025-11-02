import { use } from "react"

export default function Users({ fetchUser }) {
  const styleDiv = {
    border: "2px solid red",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
  }

  // ✅ Experimental React 19 feature
  const users = use(fetchUser)

  console.log("users:", users)

  return (
    <div style={styleDiv}>
      <h1>Users:</h1>
      {users.map((user) => (
        <div key={user.id} style={styleDiv}>
          <h2 >{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  )
}
