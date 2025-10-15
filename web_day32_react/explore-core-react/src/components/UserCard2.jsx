import React from 'react'

const UserCard2 = ({ name, age, country }) => {
    return (
        <div style={
            {
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "10px",
                width: "250px",
            }
        }>
            <p>Name: {name}</p>
            <p>Age : {age}</p>
            <p> Country: {country}</p>
        </div>
    )
}

export default UserCard2