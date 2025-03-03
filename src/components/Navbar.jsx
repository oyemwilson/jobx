import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import LoginModal from './modals/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/UserActions'

const Navbar = () => {
    const dispatch = useDispatch()
    const [isSticky, setIsSticky] = useState(false)
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { isAuthenticated, user, loading, error, } = useSelector((state) => state.user);
    // const token = useSelector ((state) => state.user.user.token)

    const handleLogout = async () => {
        await dispatch(logout()); // Wait for the logout action to complete
        navigate('/'); // Navigate to the home page
      };

    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const handleDashboard = () => {
        // More detailed debugging
        console.log("Authentication status:", isAuthenticated, typeof isAuthenticated);
        console.log("User object:", user);
        console.log("User role:", user?.role);

        if (!isAuthenticated) {
            alert("You are not logged in. Please log in first.");
            return;
        }

        // Add this check to ensure user exists
        if (!isAuthenticated && !user || !user.role) {
            console.error("User or user role is undefined");
            alert("User information is incomplete. Please try logging in again.");
            return;
        }

        // Try using a direct approach for debugging
        console.log("Attempting to navigate to role-specific dashboard");
        try {
            if (user.role === "applicant") {
                console.log("Navigating to applicant dashboard");
                setTimeout(() => {
                    navigate("/applicant-dashboard");
                }, 100);
            } else if (user.role === "employer") {
                console.log("Navigating to employer dashboard");
                navigate("/employer-dashboard");
            } else if (user.role === "admin") {
                console.log("Navigating to admin dashboard");
                navigate("/admin-dashboard");
            } else {
                console.log("Unknown role:", user.role);
                alert("Unknown user role: " + user.role);
            }
        } catch (error) {
            console.error("Navigation error:", error);
        }
    };
    // Close nav whenever location changes
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark ${isSticky ? "sticky-top shadow-lg" : ""}`} style={{ backgroundColor: " #122620", transition: 'all 1s ease-in-out' }}>
                <div className="container-fluid mx-md-5 mx-lg-5 py-3">
                    <NavLink className="navbar-brand me-lg-5" to="/">JOBX</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start navbar-offcanvas" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <NavLink className="offcanvas-title text-light text-decoration-none" id="offcanvasNavbarLabel" to="/" >JOBX</NavLink>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body justify-content-start">
                            <ul className="navbar-nav flex-column-sm align-items-start justify-content-start flex-grow-1">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `nav-link mx-lg-3 ${isActive ? 'text-light' : ''}`
                                        }
                                        end
                                        onClick={(e) => {
                                            // Use data attribute to close offcanvas
                                            const offcanvasElement = document.getElementById('offcanvasNavbar');
                                            if (offcanvasElement) {
                                                const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
                                                if (closeButton) {
                                                    closeButton.click();
                                                }
                                            }
                                        }}
                                    >Homee</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        `nav-link mx-lg-3 ${isActive ? 'text-lght' : ''}`
                                    } to="/jobs"
                                        onClick={(e) => {
                                            // Use data attribute to close offcanvas
                                            const offcanvasElement = document.getElementById('offcanvasNavbar');
                                            if (offcanvasElement) {
                                                const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
                                                if (closeButton) {
                                                    closeButton.click();
                                                }
                                            }
                                        }}>Job</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        `nav-link mx-lg-3 ${isActive ? 'text-lght' : ''}`
                                    } to="/contact"
                                        onClick={(e) => {
                                            // Use data attribute to close offcanvas
                                            const offcanvasElement = document.getElementById('offcanvasNavbar');
                                            if (offcanvasElement) {
                                                const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
                                                if (closeButton) {
                                                    closeButton.click();
                                                }
                                            }
                                        }}>Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        `nav-link mx-lg-3 ${isActive ? 'text-lght' : ''}`
                                    } to=""
                                        onClick={(e) => {
                                            // Use data attribute to close offcanvas
                                            const offcanvasElement = document.getElementById('offcanvasNavbar');
                                            if (offcanvasElement) {
                                                const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
                                                if (closeButton) {
                                                    closeButton.click();
                                                }
                                            }
                                            handleDashboard()
                                        }}>Dashboard</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav  flex-column-sm align-items-start">
                                <li className="nav-item mx-lg-2" id='btn-hide'>
                                    <NavLink className={({ isActive }) =>
                                        `nav-link mx-lg-3 ${isActive ? 'text-lght' : ''}`
                                    } to="register"
                                        onClick={(e) => {
                                            // Use data attribute to close offcanvas
                                            const offcanvasElement = document.getElementById('offcanvasNavbar');
                                            if (offcanvasElement) {
                                                const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
                                                if (closeButton) {
                                                    closeButton.click();
                                                }
                                            }
                                        }}>Sign Up</NavLink>
                                </li>
                                <li className="mx-lg- align-items-center">
                                    <div className="border-start mx-2 mt-3" style={{ height: '11px', color: 'rgba(0, 0, 0, .3)' }}></div>
                                </li>
                                <li className="nav-item mx-lg-2">
                                    <a
                                        href="#"
                                        className="nav-link mx-lg-3"
                                        data-bs-toggle="modal"
                                        data-bs-target={!isAuthenticated ? "#loginModal" : ""}
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default link behavior

                                            const offcanvasElement = document.getElementById("offcanvasNavbar");
                                            if (offcanvasElement) {
                                                const closeButton = offcanvasElement.querySelector("[data-bs-dismiss='offcanvas']");
                                                if (closeButton) {
                                                    closeButton.click();
                                                }
                                            }

                                            if (isAuthenticated) {
                                                // Logout logic (example: clearing auth state)
                                                handleLogout() // Clear token from storage
                                                alert("You have been logged out.");
                                                window.location.reload(); // Refresh to update UI
                                            }
                                        }}
                                    >
                                        {/* <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"></span> */}
                                        {isAuthenticated ? "Logout" : "Login"}
                                    </a>
                                </li>

                            </ul>
                            <form className="d-flex mx-lg-3 d-none" id='small-screen-button1'>
                                <NavLink to='/register'>
                                    <button className="btn btn-outline-light btn-sml-1 w-100" type="submit" onClick={(e) => {
                                        // Use data attribute to close offcanvas
                                        const offcanvasElement = document.getElementById('offcanvasNavbar');
                                        if (offcanvasElement) {
                                            const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
                                            if (closeButton) {
                                                closeButton.click();
                                            }
                                        }
                                    }}>Sign up</button>
                                </NavLink>

                            </form>
                            <form className="d-flex mx-lg-3  " id='small-screen-button2'>
                                <button className="btn btn-outline-light btn-sml-2  w-100" id='' type="submit">Hire Tanlent</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal />
        </>

    )
}

export default Navbar