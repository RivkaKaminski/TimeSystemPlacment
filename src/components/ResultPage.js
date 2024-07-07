import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResultPage.css';
import { Link, useLocation } from 'react-router-dom';

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
        backgroundColor: '#cda4f0cc',
    }
};

const ResultPage = () => {
    const location = useLocation();

    const [schedule, setSchedule] = useState([]);
    // const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const daysOfWeek = [1,2,3,4,5];

    const hours = [1, 2, 3, 4, 5, 6, 7];
    // const classId = location.state ? location.state.classId : 4;  // Default to class ID 4 if none provided
    const {classId,grade,num}=location.state;
    console.log(
        'classId',classId,
        'grade',grade,
        'num',num
    );

    
    //להוסיף קריאה לשם
    // const { classId, discraption } = location.state || {};


    // useEffect(() => {
    //     console.log(`https://localhost:7097/Population/classID?classID=${classId}`);
    //     // axios.get(`https://localhost:7097/Population/classID?classID=${classId}`)
    //     axios.get(`https://localhost:7097/Population/classID?classID=4`)
    //         .then(response => {
    //             console.log('response-data',response.data);
    //             const fetchedSchedule = response.data.map(item => {
    //                 if (item && item.dayAndHouerDTO && item.classToTeacherToSubjectDTO) {
    //                     return {
    //                         key: `${item.dayAndHouerDTO.day}-${item.dayAndHouerDTO.hour}`,
    //                         day: item.dayAndHouerDTO.day - 1,
    //                         hour: item.dayAndHouerDTO.hour + 1,
    //                         teacher: item.classToTeacherToSubjectDTO.teacherID,
    //                         subject: item.classToTeacherToSubjectDTO.subjectID
    //                     };
    //                 }
    //                 return null;
    //             }).filter(item => item !== null);
    //             setSchedule(fetchedSchedule);
    //             console.log('fetchSchedul',fetchedSchedule);
    //         })
    //         .catch(error => console.error('Failed to fetch schedule:', error));
    // }, [classId]);

    const getCellContent = (day, hour) => {
        console.log('day ',day,'hour',hour);
        //const entry = schedule.find(item => item.day === day && item.hour === hour);
        const entry= schedule.find(item => item.day === day && item.hour === hour);
        return entry ? (
            <>
                <div><strong>{`Teacher ID: ${entry.teacher}`}</strong></div>
                <div>{`Subject ID: ${entry.subject}`}</div>
            </>
        ) : null;
        console.log('entry',entry);
    };
    return (
        <div style={styles.pageContainer} className="result-page">
            <h1 style={styles.header}> Class Schedule {grade}  {num}</h1>
            <Link to="/ManagerPage">Back to Manager</Link>
            <table className="schedule-table" style={styles.scheduleTable}>
                <thead>
                    <tr>
                        <th>Hour/Day</th>
                        {daysOfWeek.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {hours.map(hour => (
                        <tr key={hour}>
                            <td>{hour}</td>
                            {daysOfWeek.map(day => (
                                <td key={`${day}-${hour}`}>{getCellContent(day, hour)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultPage;
