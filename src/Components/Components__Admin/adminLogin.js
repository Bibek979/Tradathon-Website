import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Login from '../Pages/Login';
import './styles.css';
import axios from "axios";
const AdminLogin = () => {
  const [ adminData, setAdminData ] = useState({
    email: "",
    password: ""
  });
  const login = () => {
    axios.post("http://localhost:5500/adminlogin", adminData)
      .then( res => {
        if(res.data.status === 0) {
          var name = res.data.user.name;
          alert(res.data.message);
          // setUserLogin(true);
          // console.log(state);
          // navigate("/userdashboard", {replace: true, state:{currName: name}});
        }
        else if( res.data.status === 1){
          alert(res.data.message)
        }
        else{
          alert(res.data.message);
        }
      })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if( adminData.email && adminData.password){
      login();
      console.log(adminData.email);
      console.log(adminData.password);
    }
    else {
      console.log("Credentials Missing");
    }
  }

  const inputHandler = (e) => {
    const elemName = e.target.type;
    const value = e.target.value;
    setAdminData({...adminData, [elemName]: value});

  }
  return (
    <div className='adminMainDiv'>
      <h2 className='adminLogin text-center my-4 fw-bolder'>Administrator Login</h2>
        <Form className='w-25 m-auto'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='fw-bold'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={inputHandler}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fw-bold'>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={inputHandler}/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <div className='d-flex justify-content-center'>
          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
          </div>
        </Form>
    </div>
  )
}

export default AdminLogin;