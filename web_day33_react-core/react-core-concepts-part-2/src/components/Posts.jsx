import { use } from "react"
import Post from "./Post"

const Posts = ({postPromise}) => {
    const posts = use(postPromise);
    console.log(posts)
    return (
        <div>
            <h1>Posts { posts.length}</h1>
            <div>
                <div className="friends flex items-center justify-center flex-wrap">
                    {
                        posts.slice(0,10).map(post=> <Post key={post.id} post={post} />)

                    }
                </div>

            </div>


        </div>
    )
}

export default Posts