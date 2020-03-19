import React, { Component } from 'react';

class TableRow extends Component {


    render() {
        var patients = this.props.obj.patients[0];
        for (var i = 1; i < this.props.obj.patients.length; i++) {
            patients = patients + "," + this.props.obj.patients[i];
            console.log(this.props.obj.patients)
        }
        if (this.props.obj.patients.length == 0) {
            patients = "Room is empty";
        }
        console.log(this.props.obj.patients);
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.capacity}
                </td>
                <td>
                    {patients}
                </td>
                <td>
                    {this.props.obj.filter_threshold}
                </td>
            </tr>
        );
    }
}

export default TableRow;