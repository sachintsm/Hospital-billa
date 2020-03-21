import React, { Component } from 'react';
import axios from 'axios'
import { Row,Col } from 'reactstrap';

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            room: '',
            quality: '',
            installation_date: '',
            entry_date: '',
            arrival_date: '',
            quality_loss_per_day: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/filters/' + this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({
                    id: res.data.id,
                    room: res.data.room,
                    quality: res.data.quality,
                    installation_date: res.data.installation_date,
                    price: res.data.model.price,
                    base_quality: res.data.model.base_quality,
                    quality_loss_per_day: res.data.model.quality_loss_per_day,
                })

            })
            .catch(function (err) {
                console.log(err);
            })
    }


    render() {
        return (
            <div  style={{fontSize:18, marginTop: 50}}>
                <h3 align="center">{this.state.id} 's Filter Details</h3>

                <Row>
                    <Col xs="3">Filter Id : </Col>
                    <Col xs="5">{this.state.id}</Col>
                </Row>
                <Row>
                    <Col xs="3">Filter Room Number : </Col>
                    <Col xs="5">{this.state.room}</Col>
                </Row>
                <Row>
                    <Col xs="3">Filter Quality : </Col>
                    <Col xs="5">{this.state.quality}</Col>
                </Row>
                <Row>
                    <Col xs="3">Filter Price : </Col>
                    <Col xs="5">{this.state.price}</Col>
                </Row>
                <Row>
                    <Col xs="3">Filter Installation Date : </Col>
                    <Col xs="5">{this.state.installation_date}</Col>
                </Row>
                <Row>
                    <Col xs="3">Filter Base Quality : </Col>
                    <Col xs="5">{this.state.base_quality}</Col>
                </Row>
                <Row>
                    <Col xs="3">Filter Quality Loss Per Day: </Col>
                    <Col xs="5">{this.state.quality_loss_per_day}</Col>
                </Row>
            </div>

        );
    }
}