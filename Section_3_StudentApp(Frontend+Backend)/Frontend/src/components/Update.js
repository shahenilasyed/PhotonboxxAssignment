import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Update = () => {

  const [localName, setLocalName] = useState('');
  const [localAge, setLocalAge] = useState('');
  const [localAddress, setLocalAddress] = useState('');
  const [localEmail, setLocalEmail] = useState('');
  const [localClassName, setLocalClassName] = useState('');
  const [localSection, setLocalSection] = useState('');
  const [localMobile, setLocalMobile] = useState('');
  const [localRollNumber, setLocalRollNumber] = useState('');

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');
  const [mobile, setMobile] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const student = JSON.parse(localStorage.getItem("student"));

    setLocalEmail(student.email);
    setLocalName(student.name);
    setLocalAge(student.age);
    setLocalAddress(student.address);
    setLocalClassName(student.className);
    setLocalSection(student.section);
    setLocalMobile(student.mobile);
    setLocalRollNumber(student.rollNumber);
  })

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(email);
    console.log(name);
    setEmail(localEmail);
    console.log(email);

    await fetch(`http://localhost:5000/students/updateStudent?email=${localEmail}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, address, className, section, mobile, rollNumber, email }),
    }).then(response => {
      return response.json();
    })
      .then(data => {
        console.log(data);
        navigate("/home");
      })
      .catch((error) => {
        alert("No Student available with this email.")
        console.log(error);
      })
  }


  return (
    <>
      <Navbar />
      <h5 className='mt-3'>Update Student Details</h5>
      <div className="container d-flex justify-content-center align-items-center my-5">
        <form onSubmit>
          <div class="row my-2">
            <div class="col">
              <input defaultValue={localName} onChange={(e) => { setName(e.target.value) }} type="text" class="form-control" placeholder="Name" aria-label="First name" />
            </div>
            <div class="col">
              <input defaultValue={localAge} onChange={(e) => setAge(e.target.value)} type="text" class="form-control" placeholder="Age" aria-label="Last name" />
            </div>
          </div>
          <div class="col">
            <input
              defaultValue={localAddress}
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="col my-2">
            <input
              disabled
              defaultValue={localEmail}
              type="email"
              class="form-control"
              id="colFormLabel"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="row my-3">
            <div class="col">
              <input defaultValue={localClassName} onChange={(e) => setClassName(e.target.value)} type="text" class="form-control" placeholder="Class" aria-label="First name" />
            </div>
            <div class="col">
              <input defaultValue={localSection} onChange={(e) => setSection(e.target.value)} type="text" class="form-control" placeholder="Section" aria-label="Last name" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <input defaultValue={localMobile} onChange={(e) => setMobile(e.target.value)} type="text" class="form-control" placeholder="Mobile" aria-label="First name" />
            </div>
            <div class="col">
              <input defaultValue={localRollNumber} onChange={(e) => setRollNumber(e.target.value)} type="text" class="form-control" placeholder="Roll no." aria-label="Last name" />
            </div>
          </div>
          <div className="text-center my-5">
            <button onClick={handleSubmit} type="button" class="btn btn-outline-dark">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Update
