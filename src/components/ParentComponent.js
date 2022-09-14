import React, {useEffect, useState} from "react";
import ChildComponent from "./ChildComponent";
import Container from 'react-bootstrap/Container';

function ParentComponent() {

  const [shipments, setShipments] = useState([])

  useEffect(() => {
    fetch("http://localhost:3002/shipments")
      .then(response => response.json())
      .then(shipmentsArrayResponse => setShipments(shipmentsArrayResponse))
  }, [])


  function addShipment(childData){
    setShipments([...shipments, childData])
  }


  return (
    <Container>
      <ChildComponent parentPropertyShipments={shipments}  childCallbackShipmentData={addShipment}/>
    </Container>
  );
}

export default ParentComponent;
