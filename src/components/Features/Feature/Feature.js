import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexFlow: 'column',
		alignItems: 'center',
		fontFamily: 'roboto',
	},
	header: {
		fontSize: '25px',
		color: '#bb001f',
		marginBottom: '0px',
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	text: {
		fontSize: '20px',
		textAlign: 'center',
	},
	icon: {
		height: '100px'
	},
	[theme.breakpoints.down('sm')]: {
		header: {
			fontSize: '20px',
			minHeight: '60px',
		},
		text: {
			fontSize: '15px',
		},
		icon: {
			height: '60px'
		},
	}
}));

const Feature = (props) => {
	const { feature } = props;
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<img className={classes.icon} src={feature.icon} alt="" />
			<h2 className={classes.header}>{feature.name}</h2>
			<p className={classes.text}>{feature.description}</p>
		</Container>
	);
};

export default Feature;

Feature.propTypes = {
	feature: PropTypes.object
};
