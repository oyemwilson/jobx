import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';


// const jobSnippet = {
//   employername: 'Total enterprise',
//   salary: "€100",
//   category: "Mobile Dev",
//   location: "uk",
//   jobtype: "hourly",
//   date: '13/06/25',
//   experience: "intermidiate"
// }
    


const JobDetailsSnippet = () => {
  const { jobId } = useParams(); 
           const { isAuthenticated, user, loading, error, } = useSelector((state) => state.user);
               const token = useSelector ((state) => state.user.user.token)


    const jobSnippet = useSelector((state) => {
        const jobsArray = Object.values(state.jobs.jobs); // Convert object to array
        return jobsArray.find((job) => job._id === jobId);
    });

    console.log(jobSnippet)

    if (!jobSnippet) {
        return <p>Job not found.</p>;
    }

    const handleApply = async () => {
      if (!isAuthenticated) {
          alert("You are not logged in. Please log in first.");
          return;
      }
      try{
          const response = await axios.post(`${API_BASE_URL}/api/users/apply`,
          { jobId: jobId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'  // Ensure content type is set
            },
          }

      )
      alert('Job applied successful')
      }
      catch(error) {
        if (error.response) {
          // Server responded with a status code outside 2xx
          console.error("Error Response:", error.response.data);
          alert(`Error: ${error.response.data.error || error.response.data.message || "Something went wrong."}`);
        } else if (error.request) {
          // Request was made but no response received
          console.error("No Response Received:", error.request);
          alert("No response from the server. Please check your network.");
        } else {
          // Something else caused the error
          console.error("Request Error:", error.message);
          alert(`Request Error: ${error.message}`);
        }
      }
  }
  return (
    <>
      <div className="container snippet-card text-center ">
        <div className="d-flex  py-5">
          <div className="row mt-5 text-center">
            <div className="col-12 fw-bold mb-5"> {jobSnippet.employername}</div>
            <hr />
            <div className="row mt-">
              <div className="col-6">
                <p className='mb-1 fw-lighter'>Salary</p>
                <div className="row">
                <p className='fw-bolder'>{jobSnippet.salary.max}/{jobSnippet.salary.currency}</p>
                </div>

              </div>
              <div className="col-6">
                <p className='mb-1 fw-lighter'>Category</p>
                <p className='fw-bold'>{jobSnippet.category}</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <p className='mb-1 fw-lighter'>Location</p>
                <p className='fw-bold'>{jobSnippet.country}</p>
              </div>
              <div className="col-6">
                <p className='mb-0 fw-lighter'>Jobtype</p>
                <p className='fw-bold'>{jobSnippet.type}</p>
              </div>
            </div> 
            <div className="row mt-5">
              <div className="col-6">
                <p className='mb-1 fw-lighter'>Date</p>
                <p className='fw-bold'>{new Date(jobSnippet.createdAt).toLocaleTimeString()}</p>

              </div>
              <div className="col-6">
                <p className='mb-1 fw-lighter'>Experience</p>
                <p className='fw-bold'>{jobSnippet.experience}</p>
              </div>
            </div>
            <div className="text-center">
            <button className='mt-5 rounded apply-btn text-white w-75 text-center' onClick={handleApply}>
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default JobDetailsSnippet