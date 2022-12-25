import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');
  const [mobile, setMobile] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    await fetch('http://localhost:5000/students/addStudent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, address, className, section, mobile, rollNumber, email }),
    }).then(response => {
      return response.json();
    })
      .then(data => {
        if (data) {
          alert("Student Already Exist.")
        }
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        navigate("/Home");
      });
  }

  return (

    <>
      <Navbar />
      <div className="my-5">
        <h5>Add Student Details</h5>
        <div className="container d-flex justify-content-center align-items-center my-5">

          <form>
            <div class="row my-2">
              <div class="col">
                <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Name" aria-label="First name" />
              </div>
              <div class="col">
                <input onChange={(e) => setAge(e.target.value)} type="text" class="form-control" placeholder="Age" aria-label="Last name" />
              </div>
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="col my-2">
              <input
                type="email"
                class="form-control"
                id="colFormLabel"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="row my-3">
              <div class="col">
                <input onChange={(e) => setClassName(e.target.value)} type="text" class="form-control" placeholder="Class" aria-label="First name" />
              </div>
              <div class="col">
                <input onChange={(e) => setSection(e.target.value)} type="text" class="form-control" placeholder="Section" aria-label="Last name" />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <input onChange={(e) => setMobile(e.target.value)} type="text" class="form-control" placeholder="Mobile" aria-label="First name" />
              </div>
              <div class="col">
                <input onChange={(e) => setRollNumber(e.target.value)} type="text" class="form-control" placeholder="Roll no." aria-label="Last name" />
              </div>
            </div>
            <div className="text-center my-5">
              <button type="button" class="btn btn-outline-dark" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
