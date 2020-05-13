import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	hero: {
		height: '20vh',
		width: '100vw',
		backgroundImage: 'linear-gradient(to top, #d8d8d8, white)',
		display: 'flex',
		alignItems: 'center'
	},
	heading: {
		fontSize: theme.typography.pxToRem(40),
		fontFamily: 'roboto',
		color: '#222222',
		textTransform: 'uppercase',
		width: '100%',
		justifyContent: 'center',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		}
	}
}));

const SimpleHeader = ({ title }) => {
	const classes = useStyles();

	return (
		<header>
			<div alt="" className={classes.hero}>
				<h1 className={classes.heading}>{title}</h1>
			</div>
		</header>
	);
};

export default SimpleHeader;

SimpleHeader.propTypes = {
	title: PropTypes.string
};
