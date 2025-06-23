import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../../config/api';
import { Modal } from 'bootstrap';

import axios from 'axios';
import LoginModal from '../../components/modals/LoginModal';

const Otp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(null);
    const firstName = location.state?.firstName
    const lastName = location.state?.lastName
    const password = location.state?.password
    const email = location.state?.email
    const role = location.state?.role

    if (!email) {
        return <p className="text-danger">Invalid access. Please go back to registration.</p>;
    }

    const handleOtp = async (e) => {
        e.preventDefault();
        setError(null)

        try {
            const response = await axios.post(`${API_BASE_URL}/api/users`, {
                email,
                otp, 
                role,
                firstName: firstName || '',
                lastName: lastName || '',
                password: password || ''
            })
            console.log("OTP Verification Response:", response.data); 
            console.log("OTP Verification Response:", response.data.role); 
            if (response.data._id) {
                navigate('/')
alert('Verification successful! You can now log in.');

            }
            const loginModal = new Modal(document.getElementById('loginModal'));
  loginModal.show();
        }
        catch (err) {
            setError("Invalid OTP. Please try again.");
        }

    }
    return (
        <div>
            <div className="container  card pt-5 pb-5 my-5 rounded-5 register mb-5">
                <div className="login-text text-center container px-5">
                    <p className='fs-2'>Enter Otp</p>
                </div>
                <form className='container  p-3' onSubmit={handleOtp}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Otp*</label>
                        <input type="otp" class="form-control login-input " value={otp}
                            onChange={(e) => setOtp(e.target.value)} id="otp" aria-describedby="emailHelp" placeholder="Enter Otp" />
                    </div>
                    {error && <p className="text-danger mt-3">{error}</p>}
                    <button type="submit" class="btn text-light w-100 login-submit mt-3" >Submit</button>
                </form>
            </div>
            <LoginModal />
        </div>
    )
}

export default Otp