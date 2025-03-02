import React from 'react'
import Asides from '../../../sections/dashboard/employer/Asides'
import PostJob from '../../../sections/dashboard/employer/PostJob'
import DeleteAccount from '../../../components/modals/DeleteAccount'

const SubmitJob = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-0 col-sm-0 mb-3 mt-5">
          <div className="fixed-aside">
              <Asides />
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 mb-3 ">
            <div className="dashboard pt-5 pb-3">
              <PostJob/>
            </div>
          </div>
          <DeleteAccount />
        </div>
      </div>
    </>
  )
}

export default SubmitJob