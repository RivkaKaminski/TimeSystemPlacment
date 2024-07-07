import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import ManagerPage from './components/ManagerPage';
import TeacherPage from './components/TeacherPage';
import TeachersList from './components/TeachersList.js';
import ClassesList from './components/ClassesLIst';
import AddTeacher from './components/AddTeacher';
import AddClass from './components/AddClass';
import ConstraintsPage from './components/ConstraintsPage';
import AddLesson from './components/AddLesson.js';
import GetSchedule from './components/GetSchedule.js';
import ResultPage from './components/ResultPage.js';
import ScheduleByTeacher from './components/ScheduleByTeacher.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ManagerPage" element={<ManagerPage />} />
        <Route path="/AddLesson" element={<AddLesson />} />
        <Route path="/TeacherPage" element={<TeacherPage />} />
        <Route path="/TeachersList" element={<TeachersList />} />
        <Route path="/ClassesList" element={<ClassesList />} />
        <Route path="/AddTeacher" element={<AddTeacher />} />
        <Route path="/AddClass" element={<AddClass />} />
        <Route path="/ConstrainsPage" element={<ConstraintsPage />} />
        <Route path="/GetSchedule" element={<GetSchedule />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/ScheduleByTeacher" element={<ScheduleByTeacher />} />


      </Routes>
    </Router>
  );
}

export default App;
