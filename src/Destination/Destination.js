import React from 'react';
import { Card, Container } from 'react-bootstrap';
import "./Destination.css"

const Destination = ({ destination }) => {
    const { name, img, description, price } = destination;

    return (
        <div className=''>
            <Container></Container>
            <div style={{ width: 400, marginTop: 20, marginBottom: 20 }}>
                <Card className="bg-dark text-white">
                    <Card.Img src={img} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};


export default Destination;