import React from 'react'
import { Link } from 'react-router-dom'
import "./Global.css"
function Customernavigation() {
  return (
    <div>
  <header className='bg-blue row'>
        <div className="flex row">
          <div className="flex row">
            <div  className='m-10'>
              <Link id='customerHomeButton' to="/">
                Home
              </Link>
            </div>
            <div  className='m-10'>
              <Link id='addOpenings' to="/jobseeker/appliedJob">
                Add Openings
              </Link>
            </div>
            <div  className='m-10'>
              <Link id='appliedCandidates' to="/jobseeker/appliedJob">
                Applied Candidates
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

export default Customernavigation