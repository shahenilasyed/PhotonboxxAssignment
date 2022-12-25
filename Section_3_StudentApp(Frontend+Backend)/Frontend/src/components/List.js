import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {

  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const fetchData = () => {
    fetch("http://localhost:5000/students/getAllStudents")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setStudents(data)
        console.log(data);
      })
  }


  useEffect(() => {
    fetchData()
  }, [])

  const updateDetails = (student) => {
    console.log(student);
    localStorage.setItem("student", JSON.stringify(student));
    navigate("/Update");
  };

  const deleteStudent = (email) => {
    console.log(email)
    fetch(`http://localhost:5000/students/deleteStudent?email=${email}`, {
      method: 'DELETE'
    })
      .then(data => {
        fetchData();
        console.log(students);
      })
  }

  return (
    <div>

      <table className="table my-5  ">
        <thead>
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th scope="col">Roll No.</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>

          {students.map(student => (<tr key={student.email}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.className}</td>
            <td>{student.section}</td>
            <td>{student.rollNumber}</td>
            <td>{student.address}</td>
            <td>{student.mobile}</td>
            <td>{student.email}</td>
            <td><button className="btn btn-outline-primary mx-2" onClick={() => updateDetails(student)}><i class="fa-solid fa-pen-to-square"></i></button></td>
            <td onClick={() => deleteStudent(student.email)}><button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default List
