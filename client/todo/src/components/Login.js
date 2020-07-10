import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
let jwtToken = localStorage.getItem('jwtToken');
class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {},
			response: '',
			userData: '',
		};
	}
	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onLogout = () => {
		localStorage.removeItem('jwtToken');
		window.location.reload();
	};
	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post('/api/users/login', userData)
			.then((response) => {
				//Set token to localStorage
				const { token } = response.data;
				localStorage.setItem('jwtToken', token);
				// Set token to Auth header
				setAuthToken(token);
				// Decode token to get user data
				const decoded = jwt_decode(token);
				this.setState({ open: true, userData: response.data.payload });
				console.log('resp ', response.data.payload);
			})
			.catch((err) => console.warn(err));
	};

	render() {
		const { errors } = this.state;
		console.log(jwtToken, 'userData');

		return (
			<div>
				<Navbar />
				{!jwtToken ? (
					<div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
						<div className="col s12">
							<div className="col s4 "></div>
							<div className="col s4 ">
								<Link
									to="/"
									className="btn-flat waves-effect"
									style={{ padding: 0 }}
								>
									<i className="material-icons left">keyboard_backspace</i> Back
									to home
								</Link>
								<div className="col s12">
									<h4>
										<b>Login</b>
									</h4>
									<p className="grey-text text-darken-1">
										Don't have an account? <Link to="/register">Register</Link>
									</p>
								</div>
								<form noValidate onSubmit={this.onSubmit}>
									<div className="input-field col s12">
										<input
											onChange={this.onChange}
											value={this.state.email}
											error={errors.email}
											id="email"
											type="email"
										/>
										<label htmlFor="email">Email</label>
									</div>
									<div className="input-field col s12">
										<input
											onChange={this.onChange}
											value={this.state.password}
											error={errors.password}
											id="password"
											type="password"
										/>
										<label htmlFor="password">Password</label>
									</div>
									<div
										className="col s12 center"
										style={{ paddingLeft: '11.250px' }}
									>
										<button
											style={{
												width: '150px',
												borderRadius: '3px',
												letterSpacing: '1.5px',
												marginTop: '1rem',
											}}
											type="submit"
											className="btn btn-large waves-effect waves-light hoverable blue accent-3"
										>
											Login
										</button>
									</div>
								</form>
							</div>
						</div>
						<div>
							<Dialog
								open={this.state.open}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
							>
								<DialogTitle id="alert-dialog-title" style={{ color: 'green' }}>
									{`Welcome ${this.state.userData.name}   to the Task Manangement System `}
								</DialogTitle>
								<DialogActions>
									<a href="/dashboard">
										<Button color="primary">Take me to Dashboard</Button>
									</a>
								</DialogActions>
							</Dialog>
						</div>
					</div>
				) : (
					<div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
						<div className="col s12">
							<div className="col s4 "></div>
							<div
								className="col s4 center"
								style={{ height: '200px', marginTop: '20px' }}
							>
								<div>You are already login to your Account</div>
								<Link
									to="/"
									className="btn-flat waves-effect"
									style={{ padding: 0, color: 'blue' }}
								>
									Dashboard
								</Link>
								<div>You are already login to your Account</div>
								<div style={{ color: 'red' }} onClick={this.onLogout}>
									<span class="material-icons">login</span>
								</div>
								Logout
							</div>
						</div>
					</div>
				)}
				<Footer />
			</div>
		);
	}
}
export default Login;
