import React from 'react';
import { connect } from 'react-redux'
import { userLoginAction, userLogoutAction, userRegisterAction } from "./login-action";
import User from "./../app/app-user-component";
import { ReactComponent as IconFacebook } from "../assets/icons/facebook.svg";
import { ReactComponent as IconLogout } from "../assets/icons/logout.svg";
import { ReactComponent as IconRegister } from "../assets/icons/register.svg";

const LoginComponent = ({ text, user, properties, login, logout, register }) => (
    <div className="panel">
        { user == null ? (
            <div>
                <div className="container">
                    <h1>Welcome to Tailor</h1>
                    <p dangerouslySetInnerHTML={ { __html: text[ 'welcome' ] } }/>
                </div>
                <nav className="nav-container">
                    <button onClick={ login }><IconFacebook/> Login with Facebook</button>
                </nav>
            </div>
        ) : user.VerificationCode === '' ? (
            <div>
                <div className="container">
                    <h1>Registration</h1>
                    <User user={ user }/>
                    <p dangerouslySetInnerHTML={ { __html: text[ 'register' ] } }/>
                </div>
                <nav className="nav-container">
                    <button onClick={ register }><IconRegister/> Register as { user.Name }</button>
                    <button onClick={ logout }><IconLogout/> Logout</button>
                </nav>
            </div>
        ) : (
            <div>
                <div className="container">
                    <h1>Verification</h1>
                    <User user={ user }/>
                    <p dangerouslySetInnerHTML={ { __html: text[ 'verify' ] } }/>
                    <h3>Verification Code</h3>
                    <h2 className="verify-code">{ user.VerificationCode }</h2>
                </div>
                <nav className="nav-container">
                    <button onClick={ logout }><IconLogout/> Logout</button>
                </nav>
            </div>
        ) }
    </div>
);

const mapStateToProps = state => ( {
    user: state.login.user,
    properties: state.login.properties,
    text: state.text,
} );

const mapDispatchToProps = dispatch => ( {
    login: () => dispatch(userLoginAction()),
    logout: () => dispatch(userLogoutAction()),
    register: () => dispatch(userRegisterAction()),
} );

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
