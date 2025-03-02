import React from 'react'
import styles from "../../css/jobpage/jobpage.css"

const JobBanner = () => {
    return (
        <div>
            <div className="job-banner text-center">
                <div className="container">
                    <p className='display-2'> Job Listing </p>
                    <p> We delivered blazing fast & striking work solution</p>
                    <div className="text-center d-flex justify-content-center">
                    <div className='input-group mb-3 mt-4 jobpage-search-form' id='search-bx'>
                        <input type="text" className="form-control jobpage-input-form" placeholder="Search for any services..." aria-label="Service search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary jobsearch-button" type="button">Search</button>
                        </div>
                    </div>
                    </div>
                </div>
                <img src='assets/images/shape_02.svg' style={{ color: 'blue' }} alt="" srcSet="" className='jobpage-top' />
                <img src='assets/images/shape_03.svg' style={{ color: 'black' }} alt="" srcSet="" className='jobpage-left' />
            </div>
        </div>
    )
}

export default JobBanner