import React from 'react';
import { ReactComponent as IconText } from "../../assets/icons/text.svg";
import { ReactComponent as IconUser } from "../../assets/icons/user.svg";
import { ReactComponent as IconProperty } from "../../assets/icons/property.svg";
import { ReactComponent as IconModule } from "../../assets/icons/module.svg";
import { NavLink } from "react-router-dom";

export const DashboardComponent = () => (
    <div className="container">
        <h1>Dashboard</h1>
        <nav className="nav-container nav-inline-container">
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
    </div>
);