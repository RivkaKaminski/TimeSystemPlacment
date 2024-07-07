import axios from 'axios';
import React, { useEffect, useState } from 'react';  // ייבוא של useState
import { Link, useNavigate } from 'react-router-dom';  // איחוד ייבואים מ-router-dom


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

const ClassesList = () => {
    const [classes,setClasses] = useState([]);  // יצירת מערך ריק כערך ברירת מחדל
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://localhost:7097/Class/GetClass`)
        .then(res => {
            setClasses(res.data);  // שינוי כאן ל-res
            console.log(`https://localhost:7097/Class/GetClass`)
        })
        .catch(error => console.error('Error fetching data:', error));  // הוספת טיפול בשגיאות
    }, []);

    const handleResultPage=(classId,grade,num)=>{
    //להוסיף קריאה של השם כיתה
        navigate('/ResultPage',{state:{classId,grade,num}});
      }
    return (
        <div style={styles.pageContainer} className="classes-list">
            <h1>Classes List</h1>
            {classes && classes.length && classes.map(classs => (
                <div key={classs.classId}>
                    <p>{classs.discraption} {classs.grade} {classs.numClass}</p>
                    <button style={styles.button} onClick={()=>handleResultPage(classs.classId,classs.grade,classs.numClass)}>View Schedule</button>
                </div>
            ))}
            <Link to="/AddClass">Add New Class</Link>
            <Link to="/ManagerPage">Back to Manager</Link>
        </div>
    );
};
export default ClassesList;
