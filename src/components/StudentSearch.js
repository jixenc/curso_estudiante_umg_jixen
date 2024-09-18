// components/StudentSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importamos Link para navegar al menú
import './StudentSearch.css'; // Importar estilos CSS

function StudentSearch() {
  const [carnet, setCarnet] = useState('');
  const [student, setStudent] = useState({ Estudiante: '', Email: '', Seccion: '' });
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://test-deploy-12.onrender.com/estudiantes');
      console.log(response.data);  // Esto te mostrará la estructura de los datos recibidos

      const carnetLimpio = carnet.replace(/\s+/g, '');

      // Busca directamente en response.data, ya que los estudiantes están directamente en la respuesta
      const foundStudent = response.data.find(est => 
        est.Carnet && est.Carnet.replace(/\s+/g, '') === carnetLimpio
      );

      if (foundStudent) {
        setStudent(foundStudent);
        setError('');
      } else {
        setStudent({ Estudiante: '', Email: '', Seccion: '' });
        setError('No se encontró un estudiante con el Carnet proporcionado.');
      }
    } catch (err) {
      console.error("Error durante la consulta:", err);
      setError('Se produjo un error al obtener los datos.');
    }
  };

  const handleClear = () => {
    setCarnet('');
    setStudent({ Estudiante: '', Email: '', Seccion: '' });
    setError('');
  };

  return (
    <div className="student-search-container">
      <h2>Consulta de Alumnos</h2>
      <div className="input-group">
        <label>Carnet:</label>
        <input
          type="text"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Nombres:</label>
        <input
          type="text"
          value={student.Estudiante}
          readOnly
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Correo Electrónico:</label>
        <input
          type="text"
          value={student.Email}
          readOnly
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Sección:</label>
        <input
          type="text"
          value={student.Seccion}
          readOnly
          className="input-field"
        />
      </div>
      <div className="button-group">
        <button onClick={handleSearch} className="primary-button">Buscar</button>
        <button onClick={handleClear} className="secondary-button">Limpiar</button>
      </div>
      
      {error && <p className="error-message">{error}</p>}

      {/* Botón para volver al menú */}
      <Link to="/">
        <button className="menu-button">Volver al Menú</button>
      </Link>
    </div>
  );
}

export default StudentSearch;
