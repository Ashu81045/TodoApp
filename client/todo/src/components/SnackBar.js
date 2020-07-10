import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackBar(props) {
	return (
		<Snackbar
			open={props.open}
			autoHideDuration={2000}
			style={{ left: '18%', right: '18%', bottom: '40px' }}
		>
			<Alert
				severity={props.severity}
				style={{ fontSize: '1.2rem', alignItems: 'center' }}
			>
				{props.data}
			</Alert>
		</Snackbar>
	);
}
