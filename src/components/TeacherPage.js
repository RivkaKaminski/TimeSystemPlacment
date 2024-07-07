import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


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

const TeacherPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { username, password } = location.state || {};

    const handleShowConstraints = () => {
        console.log(12,password);
        navigate('/ConstrainsPage',{state:{password}});
    };
    const handleScheduleByTeacher = () => {
        navigate('/ScheduleByTeacher',{state:{password}});
    };


    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.header}>Welcome Teacher {username}</h1>
            <button style={styles.button} onClick={handleShowConstraints}>Add Constraints</button>
            <button style={styles.button} onClick={handleScheduleByTeacher}>View Schedule</button>
            {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
            <Link to="/">Back to HomePage</Link>

        </div>
    );
};


export default TeacherPage;
