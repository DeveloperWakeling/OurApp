import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Test from './pages/test';

const MainContent = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/test' component={Test} />
    </Switch>
);

export default MainContent;