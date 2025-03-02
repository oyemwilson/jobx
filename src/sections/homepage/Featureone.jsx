import React from 'react'
import styles from '../../css/landingpage/featureone.css'


const Featureone = () => {
    return (
        <>
            <section className="text-feature-one position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80 pb-180 xl-pb-150">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-5 order-lg-last">
                            <div className="ps-xxl-4 wow fadeInRight mt-5 mb-sm-5 talent-text" data-aos="fade-left">
                                <div className="title-one">
                                    <h2 className='display-4' style={{color: "#122620"}}>Get over 50.000+ talented experts in jobi.</h2>
                                </div>
                                <p className="mt-40 md-mt-20 mb-40 md-mb-20 ">
                                    A full hybrid workforce management tools are yours to use, as
                                    well as access to our top 1% of talent.{" "}
                                </p>
                                <div className="list-style-one style-none">
                                    <p><i className="fa-solid fa-check me-2" style={{color: "#122620"}}></i>Seamless searching</p>
                                    <p><i className="fa-solid fa-check me-2" style={{color: "#122620"}}></i>Get top 3% experts for your project</p>
                                    <p><i className="fa-solid fa-check me-2" style={{color: "#122620"}}></i>Protected payments system</p>
                                </div>
                                <div href='/register' className="btn-one lg mt-50 md-mt-30">
                                    Post a Job
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-11 m-auto order-lg-first">
                            <div className="img-data position-relative pe-xl-5 me-xl-5 md-mt-50">
                                <div className="row">
                                    <div className="col-md-6 col-sm-8 col-0">
                                        <img src='assets/images/talent_2.webp' alt="man img" className="lazy-img img01 img-fluid" />
                                    </div>
                                    {/* <div className="col-md-3 col-sm-8 col-10 pe-5">
                                        <img src='assets/images/talent_1.webp' alt="man img" className="lazy-img img01" />
                                    </div> */}
                                </div>
                                <div className="row mt-4">

                                    <div className="col-md-4 col-5">
                                        <img
                                            src='assets/images/talent_3.webp'
                                            alt="girl img"
                                            className="lazy-img img-fluid img02 mt-35"
                                        />
                                    </div>
                                    <div className="col-md-6 col-7">
                                        <img
                                            src='assets/images/talent_4.webp'
                                            alt="man-img-2"
                                            className="lazy-img img-fluid img01 mt-35"
                                        />
                                    </div>                                
                                    <div className='position-r'>
                                        <img
                                            src='assets/images/talent_1.webp'
                                            alt="screen_3-img"
                                            className="lazy-img shapes img-fluid screen03 wow fadeInUp" data-aos="fade-left"
                                            id='top-right-talent'
                                        />
                                        <img
                                            src='assets/images/talent_6.webp'
                                            alt="screen_2-img"
                                            className="lazy-img shapes img-fluid screen02 wow fadeInUp"data-aos="fade-up"
                                            id='mid-right-talent'
                                        />
                                        <img
                                            src='assets/images/talent_5.webp'
                                            alt="screen_1-img"
                                            className="lazy-img shapes img-fluid screen01 wow fadeInRight"data-aos="fade-up"
                                            id='bottom-left-talent'
                                        />

                                        <img
                                            src='assets/images/talent_7.svg'
                                            alt="shape"
                                            className="lazy-img shapes img-fluid shape_01"
                                            id='bottom-right-talent'
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featureone