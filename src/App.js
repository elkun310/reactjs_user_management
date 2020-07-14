import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import SearchForm from "./components/searchForm";
import DataTable from "./components/dataTable";
import UserForm from "./components/userForm";
import userData from "./data/userData.json"
import {v4 as uuidv4} from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            userData: userData,
            txtQuery: "",
            editUserStatus: false,
            editUserObject: "",

        }
    }

    componentWillMount() {
        // async function getRedditJSON() {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //     return response.json()
        // }

        // getRedditJSON().then((data) => {
        //     this.setState({
        //         userData: data
        //     });
        //     if (localStorage.getItem('userData') === null) {
        //         localStorage.setItem('userData', JSON.stringify(data))
        //     } else {
        //         var temp = JSON.parse(localStorage.getItem('userData'));
        //         this.setState({
        //             userData: temp
        //         });
        //     }
        // })
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        userData: result
                    });
                    if (localStorage.getItem('userData') === null) {
                        localStorage.setItem('userData', JSON.stringify(result))
                    } else {
                        var temp = JSON.parse(localStorage.getItem('userData'));
                        this.setState({
                            userData: temp
                        })
                    }
                },
                (error) => {
                    this.setState({
                        userData: userData
                    });
                }
            )
        // if (localStorage.getItem('userData') === null) {
        //     localStorage.setItem('userData', JSON.stringify(userData))
        // } else {
        //     var temp = JSON.parse(localStorage.getItem('userData'));
        //     this.setState({
        //         userData: temp
        //     });
        // }
    }


    getTextSearch = (dl) => {
        this.setState({
            txtQuery: dl
        });
    }

    changeStateForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    editUser = (user) => {
        this.setState({
            editUserObject: user
        });
    }
    changeEditUserStatus = () => {
        this.setState({
            editUserStatus: !this.state.editUserStatus
        });
    }

    getUserData = (username, phone, role) => {
        var item = {};
        item.id = uuidv4();
        item.name = username;
        item.phone = phone;
        item.role = role;
        var items = this.state.userData;
        items.push(item);
        this.setState({
            userData: items
        });
        localStorage.setItem('userData', JSON.stringify(items));
    }
    getUserEditApp = (info) => {
        this.state.userData.forEach((value) => {
            if (value.id === info.id) {
                value.name = info.username;
                value.phone = info.phone;
                value.role = info.role;
            }
        })
        localStorage.setItem('userData', JSON.stringify(this.state.userData));
    }
    deleteUserData = (user) => {
        var userDataList = this.state.userData;
        userDataList = userDataList.filter(item => item.id != user.id);
        this.setState({
            userData: userDataList
        });
        localStorage.setItem('userData', JSON.stringify(userDataList));
    }

    render() {
        var ketQua = [];
        this.state.userData.forEach((item) => {
            if (item.name.indexOf(this.state.txtQuery) !== -1) {
                ketQua.push(item);
            }
        })
        return (
            <div>
                <Header/>
                <SearchForm changeStateForm={() => this.changeStateForm()}
                    showForm={this.state.showForm}
                    getTextSearch={(dl) => this.getTextSearch(dl)}
                    editUser={this.state.editUserStatus}
                    changeEditUserStatus={() => this.changeEditUserStatus()}
                    editUserObject={this.state.editUserObject}
                    getUserEditApp={(info) => this.getUserEditApp(info)}
                />
                <div className="container">
                    <div className="row">
                        <DataTable userData={ketQua}
                            editFuntion={(user) => this.editUser(user)}
                            changeEditUserStatus={() => this.changeEditUserStatus()}
                            deleteUserData={(user) => this.deleteUserData(user)}
                        />
                        <UserForm showForm={this.state.showForm}
                            getUserData={(username, phone, role) => this.getUserData(username, phone, role)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
