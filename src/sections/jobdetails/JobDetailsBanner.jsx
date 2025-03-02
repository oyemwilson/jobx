import React from 'react'

const JobDetailsBanner = () => {
  return (
    <>
                    <div>
            <div className="job-details-banner text-center">
                <div className="container">
                    <p className='display-2'> Job Details </p>
                    <p className='h2 fw-lighter mb-o p-0' > company job details & requirements</p>
                    <div className="text-center d-flex justify-content-center invisible">
                    <div className='input-group mb-3 mt-4 jobpage-search-form' id='search-bx'>
                        <input type="text" className="form-control jobpage-input-form" placeholder="Search for any services..." aria-label="Service search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary jobsearch-button" type="button">Search</button>
                        </div>
                    </div>
                    </div>
                </div>
                <img src='assets/images/shape_02.svg' style={{ color: 'blue' }} alt="" srcSet="" className='jobpage-top' />
                <img src='assets/images/shape_03.svg' style={{ color: 'black' }} alt="" srcSet="" className='jobdetails-page-left' />
            </div>
        </div>
    </>
  )
}

export default JobDetailsBanner