import React from 'react'
import styles from '../../css/landingpage/expertone.css'

const Expertone = () => {
  return (
    <>
      <div className="expert">
        <div className='container'>
          <div className=''>
            <div className='' data-aos="fade-up">
              <h1 className='expert-card1-text display-2 '>Find the best talented<span><img src='assets/images/category_img1.svg' style={{ color: 'blue' }} alt="" srcSet="" className='expert_image1' /></span>  expert in jobi.</h1>
            </div>
            <div className=''>
              <p className='category-card2-text h5'></p>
            </div>
          </div>
          <div className='d-flex row mt-5 mx-auto'>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="expert-card card mx-auto" id="" style={{ width: "100%", height: "20rem" }}>
                <img className="expert-img img-fluid " src="assets/images/img_02.jpg" alt="Card image cap" style={{ objectFit: 'cover' }} />
              </div>
              <p className='fw-bold mt-3'>Juan Marco</p>
              <p>Java Developer</p>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-6 text-center'>
              <div className="expert-card card mx-auto" id="" style={{ width: "100%", height: "20rem" }}>
                <img className="expert-img img-fluid" src="assets/images/img_03.jpg" alt="Card image cap" style={{ objectFit: 'cover' }} />
              </div>
              <p className='fw-bold mt-3'>Elizabeth Walker</p>
              <p>Frontend Developer</p>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 text-center'>
              <div className="expert-card card mx-auto" id="" style={{ width: "100%", height: "20rem" }}>
                <img className="expert-img img-fluid" src="assets/images/img_04.jpg" alt="Card image cap" style={{ objectFit: 'cover' }} />
              </div>
              <p className='fw-bold mt-3'>Paul Christoper</p>
              <p>Call Center Agent</p>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 text-center'>
              <div className="expert-card card mx-auto" id="" style={{ width: "100%", height: "20rem" }}>
                <img className="expert-img img-fluid" src="assets/images/img_05.jpg" alt="Card image cap" style={{ objectFit: 'cover' }} />
              </div>
              <p className='fw-bold mt-3'>Juan Mata</p>
              <p>Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertone