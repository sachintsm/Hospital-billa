import React, { Component } from 'react';
import axios from 'axios'

class addFilter extends Component {


    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.onChangeQuality = this.onChangeQuality.bind(this);
        this.onChangeInstallationDate = this.onChangeInstallationDate.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeBaseQuality = this.onChangeBaseQuality.bind(this);
        this.onChangeQualityLossPerDay = this.onChangeQualityLossPerDay.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            room: '',
            quality: '',
            installation_date: '',
            price: '',
            base_quality: '',
            quality_loss_per_day: '',
        }
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    onChangeRoom(e) {
        this.setState({
            room: e.target.value
        });
    }
    onChangeQuality(e) {
        this.setState({
            quality: e.target.value
        });
    }
    onChangeInstallationDate(e) {
        this.setState({
            installation_date: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onChangeBaseQuality(e) {
        this.setState({
            base_quality: e.target.value
        });
    }
    onChangeQualityLossPerDay(e) {
        this.setState({
            quality_loss_per_day: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.state.id,
            room: this.state.room,
            quality: this.state.quality,
            installation_date: this.state.installation_date,
            price: this.state.price,
            base_quality: this.state.base_quality,
            quality_loss_per_day: this.state.quality_loss_per_day,

        }

        axios.post('http://localhost:4000/rooms/availableFilRoom', obj).then(res => {
            console.log(res.data);
            if (!res.data.state) {
                alert(res.data.error);
                return;
            }
            else {
                axios.post('http://localhost:4000/filters/filters', obj).then(res => {
                    console.log(res.data);
                    alert(res.data.msg)
                })
                this.setState({
                    id: '',
                    room: '',
                    quality: '',
                    installation_date: '',
                    price: '',
                    base_quality: '',
                    quality_loss_per_day: '',
                })
            }
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Filter</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id : </label>
                        <input type="text" className="form-control" value={this.state.id}
                            onChange={this.onChangeId}></input>
                    </div>
                    <div className="form-group">
                        <label>Room : </label>
                        <input type="text" className="form-control" value={this.state.room}
                            onChange={this.onChangeRoom}></input>
                    </div>
                    <div className="form-group">
                        <label>Quality : </label>
                        <input type="text" className="form-control" value={this.state.quality}
                            onChange={this.onChangeQuality}></input>
                    </div>
                    <div className="form-group">
                        <label>Installation Date : </label>
                        <input type="text" className="form-control" value={this.state.installation_date}
                            onChange={this.onChangeInstallationDate}></input>
                    </div>
                    <div className="form-group">
                        <label>Price : </label>
                        <input type="text" className="form-control" value={this.state.price}
                            onChange={this.onChangePrice}></input>
                    </div>
                    <div className="form-group">
                        <label>Base Quality : </label>
                        <input type="text" className="form-control" value={this.state.base_quality}
                            onChange={this.onChangeBaseQuality}></input>
                    </div>
                    <div className="form-group">
                        <label>Quality Loss Per Day : </label>
                        <input type="text" className="form-control" value={this.state.quality_loss_per_day}
                            onChange={this.onChangeQualityLossPerDay}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Filter" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default addFilter;