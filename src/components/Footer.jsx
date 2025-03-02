import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <hr />
            </div>
            <footer className=" text-black pt-5 ">

                <div className="container text-center text-md-start">
                    <div className="row">
                        {/* About Section */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">About Us</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                            <p>
                                JobX connects businesses with skilled freelancers worldwide. Find top talent for any project, from writing and design to programming and marketing. Hire quickly and easily, and pay securely through our platform.
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Quick Links</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                            <p>
                                <a href="#!" className="text-black text-decoration-none">
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-black text-decoration-none">
                                    Jobs
                                </a>
                            </p>
                            <p>
                                <a href="/contact" className="text-black text-decoration-none">
                                    Contact
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-black text-decoration-none">
                                    Dashboard
                                </a>
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                            <p>
                                <i className="fas fa-envelope me-2"></i> info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-2"></i> +1 234 567 890
                            </p>
                            <p>
                                <i className="fas fa-map-marker-alt me-2"></i> 123 Main St, City, Country
                            </p>
                        </div>

                        {/* Social Media Section */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Follow Us</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                            <div>
                                <a href="#!" className="text-white me-4">
                                    <i className="fa-brands fa-whatsapp" style={{ color: 'black' }}></i>
                                </a>
                                <a href="#!" className="text-white me-4">
                                    <i className="fa-regular fa-envelope" style={{ color: 'black' }}></i>
                                </a>
                                <a href="#!" className="text-white me-4">
                                    <i className="fa-brands fa-x-twitter" style={{ color: 'black' }}></i>
                                </a>
                                <a href="#!" className="text-white me-4">
                                    <i className="fa-brands fa-instagram" style={{ color: 'black' }}></i>
                                </a>
                                {/* <a href="#!" className="text-white me-4">
                <FaFacebook size={24} />
              </a>
              <a href="#!" className="text-white me-4">
                <FaTwitter size={24} />
              </a>
              <a href="#!" className="text-white me-4">
                <FaInstagram size={24} />
              </a>
              <a href="#!" className="text-white me-4">
                <FaLinkedin size={24} />
              </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white p-3" style={{ backgroundColor: "#122620" }}>
                    © {new Date().getFullYear()} JobX. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer