import './formStyle.css';
import React, {useState, ReactDOM} from "react";
import Submit from './submit';

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    if(submitted)
    return(
        <div>
            <h1>Thank you</h1>
            <h3>will catch up !</h3>
        </div>
    )

    else{
        return(
            <form>
                <label typeof='text'>Name</label>
                <input className='text' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'></input>
                <label typeof='text'>E-mail</label>
                <input className='text' type='text' value='' placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='button' type='submit' value='submit' onClick={(e) => setSubmitted(true)}></input>
            </form>
        )
    }
}


