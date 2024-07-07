import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'url("/background.jpg") no-repeat center center fixed',
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
    color: 'Black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

const ConstraintsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { password } = location.state;
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [level, setLevel] = useState('');
  const [DayIm, setDayIm] = useState('');
  const [HourIm, setHourIm] = useState('');

  //  רק מהמנהל  ------לא שומר תעודת זהות מורה ולא שולח אותה]

  const handleSubmitPreferred = (e) => {
    console.log(13,password);
    e.preventDefault();
    const data = {
      "teacherId": password,
      "day": day,
      "houer": hour,
      "idPrefferedHouers": 0,
      "level": level
    }
    // console.log(`Preferred: Day ${day}, Hour ${hour}, Level ${level}`);
    console.log(data);
    axios.post('https://localhost:7097/PrefferedHour/AddPrefferedHour', data)
      .then((res) => {
        console.log('res-data', res.data)
      })
      .catch((error)=>{
        console.error(error);
      })
    
  };

  const handleSubmitImpossible = (e) => {
    console.log(13,password);
    e.preventDefault();
    const data = {
        "teacherId": password,
        "day": DayIm,
        "houers": HourIm,      
    }
    // console.log(`Preferred: Day ${day}, Hour ${hour}, Level ${level}`);
    console.log(data);
    axios.post(' https://localhost:7097/ImpossibleHour/AddImpossibleHour', data)
      .then((res) => {
        console.log('res-data', res.data)
      })
      .catch((error)=>{
        console.error(error);
      })
    // הוספת האילוץ למערכת
  };

  return (
    <div style={styles.pageContainer}>
      <h1>Add Constraints</h1>
      <form onSubmit={handleSubmitPreferred}>
        <label >Day: <input type="number" min="1" max="5" value={day} onChange={e => setDay(e.target.value)} /></label>
        <label>Hour: <input type="number" min="1" max="7" value={hour} onChange={e => setHour(e.target.value)} /></label>
        <label>Level: <input type="number" min="1" max="10" value={level} onChange={e => setLevel(e.target.value)} /></label>
        <button style={styles.button} type="submit">Add Preferred Time</button>
      </form>
      <form onSubmit={handleSubmitImpossible}>
        <label>DayIm: <input type="number" min="1" max="5" value={DayIm} onChange={e => setDayIm(e.target.value)} /></label>
        <label>HourIm: <input type="number" min="1" max="7" value={HourIm} onChange={e => setHourIm(e.target.value)} /></label>
        <button style={styles.button} type="submit">Add Impossible Time</button>
        <button style={styles.button} onClick={() => navigate(-1)}>Go Back</button>
      </form>
    </div>
  );
};

export default ConstraintsPage;
