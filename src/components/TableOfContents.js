import Table from 'react-bootstrap/Table';

function TableOfContents() {
  const propsExample = "<ChildPublisherComponent  parentToChildData={parentPropertyShipments}/>";
  const callbackFunctionExample = "<ChildSubscriberComponent childToParentDataUsingCallback={handleCallbackChildToParentDataFunction}/>";
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Components</th>
          <th>Props</th>
          <th>Callback Functions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Components provide reusable bits of code. i.e they are independent meaning create a component once and reuse multiple times when needed.</td>
          <td>React Props are like function parameters/arguments in Javascript and attributes like div etc in HTML</td>
          <td>Reactjs allows one-way data binding, meaning passing data down the hierarchy from parent to child. To pass data from a child component to its parent, we can call a parent function from the child component with arguments.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Its easy to maintain code and debug while working with Components</td>
          <td>When you need to pass data from a parent component to child component, there is only one way of doing it using Props</td>
          <td>Create a callback function in the parent component. This callback function will get the data from the child component.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Components are basically serves the same purpose as JavaScript functions we have, they work in isolation and also return HTML using JSX functionality</td>
          <td>To send props into a component simply use the same syntax as we use HTML attributes</td>
          <td>Pass the callback function in the parent as a prop to the child component.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>There are two types of compoments, Function components and Class components. This blog provides a demo using Function components which is most widely used</td>
          <td><p>{propsExample}</p> in this ChildPublisherComponent element, parentToChildData is the React Props which is nothing but an attribute to the ChildPublisherComponent component (Function Component)</td>
          <td><p>{callbackFunctionExample}</p> in this ChildSubscriberComponent element, childToParentDataUsingCallback is the React callbackFunction, child component calls the parent callback function using its props</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableOfContents;