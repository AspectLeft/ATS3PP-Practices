import * as React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Button from "reactstrap/lib/Button";
import {IPersonState} from "./State";
import FormValidation from "./FormValidation";
import {PersonRecord} from "./Types";
import {Database} from "./Database/Database";
import {PersonalDetailsTableBuilder} from "./PersonalDetailsTableBuilder";
import {IRecordState, RecordState} from "./RecordState";

interface IProps {
    DefaultState: IPersonState;
}

export default class PersonalDetails extends React.Component<IProps, IPersonState>{
    private defaultState: Readonly<IPersonState>;
    private readonly dataLayer: Database<PersonRecord>;
    private people: IPersonState[] = [];
    private canSave : boolean = false;
    constructor(props: IProps) {
        super(props);
        this.defaultState = props.DefaultState;
        this.state = props.DefaultState;
        this.dataLayer = new Database(new PersonalDetailsTableBuilder().Build());
    }

    private updateBinding = (event: any) => {
        switch (event.target.id) {
            case `firstName`:
                this.setState({FirstName: event.target.value});
                break;
            case `lastName`:
                this.setState({LastName: event.target.value});
                break;
            case `addr1`:
                this.setState({ Address1: event.target.value });
                break;
            case `addr2`:
                this.setState({ Address2: event.target.value });
                break;
            case `town`:
                this.setState({ Town: event.target.value });
                break;
            case `county`:
                this.setState({ County: event.target.value });
                break;
            case `postcode`:
                this.setState({ Postcode: event.target.value });
                break;
            case `phoneNumber`:
                this.setState({ PhoneNumber: event.target.value });
                break;
            case `dateOfBirth`:
                this.setState({ DateOfBirth: event.target.value });
                break;
        }
    };

    private userCanSave = (canSave: boolean) => {
        this.canSave = canSave;
    };

    private loadPeople = () => {
        this.people = new Array<PersonRecord>();
        this.dataLayer.Read().then(people => {
            this.people = people;
            this.setState(this.state);
        });
    };

    private setActive = (e: any) => {
        const person: string = e.target.value;
        const state = this.people.find((element: IPersonState) => {
            return element.PersonId === person;
        });
        if (state) {
            this.setState(state);
        }
    };

    private delete = (e: any) => {
        const person: string = e.target.value;
        this.DeletePerson(person);
    };

    private async DeletePerson(person: string) {
        const foundPerson = this.people.find((element: IPersonState) => {
            return element.PersonId === person;
        });
        if (!foundPerson) {
            return;
        }
        const personState: IRecordState = new RecordState();
        personState.IsActive = false;
        const state: PersonRecord = {...foundPerson, ...personState};
        // soft delete
        await this.dataLayer.Update(state);
        this.loadPeople();
        this.clear();
    }

    private clear = () => {
        this.setState(this.defaultState);
    };

    private savePerson = () => {
        if (!this.canSave) {
            alert('Cannot save this record with missing or incorrect items');
            return;
        }
        const personState: IRecordState = new RecordState();
        personState.IsActive = true;
        const state: PersonRecord = {...this.state, ...personState};
        if (state.PersonId === "") {
            state.PersonId = Date.now().toString();
            this.dataLayer.Create(state);
            this.loadPeople();
            this.clear();
        }
        else {
            this.dataLayer.Update(state).then(res => this.loadPeople());
        }
    };

    public render() {
        let people = null;
        if (this.people) {
            const copyThis = this;
            people = this.people.map(p => (
               <Row key={p.PersonId}>
                   <Col lg="6"><label>{p.FirstName} {p.LastName}</label></Col>
                   <Col lg="3">
                       <Button value={p.PersonId} color={"link"} onClick={copyThis.setActive}>Edit</Button>
                   </Col>
                   <Col lg="3">
                       <Button value={p.PersonId} color={"link"} onClick={copyThis.delete}>Delete</Button>
                   </Col>
               </Row>
            ));
        }
        return (
          <Row>
            <Col lg="8">
              <Row>
                <Col>
                  <h4 className="mb-3">Personal Details</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor={"firstName"}>First name</label>
                </Col>
                <Col>
                  <label htmlFor={"lastName"}>Last name</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type={"text"}
                    id={"firstName"}
                    className={"form-control"}
                    placeholder={"First name"}
                    value={this.state.FirstName}
                    onChange={this.updateBinding}
                  />
                </Col>
                <Col>
                  <input
                    type={"text"}
                    id={"lastName"}
                    className={"form-control"}
                    placeholder={"Last name"}
                    value={this.state.LastName}
                    onChange={this.updateBinding}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="addr1">Address line 1</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    id="addr1"
                    className="form-control"
                    placeholder="Address line 1"
                    value={this.state.Address1}
                    onChange={this.updateBinding}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="addr2">Address line 2</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    id="addr2"
                    className="form-control"
                    placeholder="Address line 2"
                    value={this.state.Address2!}
                    onChange={this.updateBinding}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="town">Town</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    id="town"
                    className="form-control"
                    placeholder="Town"
                    value={this.state.Town}
                    onChange={this.updateBinding}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="county">County</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    id="county"
                    className="form-control"
                    placeholder="County"
                    value={this.state.County}
                    onChange={this.updateBinding}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="3">
                  <label htmlFor="postcode">Postal/ZipCode</label>
                </Col>
                <Col lg="4">
                  <label htmlFor="phoneNumber">Phone number</label>
                </Col>
              </Row>
              <Row>
                <Col lg="3">
                  <input
                    type="text"
                    id="postcode"
                    className="form-control"
                    value={this.state.Postcode}
                    onChange={this.updateBinding}
                  />
                </Col>
                <Col lg="4">
                  <input
                    type="text"
                    id="phoneNumber"
                    className="form-control"
                    value={this.state.PhoneNumber}
                    onChange={this.updateBinding}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="dateOfBirth">Date of birth</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="date"
                    id="dateOfBirth"
                    className={'form-control'}
                    value={this.state.DateOfBirth!}
                    onChange={this.updateBinding}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button size="lg" color="primary" onClick={this.savePerson}>
                    Save
                  </Button>
                </Col>
                <Col>
                  <Button size="lg" color="secondary" onClick={this.clear}>
                    Clear
                  </Button>
                </Col>
              </Row>
              <Row><FormValidation CurrentState={this.state} CanSave={this.userCanSave} /></Row>
            </Col>
            <Col>
              <Row>
                <Col>{people}</Col>
              </Row>
              <Row>
                <Col lg="6">
                  <Button size="lg" color="success" onClick={this.loadPeople}>
                    Load
                  </Button>
                </Col>
                <Col lg="6">
                  <Button size="lg" color="info" onClick={this.clear}>
                    New Person
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        );
    }
}
