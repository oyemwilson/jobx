import React from 'react'
import Asides from '../../../sections/dashboard/employer/Asides'
import PostedJobs from '../../../sections/dashboard/employer/PostedJobs'
import DeleteAccount from '../../../components/modals/DeleteAccount'


const EmployerJobs = () => {
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
              <PostedJobs />
            </div>
          </div>
          <DeleteAccount />
        </div>
      </div>
    </>
  )
}

export default EmployerJobs