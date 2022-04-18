import React from 'react';
import Destinations from '../Destinations/Destinations';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='text-center my-5'>
                <h2>For Your Next Tour Destination</h2>
                <h4>My services are</h4>
            </div>
            <Destinations></Destinations>

        </div>
    );
};

export default Home;