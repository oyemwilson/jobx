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
            
          </div>
          <div className="card py-2 rounded-5">
            <div className="container my-5 table-responsive-lg">
              <table className="table">
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
                    <tr key={job._id}>
                      <th scope="row">{job.title}</th>
                      <td>{job.description}</td>
                      <td>{job.experience}</td>
                      <td>{job.employer}</td>
                      <td>{job.status}</td>
                      <td>
                        <div className="dropdown">
                          <a className="dropdwn-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-ellipsis-vertical" style={{ color: "#000000" }}></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#ViewJobModal">
                                <i className="fa-solid fa-pen pe-3" style={{ color: "#000000" }}></i>
                                Apply
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#DeleteJobModal">
                                <i className="fa-solid fa-trash pe-3" style={{ color: "#000000" }}></i>
                                Delete
                              </a>
                            </li>
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

      {/* Apply Job Modal */}
      <div className="modal fade" id="ViewJobModal" tabIndex="-1" aria-labelledby="ViewJobModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ViewJobModalLabel">Apply for Job</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
                  <textarea className="form-control" id="coverLetter" rows="5" placeholder="Write your cover letter here..."></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">Upload Resume</label>
                  <input className="form-control" type="file" id="resume" accept=".pdf,.doc,.docx" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success">Submit Application</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Job Modal */}
      <div className="modal fade" id="DeleteJobModal" tabIndex="-1" aria-labelledby="DeleteJobModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="DeleteJobModalLabel">Delete Job</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to remove this job from your saved jobs?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Joblisting