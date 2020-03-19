import React, { Component } from 'react';
import axios from 'axios'
import { Row,Col } from 'reactstrap';

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            capacity: '',
            filter_threshold: '',
            patients: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/rooms/rooms/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    capacity: res.data.capacity,
                    filter_threshold: res.data.filter_threshold,
                    patients: res.data.patients,
                })

            })
            .catch(function (err) {
                console.log(err);
            })
    }


    render() {
        return (
            <div style={{fontSize:18, marginTop: 50}}>
                <h3 align="center">{this.state.id} 's Details</h3>

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
                    <Col xs="5">{this.state.patients}</Col>
                </Row>

            </div>

        );
    }
}