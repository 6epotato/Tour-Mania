import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    return (
        <div>
            <h1>This is service detail</h1>
            <div className='text-center'>
                <Link to={'/checkout'}>
                    <button className='btn btn-primary'>Book this plan</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;