import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className=' d-flex justify-content-center'>
            <Card className="text-center m-4">
                <Card.Header>Question-1</Card.Header>
                <Card.Body>
                    <Card.Title>Difference between Authorization and Authentication</Card.Title>
                    <Card.Text>
                        Authentication is the porcess is verifying who some in is and Authorization is what specific application,data,files has access to . For example when you book a hotel from online and then goto that hotel then checeked your id and confirm your booking then they check about what feature you are booking like breakfast, dinner , swimming club etc. so hotel booking is Authentication   and access to features are Authorization
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center m-4">
                <Card.Header>Question-2</Card.Header>
                <Card.Body>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. It is used for Athentication and Authorization.I can use MongoDb,Auth0,Json Web Token fo authentication alternative.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center m-4">
                <Card.Header>Question-3</Card.Header>
                <Card.Body>
                    <Card.Title>What other services does firebase provide other than authentication</Card.Title>
                    <Card.Text>
                        There are many more thing provides firebase without authentication.like,
                        Cloud Firestore,Cloud Functions,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging,Dynamic Links,Remote Config etc.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;