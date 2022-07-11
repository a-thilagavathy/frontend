import React from 'react'
import Adminnavigation from './Adminnavigation'
import "./Global.css"

const deleteimgURL = "data:image/png;base64,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"
const editimgURL = "data:image/png;base64,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"
const placeholderList = [
    {
        jobDescription: "Electricial",
        wagePerDay: 1000,
        fromDate: "2020-01-01",
        toDate: "2020-01-01",
        jobLocation: "Bangalore",
        phoneNumber: "1234567890",
        isAvailable: 0,
    },
    {
        jobDescription: "Electricial",
        wagePerDay: 1000,
        fromDate: "2020-01-01",
        toDate: "2020-01-01",
        jobLocation: "Bangalore",
        phoneNumber: "1234567890",
        isAvailable: 0,
    },
    {
        jobDescription: "Electricial",
        wagePerDay: 1000,
        fromDate: "2020-01-01",
        toDate: "2020-01-01",
        jobLocation: "Bangalore",
        phoneNumber: "1234567890",
        isAvailable: 0,
    },
]

function Admincandidates() {
  return (
    <div>     
      <Adminnavigation />
      <div className="container bg-purple flex row">
                <div className="left-container">
                    <div className="flex ">
                        {
                            placeholderList.map((item, index) => (
                                <div className='card card-applied flex row black-border' id={`adminCandidatesGrid${index + 1}`}>
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
                                    <img className='applied edit' 
                                    id='editCandidate' width={20} height={20} src={editimgURL} alt="" />
                                    <img className='applied delete'  id='deleteCandidate' width={20} height={20} src={deleteimgURL} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="image">
                    <img src="https://thumbs.dreamstime.com/b/default-placeholder-businessman-half-length-portr-default-placeholder-businessman-half-length-portrait-photo-avatar-man-gray-color-113622420.jpg" width={300} height={500} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Admincandidates