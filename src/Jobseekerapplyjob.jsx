import React from 'react'
import "./Global.css"
import {Link} from 'react-router-dom'
import Jobseekernavigation from './Jobseekernavigation'
function Jobseekerapplyjob() {
  return (
    <div>
      <Jobseekernavigation />
      <main>
        <div className="flex row ai-fs">
          <div className="flex col">
            <input className='input-white' id="enterName" type="text" placeholder='Enter Your Name'/>
            <input className='input-white' id="enterPhoneNumber" type="number" placeholder='Enter Your number'/>
            <input className='input-white' id="enterYearOfExperience" type="number" placeholder='Enter the year of experience'/>
          </div>
          <div className="flex col">
            <input className='input-white' id="enterAddress" type="text" placeholder='Enter you Address'/>
            <input className='input-white' id="enterEmail" type="email" placeholder='Enter your email'/>
            <button id='applyButton'>Apply Job</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Jobseekerapplyjob