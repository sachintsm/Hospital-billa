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
                    {this.props.obj.room}
                </td>
                <td>
                    {this.props.obj.quality}
                </td>
                <td>
                    {this.props.obj.installation_date}
                </td>
                <td>
                    {this.props.obj.model.price}
                </td>
                <td>
                    {this.props.obj.model.base_quality}
                </td>
                <td>
                    {this.props.obj.model.quality_loss_per_day}
                </td>
                <td>
                    <Link to={"/viewFilter/" + this.props.obj.id} className="btn btn-primary">View</Link>
                </td>
                
            </tr>
        );
    }
}

export default TableRow;