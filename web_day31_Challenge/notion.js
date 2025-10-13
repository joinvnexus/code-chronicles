const user = {
  "full name": "Jane Doe",
  "zip-code": 12345,
  "user id": "jd-1234"
};

console.log(user["full name"]);

const users = JSON.parse(localStorage.getItem("user")) || [];
console.log(users);