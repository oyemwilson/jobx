import React from 'react'
import Pagination from '../../../components/Pagination'

const EmployMessage = () => {
    return (
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

    )
}

export default EmployMessage