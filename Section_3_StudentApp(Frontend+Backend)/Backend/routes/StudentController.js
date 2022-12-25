
const express = require('express');
const router = express.Router();

// In-memory storage for simplicity
const students = [];

// Add a student
router.post('/addStudent', (req, res) => {
  const student = req.body;
  console.log(students);
  const studentDuplicate = students.find(s => s.email === student.email);

  if(studentDuplicate) {
    res.send(studentDuplicate);
  } else {
    students.push(req.body);
    res.send(studentDuplicate);
  }
});

// Get a student by email
router.get('/getStudent', (req, res) => {
  const email = req.query.email;
  console.log(req.query)
  console.log(email)

  const student = students.find(s => s.email === email);
  if (student) {
    res.send(student);
  } else {
    res.send('Student not found');
  }
});

// Update a student by email
router.put('/updateStudent', (req, res) => {
  const email = req.query.email;
  console.log(email);
  const updatedStudent = req.body;
  const index = students.findIndex(s => s.email === email);
  console.log(index);
  if (index !== -1) {
    const s = students[index];
    console.log(updatedStudent);
    if(s.name != updatedStudent.name && updatedStudent.name != '') {
      s.name = updatedStudent.name;
    }

    if(s.age != updatedStudent.age && updatedStudent.age != '') {
      s.age = updatedStudent.age; 
    }

    if(s.address != updatedStudent.address && updatedStudent.address != '') {
        s.address = updatedStudent.address;
    }

    if(s.className != updatedStudent.className && updatedStudent.className != '') {
        s.className = updatedStudent.className;
    }

    if(s.section != updatedStudent.section && updatedStudent.section != '') {
        s.section = updatedStudent.section;
    }

    if(s.rollNumber != updatedStudent.rollNumber && updatedStudent.rollNumber != '') {
      s.rollNumber = updatedStudent.rollNumber
    }

    if(s.mobile != updatedStudent.mobile && updatedStudent.mobile != '') {
      s.mobile = updatedStudent.mobile; 
    }
    students[index] = s;
    res.send(students[index]);
  } else {
    res.send(null);
  }
});

// Delete a student by email
router.delete('/deleteStudent', (req, res) => {
  const email = req.query.email;
  const index = students.findIndex(s => s.email === email);
  if (index !== -1) {
    students.splice(index, 1);
    res.send('Student deleted successfully');
  } else {
    res.send('Student not found');
  }
});

// Get list of students
router.get('/getAllStudents', (req, res) => {
  res.send(students);
});

module.exports = router;