import React, { Component } from 'react';
import axios from 'axios'
import { Row, Col } from 'reactstrap';

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            birthday: '',
            entry_date: '',
            arrival_date: '',
            room: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/patients/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    birthday: res.data.birthday,
                    entry_date: res.data.entry_date,
                    arrival_date: res.data.arrival_date,
                    room: res.data.room,
                })
            })
            .catch(function (err) {
                console.log(err);
            })
    }


    render() {
        return (
            <div style={{fontSize:18, marginTop: 50}}>
                <h3 align="center">{this.state.firstname} 's Details</h3>

                <Row>
                    <Col xs="3">Patient Id : </Col>
                    <Col xs="5">{this.state.id}</Col>
                </Row>

                <Row>
                    <Col xs="3">Patient Firstname : </Col>
                    <Col xs="5">{this.state.firstname}</Col>
                </Row>

                <Row>
                    <Col xs="3">Patient Lastname : </Col>
                    <Col xs="5">{this.state.lastname}</Col>
                </Row>

                <Row>
                    <Col xs="3">Patient Birthday : </Col>
                    <Col xs="5">{this.state.birthday}</Col>
                </Row>

                <Row>
                    <Col xs="3">Patient Entry Date : </Col>
                    <Col xs="5">{this.state.entry_date}</Col>
                </Row>

                <Row>
                    <Col xs="3">Patient Arrival Date : </Col>
                    <Col xs="5">{this.state.arrival_date}</Col>
                </Row>

                <Row>
                    <Col xs="3">Patient Room : </Col>
                    <Col xs="5">{this.state.room}</Col>
                </Row>
            </div>
        );
    }
}