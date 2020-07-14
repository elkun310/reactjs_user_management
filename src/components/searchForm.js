import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import EditUser from "./editUser";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtQuery: "",
            userObj: {}
        }
    }

    showButton = () => {
        if (this.props.showForm === true) {
            return (
                <button className="btn btn-outline-secondary custom-button" onClick={() => this.props.changeStateForm()}>Close</button>
            )
        } else {
            return (
                <button className="btn btn-block btn-outline-info custom-button" onClick={() => this.props.changeStateForm()}>Add new
                    user
                </button>
            )
        }
    }
    isChange = (event) => {
        const txtQuery = event.target.value;
        this.setState({
            txtQuery: txtQuery
        });
        this.props.getTextSearch(this.state.txtQuery);
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditApp(info);
    }
    isShowEditForm = () => {
        if (this.props.editUser === true) {
            return <EditUser editUser={this.props.editUser}
                changeEditUserStatus={() => this.props.changeEditUserStatus()}
                editUserObject={this.props.editUserObject}
                getUserEditInfo={(info) => this.getUserEditInfo(info)}/>
        }
        return true
    }

    render() {
        return (
            <div className="searchForm">
                <div className="container">
                    {this.isShowEditForm()}
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" placeholder="Enter something..." id="txt-query" onChange={(event) => this.isChange(event)}/>
                            <button className="btn btn-info" onClick={(dl) => this.props.getTextSearch(this.state.txtQuery)}>Search</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="btn-group">
                            {this.showButton()}
                        </div>
                        <Button color="primary">Hello World</Button>
                    </div>
                    <hr className="my-2"/>
                </div>

            </div>
        );
    }
}

export default SearchForm;
