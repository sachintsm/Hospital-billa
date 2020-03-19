import React, { Component } from 'react';
import axios from 'axios'
import TableRow from './TableRow'
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'


export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = { patients: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/patients/patients')
            .then(res => {
                console.log(res);
                this.setState({ patients: res.data })
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    tabRow() {
        return this.state.patients.map(function (object, i) {
            return <TableRow obj={object} key={i}></TableRow>;
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="6">
                        <h3 align="center">Patients List</h3>
                    </Col>
                    <Col xs="6">
                        <Link to={"/AddPatient/"} className="btn btn-primary">Add Patient</Link>
                    </Col>

                </Row>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Number</th>
                            <th>Birthday</th>
                            <th>Entry Date</th>
                            <th>Arrival Date</th>
                            <th>Room</th>
                            <th colSpan="1">View Patient </th>
                            <th colSpan="1">Add to Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}