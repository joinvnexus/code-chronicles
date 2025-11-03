export default function Friend({ friend, post }) {
  const styleDiv = {
    border: "2px solid blue",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <>
      <div style={styleDiv}>
        
        <h2>{friend.name}</h2>
        <p>{friend.email}</p>
      </div>
     
    </>
  );
}
