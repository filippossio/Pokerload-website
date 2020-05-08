import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	a: {
		textDecoration: 'none',
		color: 'black',
	},
});

const NavigationItems = (props) => {
	const { classes } = props;

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

export default withStyles(styles)(NavigationItems);