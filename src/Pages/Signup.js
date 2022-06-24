import React, { useState } from "react";
import "./Signup.css";
import LiveAlert from "../Components/Components__SignUp/LiveAlert";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


export default function SignUpForm() {
  let errorStorVar = ""; //To store the error causing value
  const [displayAlert, setDisplayAlert] = useState("false");
  const [confpwd, setConfpwd] = useState("");
  const [allRecords, setAllRecords] = useState([]);
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function onChangeHandler(e) {
    const nameOfElem = e.target.name;
    const value = e.target.value;
    setState({ ...state, [nameOfElem]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecord = { ...state, id: new Date().getTime().toString() };
      setAllRecords([...allRecords, newRecord]);
      setDisplayAlert("false");
      console.log("Signed Up successfully !");
    } else {
      console.log("There is error in input --->" + errorStorVar);
      setDisplayAlert("true");
    }

    let databody = {
      "fname": state.firstname,
      "lname": state.lastname,
      "email": state.email, 
      "password": state.password
    }

    return fetch('http://localhost:5500/registered', {
      method: 'post',
      body: JSON.stringify(databody),
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((e)=>console.log("some error"+e));
  };

  const validateForm = () => {
    if (state.firstname === "") {
      errorStorVar = "firstname";
      return false;
    } else if (state.lastname === "") {
      errorStorVar = "lastname";
      return false;
    } else if (state.email === "") {
      errorStorVar = "email";
      return false;
    } else if (state.password === confpwd) {
      errorStorVar = "password";
      return false;
    }
    return true;
  };

  return (
    <div className="container-fluid">
      {/* The text here has been deactivated because the data can be clearly 
        seen on screen when not commented. */}
      {/* <div>
            {
                allRecords.map((curElem) => {
                    return(
                        <div key={curElem.id}>
                            <p>
                                {curElem.firstname}<br></br>
                                {curElem.lastname}<br></br>
                                {curElem.email}<br></br>
                                {curElem.password}<br></br>
                            </p>
                    </div>
                    )
                })
            }
        </div> */}

      <form className="customFormStyle mb-5" onSubmit={handleSubmit}>
        <div className="row text-justify">
          <h1 className="col-12 text-center width-5 pb-5">Registration</h1>
          <label className="col-5 offset-1 text-center text-black">
            First Name
          </label>
          <label className="col-5 offset-1 text-center text-black">
            Last Name
          </label>
        </div>
        <div className="row mb-4">
          <input
            id="firstname"
            name="firstname"
            type="text"
            className="col-sm-5 offset-1"
            placeholder="John"
            value={state.firstname}
            onChange={onChangeHandler}
          ></input>
          <input
            id="lastname"
            name="lastname"
            type="text"
            className="col-sm-5 offset-1"
            placeholder="Doe"
            value={state.lastname}
            onChange={onChangeHandler}
          ></input>
        </div>

        <div className="row justify-content-md-center mb-4">
          <div className="col-sm-6 text-center">
            <label className="text-black">email</label>
          </div>
          <div className="col-sm-6">
            <input
              id="email"
              name="email"
              className="col-12"
              type="email"
              placeholder="yourmail@mail.com"
              value={state.email}
              onChange={onChangeHandler}
            ></input>
          </div>
        </div>

        <div className="row text-justify">
          <label className="col-5 offset-1 text-center text-black">
            New Password
          </label>
          <label className="col-5 offset-1 text-center text-black">
            Confirm New Password
          </label>
        </div>

        <div className="row mb-4">
          <input
            id="password"
            name="password"
            type="password"
            className="col-sm-5 offset-1"
            placeholder=""
            value={state.password}
            onChange={onChangeHandler}
          ></input>
          <input
            name="password"
            type="password"
            className="col-sm-5 offset-1"
            onChange={(e) => {
              setConfpwd(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>

      <LiveAlert setDisplay={displayAlert} errorIn={errorStorVar} />
    </div>
  );
}
