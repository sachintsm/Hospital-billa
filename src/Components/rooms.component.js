import React, { Component } from 'react';
import axios from 'axios'
import TableRow3 from './TableRow3'
import { Row, Col } from 'reactstrap';

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = { rooms: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/rooms')
            .then(res => {
                console.log(res);
                this.setState({ rooms: res.data })
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    tabRow() {
        return this.state.rooms.map(function (object, i) {
            return <TableRow3 obj={object} key={i}></TableRow3>;
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="6">
                        <h3 align="center">Rooms List</h3>
                    </Col>
                    
                </Row>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Capacity</th>
                            <th>Patients</th>
                            <th>Filter Threshold</th>
                            <th>Action</th>
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