import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_BASE_URL } from '../../../config/api';

const EmployAccount = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const userDetails = useSelector((state) => state.user.user); // Ensure it's an object
    const token = useSelector ((state) => state.user.user.token)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
      });

      useEffect(() => {
        if (userDetails) {
          setFormData({
            firstName: userDetails.firstName || '',
            lastName: userDetails.lastName || '',
            phoneNumber: userDetails.phoneNumber || '',
            email: userDetails.email || ''
          });
        }
      }, [userDetails]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log({ name, value });
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure password is provided before submitting
        // if (!password) {
        //     alert("Password is required to update details.");
        //     return;
        // }

        try {
            const response = await axios.put(
                `${API_BASE_URL}/api/users/profile`,
                { ...formData, password },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status !== 200) {
                throw new Error("Failed to update user details");
            }

            const updatedUser = response.data;

            // Update Redux store with new data (excluding password)
            dispatch({ type: "UPDATE_USER_DETAILS", payload: updatedUser });

            alert("User details updated successfully!");
            setPassword(""); // Clear password field after successful update
        } catch (error) {
            console.error("Error updating user details:", error);
            alert("Error updating details. Please try again.");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className='m-5'>
            <div className="fs-1">
                <p> Account Settings</p>
            </div>
            <div className="card pt-2 my-5 rounded-5">
                <form className='p-5'>
                    <h1 className='text-success'>Edit & Update</h1>
                    <div className="form-group mt-5">
                        <label htmlFor="firstName" className='fw-bold'>First Name*</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName || ''}
                            onChange={handleInputChange}
                            readOnly={false}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="lastName" className='fw-bold'>Last Name*</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="email" className='fw-bold'>Email*</label>
                        <input
                            type="email"
                            className="form-control mt-2"
                            id="email"
                            name="email"
                            value={formData.email || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="phoneNumber" className='fw-bold'>Phone Number*</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div className="form-group mt-3">
                        <label htmlFor="password" className='fw-bold'>Password*</label>
                        <input
                            type="password"
                            className="form-control mt-2"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div> */}

                    <button type="submit" className="btn text-light w-30 login-submit mt-5 me-4 rounded-5 px-4" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn text-success w-30 rounded-5 px-4 mt-5 border-dark">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EmployAccount;