import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import Login from "../login/login-component";
import { userRetrieveAction } from "../login/login-action";
import { textRetrieveAction } from "../text/text-action";
import { Helmet } from "react-helmet";
import { GoogleFont, TypographyStyle } from "react-typography";
import Typography from 'typography';
import ManagerComponent from "../manager/manager-component";
import Loading from "../app/app-loading-component";

const typography = new Typography({
    baseFontSize: "14px",
    headerFontFamily: [ 'Poppins', 'sans-serif' ],
    bodyFontFamily: [ 'Roboto', 'serif' ],
    googleFonts: [ {
        name: 'Roboto',
        styles: [ '400, 500' ]
    }, {
        name: 'Poppins',
        styles: [ '300' ]
    } ]
});

class RootComponent extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        const { loading, user } = this.props;
        return (
            <div className="full-height">
                <GoogleFont typography={ typography }/>
                <TypographyStyle typography={ typography }/>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <title>Tailor</title>
                </Helmet>
                { user == null ? loading === true ? (
                    <Loading/>
                ) : (
                    <Login/>
                ) : (
                    <ManagerComponent/>
                ) }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ( {
    init: () => {
        dispatch(userRetrieveAction());
        dispatch(textRetrieveAction());
    }
} );

const mapStateToProps = state => ( {
    loading: state.app.loading,
    user: state.login.user
} );

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);