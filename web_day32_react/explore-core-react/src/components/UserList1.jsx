function UserList( { users } ) {

    return (
        <div>
            <h1>user list</h1>
            <ul>
                {users.map((user, index) => (

                    <li key={index}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList