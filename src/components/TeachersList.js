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

const TeachersList = () => {
    const [teachers, setTeachers] = useState([]);  // יצירת מערך ריק כערך ברירת מחדל
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`https://localhost:7097/TeacherController/getTeachersArray`)
        .then(res => {
            setTeachers(res.data);  // שינוי כאן ל-res
            console.log(`https://localhost:7097/TeacherController/getTeachersArray`)
        })
        .catch(error => console.error('Error fetching data:', error));  // הוספת טיפול בשגיאות
    }, []);

    const handleAddConstrainse = (password) => {
        navigate('/ConstrainsPage',{state:{password}});
    };

    const handleScheduleByTeacher = (teacherID) => {
        navigate('/ScheduleByTeacher',{state:{teacherID}});
    };

    return (
        <div style={styles.pageContainer} className="TeachersList">
            <h1>Teachers List</h1>
            {teachers && teachers.map(teacher => (  // הוספת בדיקה ש-teachers אינו null
                <div key={teacher.teacherID}>
                    <p>{teacher.teacherName} {teacher.teacherFamily}</p>
                    <button style={styles.button} onClick={()=>handleAddConstrainse(teacher.teacherID)}>הוספת אילוצים</button>
                    <button style={styles.button} onClick={()=>handleScheduleByTeacher(teacher.teacherID)}>View Schedule</button>
                </div>
            ))}
            <Link to="/AddTeacher">Add New Teacher</Link>
            <Link to="/ManagerPage">Back to Manager</Link>
        </div>
    );
};

export default TeachersList;
