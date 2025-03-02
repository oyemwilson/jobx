import React from 'react'

const DeleteAccount = () => {
    return (
<div 
    className="modal fade delete-modal" 
    id="DeleteModal" 
    tabIndex="-1" 
    aria-labelledby="staticBackdropLabel" 
    aria-hidden="true"
    data-bs-backdrop="static"
>
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content loginmodal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="container text-center pb-4">
                    <h1>Are you sure</h1>
                    <p className='pt-2'>Are you sure you want to send request to delete your account? All data will be lost.</p>
                    <button 
                        type="submit" 
                        className="btn text-light w-30 login-submit mt-5 me-4 rounded-5 px-5"
                    >
                        Yes
                    </button>
                    <button 
                        type="button" 
                        className="btn text-success w-30 rounded-5 px-4 mt-5 "
                        data-bs-dismiss="modal"
                    >
                        Cancel
                    </button>         
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default DeleteAccount