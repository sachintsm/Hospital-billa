import React, { Component } from 'react';
import axios from 'axios'

class addPatient extends Component {


    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangeEntryDate = this.onChangeEntryDate.bind(this);
        this.onChangeArrivalDate = this.onChangeArrivalDate.bind(this);
        // this.onChangeRoom = this.onChangeRoom.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            birthday: '',
            entry_date: '',
            arrival_date: '',
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
    onChangeBirthday(e) {
        this.setState({
            birthday: e.target.value
        });
    }
    onChangeEntryDate(e) {
        this.setState({
            entry_date: e.target.value
        });
    }
    onChangeArrivalDate(e) {
        this.setState({
            arrival_date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birthday: this.state.birthday,
            entry_date: this.state.entry_date,
            arrival_date: this.state.arrival_date,
        }
        // axios.get('http://localhost:4000/rooms/available/'+obj.room,{params:{id:obj.id}}).then(res => {
        //     console.log(res.data);
        //     if(!res.data.state){
        //         alert(res.data.error);
        //         return;
        //     }else{
        axios.post('http://localhost:4000/patients/patients', obj).then(res => {
            console.log(res.data);
            alert(res.data.msg)
            return;
        })
        this.setState({
            id: '',
            first_name: '',
            last_name: '',
            birthday: '',
            entry_date: '',
            arrival_date: '',
        })
    }
    // })



    // }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Patient</h3>
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
                        <label>Birthday : </label>
                        <input type="text" className="form-control" value={this.state.birthday}
                            onChange={this.onChangeBirthday}></input>
                    </div>
                    <div className="form-group">
                        <label>Entry Date : </label>
                        <input type="text" className="form-control" value={this.state.entry_date}
                            onChange={this.onChangeEntryDate}></input>
                    </div>
                    <div className="form-group">
                        <label>Arrival Date : </label>
                        <input type="text" className="form-control" value={this.state.arrival_date}
                            onChange={this.onChangeArrivalDate}></input>
                    </div>
                    {/* <div className="form-group">
                        <label>Room Number : </label>
                        <input type="text" className="form-control" value={this.state.room}
                            onChange={this.onChangeRoom}></input>
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="Register Patient" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default addPatient;