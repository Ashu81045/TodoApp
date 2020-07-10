import React from 'react';
import Todo from './Todo';
import Doing from './Doing';
import Done from './Done';
import InputForm from './InputForm';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: false,
			assignee: '',
			deadline: '',
			title: '',
			status: '',
			to_do: '',
			to_do_info_hash: [],
			doing_info_hash: [],
			done_info_hash: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleInputForm = this.handleInputForm.bind(this);
		this.handleCancelButton = this.handleCancelButton.bind(this);
		this.saveFormData = this.saveFormData.bind(this);
		//this.sendData2Server = this.sendData2Server.bind(this);
	}
	// sendData2Server(){
	//   axios.get(`https://jsonplaceholder.typicode.com/users`)
	//     .then(res => {
	//       const persons = res.data;
	//       this.setState({ persons });
	//     })
	// }
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleInputForm() {
		this.setState({ flag: true });
	}
	handleCancelButton() {
		this.setState({ flag: false });
	}

	componentDidMount() {
		let to_do = JSON.parse(localStorage.getItem('to_do'));
		if (to_do) {
			this.setState({ to_do_info_hash: to_do });
		}
		let doing = JSON.parse(localStorage.getItem('doing'));
		if (doing) {
			this.setState({ doing_info_hash: doing });
		}
		let done = JSON.parse(localStorage.getItem('done'));
		if (done) {
			this.setState({ done_info_hash: done });
		}
	}
	saveFormData() {
		var title = this.state.title;
		var assignee = this.state.assignee;
		var deadline = this.state.deadline;
		var status = this.state.status;
		if (status === 'to-do') {
			let info_hash = { title: title, assignee: assignee, deadline: deadline };

			let to_do = JSON.parse(localStorage.getItem('to_do'));
			if (!to_do) {
				to_do = [];
			}
			to_do.push(info_hash);
			this.setState({ to_do_info_hash: to_do });
			localStorage.setItem('to_do', JSON.stringify(to_do));
		} else if (status === 'doing') {
			let info_hash = { title: title, assignee: assignee, deadline: deadline };
			this.setState({ doing_info_hash: info_hash });
			let doing = JSON.parse(localStorage.getItem('doing'));
			if (!doing) {
				doing = [];
			}
			doing.push(info_hash);
			this.setState({ doing_info_hash: doing });
			localStorage.setItem('doing', JSON.stringify(doing));
		} else if (status === 'done') {
			let info_hash = { title: title, assignee: assignee, deadline: deadline };
			this.setState({ done_info_hash: info_hash });
			let done = JSON.parse(localStorage.getItem('done'));
			if (!done) {
				done = [];
			}
			done.push(info_hash);
			this.setState({ done_info_hash: done });
			localStorage.setItem('done', JSON.stringify(done));
		} else {
			return 1;
		}
		this.setState({ flag: false });
		// axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
		//  .then(res => {
		//    console.log(res);
		//    console.log(res.data);
		//  })
	}
	deleteTodo = (key) => {
		if (this.state.to_do_info_hash.length === 1) {
			const newArr = this.state.to_do_info_hash.splice(key, key + 1);
			this.setState({ to_do_info_hash: this.state.to_do_info_hash });
			let to_do = JSON.parse(localStorage.getItem('to_do'));
			to_do.pop(newArr);
			localStorage.setItem('to_do', JSON.stringify(to_do));
		} else {
			const newArr = this.state.to_do_info_hash.splice(key, key);
			this.setState({ to_do_info_hash: this.state.to_do_info_hash });
			let to_do = JSON.parse(localStorage.getItem('to_do'));
			to_do.pop(newArr);
			localStorage.setItem('to_do', JSON.stringify(to_do));
		}
	};
	deleteDoing = (key) => {
		if (this.state.doing_info_hash.length === 1) {
			const newArr = this.state.doing_info_hash.splice(key, key + 1);
			this.setState({ doing_info_hash: this.state.doing_info_hash });
			let doing = JSON.parse(localStorage.getItem('doing'));
			doing.pop(newArr);
			localStorage.setItem('doing', JSON.stringify(doing));
		} else {
			const newArr = this.state.doing_info_hash.splice(key, key);
			this.setState({ doing_info_hash: this.state.doing_info_hash });
			let doing = JSON.parse(localStorage.getItem('doing'));
			doing.pop(newArr);
			localStorage.setItem('doing', JSON.stringify(doing));
		}
	};
	deleteDone = (key) => {
		if (this.state.done_info_hash.length === 1) {
			const newArr = this.state.done_info_hash.splice(key, key + 1);
			this.setState({ done_info_hash: this.state.done_info_hash });
			let done = JSON.parse(localStorage.getItem('done'));
			done.pop(newArr);
			localStorage.setItem('done', JSON.stringify(done));
		} else {
			const newArr = this.state.done_info_hash.splice(key, key);
			this.setState({ done_info_hash: this.state.done_info_hash });
			let done = JSON.parse(localStorage.getItem('done'));
			done.pop(newArr);
			localStorage.setItem('done', JSON.stringify(done));
		}
	};

	render() {
		return (
			<div>
				<Navbar />
				<div className="app-title"> Welcome to Task Management App </div>
				<div className="home-page-layout">
					<Todo
						handleInputForm={this.handleInputForm}
						info_hash={this.state.to_do_info_hash}
						delete={this.deleteTodo}
					/>
					<Doing
						handleInputForm={this.handleInputForm}
						info_hash={this.state.doing_info_hash}
						delete={this.deleteDoing}
					/>
					<Done
						handleInputForm={this.handleInputForm}
						info_hash={this.state.done_info_hash}
						delete={this.deleteDone}
					/>
				</div>
				<InputForm
					saveFormData={this.saveFormData}
					flag={this.state.flag}
					handleChange={this.handleChange}
					handleCancelButton={this.handleCancelButton}
				/>
				<Footer />
			</div>
		);
	}
}
