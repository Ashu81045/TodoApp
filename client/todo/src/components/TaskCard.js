import React from 'react';

export default function TaskCard(props) {
	console.log(props.id, 'props.key');
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<div className="todo-cards">
				<div className="todo-title">
					Title :{' '}
					<span
						style={{
							fontFamily: 'monospace',
							color: 'rgb(1, 216, 8)',
							fontSize: '16px',
							wordWrap: 'break-word',
						}}
					>
						{' '}
						{props.title}
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<div style={{ color: 'white' }}>
						Assignee :
						<span
							style={{
								fontFamily: 'monospace',
								color: 'rgb(1, 216, 8)',
								fontSize: '12px',
								wordWrap: 'break-word',
								marginRight: '5px',
							}}
						>
							{' '}
							{props.assignee}
						</span>{' '}
					</div>
					<div style={{ color: 'white' }}>
						Deadline :
						<span
							style={{
								fontFamily: 'monospace',
								color: 'red',
								fontSize: '12px',
								wordWrap: 'break-word',
								marginRight: '5px',
							}}
						>
							{' '}
							{props.deadline}
						</span>{' '}
					</div>
				</div>
			</div>
			<div
				id={props.id}
				style={{
					justifyContent: 'center',
					marginTop: '40px',
					color: 'red',
					cursor: 'pointer',
				}}
				onClick={() => props.delete(props.id)}
			>
				<span class="material-icons">delete_forever</span>
			</div>
		</div>
	);
}
