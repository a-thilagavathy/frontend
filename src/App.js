import "./App.css";
import "./Global.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Jobseekerapplyjob from "./Jobseekerapplyjob";
import Customeraddjob from "./Customeraddjob";
import Customerviewappliedjob from "./Customerviewappliedjob";
import Admincandidates from "./Admincandidates";
import Admineditcandidates from "./Admineditcandidates";
import Auth from "./Auth";
import Jobseekerdashboard from "./Jobseekerdashboard";
import Jobappliedjob from "./Jobappliedjob";
import Customerdashboard from "./Customerdashboard";
import Admindashboard from "./Admindashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/dashboard" element={<Jobseekerdashboard />} />
          <Route path="/jobseeker/applyJob" element={<Jobseekerapplyjob />} />
          <Route path="/jobseeker/appliedJob" element={<Jobappliedjob />} />
          <Route path="/customer/dashboard" element={<Customerdashboard />} />
          <Route path="/customer/addJob" element={<Customeraddjob />} />
          <Route
            path="/customer/viewAppliedCandidates"
            element={<Customerviewappliedjob />}
          />
          <Route path="/admin/getAllJobs" element={<Admindashboard />} />
          <Route path="/admin/profile" element={<Admincandidates />} />
          <Route
            path="/admin/editprofile"
            element={<Admineditcandidates />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
