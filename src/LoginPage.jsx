import React, { useState } from "react";
import "./LoginPage.css";
import { Icon } from "@iconify/react";
import logo from "./assets/logoimage.png"; // Put your logo here

const LoginPage = ({ onLogin }) => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validCredentials = [
      { uid: "admin@123", password: "admin@123" },
      { uid: "bibaswan@admin", password: "bibaswan@123" },
    ];

    const isValid = validCredentials.some(
      (cred) => cred.uid === uid && cred.password === password
    );

    if (isValid) {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-page-bg">
      <form className="login-card" onSubmit={handleLogin}>
        <img src={logo} alt="Admin Logo" className="login-logo" />
        <h2>ADMIN PANEL</h2>
        <p className="subtitle">Control panel login</p>

        <div className="input-group">
          <Icon icon="mdi:user" className="input-icon" />
          <input
            type="text"
            placeholder="admin"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </div>

        <div className="input-group">
          <Icon icon="mdi:lock" className="input-icon" />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
