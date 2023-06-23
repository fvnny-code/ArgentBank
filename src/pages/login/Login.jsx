import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';

export default function Login() {

// Initial State
let [loginError, setLoginError] = useState("");
let [loginStatus, setLoginStatus]= useState(0);

let [email, setEmail] = useState("");
let [password, setPassword] = useState("");



function handleAuthentication(){
  
}


  return (
  <main className="main bg-dark">
    <section className="sign-in-content">
    <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon"/>
    <h1>Sign In</h1>
    <form>
        <div className="input-wrapper">
            <label htmlFor="usernamne">Username</label>
            <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
        </div>

        <a className="sign-in-button" onClick={handleAuthentication()}>Sign In</a>
    </form>

    </section>

  </main>
  );
}
