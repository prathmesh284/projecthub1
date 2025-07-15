import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Button, Input, Card } from "antd";
import "./LoginForm.css";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home/blank');
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/user-not-found") {
        alert("No user found with this email.");
      } else if (err.code === "auth/wrong-password") {
        alert("Incorrect password.");
      } else if (err.code === "auth/invalid-email") {
        alert("Email format is invalid.");
      } else {
        alert(`Login failed: ${err.message}`);
      }
    }
  };

  return (
    <Card
      title={<span className="card-title">Login</span>}
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
      <Button type="primary" block onClick={login} className="custom-button">
        Login
      </Button>
    </Card>
  );
};
