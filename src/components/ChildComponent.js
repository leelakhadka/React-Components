import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ChildPublisherComponent from "./ChildPublisherComponent";
import ChildSubscriberComponent from "./ChildSubscriberComponent";
import TableOfContents from "./TableOfContents";

function ChildComponent({ parentPropertyShipments , childCallbackShipmentData}) {
 

  const handleCallbackChildToParentDataFunction = (childData) =>{
    childCallbackShipmentData(childData)
}

  return (
    <Container>
           <h1 >Overview of Components, Props and callback functions</h1>
           <TableOfContents />

            <br />
            <br />
            <br />
            <h1 >Shipments Demo</h1>
            <Card border="primary" bg = "secondary" className="container-fluid d-flex justify-content-center">
                <Card.Body>
                    <Card.Title>Input Shipment</Card.Title>
                    <ChildSubscriberComponent childToParentDataUsingCallback={handleCallbackChildToParentDataFunction}/>
                </Card.Body>
            </Card>


            <br />
            <Card border="primary" bg = "secondary" className="container-fluid d-flex justify-content-center">
                <Card.Body>
                    <Card.Title>Output Shipments</Card.Title>
                    <ChildPublisherComponent  parentToChildData={parentPropertyShipments}/>
                </Card.Body>
            </Card>
    </Container>
  );
}

export default ChildComponent;
