import React from 'react';
import TaskCard from './TaskCard';

export default class Doing extends React.Component {
	constructor(props) {
		super(props);
		this.renderTask = this.renderTask.bind(this);
	}
	renderTask() {
		if (this.props.info_hash) {
			return this.props.info_hash.map((toDo, index) => (
				<TaskCard
					key={index}
					title={toDo.title}
					assignee={toDo.assignee}
					deadline={toDo.deadline}
					delete={this.props.delete}
					id={index}
				/>
			));
		}
	}

	render() {
		return (
			<div className="card">
				<div className="doings-title"> Doing </div>
				{this.renderTask()}
				<div className="todo-button" onClick={this.props.handleInputForm}>
					Add a card ...{' '}
				</div>
			</div>
		);
	}
}
