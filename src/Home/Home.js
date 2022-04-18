import React from 'react';
import Destinations from '../Destinations/Destinations';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='text-center my-5'>
                <h2>Your Next Tour Destination</h2>
                <p>My services are</p>
            </div>
            <Destinations></Destinations>

        </div>
    );
};

export default Home;