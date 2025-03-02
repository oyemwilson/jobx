import React from 'react'
import Pagination from '../../../components/Pagination'

const AdminAlert = () => {
    
    return (
        <div>
            <div className='m-5'>
                <div className="fs-1">
                    <p> Send Message</p>
                </div>
                <div className="  card pt-2 my-5 rounded-5 ">
                    <form className='  p-5'>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className='fw-bold'>Subject*</label>
                            <input type="email" className="form-control mt-3" id="" aria-describedby="emailHelp" placeholder="Enter Subject" />
                        </div>
                        <div className="contact-form-group form-group">
                            <label for="inputAddress2" className='fw-bold'>Body</label>
                            <textarea type="text" className=" form-control  " style={{ height: '200px' }} id="inputAddress2" placeholder="Your Message*" />
                        </div>
                        <div className="d-flex row align-items-center mt-5">
                            <div className="col-lg-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    <label className="form-check-label" for="inlineRadio1">Employer</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    <label className="form-check-label" for="inlineRadio2">Applicant</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    <label className="form-check-label" for="inlineRadio3">All</label>
                                </div>

                            </div>
                            <div className="col-lg-6 text-end">
                                <button type="submit" className="btn text-light w-30 login-submit  fs-5 me-4 rounded-5 px-4">Send</button>

                            </div>
                        </div>



                    </form>
                </div>
                <div>
                    <div className="employer-dash-body m-5">
                        <div className="dashheader mb-5">
                            <div className='mt-5'>
                                <div className="fs-1">
                                    <p> Messages</p>
                                </div>
                                <ul className="divide-y divide-gray-200">
                                    <li
                                        style={{
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            backgroundColor: '#f3f4f6', // Example: Read styling
                                            borderBottom: '2px solid',
                                            borderBottomColor: '#86efac' // Example: Read border
                                        }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">John Doe</span>
                                            <span style={{ fontWeight: 'bold', color: '#6b7280' }}>Project Update</span>
                                        </div>
                                        <div style={{ marginTop: '8px', paddingLeft: '16px', borderLeft: '2px solid #d1d5db' }}>
                                            <p>The project is on track for completion next week.  All milestones have been met.</p>
                                            <p style={{ fontSize: '14px', color: '#6b7280' }}>Sent to: Development Team</p>
                                            <p style={{ fontSize: '14px', color: '#6b7280' }}>Sent at: October 27, 2023 9:00 AM</p>
                                        </div>
                                    </li>
                                    <li
                                        style={{
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            backgroundColor: '#ffffff', // Example: Unread styling
                                            borderBottom: '2px solid',
                                            borderBottomColor: '#fca5a5' // Example: Unread border
                                        }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">Jane Smith</span>
                                            <span style={{ fontWeight: 'bold', color: '#000000' }}>Meeting Request</span>
                                        </div>
                                        <div style={{ marginTop: '8px', paddingLeft: '16px', borderLeft: '2px solid #d1d5db' }}>
                                            <p>Please let me know your availability for a quick meeting to discuss the new design proposals.</p>
                                            <p style={{ fontSize: '14px', color: '#6b7280' }}>Sent to: Design Team</p>
                                            <p style={{ fontSize: '14px', color: '#6b7280' }}>Sent at: October 26, 2023 2:30 PM</p>
                                        </div>
                                    </li>
                                    <li
                                        style={{
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            backgroundColor: '#f3f4f6', // Example: Read styling
                                            borderBottom: '2px solid',
                                            borderBottomColor: '#86efac' // Example: Read border
                                        }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">David Lee</span>
                                            <span style={{ fontWeight: 'bold', color: '#6b7280' }}>Bug Report</span>
                                        </div>
                                        <div style={{ marginTop: '8px', paddingLeft: '16px', borderLeft: '2px solid #d1d5db' }}>
                                            <p>Found a minor bug on the user profile page. Details are attached.</p>
                                            <p style={{ fontSize: '14px', color: '#6b7280' }}>Sent to: QA Team</p>
                                            <p style={{ fontSize: '14px', color: '#6b7280' }}>Sent at: October 25, 2023 11:15 AM</p>
                                        </div>
                                    </li>
                                </ul>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAlert