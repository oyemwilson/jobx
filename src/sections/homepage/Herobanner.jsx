import React, { useEffect } from 'react';
import styles from '../../css/landingpage/herobanner.css'
import { Container } from 'react-bootstrap';


const Herobanner = () => {
    return (
        <>
            <Container>
            <div ></div>
                <div className='hero-section '>
                    <div className='d-flex row justify-content-around text-center mx-auto'  id='hero-card1'>

                        <div className='hero-text col-lg-6 col-md-6 col-sm-12 text-center '>
                            <div  data-aos="fade-up">
                            <h1 className="align-items-center text-start" id='landing-text'
                            >Find & Hire <br /><span className='landingtext-green'>Top 5% of expert on jobx.</span></h1>
                            <p className="text-start mt-4 h3" data-wow-delay="0.4s">We delivered blazing fast & striking work solution</p>
                            <p className="text-start mt-4 h6">Discover and secure the top 5% of expert professionals on JobX. We are dedicated to delivering blazing-fast, striking, and highly effective work solutions.</p>
                            </div>
                            {/* <div className='input-group mb-3 mt-4' data-aos="fade-up" id='search-box'>
                                <input type="text" className="form-control" placeholder="Search for any services..." aria-label="Service search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary search-button" type="button">Search</button>
                                </div>
                            </div> */}
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 w-50%' id='hero-card2'>
                            <div className=' position-relative d-flex justify-content-center align-items-center' id='hero-images'>
                                <img src='assets/images/shape_01.svg' style={{ color: 'blue' }} alt="" srcSet="" className='background_img_1 img-fluid w-80' />
                                <img src='assets/images/img_01.jpg' style={{ color: 'blue' }} alt="" srcSet="" id='hero_img_1' className='overlay_img_1 rounded  ' />
                            </div>
                        </div>

                    </div>
                    <img src='assets/images/shape_02.svg' style={{ color: 'blue' }} alt="" srcSet="" className='top-right' />
                    <img src='assets/images/shape_03.svg' style={{ color: 'blue' }} alt="" srcSet="" className='bottom-left' />
                </div>
            </Container>
        </>
    );
};
export default Herobanner