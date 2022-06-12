import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
  // To store the values of email and password by the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //To store the final values of Email and password we use another useState with array initialization
  const [data, setData] = useState([]);

  function handleSubmitAction(e) {
    e.preventDefault();
    //Adding this line to add both the info to this array object
    //Have to make key:value pair to store in (datauseState)
    const toArray = { email: email, password: password };
    setData([...data, toArray]);
    console.log(data);
    console.log(email, password);
  }


  return (
    <div className="container w-25 bg-secondary bg-gradient">
      <h3 className="card-title text-center pt-4 text-white">Login</h3>
      <form className="form" onSubmit={handleSubmitAction}>
        <div className="d-flex p-3 flex-column">
          <label className="text-center p-2 text-white">email/user</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email-provider.com"
          ></input>
        </div>

        <div className="d-flex p-3 flex-column">
          <label className="text-center p-2 text-white">password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
          ></input>
        </div>
        <div className="d-flex p-3 flex-column">
          <button className="m-2">Login</button>
          <Link to="/forgotpwd" className="text-white text-right">
            forgot password ?
          </Link>
        </div>
      </form>

        //This section here merely justs displays the output on loginform

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
