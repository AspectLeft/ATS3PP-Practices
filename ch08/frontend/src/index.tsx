import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {Nav, Navbar} from "react-bootstrap";
import Addresses from "./components/addresses";
import People from "./components/people";
import Leads from "./components/leads";


const routing = (
    <Router>
        <Navbar bg="light">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/leads">Leads</Nav.Link>
                <Nav.Link href="/addresses">Addresses</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        <Route path="/" component={App} />
        <Route path="/addresses" component={Addresses} />
        <Route path="/contacts" component={People} />
        <Route path="/leads" component={Leads} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
