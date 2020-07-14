import React, {Component} from 'react';

class TableDataRow extends Component {
    permissonShow = () => {
        if (this.props.role == 0) {
            return "Admin"
        } else if (this.props.role == 1) {
            return "User"
        } else {
            return "Guest"
        }
    }
    editClick = () => {
        this.props.editFuntion();
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <tr>
                <td>{this.props.id + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissonShow()}</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={() => this.editClick()}>
                            <i className="fa fa-edit"/> Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => this.props.deleteUserData()}>
                            <i className="fa fa-times"/> Delete
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;
