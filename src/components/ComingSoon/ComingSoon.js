import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	comingSoon: {
		flexGrow: 1,
		height: '100px',
		background: 'black',
		color: 'white',
		display: 'flex',
		justifyContent: 'center',
	},
	coloumn: {
		padding: '0 80px',
	},
	pBold: {
		fontWeight: 'bold',
	},
	pUppercase: {
		textTransform: 'uppercase',
	},
	text: {
		fontSize: '2.25rem',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.75rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.15rem',
		},
		fontFamily: 'Roboto',
		margin: 'auto',
		padding: '10px 10px',
		textAlign: 'center',
	}
}));

const ComingSoon = () => {
	const classes = useStyles();
	return (
		<section className={classes.comingSoon}>
			<h2 className={`${classes.text} ${classes.pUppercase}`}>
				Coming soon to Apple store and google play
			</h2>
		</section >
	);
};

export default ComingSoon;
