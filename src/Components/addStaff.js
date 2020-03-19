import React, { Component } from 'react';
import axios from 'axios'

class addStaff extends Component {


    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeFunction = this.onChangeFunction.bind(this);
        this.onChangeWage = this.onChangeWage.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            function: '',
            wage: '',
            start_date: '',
            end_date: '',
        }
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }
    onChangeFunction(e) {
        this.setState({
            function: e.target.value
        });
    }
    onChangeWage(e) {
        this.setState({
            wage: e.target.value
        });
    }
    onChangeStartDate(e) {
        this.setState({
            start_date: e.target.value
        });
    }
    onChangeEndDate(e) {
        this.setState({
            end_date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        // const obj = {
        //     id: this.state.id,
        //     first_name: this.state.first_name,
        //     last_name: this.state.last_name,
        //     function: this.state.function,
        //     wage: this.state.wage,
        //     start_date: this.state.start_date,
        //     end_date: this.state.end_date,

        // }
        // axios.post('http://localhost:4000/staff/staff/', obj).then(res => {
        //     console.log(res.data);
        //     alert(res.data.msg)
        // })
        // this.setState({
        //     id: '',
        //     first_name: '',
        //     last_name: '',
        //     function: '',
        //     wage: '',
        //     start_date: '',
        //     end_date: '',
        // })
        let result = fetch("http://localhost:8000/api/v1/staff", {
            method: 'POST',
            body: JSON.stringify({

                "id": this.state.id,
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,
                "function": this.state.function,
                "wage": this.state.wage,
                "start_date": this.state.start_date,
                "end_date": this.state.end_date,

            }),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('access_token')
            }
        })
            .then(response => {
                response.json()
                    .then(value => {
                        if (response.status === 200) {
                            let access_token = response.access_token;
                            console.log(access_token);
                            this.setState({
                                checkConnection: true,
                            })
                        }
                    });
            });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Staff</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id : </label>
                        <input type="text" className="form-control" value={this.state.id}
                            onChange={this.onChangeId}></input>
                    </div>
                    <div className="form-group">
                        <label>First Name : </label>
                        <input type="text" className="form-control" value={this.state.first_name}
                            onChange={this.onChangeFirstName}></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input type="text" className="form-control" value={this.state.last_name}
                            onChange={this.onChangeLastName}></input>
                    </div>
                    <div className="form-group">
                        <label>Function : </label>
                        <input type="text" className="form-control" value={this.state.function}
                            onChange={this.onChangeFunction}></input>
                    </div>
                    <div className="form-group">
                        <label>Wage : </label>
                        <input type="text" className="form-control" value={this.state.wage}
                            onChange={this.onChangeWage}></input>
                    </div>
                    <div className="form-group">
                        <label>Start Date : </label>
                        <input type="text" className="form-control" value={this.state.start_date}
                            onChange={this.onChangeStartDate}></input>
                    </div>
                    <div className="form-group">
                        <label>End Date : </label>
                        <input type="text" className="form-control" value={this.state.end_date}
                            onChange={this.onChangeEndDate}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Staff" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default addStaff;