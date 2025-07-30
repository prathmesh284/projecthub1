// AdminLogin.jsx
import React, { useEffect, useState } from "react";
import { Button, Input, Card } from "antd";
import "./LoginForm.css";
import "../SignIn.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🌄 Set background image ONLY for this page
  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);
  const loginAdmin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/login", {
        username,
        password,
        'role':"ADMIN"
      });

      // ✅ Store JWT token in localStorage
      const token = res.data.token;
      if (token) {
        localStorage.setItem("adminToken", token);
        navigate("/admin/home/blank");
      } else {
        alert("Login failed: No token received.");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("Admin login failed. Check credentials.");
    }
  };


  return (
    <div className="login-container">
      <Card
        title={<span className="card-title">Admin Login</span>}
        className="auth-card"
        hoverable
      >
        <div className="custom-input">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="custom-input">
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <Button type="primary" block onClick={loginAdmin} className="custom-button">
          Login as Admin
        </Button>
      </Card>
    </div>
  );
};
