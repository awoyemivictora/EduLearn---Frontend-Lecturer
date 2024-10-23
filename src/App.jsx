import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AcademicProgramCourses from "./pages/AcademicProgramCourses";
import AcademicProgramLectures from "./pages/AcademicProgramLectures";
import AcademicProgramAssignments from "./pages/AcademicProgramAssignments";
import AcademicProgramDiscussionForum from "./pages/AcademicProgramDiscussionForum";
import AcademicProgramProgressTracking from "./pages/AcademicProgramProgressTracking"
import AcademicProgramAchievements from "./pages/AcademicProgramAchievements"
import AcademicProgramExams from "./pages/AcademicProgramExams"
import QuizzesAndExams from "./pages/QuizzesAndExams"
import SemesterCalendar from "./pages/SemesterCalendar"
import Dashboard from "./pages/Dashboard"
import LiveEvents from "./pages/LiveEvents"
import Resources from "./pages/Resources"
import ExamSubmission from "./pages/ExamSubmission"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/academic-program-courses" element={<AcademicProgramCourses />} />
          <Route path="/academic-program-lectures" element={<AcademicProgramLectures />} />
          <Route path="/academic-program-assignments" element={<AcademicProgramAssignments />} />
          <Route path="/academic-program-discussion-forum" element={<AcademicProgramDiscussionForum />} />
          <Route path="/academic-program-progress-tracking" element={<AcademicProgramProgressTracking />} />
          <Route path="/academic-program-achievements" element={<AcademicProgramAchievements />} />
          <Route path="/academic-program-exams" element={<AcademicProgramExams />} />
          <Route path="/quizzes-and-exams" element={<QuizzesAndExams />} />
          <Route path="/semester-calendar" element={<SemesterCalendar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live-events" element={<LiveEvents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/exam-submission" element={<ExamSubmission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
