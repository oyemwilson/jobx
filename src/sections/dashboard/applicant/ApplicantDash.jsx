import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../../../actions/JobAction';
import Pagination from '../../../components/Pagination';

const ApplicantDash = () => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);
    const jobApplied = useSelector((state) => state.user.user.jobs); // Array of applied job objects
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    // Extract job IDs from the jobApplied array
    const appliedJobIds = jobApplied.map((appliedJob) => appliedJob.jobId);

    // Filter jobs to get only the applied jobs
    const appliedJobs = jobs.filter((job) => appliedJobIds.includes(job.id));

    // Calculate pagination values
    const totalItems = appliedJobs.length; // Total number of applied jobs
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = appliedJobs.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Fetch jobs on component mount
    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    // Display loading state
    if (loading) {
        return <p>Loading jobs...</p>;
    }

    // Display error state

    console.log('Job Applied:', jobApplied);
    console.log('Applied Job IDs:', appliedJobIds);
    console.log('All Jobs:', jobs);
    console.log('Applied Jobs:', appliedJobs);
    console.log('Current Jobs:', currentJobs);

    console.log(appliedJobs)
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
                                            <h1>{appliedJobs.length}</h1>
                                            <p className='fw-lighter'>Total Applied Jobs</p>
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
                        <p className='fs-3 ps-4 pt-3 mb-0'> Job Applied</p>
                        <hr />
                        <div className="px-5 py-2 d-flex flex-column">
                            {currentJobs.map((job, index) => (
                                <div className="col me-2">
                                    <div key={job._id} className="d-flex row">
                                        {/* <h5>{`job ${index + 1}`}</h5> */}
                                        <h4>{job.title}</h4>
                                        <p className='mb-0 fw-lighter'>{job.employer}</p>

                                        <p className=' fw-lighter'>{job.status}</p>
                                    </div>
                                </div>

                            ))}
                            {/* <div className="col me-2 text-end">
                                <div className="dropdown">
                                    <a className="btn btn-white drpdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-ellipsis-vertical" style={{ color: "#000000" }}></i> 
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#ViewJobModal"><i className="fa-regular fa-eye pe-3" style={{ color: "#000000" }}></i>View Job</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="pt-5">
                        <Pagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>

                </div>

            </div>


        </>
    )
}

export default ApplicantDash