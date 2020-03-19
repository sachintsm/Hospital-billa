import React, { Component } from 'react';
import axios from 'axios'
import TableRow2 from './TableRow2'
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Filters extends Component {
    constructor(props) {
        super(props)
        this.state = { filters: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/filters/filters')
            .then(res => {
                this.setState({ filters: res.data })
                console.log(res.data);

            })
            .catch(function (err) {
                console.log(err);
            })
    }

    tabRow() {
        return this.state.filters.map(function (object, i) {
            return <TableRow2 obj={object} key={i}></TableRow2>;
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="6">
                        <h3 align="center">Filters List</h3>
                    </Col>
                    <Col xs="6">
                        <Link to={"/AddFilter/"} className="btn btn-primary">Add Filter</Link>
                    </Col>

                </Row>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Room</th>
                            <th>Quality</th>
                            <th>Installation Date</th>
                            <th>Price</th>
                            <th>Base Quality</th>
                            <th>Quality Loss Per Day</th>
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

