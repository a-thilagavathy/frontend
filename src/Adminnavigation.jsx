import React from 'react'
import { Link } from 'react-router-dom'
import "./Global.css"
function Adminnavigation() {
  return (
    <div>
      <header className='bg-dark-blue row'>
        <div className="flex row">
          <div className="flex row">
            <div  className='m-10'>
              <Link id='AdminOpenings' to="/jobseeker/appliedJob">
                Openings
              </Link>
            </div>
            <div  className='m-10'>
              <Link id='AdminCandidates' to="/jobseeker/appliedJob">
                Candidates
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

export default Adminnavigation