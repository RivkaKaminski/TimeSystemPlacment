import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
const AddClass = () => {
    const [className, setClassName] = useState('');
    const [numClass, setNumClsas] = useState('');


   
    const handleSubmit = (e) => {
        console.log("Adding new class:", className);
        e.preventDefault();
        const data = {
                "grade": className,
                "discraption": "כיתה",
                "numClass": numClass,
                "levelGroup": ""
              
        }
        // console.log(`Preferred: Day ${day}, Hour ${hour}, Level ${level}`);
        console.log(data);
        axios.post('https://localhost:7097/Class/AddClass', data)
          .then((res) => {
            console.log('res-data', res.data)
          })
          .catch((error)=>{
            console.error(error);
          })
        
      };
   
    return (
        <div style={styles.pageContainer}>
            <h2>Add New Class</h2>
            <form onSubmit={handleSubmit}>
                <input style={styles.button}  type="text" placeholder="Class Name" value={className} onChange={(e) => setClassName(e.target.value)} required />
                <input style={styles.button}  type="text" placeholder="Num Class" value={numClass} onChange={(e) => setNumClsas(e.target.value)} required />
                <button style={styles.button}  type="submit">Add Class</button>
            </form>
            <Link to="/ManagerPage">Back to Manager</Link>

        </div>
    );
};

export default AddClass;
 