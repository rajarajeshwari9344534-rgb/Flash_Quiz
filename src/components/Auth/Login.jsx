import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Pure Static Demo: No storage used
    if (email && password) {
      navigate("/");
      // window.location.reload(); // Optional: used to refresh hardcoded state
    } else {
      setError("Please enter both email and password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-icon">➜</div>

        <h2>Welcome Back</h2>
        {error && <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>{error}</p>}
        
        <p className="auth-subtitle">
          Sign in to your account to continue
        </p>

        <label>Email Address</label>
        <input 
          type="email" 
          placeholder="name@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleLogin}>Sign In</button>

        <p className="auth-switch">
          Don't have an account? 
          <Link to="/signup"> Create one free</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;