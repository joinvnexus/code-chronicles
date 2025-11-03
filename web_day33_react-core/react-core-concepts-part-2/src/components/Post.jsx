export default function Post({ post }) {
  const styleDiv = {
    border: "2px solid green",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
  };

  return (
    <div style={styleDiv}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
