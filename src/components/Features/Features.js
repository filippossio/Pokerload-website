import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FeaturesRow from './FeaturesRow/FeaturesRow';
import HorizontalLine from '../../UI/HorizontalLine/HorizontalLine';

const styles = theme => ({
	container: {

	},
});

const features = (props) => {
	const { classes, features } = props;

	let body = [];
	for (let index = 0; index < features.length; index += 2) {
		body.push(<HorizontalLine />);
		body.push(<FeaturesRow key={index} index={index} features={[features[index], features[index + 1]]} />);
	}
	return (
		<Container maxWidth='lg' className={classes.container}>
			{body}
		</Container>
	);
};

export default withStyles(styles)(features);