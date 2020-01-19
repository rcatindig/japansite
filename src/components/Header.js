// Header.js
import React, {Component} from 'react';
import { BrowserRouter as HashRouter, Link } from 'react-router-dom';

class Header extends Component {
    render(){
        
        return (

            <header id="header" className="skel-layers-fixed">
                <h1><a href="#">Japan</a></h1>
                <nav id="nav">
                    <ul>
                        <li><Link to={'/redirect'}>Home</Link></li>
                        <li><Link to={'/redirect/weather'}>Weather</Link></li>
                        <li><Link to={'/redirect/tourist-spot'}>Tourist Spots</Link></li>
                    </ul>
                </nav>
            </header>

            
        )
    }
}

export {Header};