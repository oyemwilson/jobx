import React from 'react'
import ApplicantAsides from '../../../sections/dashboard/applicant/ApplicantAsides'
import Joblisting from '../../../sections/dashboard/applicant/Joblisting'
import DeleteAccount from '../../../components/modals/DeleteAccount'

const JobAlert = () => {
  return (
    <div>
         <div className="">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-0 col-sm-0 mb-3 mt-5">
          <div className="fixed-aside">
              <ApplicantAsides />
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 mb-3 ">
            <div className="dashboard pt-5  pb-3">
              <Joblisting />
            </div>
          </div>
          <DeleteAccount />
        </div>
      </div>
    </div>
  )
}

export default JobAlert