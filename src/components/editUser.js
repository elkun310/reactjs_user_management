import React, {Component} from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            username: this.props.editUserObject.name,
            phone: this.props.editUserObject.phone,
            role: this.props.editUserObject.role
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.username = this.state.username;
        info.phone = this.state.phone;
        info.role = this.state.role;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus()
    }

    render() {
        return (
            <div className="card border-warning mt-3 mb-2">
                <div className="card-header text-center">
                    Edit user
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="UserName"
                                aria-describedby="helpId" name="username"
                                onChange={(event) => this.isChange(event)}
                                defaultValue={this.props.editUserObject.name}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="PhoneNumber"
                                aria-describedby="helpId" name="phone"
                                onChange={(event) => this.isChange(event)}
                                defaultValue={this.props.editUserObject.phone}/>
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name="role" onChange={(event) => this.isChange(event)}
                                defaultValue={this.props.editUserObject.role}>
                                <option>Select Role</option>
                                <option value="0">Admin</option>
                                <option value="1">User</option>
                                <option value="2">Guest</option>
                            </select>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-primary" onClick={() => this.saveButton()}>Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;
