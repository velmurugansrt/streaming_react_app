import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomeScreen from '../screens/home/HomeScreen';
import MoviesScreen from '../screens/movies/MoviesScreen';
import SeriesScreen from '../screens/series/SeriesScreen';
import ContentHeaderComponent from './ContentHeaderComponent';
import { SCREEN_ROUTE } from '../common/Constants';

function ContentComponent() {
    return (
        <Router >
            <Switch>
                <Route exact path={SCREEN_ROUTE.HOME} component={HomeScreen} />
                <Route exact path={SCREEN_ROUTE.SERIES} component={SeriesScreen} />
                <Route exact path={SCREEN_ROUTE.MOVIES} component={MoviesScreen} />
            </Switch>
        </Router>
    );
}

export default ContentComponent;
