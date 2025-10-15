import { useState } from "react";
function LikesToggle() {
    const [likeCount, setLikeCount] = useState(0);

    const likes = () => setLikeCount(likeCount + 1);
    const reset = () => setLikeCount(0);

    return (
        <div className="text-center space-y-4 border border-blue-500 p-4 rounded-lg shadow-md text-left">
            <p className="text-2xl font-bold">LikesToggle</p>
            <p className="text-2xl font-bold">like count: {likeCount}</p>
            <button
                onClick={likes}
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >likeCount</button>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onDoubleClick={reset}>reset</button>
        </div>
    )


}
export default LikesToggle