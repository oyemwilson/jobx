import React, { useState } from 'react'
import styles from "../../css/register/register.css"
import LoginModal from '../../components/modals/LoginModal'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_BASE_URL } from '../../config/api'



const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'applicant',
    })
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleRoleChange = (role) => {
        console.log(role)
        setFormData({ ...formData, role })
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            setError("All fields are required. Please fill in all the details.");
            return; // Stop further execution
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return; // Stop further execution
          }
          const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
          if (!passwordRegex.test(formData.password)) {
            setError("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number");
            return; // Stop further execution
          }
        setError(null)
        try {
            const response = await axios.post(`${API_BASE_URL}/api/send-otp`,
                {
                    email: formData.email,

                })
            if (response.data.success) {
                // Navigate to OTP input page
                navigate("/otp", {
                    state: {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        password: formData.password,
                        role: formData.role,
                    }
                });
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError("Failed to request OTP. Please try again.");
        }

    }

    return (
        <div>
            <div className="container  card pt-5 my-5 rounded-5 register">
                <div className="login-text text-center container px-5">
                    <p className='display-3'>Create Account</p>
                    <div class="btn-group d-flex justify-content-center mt-4 role-btn" role="group" aria-label="Candidate or Employer Toggle">
                        <input type="radio" class="btn-check " name="role" id="candidate" autocomplete="off" checked={formData.role === "applicant"}
                            onChange={() => handleRoleChange("applicant")} />
                        <label class="btn btn-outline-success candidate-input rounded-5 py-3 px-4" for="candidate">Candidates</label>

                        <input type="radio" class="btn-check " name="role" id="employer" autocomplete="off" checked={formData.role === "employer"}
                            onChange={() => handleRoleChange("employer")} />
                        <label class="btn btn-outline-success employer-input py-3 px-4" for="employer">Employer</label>
                    </div>
                </div>
                <form className='container  p-5'>
                    <div class="form-group">
                        <label for="exampleInputEmail1">First Name*</label>
                        <input type="email" class="form-control login-input" name="firstName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jane Peters" value={formData.firstName}
                            onChange={handleChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Last Name*</label>
                        <input type="email" class="form-control login-input"  name="lastName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jane Peters" value={formData.lastName}
                            onChange={handleChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group pt-4">
                        <label for="exampleInputEmail1">Email*</label>
                        <input type="email" class="form-control login-input"   name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jane@example.com" value={formData.email}
                            onChange={handleChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group pt-4">
                        <label for="exampleInputPassword1">Password*</label>
                        <input type="password" class="form-control login-input" name="password" id="exampleInputPassword1" placeholder="Password" value={formData.password}
                            onChange={handleChange} />
                    </div>
                    <div class="form-group form-check my-4 ">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">By hitting the Register button, you agree to the Terms conditions & Privacy Policy</label>
                    </div>
                    {error && <p className="text-danger mt-3">{error}</p>}
                    <button type="submit" class="btn text-light w-100 login-submit" onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>Submit</button>
                    <div class="d-flex align-items-center mt-4 mb-3 ">
                        <div class="line"></div><span class="pe-3 ps-3">OR</span><div class="line"></div>
                    </div>
                    {/* <div className="d-flex row text-center justify-content-between">
                        <div className=" col-sm-12 col-md-5 col-lg-6 card social-login p-4 d-flex align-items-center justify-content-center mb-3">
                            <a href="#" className="text-dark text-decoration-none d-flex align-items-center">
                                <p className="mb-0 d-flex align-items-center">
                                    <i className="fa-brands fa-google me-2" style={{ color: '#122620' }}></i>
                                    Login with Google
                                </p>
                            </a>
                        </div>

                        <div className=" col-sm-12 col-md-5 col-lg-6 card social-login p-4 d-flex align-items-center justify-content-center mb-3">
                            <a href="#" className="text-dark text-decoration-none d-flex align-items-center">
                                <p className="mb-0 d-flex align-items-center">
                                    <i className="fa-brands fa-facebook me-2" style={{ color: '#122620' }}></i>
                                    Login with Facebook
                                </p>
                            </a>
                        </div>
                    </div> */}
                    <div className='text-center'>
                        <p className='fs-5 fw-lighter'>Have an account? <a href="/register" data-bs-toggle="modal" data-bs-target="#loginModal" className='fw-normal text-decoration-none signup-btn'>sign in</a></p>
                    </div>
                </form>
            </div>
            <LoginModal />
        </div>



    )
}

export default RegisterForm