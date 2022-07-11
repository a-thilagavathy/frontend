import React from 'react'
import Customernavigation from './Customernavigation'
import "./Global.css"
const placeholderList = [
  {
    jobDescription: "Electricial",
    wagePerDay: 1000,
    fromDate: "2020-01-01",
    toDate: "2020-01-01",
    jobLocation: "Bangalore",
    phoneNumber: "1234567890",
    isApplied: true,
    isChat: true,
  },
  {
    jobDescription: "Electricial",
    wagePerDay: 1000,
    fromDate: "2020-01-01",
    toDate: "2020-01-01",
    jobLocation: "Bangalore",
    phoneNumber: "1234567890",
    isApplied: false,
    isChat: false,
  },
  {
    jobDescription: "Electricial",
    wagePerDay: 1000,
    fromDate: "2020-01-01",
    toDate: "2020-01-01",
    jobLocation: "Bangalore",
    phoneNumber: "1234567890",
    isApplied: true,
    isChat: false,
  },
]
function Customerviewappliedjob() {
  return (
    <div>
      <Customernavigation />
      <main className='container bg-white'>
        <div className="flex row">
          <div className="left-flex">
            {
              placeholderList.map((item, index) => (
                <div className='card card-applied flex row black-border' id={`candidatesGrid${index + 1}`}>
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
                  <div>
                    {item.isChat && <p className="isChat" id='chatButton'>chat</p>}
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex-right flex">
            <div className="chat" id="chatWindow">
              <div className="flex chat-top">
                Candidate
              </div>
              <div className="chat-body">
                <div className="sender-chat">
                  Hai
                </div>
                <div className="reciever-chat">
                  Hello
                </div>
                <div className="sender-chat">
                  Enna pandra ?
                </div>
                <div className="reciever-chat">
                  Summa Iruken
                </div>
              </div>
              <input className="chat-box" type="text" placeholder='Message' />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Customerviewappliedjob