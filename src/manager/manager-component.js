import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import { ReactComponent as IconMenu } from "../assets/icons/menu.svg";
import { ReactComponent as IconSettings } from "../assets/icons/settings.svg";
import { ReactComponent as IconDropdown } from "../assets/icons/dropdown.svg";
import { ReactComponent as IconDashboard } from "../assets/icons/dashboard.svg";
import { ReactComponent as IconText } from "../assets/icons/text.svg";
import { ReactComponent as IconUser } from "../assets/icons/user.svg";
import { ReactComponent as IconProperty } from "../assets/icons/property.svg";
import { ReactComponent as IconModule } from "../assets/icons/module.svg";
import { DashboardComponent } from "./dashboard/dashboard-component";
import UserComponent from "./user/user-component";

class ManagerComponent extends Component {

    componentDidMount() {
        //this.props.init();
    }

    render() {
        //const { loading, user } = this.props;
        return (
            <Router>
                <div className="manager">
                    <header className="manager-header">
                        <button><IconMenu/></button>
                        <button>Tailor Core <IconDropdown/></button>
                        <button><IconSettings/></button>
                    </header>
                    <div className="manager-body">
                        <nav className="manager-nav nav-container">
                            <NavLink exact to="/" activeClassName="active">
                                <button><IconDashboard/> Dashboard</button>
                            </NavLink>
                            <NavLink to="/text" activeClassName="active">
                                <button><IconText/> Text</button>
                            </NavLink>
                            <NavLink to="/user" activeClassName="active">
                                <button><IconUser/> Users</button>
                            </NavLink>
                            <NavLink to="/property" activeClassName="active">
                                <button><IconProperty/> Properties</button>
                            </NavLink>
                            <NavLink to="/module" activeClassName="active">
                                <button><IconModule/> Modules</button>
                            </NavLink>
                        </nav>
                        <div className="manager-main">
                            <Route path="/" exact component={ DashboardComponent }/>
                            <Route path="/user" component={ UserComponent }/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapDispatchToProps = dispatch => ( {
    init: () => {
        // dispatch(userRetrieveAction());
        // dispatch(textRetrieveAction());
    }
} );

const mapStateToProps = state => ( {
    // loading: state.app.loading,
    // user: state.login.user
} );

export default connect(mapStateToProps, mapDispatchToProps)(ManagerComponent);