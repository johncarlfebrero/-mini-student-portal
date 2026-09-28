import { Link, useParams } from "react-router-dom";

export default function StudentDetails({ students }) {
  const { id } = useParams(); // reads the :id part of the URL
  const student = students.find((s) => s.studentId === id);

  if (!student) {
    return (
      <section className="card">
        <h1 className="page-title">Student Not Found</h1>
        <p className="subtitle">
          No student with ID <strong>{id}</strong> is registered.
        </p>
        <Link to="/students" className="btn btn-secondary">
          ← Back to Students
        </Link>
      </section>
    );
  }

  return (
    <section className="card">
      <p className="course">Student Profile</p>
      <h1 className="page-title">{student.fullName}</h1>

      <dl className="details">
        <div className="detail-row">
          <dt>Student ID</dt>
          <dd>{student.studentId}</dd>
        </div>
        <div className="detail-row">
          <dt>Email</dt>
          <dd>{student.email}</dd>
        </div>
        <div className="detail-row">
          <dt>Course</dt>
          <dd>{student.course}</dd>
        </div>
        <div className="detail-row">
          <dt>Year Level</dt>
          <dd>{student.yearLevel}</dd>
        </div>
      </dl>

      <Link to="/students" className="btn btn-secondary">
        ← Back to Students
      </Link>
    </section>
  );
}