import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Feature from '../Feature/Feature';

const styles = theme => ({
	container: {
		display: 'flex',
		padding: '10px 0',
	},
});

const featuresRow = (props) => {
	const { classes, features, index } = props;

	return (
		<Container className={classes.container}>
			<Feature key={index} feature={features[0]} />
			{features[1] &&
				<Feature key={index + 1} feature={features[1]} />
			}
		</Container>
	);
};

export default withStyles(styles)(featuresRow);