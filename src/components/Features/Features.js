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
	let body = features.map((feature, index, elements) => {
		if (index % 2 === 0) {
			return (
				<div key={index}>
					<HorizontalLine index={index} />
					{
						elements[index + 1] ? <FeaturesRow index={index} features={[feature, elements[index + 1] || null]} /> : <FeaturesRow index={index} features={[feature]} />
					}
				</div>
			);
		}
		return '';
	});
	return (
		<Container maxWidth='lg' className={classes.container}>
			{body}
		</Container>
	);
};

export default withStyles(styles)(features);