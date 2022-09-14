import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function ChildSubscriberComponent({ childToParentDataUsingCallback }) {
    const [trackingNumber, setTrackingNumber] = useState("");
    const [shipToPerson, setShipToPerson] = useState("");
    const [shipToAddress, setShipToAddress] = useState("");

    const handleTrackingNumber = (e) => {
      setTrackingNumber(e.target.value);
    }
    const handleShipToPerson = (e) => {
      setShipToPerson(e.target.value);
    }
    const handleShipToAddress = (e) => {
      setShipToAddress(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            trackingNumber: trackingNumber,
            shipToPerson: shipToPerson,
            shipToAddress: shipToAddress
          })
        }
        
        
        fetch("http://localhost:3002/shipments", config)
          .then(res => res.json())
          .then(newShipment => childToParentDataUsingCallback(newShipment))
        
          setTrackingNumber("");
          setShipToPerson("");
          setShipToAddress("");
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Tracking Number"     onChange={handleTrackingNumber} value={trackingNumber} />
                  <Form.Control type="text" placeholder="Ship To Person Name" onChange={handleShipToPerson}   value={shipToPerson}   />
                  <Form.Control type="text" placeholder="Ship To Address"     onChange={handleShipToAddress}  value={shipToAddress}  />
                </Form.Group>
                
                <Button type="submit">Add Shipment</Button>
            </Form>
        </Container>
    )
}

export default ChildSubscriberComponent;