import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Switch, Route, HashRouter } from 'react-router-dom';


import Main from './containers/Main';

function App() {
  return (
    <HashRouter>
			<Switch>
				
				<Route path="/" name="Dashboard" component={Main}/>
			</Switch>
		</HashRouter>
    
  );
}

export default App;
