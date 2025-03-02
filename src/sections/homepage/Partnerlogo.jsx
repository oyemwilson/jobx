import React from 'react'
import styles from '../../css/landingpage/partnerlogo.css'

const Partnerlogo = () => {
    return (
        <div>
            <div className="container mt-5 mb-5" id='logo'>
                <div className="logos d-flex justify-content-around align-items-center">
                    <img src='assets/images/dribble-logo.webp' alt='' />
                    <img src='assets/images/google-word.webp' alt='' />
                    <img src='assets/images/shipob-word.webp' alt='' />
                    <img src='assets/images/vine-word.webp' alt='' />
                    <img src='assets/images/slack-logo.webp' alt='' />
                </div>
                <hr className="my-4 opacity-100" />
            </div>
        </div>
    )
}

export default Partnerlogo