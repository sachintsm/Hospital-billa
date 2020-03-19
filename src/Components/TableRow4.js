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
                    {this.props.obj.function}
                </td> 
                <td>
                    {this.props.obj.wage}
                </td> 
                <td>
                    {this.props.obj.start_date}
                </td>
                <td>
                    {this.props.obj.end_date}
                </td>
                <td>
                    <Link to={"/viewStaff/" + this.props.obj.id} className="btn btn-primary">View</Link>
                </td>
             
            </tr>
        );
    }
}

export default TableRow;