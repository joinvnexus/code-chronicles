import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=" bg-pink-300 rounded-xl p-4  ">
      <h2>
        {isLoggedIn ? "✅ Welcome back, Projoy!" : "❌ You are not logged in."}
      </h2>

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: isLoggedIn ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;
