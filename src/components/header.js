import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-3">Project Manage User</h1>
                        <p className="lead">by ReactJs</p>
                        <hr className="my-2" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
