import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div style={{ padding: 10, background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>

      {!user && <Link to="/login">Login</Link>}
      {!user && <Link to="/">Signup</Link>}

      {user && <span style={{ marginLeft: 20 }}> {user.email}</span>}
    </div>
  );
}