import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Projoy",
      age: 24,
    },
    {
      id: 2,
      name: "Riya",
      age: 22,
    },
    {
      id: 3,
      name: "Rahul",
      age: 23,
    },
    {
      id: 4,
      name: "Rohit",
      age: 20,
    },
  ];
  const Filtered = users.filter((user) => {
    return user.age > 20
  })

  return (
    <div className="p-8 max-w-sm rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">User List</h2>
      <ul className="space-y-2">
        {Filtered.map((user,) => (
          <li
            key={user.id}
            className="text-gray-800 font-semibold mb-4 px-4"
          >
            {user.name}
            {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
