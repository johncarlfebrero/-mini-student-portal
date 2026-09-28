import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

export default function Home({ students }) {
  const totalStudents = students.length;
  const totalCourses = new Set(students.map((student) => student.course)).size;
  const latest = students[students.length - 1];

  return (
    <>
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="A quick summary of student registrations for this session."
      >
        <Link to="/register" className="btn btn-primary">
          + Register Student
        </Link>
      </PageHeader>

      <section className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Students</p>
          <p className="stat-value">{totalStudents}</p>
          <p className="stat-hint">Registered this session</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Courses Represented</p>
          <p className="stat-value">{totalCourses}</p>
          <p className="stat-hint">Unique programs</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Latest Registration</p>
          <p className="stat-value stat-value-sm">{latest ? latest.fullName : "—"}</p>
          <p className="stat-hint">{latest ? latest.studentId : "No registrations yet"}</p>
        </div>
      </section>

      <h2 className="section-title">Quick Actions</h2>

      <section className="action-grid">
        <Link to="/register" className="action-card">
          <span className="action-icon">+</span>
          <span>
            <span className="action-title">Register a Student</span>
            <span className="action-text">
              Fill out the registration form. All fields are validated.
            </span>
          </span>
        </Link>

        <Link to="/students" className="action-card">
          <span className="action-icon">☰</span>
          <span>
            <span className="action-title">View Student Records</span>
            <span className="action-text">
              Browse all registered students and open each profile.
            </span>
          </span>
        </Link>
      </section>
    </>
  );
}