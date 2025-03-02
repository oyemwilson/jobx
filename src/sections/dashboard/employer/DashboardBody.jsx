import React, { useEffect } from 'react'
import ctyles from "../../../css/dashboard/employerdashboard.css"
import ViewJobModal from '../../../components/modals/ViewJobModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs, fetchUserJobs } from '../../../actions/JobAction'
import { setSelectedJob } from '../../../actions/JobAction'

const DashboardBody = () => { 
    const dispatch = useDispatch()

    const {userJobs, loading,selectedJob , error} = useSelector((state) => state.userJobs)
    const token = useSelector ((state) => state.user.user.token)
      const { jobs,} = useSelector((state) => state.jobs);

    
      useEffect(() => {
        dispatch(fetchJobs());
      }, [dispatch]);
    // console.log("Token from Redux:", token);
    useEffect(() => {
        if (token) {
            dispatch(fetchUserJobs(token)); // Pass token when dispatching the action
        }

    }, [dispatch, token]); // Include token in dependencies
    console.log(userJobs)
 

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;
    return (
        <>
            <div className="">
                <div className="employer-dash-body m-5">
                    <div className="dashheader mb-5">
                        <div className=''>
                            <div className="fs-1">
                                <p> Dashboard</p>
                            </div>
                            <div className="card dashboard-card py-4">
                                <div className="d-flex row align-items-center justify-content-around text-center">
                                    <div className="col me-2">
                                        <div className="row">
                                            <h1>{userJobs.length}</h1>
                                            <p className='fw-lighter'>Posted Jobs</p>
                                        </div>
                                    </div>
                                    <div className="col text-center justify-content-center">
                                        <i className="fa-regular text-center fa-user fs-3 p-3 dashcard-icon" style={{ color: "#000000" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card dashbottom-card mt-5 rounded-5">
    <p className="fs-3 ps-4 pt-3 mb-0">Job Posted</p>
    <hr />
    <div className="px-5 py-2 d-flex flex-column">
        {userJobs.map((job) => (
            <div key={job._id} className="col mb-3">
                <div className="row d-flex justify-content-between align-items-center">
                    {/* Left Side - Job Details */}
                    <div className="col">
                        <h4>{job.title}</h4>
                        <p className="fw-lighter">{job.employer}</p>
                    </div>

                    {/* Right Side - Dropdown */}
                    {/* <div className="col-auto">
                        <div className="dropdown">
                            <a 
                                
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis-vertical" style={{ color: "#000000" }}></i>
                            </a>

                            <ul className="dropdown-menu">
                                <li>
                                    <a 
                                        className="dropdown-item" 
                                        href="#" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#ViewJobModal"
                                        onClick={() => dispatch(setSelectedJob(job))}
                                    >
                                        <i className="fa-regular fa-eye pe-3" style={{ color: "#000000" }}></i>
                                        View Job
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>

            </div>
        ))}
    </div>
</div>


                </div>

            </div>
            <ViewJobModal />
        </>
    )
}

export default DashboardBody