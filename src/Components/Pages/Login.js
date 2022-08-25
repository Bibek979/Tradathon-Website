import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IsLoggedIn } from "../../Helper/Context";
import axios from "axios";

export default function Login() {
  const { setUserLogin } = useContext(IsLoggedIn);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const login = () => {
    axios.post("http://localhost:5500/login", loginData)
      .then( res => {
        if(res.data.status === 0) {
          var name = res.data.user.name;
          alert(res.data.message);
          setUserLogin(true);
          console.log(state);
          navigate("/userdashboard", {replace: true, state:{currName: name}});
        }
        else if( res.data.status === 1){
          alert(res.data.message)
        }
        else{
          alert(res.data.message);
        }
      })
  }

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
      login();
    }
    else{
      alert("Credentials Missing");
    }
  }

  // if(userLogin);
  // {
  //   login();
  // }

  return (
    <div className="container rounded w-25 signin-container shadow-lg p-3 my-5 bg-body rounded">
      <h3 className="card-title text-center pt-4 text-dark font-weight-bold">Login</h3>
      <form className="form" onSubmit={handleSubmitAction}>
        <div className="d-flex p-3 flex-column">
          <label className="text-center p-2 text-dark">E-Mail/User</label>
          <input
            type="email"
            name="email"
            id="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="email@email-provider.com"
            style={{border: "none", borderRadius: "10px", padding: "4px"}}
          ></input>
        </div>

        <div className="d-flex p-3 flex-column">
          <label className="text-center p-2 text-dark">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            id="password"
            onChange={handleChange}
            placeholder="**********"
            style={{border: "none", borderRadius: "10px", padding: "4px"}}
          ></input>
        </div>
        <div className="d-flex p-3 flex-column">
          <Button variant="primary" type="submit" className="m-2">Login</Button>
          <Link to="/signup" className="text-dark text-right">
            New User ?
          </Link>
          <Link to="/forgotpwd" className="text-dark text-right">
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
