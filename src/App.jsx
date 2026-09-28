import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  // Lifted state: the students array lives in App and is shared with every page.
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <>
      <NavBar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route
            path="/register"
            element={<Register students={students} onAddStudent={handleAddStudent} />}
          />
          <Route path="/students" element={<Students students={students} />} />
          <Route path="/students/:id" element={<StudentDetails students={students} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        WST 2 · Hands-On Activity 3 · Mini Student Portal
      </footer>
    </>
  );
}