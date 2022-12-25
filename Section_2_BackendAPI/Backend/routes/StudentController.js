
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
    res.send('Duplicate Student.');
  } else {
    students.push(req.body);
    res.send('Student added successfully');
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
  const updatedStudent = req.body;
  const index = students.findIndex(s => s.email === email);
  if (index !== -1) {
    students[index] = updatedStudent;
    res.send('Student updated successfully');
  } else {
    res.send('Student not found');
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