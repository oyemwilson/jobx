import React from 'react'
import styles from '../../css/landingpage/howitworks.css'

const HowItWorks = () => {
    return (
        <>
            <div className="how-to-section">
                
                <div className="container" id='how-to' data-aos="fade-up">
                    <h1 className='text-center mb-5 mt-5 display-2'> How It Works?</h1>
                    <div className="d-flex row mt-5 ">
                        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto mb-3" id='hiw-icon'><img alt="icon" loading="lazy" width="29" height="36" decoding="async" data-nimg="1" className="lazy-image" src="assets/images/howitworks1.svg" /></div>
                            <h2> Create Account</h2>
                            <p className='w-75 mx-auto'>It’s very easy to open an account and start your journey.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto mb-3" id='hiw-icon' ><img alt="icon" className="lazy-image" style={{ fill: "rgb(11, 217, 148)", stroke: "rgb(11, 217, 148)" }} src="assets/images/howitworks2.svg" /></div>
                            <h2> Create Account</h2>
                            <p className='w-75 mx-auto'>It’s very easy to open an account and start your journey.</p>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 text-center'>
                            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto mb-3" id='hiw-icon'><img alt="icon" loading="lazy" width="29" height="36" decoding="async" data-nimg="1" className="lazy-image" src="assets/images/howitworks3.svg" /></div>
                            <h2> Create Account</h2>
                            <p className='w-75 mx-auto'>It’s very easy to open an account and start your journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks