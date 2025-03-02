import React from 'react'
import Otp from '../sections/register/Otp'
import RegisterBanner from '../sections/register/RegisterBanner'

const OneTimePassword = () => {
    return (
        <div>
            <RegisterBanner />
            <Otp />
        </div>
    )
}

export default OneTimePassword