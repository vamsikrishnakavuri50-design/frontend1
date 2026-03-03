import React, { useState } from "react";
import Cookies from "js-cookie";
import "../App.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Store data in cookies (Demo purpose only)
    Cookies.set("userName", name, { expires: 7 });
    Cookies.set("userEmail", email, { expires: 7 });
    Cookies.set("userPassword", password, { expires: 7 });

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Signup successful (demo)");
  };

  return (
    <div className="main-content common">
      <div className="card" style={{ height: "380px" }}>
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>

        <p style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <span style={{ color: "purple" }}>
            <a href="/signin">Sign in</a>
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid gray",
  backgroundColor: "white",
  color: "black"
};

const buttonStyle = {
  width: "95%",
  padding: "10px",
  marginTop: "10px",
  backgroundColor: "purple",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Signup;