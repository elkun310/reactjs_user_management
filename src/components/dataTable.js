import React, {Component} from 'react';
import TableDataRow from "./tableDataRow";

class DataTable extends Component {
    mappingDataUser = () =>
        this.props.userData.map((value, key) =>
            <TableDataRow key={key}
                id={key}
                name={value.name}
                phone={value.phone}
                role={value.role}
                editFuntion={() => this.props.editFuntion(value)}
                changeEditUserStatus={() => this.props.changeEditUserStatus()}
                deleteUserData={() => this.props.deleteUserData(value)}
            />
        )

    render() {
        return (
            <div className="col">
                <div className="dataTable">
                    <div className="table-responsive">
                        <table className="table table-striped table-inverse table-bordered ">
                            <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.mappingDataUser()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default DataTable;
