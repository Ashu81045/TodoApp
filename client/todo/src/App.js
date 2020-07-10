import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PIEChart from './components/PIEChart';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/status" component={PIEChart} />
					<Route exact path="/landing" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Redirect from="/" to="dashboard" />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
