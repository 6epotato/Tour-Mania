import React from 'react';
import notFound from "../../src/images/NotFound/notFound.jpg"

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img style={{ width: "1000px" }} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;