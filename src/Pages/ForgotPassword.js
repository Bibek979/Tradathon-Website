import React from "react";
import { Link } from "react-router-dom";


export default function ForgotPassword() {
    function handleChangePwd(e){
        e.preventDefault();
        document.getElementsByClassName('fPwdTitle').setInnerHTML='done';
    }

    function handleForgetPwd(){
        return(
            <h1>Hello</h1>
        )
    }
    return(
        <div className="container rounded w-25 my-4 bg-secondary bg-gradient">
            <h3 className="text-center fPwdTitle pt-3">Forgot Password</h3>
            <form onSubmit={handleForgetPwd}>
                <div className="d-flex flex-column">
                    <label className="text-white pt-3 pb-1 text-center">email</label>
                    <input type='email' className="labelColor p-0 border-0 w-auto" placeholder="yourmail@mail.com" ></input>
                    <label className="text-white otpLabel pt-3 pb-1">OTP</label>
                    <input type='number' className="labelColor p-0 border-0 otp" ></input>
                    <label className="text-white pt-3 pb-1 text-center">New Password</label>
                    <input type='password' className="labelColor p-0 border-0 w-auto" ></input>
                    <label className="text-white pt-3 pb-1 text-center">Confirm New Password</label>
                    <input type='password' className="labelColor p-0 border-0 w-auto" ></input>
                    <button type="submit" className='m-4' onClick={handleChangePwd}>Change Password</button>
                    <Link to='/login' className="text-right text-light">Back to login</Link>
                </div>
            </form>
        </div>
    )
}