import React from "react";
import './stylesheet.css';

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
            <h3 className="text-center fPwdTitle">Forgot Password</h3>
            <form onSubmit={handleForgetPwd}>
                <div className="d-flex flex-column">
                    <label className="text-white pt-3 pb-1">email</label>
                    <input type='email' className="labelColor p-0 border-0" placeholder="yourmail@mail.com" ></input>
                    <label className="text-white otpLabel pt-3 pb-1">OTP</label>
                    <input type='number' className="labelColor p-0 border-0 otp" ></input>
                    <label className="text-white pt-3 pb-1">New Password</label>
                    <input type='password' className="labelColor p-0 border-0" ></input>
                    <label className="text-white pt-3 pb-1">Confirm New Password</label>
                    <input type='password' className="labelColor p-0 border-0" ></input>
                    <button type="submit" className='m-4' onClick={handleChangePwd}>Change Password</button>
                </div>
            </form>
        </div>
    )
}