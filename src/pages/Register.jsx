import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

const COURSES = [
  "BS Information Technology",
  "BS Computer Science",
  "BS Information Systems",
  "BS Computer Engineering",
];

const YEAR_LEVELS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

const STUDENT_ID_PATTERN = /^\d{4}-\d{4}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
  fullName: "",
  studentId: "",
  email: "",
  course: "",
  yearLevel: "",
};

// Returns an object of error messages. An empty object means the form is valid.
function validate(form, students) {
  const errors = {};
  const studentId = form.studentId.trim();
  const email = form.email.trim();

  if (!form.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!studentId) {
    errors.studentId = "Student ID is required.";
  } else if (!STUDENT_ID_PATTERN.test(studentId)) {
    errors.studentId = "Student ID must follow the format ####-#### (e.g. 2022-0143).";
  } else if (students.some((student) => student.studentId === studentId)) {
    errors.studentId = "This Student ID is already registered.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.course) {
    errors.course = "Please select a course.";
  }

  if (!form.yearLevel) {
    errors.yearLevel = "Please choose a year level.";
  }

  return errors;
}

export default function Register({ students, onAddStudent }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // One handler for every field, using each field's "name" attribute.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleClear = () => {
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(form, students);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onAddStudent({
      fullName: form.fullName.trim(),
      studentId: form.studentId.trim(),
      email: form.email.trim(),
      course: form.course,
      yearLevel: form.yearLevel,
    });

    navigate("/students");
  };

  const inputClass = (field) => (errors[field] ? "input has-error" : "input");

  return (
    <>
      <PageHeader
        eyebrow="Registration"
        title="Register a Student"
        description="Complete all fields below. Fields marked with * are required."
      />

      <form className="card form" onSubmit={handleSubmit} noValidate>
        {/* ---------- Section 1: Personal Information ---------- */}
        <section className="form-section">
          <div className="form-section-heading">
            <h2 className="form-section-title">Personal Information</h2>
            <p className="form-section-text">Basic details used to identify the student.</p>
          </div>

          <div className="form-grid">
            <div className="form-field full">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Juan Dela Cruz"
                className={inputClass("fullName")}
                value={form.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="field-error">{errors.fullName}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="studentId" className="form-label">
                Student ID <span className="required">*</span>
              </label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                placeholder="2022-0143"
                className={inputClass("studentId")}
                value={form.studentId}
                onChange={handleChange}
              />
              {errors.studentId ? (
                <p className="field-error">{errors.studentId}</p>
              ) : (
                <p className="field-hint">Format: ####-####</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="juan@school.edu.ph"
                className={inputClass("email")}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email ? (
                <p className="field-error">{errors.email}</p>
              ) : (
                <p className="field-hint">Use an active email address.</p>
              )}
            </div>
          </div>
        </section>

        {/* ---------- Section 2: Academic Information ---------- */}
        <section className="form-section">
          <div className="form-section-heading">
            <h2 className="form-section-title">Academic Information</h2>
            <p className="form-section-text">The student's program and current year level.</p>
          </div>

          <div className="form-grid">
            <div className="form-field full">
              <label htmlFor="course" className="form-label">
                Course <span className="required">*</span>
              </label>
              <select
                id="course"
                name="course"
                className={inputClass("course")}
                value={form.course}
                onChange={handleChange}
              >
                <option value="">Select a course</option>
                {COURSES.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              {errors.course && <p className="field-error">{errors.course}</p>}
            </div>

            <fieldset className="form-field full">
              <legend className="form-label">
                Year Level <span className="required">*</span>
              </legend>
              <div className={errors.yearLevel ? "radio-group has-error" : "radio-group"}>
                {YEAR_LEVELS.map((level) => (
                  <label key={level} className="radio-card">
                    <input
                      type="radio"
                      name="yearLevel"
                      value={level}
                      checked={form.yearLevel === level}
                      onChange={handleChange}
                    />
                    <span>{level}</span>
                  </label>
                ))}
              </div>
              {errors.yearLevel && <p className="field-error">{errors.yearLevel}</p>}
            </fieldset>
          </div>
        </section>

        {/* ---------- Actions ---------- */}
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={handleClear}>
            Clear Form
          </button>
          <button type="submit" className="btn btn-primary">
            Register Student
          </button>
        </div>
      </form>
    </>
  );
}