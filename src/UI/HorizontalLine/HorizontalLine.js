import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
	'hr': {
		borderTop: '1px solid #000000',
	},
});

const horizontalLine = (props) => {
	const { classes } = props;
	return (
		<div>
			<hr />
		</div>
	);
};

export default withStyles(styles)(horizontalLine);