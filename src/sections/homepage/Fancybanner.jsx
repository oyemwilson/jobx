import React from 'react'
import styles from '../../css/landingpage/fancybanner.css'
const Fancybanner = () => {
    return (
        <>
            <div className="fancy-banner">
                <div className="container mt-5 mb-5">
                    <h1 className='fancy-header display-2'data-aos="fade-up">Trusted by leading startups.</h1>
                    <div className='d-flex row justify-content-between text-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                            <div className="fancy-box ">
                                <img className=" " src="assets/images/monday.webp" alt='' />
                                <p className='display-6'>“Seattle opera simplifies Performance planning with jobx eSignature.”</p>
                                <p>Mark George: Marketing chief</p>
                                <hr className="my-4 opacity-100" />
                                <div className='d-flex align-items-center justify-content-between' id='rating'>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <p className='fs-'>4.9 Amazing</p>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6 text-end'>
                                        <p><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className="fancy-box">
                                <img className=" " src="assets/images/shipbob.webp" alt='' />
                                <p className='display-6'>“Seattle opera simplifies Performance planning with jobx eSignature.”</p>
                                <p>Patrick Ace: Marketing chief</p>
                                <hr className="my-4 opacity-100" />
                                <div className='d-flex align-items-center justify-content-between' id='rating'>
                                    <div className='col-lg-6 col-md-6 col-sm-6 '>
                                        <p className='fs-'>4.9 Amazing</p>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6 text-end'>
                                        <p><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i><i className="fa-solid fa-star" style={{ color: '#122620' }}></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fancybanner