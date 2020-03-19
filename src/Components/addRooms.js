import React, { Component } from 'react';
import axios from 'axios'

class addRooms extends Component {

    
    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        // this.onChangeFilterThreshold = this.onChangeFilterThreshold.bind(this);
        this.onChangePatients = this.onChangePatients.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            capacity: '',
            // filter_threshold: '',
            patients: '',
           
        }
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    onChangeCapacity(e) {
        this.setState({
            capacity: e.target.value
        });
    }
    // onChangeFilterThreshold(e) {
    //     this.setState({
    //         filter_threshold: e.target.value
    //     });
    // }
    onChangePatients(e) {
        this.setState({
            patients: e.target.value
        });
    }
    

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.state.id,
            capacity: this.state.capacity,
            // filter_threshold: this.state.filter_threshold,
            patients: this.state.patients,
        }
        console.log(obj);
        axios.post('http://localhost:4000/rooms/rooms', obj).then(res => {
            console.log(res.data);
            alert(res.data.msg)

        })
        this.setState({
            id: '',
            capacity: '',
            // filter_threshold: '',
            patients: '',
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Room</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id : </label>
                        <input type="text" className="form-control" value={this.state.id}
                            onChange={this.onChangeId}></input>
                    </div>
                    <div className="form-group">
                        <label>Capacity : </label>
                        <input type="text" className="form-control" value={this.state.capacity}
                            onChange={this.onChangeCapacity}></input>
                    </div>
                    {/* <div className="form-group">
                        <label>Filter Threshold : </label>
                        <input type="text" className="form-control" value={this.state.filter_threshold}
                            onChange={this.onChangeFilterThreshold}></input>
                    </div> */}
                   
                    <div className="form-group">
                        <input type="submit" value="Register Room" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default addRooms;