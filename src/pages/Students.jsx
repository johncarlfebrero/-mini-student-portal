import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

export default function Students({ students }) {
  return (
    <>
      <PageHeader
        eyebrow="Records"
        title="Students"
        description={
          students.length === 0
            ? "No students have been registered yet."
            : `${students.length} registered student(s). Click a name to view the full profile.`
        }
      >
        <Link to="/register" className="btn btn-primary">
          + Register Student
        </Link>
      </PageHeader>

      <section className="card card-flush">
        {students.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">☰</div>
            <p className="empty-title">No student records</p>
            <p className="empty-text">Registered students will appear here.</p>
            <Link to="/register" className="btn btn-primary">
              Register the first student
            </Link>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Student ID</th>
                  <th>Course</th>
                  <th>Year Level</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.studentId}>
                    <td className="cell-muted">{index + 1}</td>
                    <td>
                      <Link to={`/students/${student.studentId}`} className="table-link">
                        {student.fullName}
                      </Link>
                    </td>
                    <td>
                      <span className="badge">{student.studentId}</span>
                    </td>
                    <td>{student.course}</td>
                    <td>{student.yearLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}