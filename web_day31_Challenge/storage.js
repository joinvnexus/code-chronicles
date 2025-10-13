const handleSubmit = () => {
  const inputName = document.getElementById("input").value;
  const inputEmail = document.getElementById("email").value;

  const data = {
    name: inputName,
    email: inputEmail,
  };

  // আগের ডেটা নিয়ে আসো
  let users = JSON.parse(localStorage.getItem("user")) || [];

  // নতুন ডেটা অ্যাড করো
  users.push(data);

  // আবার localStorage এ সেট করো
  localStorage.setItem("user", JSON.stringify(users));

  console.log(users);

  // Clear inputs
  document.getElementById("input").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("submit").addEventListener("click", handleSubmit);
