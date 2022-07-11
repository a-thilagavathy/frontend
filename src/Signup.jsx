import React from 'react'
import "./Global.css"
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className='flex'>
      <header className='header bg-black flex'>
        Register
      </header>
      <main className='flex black-border'>
        <select className='black-border' name="cars" id="cars">
        <option value="">Enter admin/user/ jobseeker</option>
          <option id='admin' value="admin">admin</option>
          <option id='user' value="user">user</option>
          <option id='jobseeker' value="jobseeker">jobseeker</option>
        </select>
        <input className='black-border' id='email' type="email" placeholder='Enter email'/>
        <input className='black-border' id='username' type="text" placeholder='Enter Username'/>
        <input className='black-border' id='mobileNumber' type="number" placeholder='Enter Mobilenumber'/>
        <input className='black-border' id='password' type="password" placeholder='Password'/>
        <input className='black-border' id='confirmPassword' type="password" placeholder='Confrim Password' />
        <button id='submitButton' className='signup-button '>
        Submit
      </button>
      <p>Already a user?<Link id='signinLink' to="/user/login">Login</Link></p> 
      </main>
    </div>
  )
}

export default Signup