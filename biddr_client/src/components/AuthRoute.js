import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isAuthenticated, component:Component }) => {
    if (isAuthenticated){
        return <Route path="/auctions/new" component={Component} />
    } else {
        return <Redirect to='/sign_in' />
    }
}

export default AuthRoute;

