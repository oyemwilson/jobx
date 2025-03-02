import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../../config/api';
import { useSelector } from 'react-redux';
import ViewUserModal from '../../../components/modals/ViewUserModal';
const ApplicantList = () => {
  const token = useSelector((state) => state.user.user.token)
  const { users, loading, error } = useSelector(state => state.fetchUsers);
  console.log(users)
  // console.log(users)
  const applicants = users.filter(user => user.role === "applicant");
const [selectedUser, setSelectedUser] = useState('')
const handleselectuser = (user) => {
  setSelectedUser(user)
}

  return (
    <>
      <div>
        <div>
          <div className='m-5'>
            <div className="d-flex">
              <div className="col">
                <div className="fs-1">
                  <p> Applicant List</p>
                </div>
              </div>
              {/* <div className="col text-end d-flex align-items-center justify-content-end">
          <p className="me-2 mb-0">sort:</p>
          <select className="form-select" style={{ width: '130px' }}>
            <option value="">New</option>
            <option value="Entry Level">Category</option>
            <option value="Mid Level">Job type</option>

          </select>
        </div> */}
            </div>
            <div className="  card py-2 rounded-5 ">
              <div className="container my-5 table-responsive-lg">
                <table class="table ">
                  <thead className='rounded-5' style={{ backgroundColor: "#F0F5F3" }}>

                    <tr className='table-success rounded-5'>
                      <th scope="col" className='text-success'>First Name</th>
                      <th scope="col" className='text-success'>Last Name</th>
                      <th scope="col" className='text-success'>Email</th>
                      <th scope="col" className='text-success'>Verified</th>
                      <th scope="col" className='text-success'>Action</th>
                    </tr>

                  </thead>
                  <tbody>
                    {applicants.map((user) => (
                      <tr key={user._id}>
                        <th scope="row">{user.firstName}</th>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.verified ? "Yes" : "No"}</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-white  fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fa-solid fa-ellipsis-vertical" style={{ color: "#000000" }}></i>
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#ViewUserModal" onClick={()=> handleselectuser(user)}>
                                  <i className="fa-regular fa-eye pe-3" style={{ color: "#000000" }}></i>View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#ViewJobModal">
                                  <i className="fa-solid fa-trash pe-3" style={{ color: "#000000" }}></i>Delete
                                </a>
                              </li>
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
        </div>
      </div>
      <ViewUserModal users={selectedUser}/>
    </>
  )
}

export default ApplicantList