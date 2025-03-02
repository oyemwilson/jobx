import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Joblisting = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const savedJobs = useSelector((state) => state.user.user.savedJobListings); // Ensure it's an array

  // Extract job IDs from the savedJobs array
  const savedJobIds = savedJobs.map((savedJob) => savedJob);
  console.log(savedJobIds)

  // Filter jobs to get only the saved jobs
  const saveJobs = jobs?.filter((job) => savedJobIds.includes(job._id));
  console.log(saveJobs)
  return (
    <div>
      <div>
        <div className='m-5'>
          <div className="d-flex">
            <div className="col">
              <div className="fs-1">
                <p> My Jobs</p>
              </div>
            </div>
            <div className="col text-end d-flex align-items-center justify-content-end">
              <p className="me-2 mb-0">sort:</p>
              <select className="form-select" style={{ width: '130px' }}>
                <option value="">New</option>
                <option value="Entry Level">Category</option>
                <option value="Mid Level">Job type</option>

              </select>
            </div>
          </div>
          <div className="  card py-2 rounded-5 ">
            <div className="container my-5 table-responsive-lg">
              <table class="table ">
                <thead className='rounded-5' style={{ backgroundColor: "#F0F5F3" }}>
                  <tr className='table-success rounded-5'>
                    <th scope="col" className='text-success'>Title</th>
                    <th scope="col" className='text-success'>Description</th>
                    <th scope="col" className='text-success'>Experience</th>
                    <th scope="col" className='text-success'>Employer</th>
                    <th scope="col" className='text-success'>Status</th>
                    <th scope="col" className='text-success'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {saveJobs?.map((job) => (
                    <tr key={job.id}>
                      <th scope="row">{job.title}</th>
                      <td>{job.description}</td>
                      <td>{job.experience}</td>
                      <td>{job.employer}</td>
                      <td>
                        {job.status}
                      </td>
                      <td>
                        <div className="dropdown">
                          <a className="btn btn-white drpdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis-vertical " style={{ color: "#000000" }}></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#ViewJobModal"><i className="fa-solid fa-pen pe-3" style={{ color: "#000000" }}></i>Apply</a></li>
                            <li><a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#ViewJobModal"><i className="fa-solid fa-trash pe-3" style={{ color: "#000000" }}></i>Delete</a></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Joblisting