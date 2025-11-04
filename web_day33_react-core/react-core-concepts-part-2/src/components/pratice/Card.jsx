export default function Card ({user}){

    const styleDiv = {
        border: "2px solid red",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
    }
    return (
        <div style={styleDiv}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
    )

}