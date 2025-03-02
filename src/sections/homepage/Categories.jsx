import React from 'react'
import styles from '../../css/landingpage/categories.css'
import { Container } from 'react-bootstrap'

const Categories = () => {
    return (
        <>
            <div className="category">
                <Container>
                <div data-aos="fade-up">
                    <div className='d-flex row '>
                        <div className='col-lg-6 col-md-6 col-sm-12 '>
                            <h1 className='category-card1-text pt-0'>Most Demanding<span><img src='assets/images/category_img1.svg' style={{ color: 'blue' }} alt="" srcSet="" className='category_image1' /></span>  Categories.</h1>
                        </div>
                        <div className='category-text2 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center'>
                            <p className='category-card2-text h5'>Together with useful notifications, collaboration, insights, and improvement tip lorem etc.</p>
                        </div>
                    </div>
                    <div className='d-flex row mt-5'>
                        <div className='col-lg-2 col-md-4 col-sm-6 '>
                            <div className="category-card card mx-auto" id='card-fill'>
                                <div className=" card-body text-center py-3 px-3" >
                                    <h5 className="card-title py-3"><i className="fa-solid fa-pen"></i> </h5>
                                    <p className="card-text py-4">UI/UX Design</p>
                                    <h6 className="card-subtitle mt-3 text-muted">1k+ Jobs</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6 '>
                            <div className="category-card card mx-auto" >
                                <div className=" card-body text-center py-3 px-3" >
                                    <h5 className="card-title py-3"><i className="fa-solid fa-code"></i> </h5>
                                    <p className="card-text py-4">Development</p>
                                    <h6 className="card-subtitle mt-3 text-muted">12k+ Jobs</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6 '>
                            <div className="category-card card mx-auto" >
                                <div className=" card-body text-center py-3 px-3" >
                                    <h5 className="card-title py-3"><i className="fa-solid fa-phone"></i> </h5>
                                    <p className="card-text py-4">Telemarketing</p>
                                    <h6 className="card-subtitle mt-3 text-muted">2k+ Jobs</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6 '>
                            <div className="category-card card mx-auto" >
                                <div className=" card-body text-center py-3 px-3" >
                                    <h5 className="card-title py-3"><i className="fa-solid fa-bag-shopping"></i> </h5>
                                    <p className="card-text py-4">Marketing</p>
                                    <h6 className="card-subtitle mt-3 text-muted">11k+ Jobs</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6 '>
                            <div className="category-card card mx-auto" >
                                <div className=" card-body text-center py-3 px-3" >
                                    <h5 className="card-title py-3"><i className="fa-solid fa-i-cursor"></i> </h5>
                                    <p className="card-text py-4">Editing</p>
                                    <h6 className="card-subtitle mt-3 text-muted">9k+ Jobs</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6 '>
                            <div className="category-card card mx-auto" >
                                <div className=" card-body text-center py-3 px-3" >
                                    <h5 className="card-title py-3"><i className="fa-solid fa-file-invoice"></i> </h5>
                                    <p className="card-text py-4">Accountant</p>
                                    <h6 className="card-subtitle mt-3 text-muted">6k+ Jobs</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
            </div>
        </>
    )
}

export default Categories