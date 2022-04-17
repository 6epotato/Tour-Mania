import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import mountfuji from "../../../src/images/Banner/mountfuji.jpg"
import hawai from "../../../src/images/Banner/hawai.jpg"
import bandarban from "../../../src/images/Banner/bandarban.jpg"
import sylhet from "../../../src/images/Banner/sylhet.jpg"

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={mountfuji}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3> Mount Fuji </h3>
                    <p>Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hawai}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Hawaii</h3>
                    <p>Hawaii is a state in the Western United States, located in the Pacific Ocean about 2,000 miles from the U.S. mainland. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bandarban}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Bandarban</h3>
                    <p>Bandarban is the pious hub of Theravada Buddhism practiced by tribal communities like Marma or Mogh. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sylhet}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Sylhet</h3>
                    <p>Sylhet is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal, now a major pilgrimage site near Dargah Gate. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;