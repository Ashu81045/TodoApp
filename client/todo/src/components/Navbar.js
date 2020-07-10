// import React from 'react';
// import { Link } from 'react-router-dom';

// export default class Navbar extends React.Component {
// 	render() {
// 		return (
// 			<div className="navbar-fixed">
// 				<nav className="z-depth-0">
// 					<div className="nav-wrapper">
// 						<Link
// 							to="/"
// 							style={{
// 								fontFamily: 'monospace',
// 							}}
// 							className="col s5 brand-logo black-text"
// 						>
// 							TodoApp
// 						</Link>
// 						<Link to="/status" className="col s6 black-text">
// 							Status
// 						</Link>
// 						<Link to="/landing" className="col s3 black-text">
// 							landing
// 						</Link>
// 						<Link to="/register" className="col s3 black-text">
// 							SignUp
// 						</Link>
// 					</div>
// 				</nav>
// 			</div>
// 		);
// 	}
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
	render() {
		return (
			<div className="navbar-fixed">
				<nav className="z-depth-0">
					<div className="nav-wrapper black">
						<Link
							to="/"
							style={{
								fontFamily: 'monospace',
								paddingLeft: '5px',
							}}
							className="col s5 brand-logo left white-text"
						>
							TodoApp
						</Link>
						<Link
							to="/login"
							style={{
								fontFamily: 'monospace',
								paddingRight: '10px',
								marginLeft: '30px',
							}}
							className="col s3 right white-text"
						>
							<i className="material-icons">account_circle</i>
						</Link>
						<Link
							to="/status"
							style={{
								fontFamily: 'monospace',
								paddingLeft: '10px',
							}}
							className="col s3 right white-text"
						>
							<i className="material-icons">analytics</i>
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
