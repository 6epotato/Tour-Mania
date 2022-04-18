import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { placeId } = useParams();
    return (
        <div>
            <h1 className='text-center my-5'>This is service will cost about {placeId} Taka</h1>
            <div className='text-center'>
                <Link to={'/checkout'}>
                    <button className='btn btn-info btn-style'>Book this plan</button>
                </Link>
            </div>
        </div >
    );
};

export default ServiceDetail;