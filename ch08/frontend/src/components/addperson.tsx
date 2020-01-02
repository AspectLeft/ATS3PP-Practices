import axios from 'axios';
import * as React from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import {IAddress} from '../../../services/Addresses/api/Models/Addresses';
import {IPerson} from "../../../services/People/api/Models/People";
import {AddressesChoice} from './addresses-choice';

export class AddPerson extends React.Component<any, IPerson> {
  private readonly defaultAddress : IAddress;
  constructor(props:any) {
    super(props);
    this.defaultAddress = {
      Line1: '',
      Line2: '',
      Line3: '',
      Line4: '',
      PostalCode: '',
      ServerID: '',
    };
    this.state = {
      Address: this.defaultAddress,
      FirstName: '',
      LastName: '',
      ServerID: '',
    };
  }

  public render() {
    return(
      <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First name</Form.Label>
            <Form.Control id="firstName" value={this.state.FirstName} onChange={this.UpdateBinding} placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last name</Form.Label>
            <Form.Control id="lastName" value={this.state.LastName} onChange={this.UpdateBinding} placeholder="Enter last name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            <Form.Label>Choose address</Form.Label>
            <AddressesChoice CurrentSelection={this.CurrentSelection} />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={this.Save}>
          Submit
        </Button>
      </Form>
    </Container>

    )
  }

  private UpdateBinding = (event:any) => {
    switch (event.target.id)
    {
      case "firstName":
        this.setState({FirstName : event.target.value});
        break;
      case "lastName":
        this.setState({LastName : event.target.value});
        break;
    }
  }

  private Save = (): void => {
    axios.post("http://localhost:31313/add/", this.state);
  };

  private CurrentSelection = (address: IAddress | null) => {
    if (address) {
      this.setState({ Address: address });
    } else {
      this.setState({ Address: this.defaultAddress });
    }
  }
}
