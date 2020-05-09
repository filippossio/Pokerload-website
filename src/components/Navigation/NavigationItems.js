import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
	a: {
		textDecoration: 'none',
		color: 'black',
	},
}));

const NavigationItems = () => {
	const classes = useStyles();

	return (
		<>
			<a href="/" className={classes.a}>
				<Button color="inherit">Home</Button>
			</a>
			<a href="/business" className={classes.a}>
				<Button color="inherit">Business</Button>
			</a>
			<a href="/about-us" className={classes.a}>
				<Button color="inherit">About us</Button>
			</a>
			<a href="/faq" className={classes.a}>
				<Button color="inherit">FAQ</Button>
			</a>
		</>
	);
};

export default NavigationItems;
