import React, { useEffect, useState } from 'react'
import styles from "../../css/jobpage/jobdetails.css"
import axios from 'axios'
import { API_BASE_URL } from '../../config/api'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Jobdetails = () => {
    const { jobId } = useParams(); 
         const { isAuthenticated, user, loading, error, token } = useSelector((state) => state.user);
            //  const token = useSelector ((state) => state.user.user.token)


    const jobDetails = useSelector((state) => {
        const jobsArray = Object.values(state.jobs.jobs); // Convert object to array
        return jobsArray.find((job) => job._id === jobId);
    });

    console.log(jobDetails)

    if (!jobDetails) {
        return <p>Job not found.</p>;
    }




    return (
        <div>
            <div className="jobdetails">
                <div className="jobdetails-header mb-5">
                    <p className='fs-4 fw-lighter'>{jobDetails.title} by <span className='fw-normal'>{jobDetails.employername}</span></p>
                    <p className='fs-1 '>{jobDetails.title}</p> at <span className='fs-3 mb-5'> <p className='fw-bold'>{new Date(jobDetails.createdAt).toLocaleTimeString()}</p></span>
                   

                </div>
                <div className="card p-5 rounded-5 mt-5">
                    <div className="d-flex align-items-center text-align-center">
                        <p className="fs-2 d-flex align-items-center">
                            <span className="number-color p-2 px-3 fs-6 me-1">1</span> Overview
                        </p>
                    </div>
                    <p className="fs-5 fw-lighter">{jobDetails.overview}</p>
                </div>
                <div className="card p-5 rounded-5 mt-5">
                    <div className="d-flex align-items-center text-align-center">
                        <p className="fs-2 d-flex align-items-center">
                            <span className="number-color p-2 px-3 fs-6 me-1">2</span> Description
                        </p>
                    </div>
                    <p className="fs-5 fw-lighter">{jobDetails.description}</p>
                </div>
                <div className="card p-5 rounded-5 mt-5">
                    <div className="d-flex align-items-center text-align-center">
                        <p className="fs-2 d-flex align-items-center">
                            <span className="number-color p-2 px-3 fs-6 me-1">3</span> Responsibilities
                        </p>
                    </div>
                    {Array.isArray(jobDetails.responsibilities) &&
    jobDetails.responsibilities.length > 0 ? (
      jobDetails.responsibilities.flatMap((nestedArray) =>
        nestedArray.map((responsibility, index) => (
          <li key={`${nestedArray.indexOf(responsibility)}_${index}`}>{responsibility}</li>
        ))
      )
    ) : (
      <li>No responsibilities listed</li>
    )}
                </div>
                <div className="card p-5 rounded-5 mt-5">
                    <div className="d-flex align-items-center text-align-center">
                        <p className="fs-2 d-flex align-items-center">
                            <span className="number-color p-2 px-3 fs-6 me-1">4</span> Experience Level
                        </p>
                    </div>
                    <p className="fs-5 fw-lighter">{jobDetails.experience}</p>
                </div>
                {/* <div className="card p-5 rounded-5 mt-5">
                    <div className="d-flex align-items-center text-align-center">
                        <p className="fs-2 d-flex align-items-center">
                            <span className="number-color p-2 px-3 fs-6 me-1">5</span> Benefits
                        </p>
                    </div>
                    <p className="fs-5 fw-lighter">{jobDetails.benefits}</p>
                </div> */}
            </div>

        </div>
    )
}

export default Jobdetails