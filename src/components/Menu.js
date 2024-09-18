// components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';  // Importar el archivo CSS

function Menu() {
  return (
    <div className="menu-container">
      <h1>Gestión de Cursos y Estudiantes</h1>
      <ul>
        <li>
          <Link to="/consulta-alumnos" className="menu-link">Consulta de Estudiantes</Link>
        </li>
        <li>
          <Link to="/insertar-curso" className="menu-link">Insertar Curso</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
