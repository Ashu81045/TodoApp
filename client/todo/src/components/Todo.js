import React from 'react';
import TaskCard from './TaskCard';

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.renderTask = this.renderTask.bind(this);
	}

	renderTask() {
		if (this.props.info_hash) {
			return this.props.info_hash.map((toDo, index) => (
				<div id={index}>
					<TaskCard
						key={index}
						title={toDo.title}
						assignee={toDo.assignee}
						deadline={toDo.deadline}
						delete={this.props.delete}
						id={index}
					/>
				</div>
			));
		}
	}
	render() {
		return (
			<div className="card">
				<div className="todos-title"> To do </div>

				{this.renderTask()}

				<div className="todo-button" onClick={this.props.handleInputForm}>
					Add a card ...{' '}
				</div>
			</div>
		);
	}
}
