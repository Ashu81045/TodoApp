import React from 'react';


export default class InputForm extends React.Component{

	render () {
		if(this.props.flag){
		    return (
			    <div className ="input-modal" id="inputModal">
				    <div className ="modal-content flex-column">
					    <div className="modal-header">
					    	<div className="modal-heading-text">
					    		<span className="blue-text-title">Add a Card</span>
					    	</div>
				    	</div>
					    <hr className="separator" />
					    <div className="modal-body">
				    		<div className ="form-card">
				      			<form>
				      				<div className ="form-content">
								        <label className ="label">Title <span className="red-color">*</span></label>
								        <input type="text" className="input" name="title" onChange={this.props.handleChange} />
								    </div>
							        <div className ="form-content">
								        <label className="label">Assignee <span className="red-color">*</span></label>
								        <input type="text"className="input" name="assignee" onChange={this.props.handleChange} />
								    </div>
								    <div className ="form-content">
								        <label className="label">Deadline <span className="red-color">*</span></label>
								        <input type="date" className="input" name="deadline" onChange={this.props.handleChange} />
								    </div>
								    <div className ="form-content">
								        <label className="label">Status <span className="red-color">*</span></label>
								        <select className="input" id="profile-gender" name="status" onChange={this.props.handleChange}>
								        	<option value="select">Please select</option>
										    <option value="to-do">To do</option>
										    <option value="doing">Doing</option>
										    <option value="done">Done</option>
								    	</select>
								    </div>
						    	</form>
						    	<div className ="display-flex-center">
							    	<button className ="input-form-button" onClick ={this.props.saveFormData}> Add</button>
							    	<button className ="input-form-button" onClick ={this.props.handleCancelButton}> Cancel</button>
						    	</div>

						    </div>
				    	</div>
				    </div>
				</div>
		    );
		}else{
			return(<div></div>);
		}
	  }
}
