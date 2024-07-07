import React, { useState } from 'react';
import './ResultPage.css';
import { Link } from 'react-router-dom';

const classes = [
  "ט.1", "ט.2", "י.1", "י.2", "י\"א.1", "י\"א.2", "י\"ב.1", "י\"ב.2"
];

const subjects = [
  { id: 1, name: 'tora' },
  { id: 2, name: 'math' },
  { id: 3, name: 'Education' },
  { id: 4, name: 'Mishley' },
  { id: 5, name: 'History-Public' },
  { id: 6, name: 'History-Israeli' },
  { id: 7, name: 'Tora-a' },
  { id: 8, name: 'Tora-b' },
  { id: 9, name: 'Syntax' },
  { id: 10, name: 'Yaadut' },
  { id: 11, name: 'Gym' },
  { id: 12, name: 'Navy' }
];

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: 'cover'
  },
  header: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px',
    backgroundColor: '#cda4f0cc',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  scheduleTable: {
    backgroundColor: '#cda4f0cc',  // רקע מלא ולא שקוף לטבלה
  }
};

const ScheduleByTeacher = () => {
  const daysOfWeek = [];
  const hours = [1, 2, 3, 4, 5, 6, 7];
  const [schedule, setSchedule] = useState([]);

  const randomizeSchedule = () => {
    const newSchedule = [];
    daysOfWeek.forEach(day => {
      hours.forEach(hour => {
        const randomClassIndex = Math.floor(Math.random() * classes.length);
        const randomSubjectIndex = Math.floor(Math.random() * subjects.length);
        const className = classes[randomClassIndex];
        const subjectName = subjects[randomSubjectIndex].name;
        newSchedule.push({
          day: day,
          hour: hour,
          className,
          subject: subjectName
        });
      });
    });
    setSchedule(newSchedule);
  };

  const getCellContent = (day, hour) => {
    const entry = schedule.find(item => item.day === day && item.hour === hour);
    if (entry) {
      return (
        <>
          <div><strong>{entry.className}</strong> - {entry.subject}</div>
        </>
      );
    }
    return null;
  };

  return (
    <div style={styles.pageContainer} className="result-page">
      <h1>Welcome Teacher Rachel Levy</h1>
      <button onClick={randomizeSchedule} style={styles.button}>Generate Schedule</button>
      <Link to="/ManagerPage">Back to Manager</Link>
      <table className="schedule-table" style={styles.scheduleTable}>
        <thead>
          <tr>
            <th>Hour/Day</th>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map(hour => (
            <tr key={hour}>
              <td>{hour}</td>
              {daysOfWeek.map((day, dayIndex) => (
                <td key={dayIndex}>{getCellContent(day, hour)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleByTeacher;
