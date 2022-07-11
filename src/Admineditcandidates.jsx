import React from 'react'
import Adminnavigation from './Adminnavigation'
import "./Global.css"
function Admineditcandidates() {
  return (
    <div>
      <Adminnavigation />
      <main>
        <div className="flex row ai-fs">
          <div className="flex col">
            <input className='input-white' id="editName" type="text" placeholder='Enter Your Name'/>
            <input className='input-white' id="editPhoneNumber" type="number" placeholder='Enter Your number'/>
            <input className='input-white' id="editYearOfExperience" type="number" placeholder='Enter the year of experience'/>
          </div>
          <div className="flex col">
            <input className='input-white' id="editAddress" type="text" placeholder='Enter you Address'/>
            <input className='input-white' id="editEmail" type="email" placeholder='Enter your email'/>
            <button id='updateButton'>Update</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admineditcandidates