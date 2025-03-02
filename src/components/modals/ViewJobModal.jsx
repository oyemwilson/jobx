import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../config/api';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ViewJobModal = ({selectedJobId}) => {
    const dispatch = useDispatch()
    const [jobDetails, setJobDetails] = useState(null);
    const token = useSelector ((state) => state.user.user.token)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
const [data, setData] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        overview: '',
        category: '',
        type: '',
        experience: '',
        address: '',
        country: '',
        state: '',
        responsibilities:'', 
        salary: { min:'', max:'' }
    })

useEffect(() => {
  if (selectedJobId) {
    // Fetch job details based on selectedJobId
    fetchJobDetails(selectedJobId).then((data) => {
      setJobDetails(data);
    });
  }
}, [selectedJobId]);

const fetchJobDetails = async (jobId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/jobListings/${jobId}`, {
      headers: {
        Authorization: token,
      },
    });
    const jobDetails = response.data
    setData(jobDetails)
    console.log(jobDetails)
    // Axios stores the response data in the `data` property
    return jobDetails;
  } catch (error) {
    console.error("Error fetching job details:", error);
    return null;
  }finally {
    setIsLoading(false); // Set loading to false after the API call completes
  }
};
useEffect(()=>{
    if (jobDetails){
        setFormData({
            title: jobDetails.title,
            description: jobDetails.description,
            overview: jobDetails.overview,
            category: jobDetails.category,
            type: jobDetails.type,
            experience: jobDetails.experience,
            address: jobDetails.address,
            country: jobDetails.country,
            state: jobDetails.state,
            responsibilities: jobDetails.responsibilities, 
            salary: { min:jobDetails.salaryMin , max:jobDetails.salaryMax }
        })
  
    }
},[jobDetails])
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};
console.log(selectedJobId)
const handleSubmit = async (e, selectedJobId) => {
    e.preventDefault();

    if (!selectedJobId) {
        console.error("Error: No Job ID provided.");
        return;
    }

    try {
        // Send updated job details to the backend
        const response = await axios.put(
            `${API_BASE_URL}/api/jobListings/${selectedJobId}`, 
            formData,  // Send form data in request body
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Ensure proper token format
                    "Content-Type": "application/json",
                },
            }
            
        );


        if (response.status !== 200) {
            throw new Error("Failed to update job details");
        }

        const updatedJob = response.data;

        // Update Redux store with new data
        dispatch({ type: "UPDATE_JOB_DETAILS", payload: updatedJob });

        // Close Bootstrap Offcanvas properly


        // Notify user
        alert("Job details updated successfully!");
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        if (offcanvasElement) {
            const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
            if (closeButton) {
                closeButton.click();
            }
        }
        setTimeout(() => {
            window.location.reload();
        }, 500); 
    } catch (error) {
        console.error("Error updating job details:", error);
        alert("Error updating details. Please try again.");
    }
    const offcanvasElement = document.getElementById('offcanvasNavbar');

};

// Debugging
console.log("Form Data Sent:", formData);





  
    // if (!jobDetails) return null;
    // useEffect(() => {
    //     const updateJobDetails = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `${API_BASE_URL}/api/joblistings/${jobId}`,
    //                 {}, // If you need to send a request body, provide an object here
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`,
    //                         'Content-Type': 'application/json',
    //                     },
    //                 }
    //             );
    
    //             if (response.status !== 200) {
    //                 throw new Error("Failed to fetch job details");
    //             }
    
    //             const updatedUser = response.data;
    
    //             // Update Redux store with new data
    //             dispatch({ type: "UPDATE_JOB_DETAILS", payload: updatedUser });
    
    //             alert("Job details updated successfully!");
    //         } catch (error) {
    //             console.error("Error updating job details:", error);
    //             alert("Error updating details. Please try again.");
    //         }
    //     };
    
    //     updateJobDetails();
    // }, [dispatch, token]); // Dependency array
    
    
    return (
        <div>
            <div className="modal fade" id="ViewJobModal" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content loginmodal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>Error: {error.message}</div>
                        ) : (
                            <div className="modal-body">
                                <div className="container">
                                    <div className="card pt-2 my-5 rounded-5">
                                        <form className="p-5" onSubmit={(e) => handleSubmit(e, selectedJobId)}>
                                            <h1 className="text-success">Edit Job Details</h1>
                                            <div className="form-group mt-5">
                                                <label htmlFor="title" className="fw-bold">Title*</label>
                                                <input
                                                    type="text"
                                                    className="form-control mt-3"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group mt-5">
                                                <label htmlFor="description" className="fw-bold">Description*</label>
                                                <textarea
                                                    className="form-control mt-3"
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleInputChange}
                                                    style={{ height: '200px' }}
                                                />
                                            </div>
                                            <div className="form-group mt-5">
                                                <label htmlFor="overview" className="fw-bold">Overview*</label>
                                                <textarea
                                                    className="form-control mt-3"
                                                    name="overview"
                                                    value={formData.overview}
                                                    onChange={handleInputChange}
                                                    style={{ height: '200px' }}
                                                />
                                            </div>
                                            <div className="d-flex row justify-content-between mt-5">
                                                <div className="col-lg-5 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="category" className="fw-bold">Category*</label>
                                                        <select
                                                            className="form-select mt-3"
                                                            name="category"
                                                            value={formData.category}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="Designer">Designer</option>
                                                            <option value="IT & Development">IT & Development</option>
                                                            <option value="Web & Mobile Dev">Web & Mobile Dev</option>
                                                            <option value="Writing">Writing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="type" className="fw-bold">Type*</label>
                                                        <select
                                                            className="form-select mt-3"
                                                            name="type"
                                                            value={formData.type}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="Full Time">Full Time</option>
                                                            <option value="Part Time">Part Time</option>
                                                            <option value="Hourly-Contract">Hourly-Contract</option>
                                                            <option value="Fixed-Price">Fixed-Price</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex row mt-5">
                                                <div className="col-lg-3 col-md-12 col-sm-12 me-3">
                                                    <div className="form-group">
                                                        <label htmlFor="salary.min" className="fw-bold">Salary Min*</label>
                                                        <input
                                                            type="number"
                                                            className="form-control mt-3"
                                                            name="salary.min"
                                                            value={formData.salary.min}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="salary.max" className="fw-bold">Salary Max*</label>
                                                        <input
                                                            type="number"
                                                            className="form-control mt-3"
                                                            name="salary.max"
                                                            value={formData.salary.max}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mt-5">
                                                <label htmlFor="experience" className="fw-bold">Experience*</label>
                                                <select
                                                    className="form-select mt-3"
                                                    name="experience"
                                                    value={formData.experience}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="No Experience">No Experience</option>
                                                    <option value="Intermediate">Intermediate</option>
                                                    <option value="Experienced">Experienced</option>
                                                </select>
                                            </div>
                                            <h1 className="text-success mt-5">Address & Location</h1>
                                            <div className="form-group mt-5">
                                                <label htmlFor="address" className="fw-bold">Address*</label>
                                                <input
                                                    type="text"
                                                    className="form-control mt-3"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="d-flex row justify-content-between mt-5">
                                                <div className="col-lg-5 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="country" className="fw-bold">Country*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control mt-3"
                                                            name="country"
                                                            value={formData.country}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="state" className="fw-bold">State*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control mt-3"
                                                            name="state"
                                                            value={formData.state}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mt-5">
                                                <label htmlFor="responsibilities" className="fw-bold">Responsibilities*</label>
                                                <textarea
                                                    className="form-control mt-3"
                                                    name="responsibilities"
                                                    value={formData.responsibilities}
                                                    onChange={handleInputChange}
                                                    style={{ height: '200px' }}
                                                />
                                            </div>
                                            <button type="submit" className="btn text-light w-30 login-submit mt-5 me-4 rounded-5 px-4">Submit</button>
                                            <button type="button" className="btn text-success w-30 rounded-5 px-4 mt-5 border-dark" data-bs-dismiss="modal">Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ViewJobModal