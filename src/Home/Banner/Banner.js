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
                    className="d-block w-100"
                    src={mountfuji}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3> Mount Fuji </h3>
                    <p>Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters.A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity</p>
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
                    <p>Hawaii is a state in the Western United States, located in the Pacific Ocean about 2,000 miles from the U.S. mainland. It is the only state outside North America, the only state that is an archipelago, and the only state in the tropics.</p>
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
                    <p>Bandarban is the pious hub of Theravada Buddhism practiced by tribal communities like Marma or Mogh. Here you will find Buddha Dhatu Jadi, the largest Theravada Buddhist Temple of Bangladesh and the second biggest Buddha sculpture in the country. This Buddhist temple is called 'kyang' in the local language.</p>
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
                    <p>Sylhet is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal, now a major pilgrimage site near Dargah Gate. The tiny Museum of Rajas contains belongings of the local folk poet Hasan Raja. A 3-domed gateway stands at the 17th-century Shahi Eidgah, a huge open-air hilltop mosque built by Emperor Aurangzeb. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;