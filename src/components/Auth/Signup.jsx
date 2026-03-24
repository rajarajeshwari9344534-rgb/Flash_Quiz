import "./Auth.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-icon">👤</div>

        <h2>Create Account</h2>
        <p className="auth-subtitle">
          Join FlashQuiz to start your learning path
        </p>

        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Email Address</label>
        <input type="email" placeholder="name@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button className="auth-btn">Get Started</button>

        <p className="auth-switch">
          Already have an account? 
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;