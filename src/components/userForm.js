import React, {Component} from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            phone: "",
            role: 0,
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

    }

    showForm = () => {
        if (this.props.showForm === true) {
            return (
                <div className="col">
                    <div className="card border-primary mt-3 mb-2">
                        <div className="card-header">
                            Add user
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="UserName"
                                        aria-describedby="helpId" name="username"
                                        onChange={(event) => this.isChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="PhoneNumber"
                                        aria-describedby="helpId" name="phone" onChange={(event) => this.isChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="role" onChange={(event) => this.isChange(event)}>
                                        <option>Select Role</option>
                                        <option value="0">Admin</option>
                                        <option value="1">User</option>
                                        <option value="2">Guest</option>
                                    </select>
                                </div>
                                <div className="form-group text-center">
                                    <button type="reset" className="btn btn-primary" onClick={(username, phone, role) =>
                                        this.props.getUserData(this.state.username, this.state.phone, this.state.role)
                                    }>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return true
        }
    }

    render() {
        return (
            <div className="userForm">
                {this.showForm()}
            </div>
        );
    }
}

export default UserForm;
