import React from 'react'
import styles from '../../css/landingpage/collaborations.css'

const Collaborations = () => {
  return (
    <>
      <div className="container" id='orbit-section'>
        <div className=' d-flex row justify-content-between align-items-center' id='collaboration-container'>
          <div className='col-lg-5 col-md-12 col-sm-12 '>
            <div className="circle-container" data-aos="fade-right">
              <div className="center-logo">Jobx</div>
              <div className="orbit">
                <div className="floating-logo" style={{ "--angle": "0deg" }}>
                  <img className="floating-logo1 " src="assets/images/google-logo.webp" alt='google' />
                </div>
                <div className="floating-logo" style={{ "--angle": "72deg" }}>
                  <img className="floating-logo2" src="assets/images/instagram-logo.webp" alt='instagram' />
                </div>
                <div className="floating-logo" style={{ "--angle": "144deg" }}>
                  <img className=" floating-logo3" src="assets/images/google-drive.webp" alt='drive' />
                </div>
                <div className="floating-logo" style={{ "--angle": "216deg" }}>
                  <img className=" floating-logo4" src="assets/images/hash-llogo.webp" alt='hash' />
                </div>
                <div className="floating-logo" style={{ "--angle": "288deg" }}>
                  <img className="floating-logo5 " src="assets/images/messenger.webp" alt='messenger' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-12 col-sm-12 ' data-aos="fade-left">
            <div className="circle-container-text">
              <p className='top-brand'>Top Brand</p>
              <p className='display-2'>Collaboration with Top Brands.</p>
              <p>We collaborate with a number of top tier companies on imagining the future of work, have a look.</p>
              <p>learn more <i className="fa-solid fa-arrow-right ms-1"></i></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collaborations