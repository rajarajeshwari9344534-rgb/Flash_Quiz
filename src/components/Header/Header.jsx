import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [user, setUser] = useState({ id: 1, name: "Admin", role: "admin" }); // Hardcoded for demo
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/login");
  };


  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        ⚡ <span>Flash</span>Quiz
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        {user && user.role === "admin" && (
          <Link to="/add-course">Add Course</Link>
        )}
        <Link to="/history">History</Link>
        
        {user ? (
          <div className="user-nav">
            <span className="user-name">Hi, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="login-link">Login</Link>
            <Link to="/signup" className="signup-btn">Get Started</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;