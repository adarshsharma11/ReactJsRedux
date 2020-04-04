import {  Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import history from "../store/history";
import { connect } from "react-redux";
import Home from "../components/Home/home";
import Layout from "../components/Layout/layout";
import Help from "../components/Help/help";
import Trade from "../components/Trade/trade";

const Root = props => {
    return (
        <Router history={history}>
        <Layout>
            <div>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Home/>
                    )}/>
                    <Route exact path="/help" render={() => (
                        <Help/>
                    )}/>
                    <Route exact path="/trade" render={() => (
                        <Trade/>
                    )}/>
                </Switch>
            </div>

        </Layout>
        </Router>
    )
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.loggedIn,
    };
}

export default connect(
    mapStateToProps,
)(Root);