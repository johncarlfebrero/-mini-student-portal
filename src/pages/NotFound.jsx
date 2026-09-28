import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <section className="card not-found">
      <p className="error-code">404</p>
      <h1 className="page-title">Page not found</h1>
      <p className="page-description">
        The page <code>{location.pathname}</code> does not exist or may have been moved.
      </p>
      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary">
          Go to Dashboard
        </Link>
        <Link to="/students" className="btn btn-secondary">
          View Students
        </Link>
      </div>
    </section>
  );
}