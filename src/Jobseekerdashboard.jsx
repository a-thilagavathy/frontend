import React from 'react'
import "./Global.css"
import Jobseekernavigation from './Jobseekernavigation'

const placeholderList = [
    {
        jobDescription : "Electricial",
        wagePerDay : 1000,
        fromDate : "2020-01-01",
        toDate : "2020-01-01",
        jobLocation : "Bangalore",
        phoneNumber : "1234567890",
    },
    {
        jobDescription : "Electricial",
        wagePerDay : 1000,
        fromDate : "2020-01-01",
        toDate : "2020-01-01",
        jobLocation : "Bangalore",
        phoneNumber : "1234567890",
    },
    {
        jobDescription : "Electricial",
        wagePerDay : 1000,
        fromDate : "2020-01-01",
        toDate : "2020-01-01",
        jobLocation : "Bangalore",
        phoneNumber : "1234567890",
    },
]

function Jobseekerdashboard() {
    return (
        <div>
            <Jobseekernavigation />
            <div className="container flex row">
                <div className="left-container">
                    <div className="input-group flex row">
                        <input type="text" placeholder='Type here to search jobs' />
                        <button id='searchButton'>
                            Search
                        </button>
                    </div>
                    <div className="flex ">
                        {
                            placeholderList.map((item, index) => (
                                <div className='card flex row black-border' id={`userGrid${index+1}`}>
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

export default Jobseekerdashboard