import React from 'react';
import google from "../../../images/logo/google.png"
import facebook from "../../../images/logo/facebook.png"


const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'> or</p>
                <div style={{ height: "1px" }} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button className='btn btn-danger w-50 d-block mx-auto'>
                    <img style={{ width: '40px' }} className='px-2' src={google} alt="" />
                    Google Sign In</button>
            </div>
            <div className='my-3'>
                <button className='btn btn-primary w-50  d-block mx-auto'>
                    <img className='px-2' src={facebook} alt="" />
                    Facebook Sign In</button>
            </div>

        </div>
    );
};

export default SocialLogin;