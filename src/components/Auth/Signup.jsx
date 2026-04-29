import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Pure Static Demo: No storage used
    if (fullName && email && password) {
      navigate("/login");
    } else {
      setError("Please fill in all fields");
    }
  };


  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-icon">👤</div>

        <h2>Create Account</h2>
        {error && <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>{error}</p>}
        
        <p className="auth-subtitle">
          Join FlashQuiz to start your learning path
        </p>

        <label>Full Name</label>
        <input 
          type="text" 
          placeholder="John Doe" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

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

        <button className="auth-btn" onClick={handleSignup}>Get Started</button>

        <p className="auth-switch">
          Already have an account? 
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;