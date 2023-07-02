import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://flask-college-api.onrender.com/api/students');
      setStudents(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://flask-college-api.onrender.com/api/students', { name, college });
      fetchStudents();
      setName('');
      setCollege('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Flask MongoDB API Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          College:
          <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h2>Students</h2>
      {students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>College: {student.college}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;