export default function Friend({ friend }) {

    const styleDiv = {
        border: "2px solid blue",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
    }
    return (
        <div style={styleDiv}>
            <h2>{friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Username: {friend.username}</p>


        </div>
    )
}