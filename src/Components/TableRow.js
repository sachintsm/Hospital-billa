import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TableRow extends Component {

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.firstname}
                </td>
                <td>
                    {this.props.obj.lastname}
                </td>
                <td>
                    {this.props.obj.birthday}
                </td>
                <td>
                    {this.props.obj.entry_date}
                </td>
                <td>
                    {this.props.obj.arrival_date}
                </td>
                <td>
                    {this.props.obj.room}
                </td>
                <td>
                    <Link to={"/viewPatient/" + this.props.obj.id} className="btn btn-primary">View Patient</Link>
                </td>
                <td>
                    <Link to={"/addToRoom/" + this.props.obj.id} className="btn btn-primary">Add to Room</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;