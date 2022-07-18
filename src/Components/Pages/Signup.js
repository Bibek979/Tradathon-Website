import "./Signup.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
// import LiveAlert from "../Components/Components__SignUp/LiveAlert";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Form} from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function SignUpForm() {
  const navigate = useNavigate();
  // const [displayAlert, setDisplayAlert] = useState("false");
  // const [allRecords, setAllRecords] = useState([]);
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: ""
  });

  function onChangeHandler(e) {
    const nameOfElem = e.target.name;
    const value = e.target.value;
    setState({ ...state, [nameOfElem]: value });
    console.log(nameOfElem+": "+value)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setState({...state, email: email.toLowerCase()});
    const {firstname, lastname, email, password, confpassword} = state;
    console.log(firstname+" "+lastname+" "+email+" "+password+" "+confpassword)
<<<<<<< HEAD:src/Components/Pages/Signup.js
    if (firstname && lastname && email && (password === confpassword)) {
=======
    if (firstname && lastname && email) {
>>>>>>> e3cb32e138c5ea8dbb93e6b8903c2c4eb71cf1ed:src/Pages/Signup.js
      axios.post("http://localhost:5500/registration", state)
      .then( res => alert(res.data.message))
      .then( () => navigate("/login"))
      console.log("Signed Up successfully !");
    } else {
      console.log("There is error in input");
      alert("Validate the input field ");
    }
  };

  const resetAll = () => {
    setState({firstname: ""});
    setState({lastname: ""});
    setState({email: ""});
    setState({password: ""});
    setState({confpassword: ""});
  }

  // function validateForm() {
  //   const {fname, lname, email, pwd, confpwd} = state;
  //   if(fname && lname && email && (pwd === confpwd))
  //     return true;
  //   else
  //     return false;
  // };

  return (
    <div className="container-sm container-md container-lg my-5 py-3 shadow-lg p-3 mb-5 bg-body rounded signup-container">
      <h1 className="mb-4 text-center">Registration Form</h1>
      <Form onSubmit={handleSubmit} className="w-2">
        <Form.Group className="mb-3 text-center fs-6" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Johnny" name="firstname" value={state.firstname} onChange={onChangeHandler}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 text-center fs-6"  controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Sins" name="lastname" value={state.lastname} onChange={onChangeHandler}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 text-center fs-6" controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Johnnysins69@yahoo.com" name="email" value={state.email} onChange={onChangeHandler}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 text-center fs-6" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="***********" name="password" value={state.password} onChange={onChangeHandler}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 text-center fs-6" controlId="formConfPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="***********" name="confpassword" value={state.confpassword} onChange={onChangeHandler}></Form.Control>
        </Form.Group>

        <div className="d-flex justify-content-around pt-3">
          <Button variant="primary" type="submit">Register Me !</Button>
          <Button variant="primary" type="reset" onClick={resetAll}>Reset</Button>
          <Button variant="primary" onClick={()=>navigate("/login")}>Back to Login</Button>
        </div>
      </Form>
    </div>
  );
}
