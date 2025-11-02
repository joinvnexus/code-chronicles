import { use } from "react"
import Friend from "./friend"

const friends = ({ friendsPromise }) => {

    const friends = use(friendsPromise);

    return (
        <div>
            <h1>Friends {friends.length}</h1>

            <div className="friends flex items-center justify-center flex-wrap">
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend} />)

                }
            </div>

        </div>

    )
}
export default friends;