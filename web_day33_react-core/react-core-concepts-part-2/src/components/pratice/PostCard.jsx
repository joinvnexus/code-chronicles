import { useState, useEffect } from "react";

function PostCard({ title, content }) {

    const [like, setLike] = useState(4);
    

    useEffect(() => {
        console.log("like updated:", like);
    }, [like]); 

    return (
        <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px", margin: "10px 0" }}>
            <h2>Post Card</h2>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>❤️ Like: {like}</p>
            <button onClick={() => setLike(like + 1)}>Like</button>

        </div>
    )
}

export default PostCard