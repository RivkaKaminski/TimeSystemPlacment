import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
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
const LoginPage = () => {
    //Rut       /
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '111') {
            navigate('/ManagerPage');
        } else {
            console.log(`https://localhost:7097/TeacherController/GetTeachersByPasswordAndName?teacherId=${password}&teacherName=${username}`);
            axios.get(`https://localhost:7097/TeacherController/GetTeachersByPasswordAndName?teacherId=${password}&teacherName=${username}`)
                .then((ress) => {
                    if (ress.data) {
                        navigate('/TeacherPage',{state:{username,password}});
                        setMessage("")
                    }
                    else
                        setMessage('שם משתמש או סיסמא לא טובים')

                }).catch((err) => {
                    console.log(err.message);
                    alert('שם משתמש או סיסמא לא טובים')
                })
            // navigate('/TeacherPage');
        }
    };
    return (
        <div className="login-container" style={styles.pageContainer}>
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Welcome</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button style={styles.button} type="submit">Login</button>
                {message.length > 0 && message}
            </form>
        </div>
    );
};

export default LoginPage;
