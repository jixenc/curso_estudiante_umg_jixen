// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import StudentSearch from './components/StudentSearch';
import CourseInsert from './components/CourseInsert';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/consulta-alumnos" element={<StudentSearch />} />
          <Route path="/insertar-curso" element={<CourseInsert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
