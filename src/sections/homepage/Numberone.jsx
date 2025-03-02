import React from 'react'
import styles from '../../css/landingpage/numberone.css'

const Numberone = () => {
    return (
        <div>
            <div className="numberone p-5 pt-4 bg-light">
                <div className="container">
                    <div className="d-flex row mt-5 justify-content-around align-items-center">
                        <div className='col-lg-7 col-md-6 col-sm-12 '>
                            <div className="number-text">
                                <p className='display-2'> Number one job portal</p>
                                <p>Signup and start find your job or talents.</p>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-12 '>
                            <div className="number-button">
                                <a href="default.asp" className='numberbutton1 w-40' target="_blank">Looking for job</a>
                                <a href="default.asp" className='numberbutton2 ms-2 w-40' target="_blank">Post job</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numberone