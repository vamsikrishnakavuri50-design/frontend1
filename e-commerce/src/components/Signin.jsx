import React, { useState } from "react";
import Cookies from "js-cookie";
import "../App.css";

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Get stored cookie values
    const storedEmail = Cookies.get("userEmail");
    const storedPassword = Cookies.get("userPassword");
    const storedName = Cookies.get("userName");

    if (email === storedEmail && password === storedPassword) {
      // Set login status cookie
      Cookies.set("isLoggedIn", "true", { expires: 7 });

      alert(`Welcome ${storedName} (demo login successful)`);
      console.log("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="main-content common">
      <div className="card" style={{ height: "300px" }}>
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>

        <p style={{ fontSize: "14px" }}>
          Don’t have an account?{" "}
          <span style={{ color: "purple" }}>
            <a href="/signup">Sign up</a>
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

export default Signin;