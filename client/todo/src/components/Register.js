import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {},
		};
	}
	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};
		console.log(newUser);
		axios
			.post('/api/users/register', newUser)
			.then((response) => {
				//Set token to localStorage
				// const { token } = response.data;
				// localStorage.setItem('jwtToken', token);
				// // Set token to Auth header
				// setAuthToken(token);
				// // Decode token to get user data
				// const decoded = jwt_decode(token);
				console.log(response.status);
				//console.log(decoded);
				this.setState({ open: true });
			})
			.catch((err) => console.warn(err));
	};
	render() {
		const { errors } = this.state;
		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col s12">
							<div className="col s4"></div>
							<div className="col s4">
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
										<b>Register</b> below
									</h4>
									<p className="grey-text text-darken-1">
										Already have an account? <Link to="/login">Log in</Link>
									</p>
								</div>
								<form noValidate onSubmit={this.onSubmit}>
									<div className="input-field col s12">
										<input
											onChange={this.onChange}
											value={this.state.name}
											error={errors.name}
											id="name"
											type="text"
										/>
										<label htmlFor="name">Name</label>
									</div>
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
									<div className="input-field col s12">
										<input
											onChange={this.onChange}
											value={this.state.password2}
											error={errors.password2}
											id="password2"
											type="password"
										/>
										<label htmlFor="password2">Confirm Password</label>
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
											Sign up
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
									{`You have been registered successfully `}
								</DialogTitle>
								<DialogActions>
									<a href="/dashboard">
										<Button color="primary">Take me to Dashboard</Button>
									</a>
								</DialogActions>
							</Dialog>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
export default Register;
