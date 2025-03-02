import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../../css/contactpage/contactform.css'

const ContactForm = () => {
    return (
        <>
            <div className="container" id='contact-form'>
                <div className=' d-flex row justify-content-center align-items-center text-center' >
                    <div className='col-lg-4 col-md-12 col-sm-12 text-center'>
                        <div className='contact-svg-container'>
                            <img className="contact-svg" src="assets/images/location.svg" alt="Card image cap" style={{ objectFit: 'cover' }} />
                        </div>
                        <p className='display-6'>Our Address</p>
                        <p>Bass Hill Plaza Medical Centre <br />
                            Sydney, Australia</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 '>
                        <div className='contact-svg-container'>
                            <img className="contact-svg" src="assets/images/message.svg" alt="Card image cap" style={{ objectFit: 'cover' }} />
                        </div>
                        <p className='display-6'>Contact Info</p>
                        <p>Open a chat or give us call at <br />
                            310.841.5500</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 '>
                        <div className='contact-svg-container'>
                            <img className="contact-svg" src="assets/images/chat-icon.svg" alt="Card image cap" style={{ objectFit: 'cover' }} />
                        </div>
                        <p className='display-6'>Live Support</p>
                        <p>live chat service <br />
                            310.841.5500
                        </p>
                    </div>
                </div>
                <p className='display-2 text-center m-5'> Get in touch </p>
                <form className='m-5'>
                    <div className="row justify-content-between form-sm-column ">
                        <div className="contact-form-group form-group col-md-5 col-sm-12 ">
                            <label for="inputEmail4">Name*</label>
                            <input type="email" className="contact-form-control form-control" id="inputEmail4" placeholder="Your Name*" />
                        </div>
                        <div className="contact-form-group form-group col-md-5 col-sm-12">
                            <label for="inputPassword4">Email*</label>
                            <input type="password" className="contact-form-control form-control" id="inputPassword4" placeholder="Email Address*" />
                        </div>
                    </div>
                    <div className="contact-form-group form-group">
                        <label for="inputAddress">Subject(optional)</label>
                        <input type="text" className="contact-form-control form-control" id="inputAddress" placeholder="Write Your Subject Here" />
                    </div>
                    <div className="contact-form-group form-group">
                        <label for="inputAddress2">Message*</label>
                        <textarea type="tet" className="contact-textarea-control form-control" style={{height: '50px'}} id="inputAddress2" placeholder="Your Message*" />
                    </div>

                    <button type="submit" className="btn btn-primay w-100 mt-5 p-3" style={{ backgroundColor: '#122620', color: "white" }}>Send Message</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm