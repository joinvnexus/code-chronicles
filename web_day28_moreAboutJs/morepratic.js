// 1. What is async?
// ---------------------------------
// If you write "async" before a function, it always returns a Promise.
// Inside that function, you can use "await".
async function hello() {
  return "Hello world";
}
hello().then(msg => console.log(msg));


// 2. What is await?
// ---------------------------------
// "await" can only be used inside an async function.
// JS execution will pause at that line until the Promise resolves.
// After that, it returns the resolved value.
async function getData() {
  console.log("1");

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log("2:", data[0].name);
  console.log("3");
}
getData();


// 3. Error handling with try...catch
// ---------------------------------
// If the API is down or request fails, use try...catch to handle the error.
async function getDataSafe() {
  try {
    const response = await fetch("https://wrong-url.com");
    const data = await response.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
}
getDataSafe();


// 4. async/await vs. .then()
// ---------------------------------
// Both are valid, but async/await looks cleaner and easier to read.

// Using .then():
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Using async/await:
async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getUser();


// 5. Sequential multiple requests
// ---------------------------------
// Fetch one after another using async/await.
const loadUser = async () => {
  const res1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user1 = await res1.json();

  const res2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const user2 = await res2.json();

  console.log("User 1:", user1.name);
  console.log("User 2:", user2.name);
};
loadUser();


// 6. Parallel requests (Promise.all)
// ---------------------------------
// Fetch multiple requests at the same time to improve performance.
async function loadAll() {
  const [res1, res2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/users/2"),
  ]);

  const user1 = await res1.json();
  const user2 = await res2.json();

  console.log(user1.name, user2.name);
}
loadAll();
