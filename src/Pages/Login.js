import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";
export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) =>{
    const elemName = e.target.name;
    const value = e.target.value;
    setLoginData({...loginData, [elemName]: value});
  }
  
  function handleSubmitAction(e) {
    e.preventDefault();
    const {email, password} = loginData;
    if(email && password)
    {
      axios.post("http://localhost:5500/login", loginData)
      .then( res => {
        if(res.data.status === 0){
          alert(res.data.message);
          navigate("/userdashboard");
        }
        else if( res.data.status === 1){
          alert(res.data.message)
        }
        else{
          alert(res.data.message);
        }
      })
      
    }
    else{
      alert("Credentials Missing");
    }
  }


  return (
    <div className="container rounded w-25 bg-secondary bg-gradient">
      <h3 className="card-title text-center pt-4 text-white">Login</h3>
      <form className="form" onSubmit={handleSubmitAction}>
        <div className="d-flex p-3 flex-column">
          <label className="text-center p-2 text-white">E-Mail/User</label>
          <input
            type="email"
            name="email"
            id="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="email@email-provider.com"
          ></input>
        </div>

        <div className="d-flex p-3 flex-column">
          <label className="text-center p-2 text-white">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            id="password"
            onChange={handleChange}
            placeholder="**********"
          ></input>
        </div>
        <div className="d-flex p-3 flex-column">
          <Button variant="primary" type="submit" className="m-2">Login</Button>
          <Link to="/signup" className="text-white text-right">
            New User ?
          </Link>
          <Link to="/forgotpwd" className="text-white text-right">
            Forgot Password ?
          </Link>
        </div>
      </form>

      {/* <div className="container bg-primary">
        {
            data.map((curElem) =>{
                return(
                    <div>
                        <p> {curElem.email}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })
        }
      </div> */}

    </div>
  );
}
