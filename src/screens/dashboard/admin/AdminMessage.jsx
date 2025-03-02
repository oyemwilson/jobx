import React from 'react'
import AdminAlert from '../../../sections/dashboard/admin/AdminAlert'
import AdminAsides from '../../../sections/dashboard/admin/AdminAsides'

const AdminMessage = () => {
  return (
    <>
        <div>
         <div className="">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-0 col-sm-0 mb-3 mt-5">
          <div className="fixed-aside">
              <AdminAsides />
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 mb-3 ">
            <div className="dashboard pt-5  pb-3">
                <AdminAlert />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminMessage