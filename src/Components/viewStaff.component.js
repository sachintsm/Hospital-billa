import React, { Component } from 'react';
import axios from 'axios'
import { Row,Col } from 'reactstrap';

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            function: '',
            wage: '',
            start_date: '',
            end_date: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/staff/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    function: res.data.function,
                    wage: res.data.wage,
                    start_date: res.data.start_date,
                    end_date: res.data.end_date           
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
                    <Col xs="3">Employee Id : </Col>
                    <Col xs="5">{this.state.id}</Col>
                </Row>
                <Row>
                    <Col xs="3">Employee  First Name : </Col>
                    <Col xs="5">{this.state.firstname}</Col>
                </Row> 
                <Row>
                    <Col xs="3">Employee  Last Name : </Col>
                    <Col xs="5">{this.state.lastname}</Col>
                </Row> 
                <Row>
                    <Col xs="3"> Employee Wage : </Col>
                    <Col xs="5">{this.state.wage}</Col>
                </Row> 
                <Row>
                    <Col xs="3">Employee  Function : </Col>
                    <Col xs="5">{this.state.function}</Col>
                </Row> 
                <Row>
                    <Col xs="3"> Employee Start Date : </Col>
                    <Col xs="5">{this.state.start_date}</Col>
                </Row>
                 <Row>
                    <Col xs="3"> Employee End Date : </Col>
                    <Col xs="5">{this.state.end_date}</Col>
                </Row>
            </div>
        );
    }
}