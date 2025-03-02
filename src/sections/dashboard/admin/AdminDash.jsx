import axios from 'axios';
import React, { useEffect } from 'react'
import { API_BASE_URL } from '../../../config/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../actions/UserActions';

const AdminDash = () => {
    const dispatch = useDispatch ();
      const token = useSelector ((state) => state.user.user.token)


// 
 
    useEffect(() => {
        dispatch(fetchUsers(token))
    },[dispatch])

  return (
    <div>
        <div className="">
                <div className="employer-dash-body m-5">
                    <div className="dashheader mb-5">
                        <div className=''>
                            <div className="fs-1">
                                <p> Dashboard</p>
                            </div>
                            <div className="card dashboard-card py-4">
                                <div className="d-flex row align-items-center justify-content-around text-center">
                                    <div className="col me-2">
                                        <div className="row">
                                            <h1>0</h1>
                                            <p className='fw-lighter'>Notification</p>
                                        </div>
                                    </div>
                                    <div className="col text-center justify-content-center">
                                        <i className="fa-regular text-center fa-user fs-3 p-3 dashcard-icon" style={{ color: "#000000" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card dashbottom-card mt-5 rounded-5">
                        <p className='fs-3 ps-4 pt-3 mb-0'> Notifications </p>
                        <hr />
                        <div className="px-5 py-2 d-flex">
                            <div className="col me-2">
                                <div className="row text-center">
                                    <p>No new Notification</p>
                                    {/* <p className='mb-0 fw-lighter'>Software Dev</p>
                                    <p className=' fw-lighter'>applied</p> */}
                                </div>
                            </div>
                            {/* <div className="col me-2 text-end">
                                <div className="dropdown">
                                    <a className="btn btn-white drpdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-ellipsis-vertical" style={{ color: "#000000" }}></i> 
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#ViewJobModal"><i className="fa-regular fa-eye pe-3" style={{ color: "#000000" }}></i>View Job</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>

            </div>


    </div>
  )
}

export default AdminDash