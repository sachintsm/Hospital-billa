import React, { Component } from 'react';
import axios from 'axios'

class addToRoom extends Component {


    constructor(props) {
        super(props);
        this.onChangeRoomId = this.onChangeRoomId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            roomId: '',
        }
    }

    onChangeRoomId(e) {
        this.setState({
            roomId: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            roomId: this.state.roomId,
        }
        axios.post('http://localhost:4000/rooms/available/' + this.props.match.params.id, obj).then(res => {
            console.log(res.data);
            if (!res.data.state) {
                alert(res.data.error);
                return;
            }
            else {
                axios.post('http://localhost:4000/patients/patients/' + this.props.match.params.id, obj).then(res => {
                    console.log(res.data);
                    alert(res.data.msg)
                    return;
                })
                this.setState({
                    roomId: '',
                })

            }
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add Patient to Room</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Room Id : </label>
                        <input type="text" className="form-control" value={this.state.id}
                            onChange={this.onChangeRoomId}></input>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register Patient to Room" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default addToRoom;