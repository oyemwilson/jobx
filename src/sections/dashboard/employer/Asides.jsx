import React from 'react'
import stles from "../../../css/dashboard/asides.css"
import { Tab, Tabs } from 'react-bootstrap'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import DeleteAccount from '../../../components/modals/DeleteAccount';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/UserActions';

const Asides = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout()); // Dispatch the logout action
        navigate('/'); // Navigate to the home page using React Router
        setTimeout(() => {
            window.location.reload(); // Refresh the page after a short delay
          }, 100); // 100ms delay
    }


    return (
        <div>
            <div className="dashboard-toggle">
                <button className="btn btn-outline-none d-lg-none d-md-block float-start mx-auto p-3 pt-0 mt-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"><i className="fa-solid fa-bars fa-2xl asides-button" style={{ color: "#000000" }}></i></button>
            </div>
            <div className="offcanvas-lg offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-heder text-center">
                <NavLink to='/' className='text-decoration-none text-success'><h5 className="offcanvas-tite " id="offcanvasResponsiveLabel">JobX</h5></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>                </div>
                <div className="Asides-card">
                    <div className="offcavas-body ">
                        <div className="profile-section mt-3 text-center">
                            <div className="dropdown">
                                <a className="btn btn-white border-none dropdown-toggle fs-5" style={{ border: 'none' }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Jane Doe
                                </a>

                                <ul className="dropdown-menu">
                                    <li><NavLink to='/employer-profile' className="dropdown-item btn" href="#"><i className="fa-regular fa-user pe-3" style={{ color: "#000000" }}></i>Profile</NavLink></li>
                                    <li><NavLink to='/employer-account-settings' className="dropdown-item btn" href="#"> <i className="fa-solid fa-gear pe-3" style={{ color: "#000000" }}></i>Account settings</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="navbar-nav justify-content-center  flex-grow-1 mt-5 asides-tabs ">
                            <li className="nav-item mb-4">
                                <NavLink
                                    to="/employer-dashboard"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'nav-link active fs-5 d-flex align-items-center w-100'
                                            : 'nav-link fs-5 d-flex align-items-center w-100'
                                    }
                                >
                                    <i className="fa-solid fa-table-columns pe-4"></i>Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item mb-4">
                                <NavLink
                                    to="/employer-profile"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'nav-link active fs-5 d-flex align-items-center w-100'
                                            : 'nav-link fs-5 d-flex align-items-center w-100'
                                    }
                                >
                                    <i className="fa-regular fa-user fs-4 pe-4" style={{ color: '#000000' }}></i>My Profile
                                </NavLink>
                            </li>
                            <li className="nav-item mb-4">
                                <NavLink
                                    to="/employer-jobs"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'nav-link active fs-5 d-flex align-items-center w-100'
                                            : 'nav-link fs-5 d-flex align-items-center w-100'
                                    }
                                >
                                    <i className="fa-solid fa-suitcase pe-4" style={{ color: '#000000' }}></i>My Jobs
                                </NavLink>
                            </li>
                            {/* <li className="nav-item mb-4">
                                <NavLink
                                    to="/employer-message"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'nav-link active fs-5 d-flex align-items-center w-100'
                                            : 'nav-link fs-5 d-flex align-items-center w-100'
                                    }
                                >
                                    <i className="fa-regular fa-message pe-4" style={{ color: '#000000' }}></i>Messages
                                </NavLink>
                            </li> */}
                            <li className="nav-item mb-4">
                                <NavLink
                                    to="/post-job"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'nav-link active fs-5 d-flex align-items-center w-100'
                                            : 'nav-link fs-5 d-flex align-items-center w-100'
                                    }
                                >
                                    <i className="fa-solid fa-pen pe-4 fs-5" style={{ color: '#000000' }}></i>Submit Job
                                </NavLink>
                            </li>
                            <li className="nav-item mb-4">
                                <NavLink
                                    to="/employer-account-settings"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'nav-link active fs-5 d-flex align-items-center w-100'
                                            : 'nav-link fs-5 d-flex align-items-center w-100'
                                    }
                                >
                                    <i className="fa-solid fa-gear pe-4" style={{ color: '#000000' }}></i>Account Settings
                                </NavLink>
                            </li>
                            <li className="nav-item mb-4">
                                <a
                                    className="nav-link fs-5 d-flex align-items-center w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#DeleteModal"
                                >
                                    <i className="fa-solid fa-trash pe-4" style={{ color: '#000000' }}></i>Delete Account
                                </a>
                            </li>
                            <li className="nav-item  mb-5">
    <a className="nav-link fs-5 mb-5" href="#" onClick={handleLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket pe-4" style={{ color: "#000000" }}></i>Logout
    </a>
</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        


    )
}

export default Asides