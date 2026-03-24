import "./Auth.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-icon">➜</div>

        <h2>Welcome Back</h2>
        <p className="auth-subtitle">
          Sign in to your account to continue
        </p>

        <label>Email Address</label>
        <input type="email" placeholder="name@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button className="auth-btn">Sign In</button>

        <p className="auth-switch">
          Don't have an account? 
          <Link to="/signup"> Create one free</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;