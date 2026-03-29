import React, { useState } from "react";
import "./SignupLogin.css";

const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Signup
  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Signup successful ✅");
    setIsLogin(true);
  };

  // Login
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
      alert("Login successful 🎉");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="auth-container">

      <h2>{isLogin ? "Login" : "Signup"}</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {isLogin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleSignup}>Signup</button>
      )}

      <p onClick={() => setIsLogin(!isLogin)} className="toggle-text">
        {isLogin
          ? "Don't have an account? Signup"
          : "Already have an account? Login"}
      </p>

    </div>
  );
};

export default SignupLogin;