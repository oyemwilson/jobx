import React from 'react'
import Asides from '../../../sections/dashboard/employer/Asides'
import DashboardBody from '../../../sections/dashboard/employer/DashboardBody'
import DeleteAccount from '../../../components/modals/DeleteAccount'

const EmployerDashboard = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-0 col-sm-0 pb-3 pt-5 dashboard-side-panel">
          <div className="fixed-aside">
              <Asides />
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 mb-3 ">
            <div className="dashboard pt-5  pb-3">
              <DashboardBody />
            </div>
          </div>
          <DeleteAccount style={{ zIndex: 1050 }}/>
        </div>
      </div>
    </>
  )
}

export default EmployerDashboard