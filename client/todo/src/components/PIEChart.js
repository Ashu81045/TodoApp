import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default class PIEChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: 1,
			doing: 1,
			done: 1,
		};
		this.populatePieChart = this.populatePieChart.bind(this);
	}
	componentDidMount() {
		let to_do = JSON.parse(localStorage.getItem('to_do'));
		if (to_do) {
			let len = to_do.length;
			this.setState({ todo: len });
			console.log('todo from piecart', len);
		}

		let doing = JSON.parse(localStorage.getItem('doing'));
		console.log('doing from piecart', doing);
		if (doing) {
			let len = doing.length;
			this.setState({ doing: len });
			console.log('doing from piecart', len);
		}

		let done = JSON.parse(localStorage.getItem('done'));
		if (done) {
			let len = done.length;
			this.setState({ done: len });
			console.log('done from piecart', len);
		}
	}
	populatePieChart() {
		if (this.state.done > 1 || this.state.doing > 1 || this.state.todo > 1) {
			return (
				<PieChart
					data={[
						{ title: 'To do', value: this.state.todo, color: 'red' },
						{ title: 'Doing', value: this.state.doing, color: 'blue' },
						{ title: 'Done', value: this.state.done, color: 'green' },
					]}
					label={'To do Doing Done'}
					labelPosition={50}
					labelStyle={{
						fill: '#121212',
						fontFamily: 'sans-serif',
						fontSize: '5px',
					}}
				/>
			);
		} else {
			return (
				<PieChart
					data={[
						{ title: 'To do', value: 1, color: 'red' },
						{ title: 'Doing', value: 1, color: 'blue' },
						{ title: 'Done', value: 1, color: 'green' },
					]}
				/>
			);
		}
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="pie-container">
					<div className="pie">
						<div className="pie-title">Status(Pie Chart )</div>
						{this.populatePieChart()}
						<div className="icon-visiblity">
							<div className="red-text"></div>
							<div className="icon">Todo</div>
							<div className="blue-text"></div>
							<div className="icon">Doing</div>
							<div className="green-text"></div>
							<div className="icon">Done</div>
						</div>
						<Link to="/dashboard" className="input-form-button">
							Dashboard
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
