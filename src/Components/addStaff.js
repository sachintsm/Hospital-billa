import React, { Component } from 'react';

class addStaff extends Component {


    constructor(props) {
        super(props);
        this.onChangeDays = this.onChangeDays.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            days: '',
        }
    }

    onChangeDays(e) {
        this.setState({
            days: e.target.value
        });
    }

    onSubmit() {

        console.log("Clicked 1 .!");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("days", this.state.days);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/v1/staff", requestOptions)
            .then(response => response.text())
            .then(result => alert(result))
            .catch(error => alert(error));
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Staff</h3>
                <div>
                    <div className="form-group">
                        <label>Enter days: </label>
                        <input type="text" className="form-control" value={this.state.days}
                            onChange={this.onChangeDays}></input>
                    </div>

                    <div className="form-group">
                        <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default addStaff;