import React, { Component } from 'react';
import axios from 'axios'
import { Row, Col } from 'reactstrap';

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            capacity: '',
            filter_threshold: '',
            patients: [],
            patientsArray: [],
            patientsName: [],
            submittedValue:[]
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:8000/api/v1/patients')
            .then(res => {
                this.setState({
                    patientsArray: res.data
                })
            })
            .catch(function (err) {
                console.log(err);
            })
        await axios.get('http://localhost:8000/api/v1/rooms/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    capacity: res.data.capacity,
                    filter_threshold: res.data.filter_threshold,
                    patients: res.data.patients,
                })
                var i = 0;
                var j = 0;
                for (i = 0; i < this.state.patients.length; i++) {
                    for (j = 0; j < this.state.patientsArray.length; j++) {
                        if (this.state.patients[i] === this.state.patientsArray[j].id) {
                            this.state.patientsName.push(this.state.patientsArray[j].firstname + ' ' + this.state.patientsArray[j].lastname)
                            this.setState({submittedValue: this.state.patientsName});
                        }
                    }
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    }


    render() {

        return (
            <div style={{ fontSize: 18, marginTop: 50 }}>
                <h3 align="center">Room Number {this.state.id} Details</h3>

                <Row>
                    <Col xs="3">Room Id : </Col>
                    <Col xs="5">{this.state.id}</Col>
                </Row>
                <Row>
                    <Col xs="3">Room Capacity : </Col>
                    <Col xs="5">{this.state.capacity}</Col>
                </Row>
                <Row>
                    <Col xs="3">Room Filter Threshold : </Col>
                    <Col xs="5">{this.state.filter_threshold}</Col>
                </Row>
                <Row>
                    <Col xs="3">Room Patients : </Col>
                    <Col xs="9">{this.state.patientsName+''}</Col>
                </Row>
            </div>

        );
    }
}