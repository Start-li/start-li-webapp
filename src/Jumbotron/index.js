import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import './index.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbo">
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8} className="welcome">
                        <div className="title">Build your company. Simp-li.</div>
                        <div className="subtitle">Use our AI-powered tool to determine the needs of your future company.</div>
                        <div className="start">
                            <Row>
                                <Col lg={3}></Col>
                                <Col lg={5}>
                                    <Input bsSize="lg" placeholder="Your awesome idea here..." />
                                </Col>
                                <Col lg={1}>
                                    <Button className="started" color="#29335C" size="lg">Get Started</Button>
                                </Col>
                                <Col lg={3}></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </div>
        );
    }
}