import React from 'react'
import { Link } from "react-router-dom";
import "./Global.css"
function Auth() {
  return (
    <div className='flex h-100'>
        <Link to="/user/signup">Signup</Link>
        <Link to="/user/login">Login</Link>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Auth