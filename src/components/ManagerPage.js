import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const ManagerPage = () => {
    const navigate = useNavigate();
   
    const handleShowTeachers = () => {
      navigate('/TeachersList');
    };
    
    const handleShowClasses = () => {
      navigate('/ClassesList');
    };

    const handleAddLessonToSchedule=()=>{
        navigate('/AddLesson')
    }
      
    return (
      <div style={styles.pageContainer}>
        <h1 >Welcome Manager</h1>
        <button style={styles.button} onClick={handleShowTeachers}>Show Teachers</button>
        <button style={styles.button} onClick={handleShowClasses}>Show Classes</button>
        <button style={styles.button} onClick={handleAddLessonToSchedule}>Show Lesson</button>
        <button style={styles.button} onClick={() => navigate(-1)}>Go Back</button>
        <Link to="/">Back to HomePage</Link>

      </div>
    );
  };
  
  export default ManagerPage;