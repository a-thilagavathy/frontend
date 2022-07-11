import React from 'react'
import { Link } from 'react-router-dom'
import "./Global.css"
function Jobseekernavigation() {
  return (
    <div>
      <header className='bg-green row'>
        <div className="flex row">
          <div className="flex row">
            <div  className='m-10'>
              <Link id='userHomeButton' to="/">
                Home
              </Link>
            </div>
            <div  className='m-10'>
              <Link id='userAppliedJobs' to="/jobseeker/appliedJob">
                Applied Jobs
              </Link>
            </div>
          </div>
          <div  className='fix-right'>
            <Link id='logout' to="/">Logout</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Jobseekernavigation