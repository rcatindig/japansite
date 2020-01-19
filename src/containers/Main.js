import React, {Component} from 'react';
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import {Header, Footer} from '../components';
import HomePage from '../pages/HomePage';
import TouristSpot from '../pages/TouristSpot';
import Weather from '../pages/Weather';

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <Header />
                <Switch>
                    
                    <Redirect from="/redirect/tourist-spot" to="/tourist-spot" />
                    <Redirect from="/redirect/weather" to="/weather" />
                    <Redirect from="/redirect" to="/"/>

                </Switch>
                
                
                <Route exact path='/' exact={true} name="Home" component={HomePage} />
                <Route exact path='/tourist-spot' name="TouristSpot"  component={TouristSpot} />
                <Route exact path='/weather' name="Weather"  component={Weather} />
            
                <Footer />
            </HashRouter>
        );
            
    }
}

export default Main;