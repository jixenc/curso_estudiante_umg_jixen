// components/CourseInsert.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseInsert.css';

function CourseInsert() {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const handleInsert = async () => {
    try {
      await fetch('https://test-deploy-12.onrender.com/cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          creditos,
          descripcion,
        }),
      });
      alert('¡Curso insertado correctamente!');
    } catch (error) {
      console.error("Error inserting course:", error);
    }
  };

  return (
    <div className="course-insert-container">
      <h2>Insertar Curso</h2>
      <input 
        type="text" 
        placeholder="Nombre del curso" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        className="input-field"
      />
      <input 
        type="number" 
        placeholder="Créditos" 
        value={creditos} 
        onChange={(e) => setCreditos(e.target.value)} 
        className="input-field"
      />
      <textarea 
        placeholder="Descripción del curso" 
        value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} 
        className="input-field textarea"
      ></textarea>
      <button onClick={handleInsert} className="primary-button">Insertar Curso</button>

      {/* Botón para volver al menú */}
      <Link to="/">
        <button className="menu-button">Volver al Menú</button>
      </Link>
    </div>
  );
}

export default CourseInsert;
