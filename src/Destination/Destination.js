import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Destination.css"

const Destination = ({ destination }) => {
    const { name, img, description, price, } = destination;
    const navigate = useNavigate();

    const handleServiceDetail = price => {
        navigate(`/destination/${price}`)
    }


    return (
        <Container>
            <Row xs={1} md={2}>
                <Col>
                    <Card style={{ width: "300px" }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>$ {price}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button onClick={() => handleServiceDetail(price)} variant="outline-info">Checkout this package</Button>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );



    // return (
    //     <div className=''>
    //         <div className='desitnation-card'>
    //             <Card className="bg-dark text-white">
    //                 <Card.Img src={img} alt="Card image" />
    //                 <Card.ImgOverlay>
    //                     <Card.Title>{name}</Card.Title>
    //                     <Card.Text>$ {price}</Card.Text>
    //                     <Card.Text>
    //                         {description}
    //                     </Card.Text>
    //                     <Button onClick={() => handleServiceDetail(id)} className='service-detail' variant="link">Check This package</Button>
    //                 </Card.ImgOverlay>
    //             </Card>
    //         </div>
    //     </div>
    // );
};


export default Destination;