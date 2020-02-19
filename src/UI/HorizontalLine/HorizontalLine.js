import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	'hr': {
		borderTop: '1px solid #000000',
	},
});

const horizontalLine = () => {
	return (
		<div>
			<hr />
		</div>
	);
};

export default withStyles(styles)(horizontalLine);