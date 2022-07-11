import React from 'react'
import Customernavigation from './Customernavigation'
import "./Global.css"
function Customeraddjob() {
  return (
    <div>
      <Customernavigation />
      <main>
        <div className="flex row ai-fs">
          <div className="flex col">
            <input className='input-white' id="enterJobDesription" type="text" placeholder='Enter the Job Description'/>
            <input className='input-white' id="enterFromDate" type="date" placeholder='Enter the From date'/>
            <input className='input-white' id="enterWageForDay" type="number" placeholder='Enter wage for day'/>
          </div>
          <div className="flex col">
            <input className='input-white' id="enterJobLocation" type="text" placeholder='Enter the Job Location'/>
            <input className='input-white' id="enterToDate" type="date" placeholder='Enter the To date'/>
            <input className='input-white' id="enterPhoneNumber" type="text" placeholder='Enter the Phone Number'/>
            <button id='addJobButton'>Add Job</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Customeraddjob