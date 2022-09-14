import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function InnerChildPublisherComponent({ shipmentProperty }) {
    return (
        <Col>
            <Card border="primary" bg = "secondary" className="container-fluid d-flex justify-content-center">
                <Card.Body>
                    <Card.Text>TrackingNumber: {shipmentProperty.trackingNumber}</Card.Text>
                    <Card.Text>ShipToPerson: {shipmentProperty.shipToPerson}</Card.Text>
                    <Card.Text>ShipToAddress: {shipmentProperty.shipToAddress}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default InnerChildPublisherComponent;