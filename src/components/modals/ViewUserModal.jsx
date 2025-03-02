import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config/api";
import { useSelector } from "react-redux";

const ViewUserModal = ({ users, onClose }) => {
    const token = useSelector ((state) => state.user.user.token)
     const { isAuthenticated, user, loading, error } = useSelector((state) => state.user);
    console.log(user)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        role: "applicant",
        isAdmin: false,
        verified: false,
    });

    // Update formData when the user prop changes
    useEffect(() => {
        if (users) {
            setFormData({
                firstName: users.firstName,
                lastName: users.lastName,
                email: users.email,
                mobile: users.mobile,
                role: users.role,
                isAdmin: users.isAdmin,
                verified: users.verified,
            });
        }
    }, [users]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!token) {
            console.error("No token found");
            alert("No token found. Please log in again.");
            return;
        }
    
        if (!user || user.isAdmin !== true) {
            console.error("User is not an admin:", user);
            alert("You do not have permission to perform this action.");
            return;
        }
    
        try {
            const response = await axios.put(
                `${API_BASE_URL}/api/users/${users._id}`, 
                formData, // Send the entire formData object
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                        "Content-Type": "application/json",
                    },
                }
            );
    
            console.log("Form Data Submitted:", response.data);
    
            if (response.status === 200) {
                alert("User details updated successfully!");
            }
            setTimeout(() => {
                window.location.reload();
            }, 500); 
        } catch (error) {
            console.error("Error updating user details:", error);
            alert("Error updating details. Please try again.");
        }
    };
    console.log("User isAdmin value:", formData.isAdmin);
    

    return (
        <div>
            <div className="modal fade" id="ViewUserModal" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content loginmodal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="container">
                                <div className="card pt-2 my-5 rounded-5">
                                    <form className="p-5" onSubmit={handleSubmit}>
                                        <h1 className="text-success">Edit User Details</h1>

                                        {/* First Name */}
                                        <div className="form-group mt-5">
                                            <label htmlFor="firstName" className="fw-bold">
                                                First Name*
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-3"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div className="form-group mt-5">
                                            <label htmlFor="lastName" className="fw-bold">
                                                Last Name*
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-3"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="form-group mt-5">
                                            <label htmlFor="email" className="fw-bold">
                                                Email*
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control mt-3"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div className="form-group mt-5">
                                            <label htmlFor="mobile" className="fw-bold">
                                                Mobile*
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-3"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Role Dropdown */}
                                        {/* <div className="form-group mt-5">
                                            <label htmlFor="role" className="fw-bold">
                                                Role*
                                            </label>
                                            <select
                                                className="form-select mt-3"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleInputChange}
                                            >
                                                <option value="applicant">Applicant</option>
                                                <option value="employer">Employer</option>
                                            </select>
                                        </div> */}

                                        {/* isAdmin Checkbox */}
                                        <div className="form-group mt-5">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    name="isAdmin"
                                                    checked={formData.isAdmin}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="isAdmin" className="form-check-label fw-bold">
                                                    Is Admin
                                                </label>
                                            </div>
                                        </div>

                                        {/* Verified Checkbox */}
                                        <div className="form-group mt-5">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    name="verified"
                                                    checked={formData.verified}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="verified" className="form-check-label fw-bold">
                                                    Verified
                                                </label>
                                            </div>
                                        </div>

                                        {/* Submit and Cancel Buttons */}
                                        <div className="d-flex justify-content-between mt-5">
                                            <button
                                                type="submit"
                                                className="btn text-light w-30 login-submit rounded-5 px-4"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn text-success w-30 rounded-5 px-4 border-dark"
                                                onClick={onClose}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewUserModal;