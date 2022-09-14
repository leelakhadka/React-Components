import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InnerChildPublisherComponent from "./InnerChildPublisherComponent";

function ChildPublisherComponent({parentToChildData}) {

  const mappedInnerChildPublisherComponents = parentToChildData.map(shipment => <InnerChildPublisherComponent key={shipment.id} shipmentProperty={shipment}/>);

  return (
      <Container fluid>
          <Row>
              {mappedInnerChildPublisherComponents}
          </Row>
      </Container>
  );
}

export default ChildPublisherComponent;
