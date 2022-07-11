import React from 'react'
import "./Global.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
      <header className='header bg-black flex'>
        Login
      </header>
      <main className='flex black-border'>
        <input className='black-border' id='email' type="email" placeholder='Enter email'/>
        <input className='black-border' id='password' type="password" placeholder='Password'/>
        <button id='loginButton' className='signup-button '>
        Login
      </button>
      <p>New User/admin?<Link id='signupLink' to="/user/signup">Sign Up</Link></p> 
      </main>
    </div>
  )
}

export default Login