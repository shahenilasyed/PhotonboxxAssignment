import { useState, React } from "react";

import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import "../Form.css";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = async (e) => {
    console.log("dddd");
    // navigate("/Navbar");
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
        .then(reponse => {
          return reponse.json();
        })
        .then(data => {
          console.log(data);
          localStorage.setItem("email", data.email);
          navigate("/Home");
        }).catch((error) => {
          alert("No User Found");
          console.log(error)
        });

      // console.log(user);
      // if(user){
      //   localStorage.setItem("email",user.email);
      //   // navigate("/Home");
      // }else{
      //   alert("No User Found");
      // }
    } catch (es) {
      console.log(es)
    }
  };

  return (
    <div>
      <div className="image my-5">
        <i class="fa-solid fa-arrow-right-to-bracket fa-2xl"></i>
        <h4>Sign in</h4>
      </div>
      <div className="main">
        <div class="login">
          <form class="needs-validation" onSubmit={handleSubmit}>
            <div class="form-group was-validated">
              <label class="form-label" for="email">
                Email address
              </label>
              <input class="form-control" type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
              <div class="invalid-feedback">
                Please enter your email address
              </div>
            </div>
            <div class="form-group was-validated">
              <label class="form-label" for="password">
                Password
              </label>
              <input
                class="form-control"
                type="password"
                id="password"
                onChange={(e) => { setPassword(e.target.value) }}
                required
              />
              <div class="invalid-feedback">Please enter your password</div>
            </div>
            <div class="form-group form-check">
              <input class="form-check-input" type="checkbox" id="check" />
              <label class="form-check-label" for="check">
                Remember me
              </label>
            </div>

            <input
              class="btn btn-primary w-100"
              type="submit"
              value="SIGN IN"
            />
          </form>
        </div>
      </div>

      <div className="text-center my-5 mx-5">
        <button type="button" class="btn btn-link">
          Forget password
        </button>
        <button type="button" class="btn btn-link">
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
};

export default Form;
