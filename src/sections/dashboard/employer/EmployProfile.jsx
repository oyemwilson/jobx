import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_BASE_URL } from '../../../config/api'

const EmployProfile = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        companyName: '',
        category: '',
        aboutCompany: '',
    });

    const [userDetails, setUserDetails] = useState(null);

    const token = useSelector((state) => state.user.user.token)
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response.data)
                setUserDetails(response.data);
            }

            catch (error) {
                console.error('Error fetching user profile:', error);
                // setErrorMessage('Failed to fetch user profile. Please try again.');
            }
        }
        fetchUserDetails()
    }, [])
    useEffect(() => {
        if (userDetails) {
            setFormData({
                companyName: userDetails.companyName || '',
                category: userDetails.category,
                aboutCompany: userDetails.aboutCompany,
            })
        }
    },[userDetails])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
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
                { ...formData },
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

            alert("User details updated successfully!"); // Clear password field after successful update
        } catch (error) {
            console.error("Error updating user details:", error);
            alert("Error updating details. Please try again.");
        }
    };
    const handleCancel = () => {
        if (userDetails) {
            setFormData({
                companyName: userDetails.companyName || '',
                category: userDetails.category || '',
                aboutCompany: userDetails.aboutCompany || '',
            });
        }
    };

    return (
        <div className='m-5'>
            <div className="fs-1">
                <p> My Profile</p>
            </div>
            <div className="  card pt-2 my-5 rounded-5 ">
                <form className='  p-5' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="companyName" className="fw-bold">Company Name*</label>
                        <input
                            type="text"
                            className="form-control mt-3"
                            id="companyName"
                            placeholder="Jane Peters"
                            onChange={handleInputChange}
                            readOnly={false}
                            value={formData?.companyName || ''}
                            name="companyName" 
                        />
                    </div>

                    <div class="form-group pt-4">
                        <label for="exampleInputEmail1" className='fw-bold'>Company Category*</label>
                        <input
                            type="text"
                            className="form-control mt-3"
                            id="category"
                            placeholder="Jane Peters"
                            onChange={handleInputChange}
                            readOnly={false}
                            value={formData?.category || ''}
                            name="category" 
                        />
                    </div>
                    <div className="contact-form-group form-group">
                        <label for="inputAddress2" className='fw-bold'>About Company*</label>
                        <textarea type="text" className=" form-control  " style={{ height: '200px' }} id="inputAddress2" placeholder="Your Message*" onChange={handleInputChange}
                            readOnly={false}
                            value={formData?.aboutCompany || ''}
                            name="aboutCompany"/>
                        <div className="alert-text fw-lighter">
                            Brief description for your company. URLs are hyperlinked.
                        </div>
                    </div>

                    <button type="submit" class="btn text-light w-30 login-submit mt-5 me-4 rounded-5 px-4">Submit</button>
                    <button type="cancel" class="btn text-sucess  w-30 rounded-5 px-4 mt-5 border-dark" onClick={handleCancel}>Cancel</button>

                </form>
            </div>
        </div>

    )
}

export default EmployProfile