import React, { useState } from 'react';
import './StudentDetails.css';  // Import the CSS file

const StudentDetails = () => {
  const students = [
    { id: 'a1', name: 'John Doe', photo1: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
    { id: 'a2', name: 'Jane Doe', photo1: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
    { id: 'a3', name: 'Mark Smith', photo1: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
    { id: 'a4', name: 'Emma Brown', photo1: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
  ];

  const [count, setCount] = useState(0);
  const [attendance, setAttendance] = useState({});  // Object to track student attendance

  const handlePresent = (id) => {
    if (!attendance[id]) {
      setAttendance({ ...attendance, [id]: 'present' });
      setCount(count + 1);
    }
  };

  const handleAbsent = (id) => {
    if (attendance[id] === 'present') {
      setAttendance({ ...attendance, [id]: 'absent' });
      setCount(count > 0 ? count - 1 : 0);  // Prevent negative count
    }
  };

  return (
    <div>
      <h2>Student Details</h2>
      <div className="grid-container">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <img src={student.photo1} alt={student.name} className="student-photo" />
            <span className="student-name">{student.name}</span>
            <button
              className={`present-btn ${attendance[student.id] === 'present' ? 'disabled-btn' : ''}`}
              onClick={() => handlePresent(student.id)}
              disabled={attendance[student.id] === 'present'}
            >
              Present
            </button>
            <button
              className="absent-btn"
              onClick={() => handleAbsent(student.id)}
            >
              Absent
            </button>
          </div>
        ))}
      </div>

      <div className="count-section">
        <h3>Total Present Count: {count}</h3>
      </div>
    </div>
  );
};

export default StudentDetails;
