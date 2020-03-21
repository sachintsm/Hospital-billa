import React, { Component } from 'react';

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

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("room", this.state.roomId);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/v1/patients/" + this.props.match.params.id, requestOptions)
            .then(response => response.text())
            .then(result => alert(result))
            .catch(error => alert(error));

        this.setState({
            roomId: '',
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