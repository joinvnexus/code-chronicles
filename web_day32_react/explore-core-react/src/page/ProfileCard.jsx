import Avatar from "../components/ProfileCard/Avatar";
import UserInfo from "../components/ProfileCard/UserInfo";
import FollowButton from "../components/ProfileCard/FollowButton";

function ProfileCard(props) {
    return (
        <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <Avatar
                image={props.image}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <UserInfo
                name={props.name}
                bio={props.bio}
                className="text-gray-800"
            />
            <FollowButton
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />

        </div>
    )
}
export default ProfileCard;