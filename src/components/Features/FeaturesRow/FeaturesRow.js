import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Feature from '../Feature/Feature';

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		padding: '10px 0',
	},
}));

const FeaturesRow = (props) => {
	const { features, index } = props;
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Feature key={index} feature={features[0]} />
			{
				features[1] && <Feature key={index + 1} feature={features[1]} />
			}
		</Container>
	);
};

export default FeaturesRow;

FeaturesRow.propTypes = {
	features: PropTypes.array,
	index: PropTypes.number
};
