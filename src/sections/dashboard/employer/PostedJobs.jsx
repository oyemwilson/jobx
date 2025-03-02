import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ViewJobModal from '../../../components/modals/ViewJobModal'
import { API_BASE_URL } from '../../../config/api'
import axios from 'axios'

const PostedJobs = () => {
  const { userJobs, loading, selectedJob, error } = useSelector((state) => state.userJobs)
  console.log(userJobs)
  const [selectedJobId, setSelectedJobId] = useState(null);
  const token = useSelector ((state) => state.user.user.token)
  const [jobListings, setJobListings] = useState('');


  
//   const [jobDetails, setJobDetails] = useState(null);
//   const token = useSelector ((state) => state.user.user.token)

//   useEffect(() => {
//       if (selectedJobId) {
//         // Fetch job details based on selectedJobId
//         fetchJobDetails(selectedJobId).then((data) => {
//           setJobDetails(data);
//         });
//       }
//     }, [selectedJobId]);
// const fetchJobDetails = async (jobId) => {
// try {
//   const response = await axios.get(`${API_BASE_URL}/api/jobListings/${jobId}`, {
//     headers: {
//       Authorization: token,
//     },
//   });
//   // Axios stores the response data in the `data` property
//   return response.data;
// } catch (error) {
//   console.error("Error fetching job details:", error);
//   return null;
// }
// };
// const handleEditJob = (job) => {
//   setSelectedJobId(job._id);
//   // setSelectedJob(job);
//   setShowEditModal(true);
// };
  

const handleViewJob = (jobId) => {
  console.log("Deleting Job ID:", jobId);
  setSelectedJobId(jobId);
  console.log("Selected Job ID:", jobId);
  
};

const handleDeleteJob = async (jobId) => {
  console.log("Deleting Job ID:", jobId);
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/jobListings/${jobId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Job deleted successfully:", response.data);
    // Optionally refresh your job list here
  } catch (error) {
    console.error("Error deleting job:", error);
  }
};



  return (
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
            <table class="table  align-middle">
              <thead className='rounded-5' style={{ backgroundColor: "#F0F5F3" }}>
                <tr className='table-success rounded-5'>
                  <th scope="col" className='text-success'>Title</th>
                  <th scope="col" className='text-success'>Job Created</th>
                  <th scope="col" className='text-success'>Applicant</th>
                  <th scope="col" className='text-success'>Status</th>
                  <th scope="col" className='text-success'>Action</th>
                </tr>
              </thead>
              <tbody>
                {userJobs.map((job) => (
                  <tr key={job._id}>
                    <th scope="rw">{job.title}</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <div className="dropdown">
                        <a className="btn btn-white drpdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa-solid fa-ellipsis-vertical " style={{ color: "#000000" }}></i>
                        </a>
                        <ul className="dropdown-menu">
                          {/* <li><a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#ViewJobModal"><i className="fa-regular fa-eye pe-3" style={{ color: "#000000" }}></i>View Job</a></li> */}
                          <li><a className="dropdown-item"  data-bs-toggle="modal" 
                            data-bs-target="#ViewJobModal" onClick={() => handleViewJob(job._id)}><i className="fa-solid fa-pen pe-3" style={{ color: "#000000" }}></i>Edit</a></li>
                          <li><a className="dropdown-item"  onClick={() => handleDeleteJob(job._id)} data-bs-target="#ViewJobModal"><i className="fa-solid fa-trash pe-3" style={{ color: "#000000" }}></i>Delete</a></li>
                          <li><a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#ViewJobModal"><i className="fa-regular fa-user pe-3" style={{ color: "#000000" }}></i>Applicant</a></li>
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
      <ViewJobModal selectedJobId={selectedJobId}  />
    </div>
  )
}

export default PostedJobs