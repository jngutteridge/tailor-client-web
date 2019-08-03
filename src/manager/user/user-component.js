import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import Loading from "../../app/app-loading-component";
import { userIndexRetrieveAction, userRetrieveAction } from "./user-action";

const userFields = [
    {
        field: 'Name',
        name: 'Name'
    },
    {
        field: 'Email',
        name: 'Email'
    }
];

const createTable = (fields, data, get) => {
    const thead = fields.map(f => ( <th key={ f.field }>{ f.name }</th> ));
    const trs = data.map(d => ( {
        key: d[ fields[ 0 ].field ],
        email: d.Email,
        tds: fields.map(f => ( <td key={ d.name + ':' + f.field }>{ d[ f.field ] }</td> ))
    } ));
    return (
        <table className="can-hover">
            <thead>
            <tr>{ thead }</tr>
            </thead>
            <tbody>{ trs.map(tr => ( <tr key={ tr.key } onClick={() => get(tr.email)}>{ tr.tds }</tr> )) }</tbody>
        </table>
    );
};

class UserComponent extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        const { get, loading, index, user } = this.props;
        return user == null || user.Email === "" ? (
            <div className="container">
                <h1>Users</h1>
                { loading ? (
                    <Loading/>
                ) : createTable(userFields, index, get) }
            </div>
        ) : (
            <div className="container">
                <img src={user.ImageURL} alt="Profile"/>
                <h1>{ user.Name }</h1>
                <h2>{ user.Email }</h2>
                <h1>{ user.VerificationCode }</h1>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ( {
    init: () => dispatch(userIndexRetrieveAction()),
    get: (email) => dispatch(userRetrieveAction(email))
} );

const mapStateToProps = state => ( {
    loading: state.app.loading,
    index: state.user.index,
    user: state.user.user
} );

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);