function userCard({ name, age, email }) {
    return (
        <div className="bg-pink-400 text-white text-xl px-4 py-4 ">
            <p>my name is  :{name}</p>
            <p> I am years : {age} old</p>
            <p> my email is : {email}</p>
        </div>
    )
}

export default userCard