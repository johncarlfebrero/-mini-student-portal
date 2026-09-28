import { Link, NavLink } from "react-router-dom";

// NavLink passes { isActive } so the current page's link can be highlighted.
const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">SP</span>
          <span className="brand-text">
            <span className="brand-title">Student Portal</span>
            <span className="brand-subtitle">Registration &amp; Records</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/register" className={linkClass}>
            Register
          </NavLink>
          <NavLink to="/students" className={linkClass}>
            Students
          </NavLink>
        </nav>
      </div>
    </header>
  );
}