import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3002/signup", {
      username,
      email,
      password
    })
    .then((res) => {
      console.log(res.data);
      alert("Signup successful!");
      window.location.href='http://localhost:3000/' 
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Signup with us!</h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <br /><br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br /><br />

          <button type="submit">Signup</button>

        </form>
      </div>
    </div>
  );
};

export default Signup;