import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Fooetr extends Component {
	render() {
		return (
			<footer className="page-footer black">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Todo App</h5>
							<p className="grey-text text-lighten-4">
								You can manage your Task with this App.
							</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Links</h5>
							<ul>
								<li>
									<a className="grey-text text-lighten-3" href="/dashboard">
										Dashboard
									</a>
								</li>
								<li>
									<a className="grey-text text-lighten-3" href="/login">
										Login
									</a>
								</li>
								<li>
									<a className="grey-text text-lighten-3" href="/status">
										Status
									</a>
								</li>
								<li>
									<a className="grey-text text-lighten-3" href="#!">
										About
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						© 2020 All Rights Reserved
						<a className="grey-text text-lighten-4 right" href="#!">
							Our Team
						</a>
					</div>
				</div>
			</footer>
		);
	}
}
