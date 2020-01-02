import axios from 'axios';
import * as React from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import {ILead} from "../../../services/Leads/api/Models/Lead";
import {PeopleChoice} from './people-choice';
import {StatusChoice} from './StatusChoice';

export class AddLead extends React.Component<any, ILead> {
  constructor(props: any) {
    super(props);
    this.state = {
      Created: new Date(),
      Name: '',
      ServerID: '',
      Status: 'New',
      Topic: '',
    };
  }
  public render() {
    return (<Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Choose name</Form.Label>
            <PeopleChoice CurrentSelection={this.CurrentSelection} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Topic</Form.Label>
            <Form.Control id="topic" value={this.state.Topic} onChange={this.UpdateBinding} placeholder="Enter topic" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Status</Form.Label>
            <StatusChoice CurrentSelection={this.CurrentStatus} />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={this.Save}>
          Submit
        </Button>
      </Form>
    </Container>)
  }

  private UpdateBinding = (event:any) => {
    switch (event.target.id)
    {
      case "topic":
        this.setState({Topic : event.target.value});
        break;
    }
  }

  private Save = (): void => {
    console.log(this.state);
    axios.post("http://localhost:65432/add/", this.state);
  };

  private CurrentSelection = (person: string) => {
    console.log(person);
    this.setState({ Name: person });
    console.log(this.state);
  }

  private CurrentStatus = (status: string) => {
    console.log(status);
    this.setState({ Status: status });
    console.log(this.state);
  }
}
