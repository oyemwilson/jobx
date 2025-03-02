import React from 'react'

const ChangePassword = () => {
    return (
        <div className='m-5'>
            <div className="fs-1">
                <p> Change Password</p>
            </div>
            <div className="  card pt-2 my-5 rounded-5 ">
                <form className='  p-5'>
                    <div class="form-group mt-5">
                        <label for="exampleInputEmail1" className='fw-bold'>Old Password*</label>
                        <input type="email" class="form-control mt-3" id="" aria-describedby="emailHelp" placeholder="" />
                    </div>
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1" className='fw-bold'>New Password*</label>
                        <input type="email" class="form-control mt-3" id="" aria-describedby="emailHelp" placeholder="" />
                    </div>
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1" className='fw-bold'>Confirm Password*</label>
                        <input type="email" class="form-control mt-3" id="" aria-describedby="emailHelp" placeholder="" />
                    </div>

                    <button type="submit" class="btn text-light w-30 login-submit mt-5 me-4 rounded-5 px-4">Save & Update</button>

                </form>
            </div>
        </div>
    )
}

export default ChangePassword