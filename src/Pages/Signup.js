import React from 'react';
import './Signup.css';
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function SignUpForm() {
    // const [state, setState] = useState({
    //     firstName:"",
    //     lastName:"",
    //     phone:"",
    //     email:"",
    //     password:""
    // });
const handleSubmit = (e) =>{
    e.preventDefault();
    // const newRegData = {...state};
    console.log("newRegData");
}
const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    // setState({...state, [name]:value})
}

    return(
        <div className='container-fluid'>

            <form className='customFormStyle mb-5' onSubmit={handleSubmit}>
                <div className="row text-justify">
                    <h1 className='col-12 text-center width-5 pb-5'>Registration</h1>
                    <label className='col-5 offset-1 text-center text-black'>First Name</label>
                    <label className='col-5 offset-1 text-center text-black'>Last Name</label>
                </div>
                <div className='row mb-4'>
                    <input type='text' className='col-sm-5 offset-1' placeholder='John'></input>
                    <input type='text' className='col-sm-5 offset-1' placeholder='Doe'></input>
                </div>

                <div className='row justify-content-md-center mb-4' >
                    <div className='col-sm-6 text-center'><label className='text-black'>email</label></div>
                    <div className='col-sm-6'><input className='col-12' type='email' placeholder='yourmail@mail.com'></input></div>
                </div>

                <div className="row text-justify">
                    <label className='col-5 offset-1 text-center text-black'>New Password</label>
                    <label className='col-5 offset-1 text-center text-black'>Confirm New Password</label>
                </div>

                <div className='row mb-4'>
                    <input type='password' className='col-sm-5 offset-1' placeholder=''></input>
                    <input type='password' className='col-sm-5 offset-1' placeholder=''></input>
                </div>

                <div className='align-self-center'>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}