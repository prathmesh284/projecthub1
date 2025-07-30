import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Button, Input, Card } from "antd";
import "./LoginForm.css";
import axios from "axios";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Inside register function:
  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("User registered with Firebase!");

      // Store in backend DB
      await axios.post("/api/clients/register", {
        email,
        password, // only store this if you're not using Firebase Auth to login
      });

      alert("User info saved in backend DB!");
    } catch (err) {
      console.error("Registration error:", err);
      alert(`Error: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <Card
      title={<span className="card-title">Register</span>}
      className="auth-card"
      hoverable
    >
      <div className="custom-input">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="custom-input">
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <Button type="default" block onClick={register} className="custom-button">
        Register
      </Button>
    </Card>
  );
};
