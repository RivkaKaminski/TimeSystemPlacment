import React, { useState } from 'react';
import axios from 'axios';
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

const AddTeacher = () => {
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [phone, setPhone] = useState('');
    const [vetek, setVetek] = useState('');
    const [priority, setPriority] = useState('');
    const [isHomeroom, setIsHomeroom] = useState(false);
    const [subjectName, setSubjectName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "teacherName": name,
            "teacherFamily": family,
            "phone": phone,
            "vetek": parseInt(vetek, 10), // המרה של vetek למספר
            "priority": parseInt(priority, 10), // המרה של priority למספר
            "isHomeTeacher": isHomeroom ? 1 : 0 // המרה של isHomeroom ל-1 או 0
        };
        console.log(data);
        axios.post('https://localhost:7097/TeacherController/AddTeacher', data)
            .then((res) => {
                console.log('res-data', res.data)
            })
            .catch((error) => {
                console.error(error);
            })
    };

    

    return (
        <div style={styles.pageContainer}>
            <h2>Add New Teacher</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Family" value={family} onChange={(e) => setFamily(e.target.value)} required />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder="Vetek" value={vetek} onChange={(e) => setVetek(e.target.value)} />
                <input type="text" placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
                <label>
                    Homeroom Teacher:
                    <input type="checkbox" checked={isHomeroom} onChange={(e) => setIsHomeroom(e.target.checked)} />
                </label>
                <button style={styles.button} type="submit">Add Teacher</button>
            </form>
          
            <Link to="/ManagerPage">Back to Manager</Link>
        </div>
    );
};

export default AddTeacher;
