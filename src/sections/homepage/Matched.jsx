import React from 'react'
import styles from '../../css/landingpage/matched.css'

const Matched = () => {
    return (
        <>
            <div className="match container p-3 pb-0 " data-aos="fade-up">
                <div className="d-flex row mt-5 justify-content-around align-items-center ">
                    <div className='col-lg-4 col-md-6 col-sm-12 order-2 order-lg-1 order-md-1 text-center'>
                        <div className="match-img">
                            <img src="assets/images/matched-img.webp" alt="" srcSet="" />
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 order-1 order-lg-2 order-md-2 text-md-left text-lg-left text-center'>
                        <div className="matched-text">
                            <p className='display-2'> Get your
                                <span className='landingtext-green'> Matched Jobs </span>in a few minutes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Matched