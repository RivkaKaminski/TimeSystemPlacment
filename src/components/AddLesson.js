import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
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

const AddLessonPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [classes, setClasses] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState(null);
  const [subject, setSubject] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState();
  const [amount, setAmount] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7097/TeacherController/getTeachersArray')
      .then(response => {
        const teacherOptions = response.data.map(teacher => ({
          value: teacher.teacherId,
          label: `${teacher.teacherName} ${teacher.teacherFamily}`
        }));
        setTeachers(teacherOptions);
      })
      .catch(error => console.error('Error fetching teachers:', error));
  }, []);

  useEffect(() => {
    axios.get('https://localhost:7097/Class/GetClass')
      .then(response => {
        const classesOptions = response.data.map(classes => ({
          value: classes.classID,
          label: `${classes.grade} ${classes.numClass}`
        }));
        setClasses(classesOptions);
      })
      .catch(error => console.error('Error fetching classes:', error));
  }, []);

  useEffect(() => {
    axios.get('https://localhost:7097/Subject/getsubjectArray')
      .then(response => {
        const subjectsOptions = response.data.map(subjects => ({
          value: subjects.subjectId,
          label: `${subjects.nameSubject} `
        }));
        setSubject(subjectsOptions);
      })
      .catch(error => console.error('Error fetching subjects:', error));
  }, []);

  const handleSelectTeacher = (selectedOption) => {
    setSelectedTeacher(selectedOption);
    console.log('Selected teacher:', selectedOption);
  };

  const handleSelectedClasses = (selectedOption) => {
    setSelectedClasses(selectedOption);
    console.log('Selected classes:', selectedOption);
  };

  const handleSelectedSubject = (selectedOption) => {
    setSelectedSubject(selectedOption);
    console.log('Selected subjects:', selectedOption);
  };

  const handleSelectedAmount = (selectedOption) => {
    setSelectedAmount(selectedOption);
    console.log('Selected Amount:', selectedOption);
  };
  const handleSubmitLesson = (e) => {
    // console.log();
    e.preventDefault();
    const data = {    
          "teacherID": teachers.teacherID,
          "subjectID": subject.subjectID,
          "classID": classes.classID,
          "houersToWeek": 1    
    }
    // console.log(`Preferred: Day ${day}, Hour ${hour}, Level ${level}`);
    console.log(data);
    axios.post('https://localhost:7097/ClassToTeacherToSubject/AddClassToTeacherToSubjectStore', data)
      .then((res) => {
        console.log('res-data', res.data)
      })
      .catch((error)=>{
        console.error(error);
      })
    
  };
  const handleSubmitSubject = (e) => {
    e.preventDefault();
    const data = {
        "nameSubject": subjectName
    };
    console.log(data);
    axios.post('https://localhost:7097/Subject/AddSubject', data)
      .then((res) => {
          console.log('res-data', res.data);
      })
      .catch((error) => {
          console.error(error);
      });
};


  return (
    <div style={styles.pageContainer} className="add-lesson-container">
<h1>Add Lesson</h1>
<form onSubmit={handleSubmitLesson}>
  <Select
    options={teachers}
    value={selectedTeacher}
    onChange={handleSelectTeacher}
    placeholder="Select a teacher"
  />
  <Select
    options={classes}
    value={selectedClasses}
    onChange={handleSelectedClasses}
    placeholder="Select a Class"
  />
  <Select
    options={subject}
    value={selectedSubject}
    onChange={handleSelectedSubject}
    placeholder="Select a subject"
  />
  <Select
    options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }]}
    value={selectedAmount}
    onChange={handleSelectedAmount}
    placeholder="Select amount of lessons"
  />
  <button type="submit" style={styles.button}>Add Lesson</button>
</form>
<input name='subjectName' type="text" placeholder="Subject Name" required />
<button style={styles.button} onClick={handleSubmitSubject} type="button">Add Subject</button>
<Link to="/ManagerPage">Back to Manager</Link>
    </div>
  );
};

export default AddLessonPage;
