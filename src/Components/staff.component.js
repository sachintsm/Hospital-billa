import React, { Component } from 'react';
import axios from 'axios'
import TableRow4 from './TableRow4'
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'



export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = { staff: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/staff')
            .then(res => {
                this.setState({ staff: res.data })
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    tabRow() {
        return this.state.staff.map(function (object, i) {
            return <TableRow4 obj={object} key={i}></TableRow4>;
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="6">
                        <h3 align="center">Staff List</h3>
                    </Col>
                    <Col xs="6">
                        <Link to={"/AddStaff/"} className="btn btn-primary">Add Staff</Link>
                    </Col>

                </Row>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Function</th>
                            <th>Wage</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th colSpan="1">Action</th>
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