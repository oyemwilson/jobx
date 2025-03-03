import React from 'react'
import DeleteAccount from '../../../components/modals/DeleteAccount'
import ApplicantDash from '../../../sections/dashboard/applicant/ApplicantDash'
import ApplicantAsides from '../../../sections/dashboard/applicant/ApplicantAsides'

const DashboardBody = () => {
  return (
    <>
       <div className="">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-0 col-sm-0 pb-3 pt-5 dashboard-side-panel">
          <div className="fixed-aside">
              <ApplicantAsides />
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 mb-3 ">
            <div className="dashboard pt-5  pb-3">
              <ApplicantDash />
            </div>
          </div>
          <DeleteAccount />
        </div>
      </div>
    </>
  )
}

export default DashboardBody