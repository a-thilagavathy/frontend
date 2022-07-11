import React from 'react'
import Jobseekernavigation from './Jobseekernavigation'
import "./Global.css"
import {Link} from 'react-router-dom'
const placeholderList = [
  {
      jobDescription : "Electricial",
      wagePerDay : 1000,
      fromDate : "2020-01-01",
      toDate : "2020-01-01",
      jobLocation : "Bangalore",
      phoneNumber : "1234567890",
      isApplied : true,
  },
  {
      jobDescription : "Electricial",
      wagePerDay : 1000,
      fromDate : "2020-01-01",
      toDate : "2020-01-01",
      jobLocation : "Bangalore",
      phoneNumber : "1234567890",
      isApplied : false,
  },
  {
      jobDescription : "Electricial",
      wagePerDay : 1000,
      fromDate : "2020-01-01",
      toDate : "2020-01-01",
      jobLocation : "Bangalore",
      phoneNumber : "1234567890",
      isApplied : true,
  },
]
function Jobappliedjob() {
  return (
    <div>
        <Jobseekernavigation />
        <main className='container'>
        <div className="flex ">
                        {
                            placeholderList.map((item, index) => (
                                <div className='card card-applied flex row black-border' id={`appliedGrid${index+1}`}>
                                    <div className="left-card col">
                                        <p>Job Description :  {item.jobDescription}</p>
                                        <p>From Date : {item.fromDate}</p>
                                        <p>Job Location : {item.jobLocation}</p>
                                    </div>
                                    <div className="right-card col">
                                    <p>Wage per day :  {item.wagePerDay}</p>
                                        <p>To Date : {item.toDate}</p>
                                        <p>Phone Number : {item.phoneNumber}</p>
                                    </div>
                                    <div>
                                        {item.isApplied ? <p className="applied">Applied</p> : <p p className="completed">Completed</p>}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
        </main>
    </div>
  )
}

export default Jobappliedjob










































































