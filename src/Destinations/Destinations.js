import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';
import "./Destinations.css"

const Destinations = () => {
    const [destinaions, setDestinations] = useState([])
    useEffect(() => {
        fetch('place.json')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    return (
        <div>
            <div className="places">
                <div className="places-container">
                    {
                        destinaions.map(destination => <Destination key={destination.id}
                            destination={destination}
                        ></Destination>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Destinations;