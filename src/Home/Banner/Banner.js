import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import coxbazar from "../../../src/images/Banner/cox-bazar.jpg"
import saintmartine from "../../../src/images/Banner/saint-martin.jpg"
import bandarban from "../../../src/images/Banner/bandarban.jpg"
import sylhet from "../../../src/images/Banner/sylhet.jpg"
import './Banner.css'

const Banner = () => {
    return (
        <Carousel className='banner'>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={coxbazar}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Cox-Bazar</h3>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={saintmartine}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>St. Martin's Island</h3>
                    <p>St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula </p>
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