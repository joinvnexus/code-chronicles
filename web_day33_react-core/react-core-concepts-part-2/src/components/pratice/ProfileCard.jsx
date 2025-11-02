const ProfileCard = ({name, age, profession, about}) => {

    const profileCard = {
        border: '2px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


    }

    const imgUrl = "https://www.shutterstock.com/image-photo/lake-palms-mahe-island-seychelles-260nw-119831752.jpg";

    return (
        <div style={profileCard}>
            <img src={imgUrl} alt="" />
            <h2> Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
            <p>About: {about}</p>
        </div>
    )
}
export default ProfileCard