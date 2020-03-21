import React, { Component } from 'react';
import '../App.css'

class addFilter extends Component {


    constructor(props) {
        super(props);
        this.onChangeModel = this.onChangeModel.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            model: '',

        }
    }

    onChangeModel(e) {
        this.setState({
            model: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("model", this.state.model);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/v1/filters", requestOptions)
            .then(response => response.text())
            .then(result => alert(result))
            .catch(error => alert('error', error));

    }

    render() {


        return (
            <div style={{ marginTop: 10 }}>
                <div className="container">
                    <div className="row">
                        <table id="customers">
                            <tr>
                                <th></th>
                                <th>Model 1</th>
                                <th>Model 2</th>
                                <th>Model 3</th>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>5000</td>
                                <td>3000</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>Initial quality(%)</td>
                                <td>98.0</td>
                                <td>95.0</td>
                                <td>90.0</td>
                            </tr>
                            <tr>
                                <td> Quality lost by day(%)</td>
                                <td>8.0</td>
                                <td>16.0</td>
                                <td>24.0</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <h3 style={{ marginTop: "20px" }}>Add Filter Model</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Filter Model : </label>
                        <input type="text" className="form-control" value={this.state.model}
                            onChange={this.onChangeModel}></input>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Filter" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default addFilter;