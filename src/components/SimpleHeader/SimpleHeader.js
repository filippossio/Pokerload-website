import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	faq: {

	},
	hero: {
		height: '30vh',
		width: '100vw',
		backgroundColor: "#DCDCDC",
	},
	heading: {
		fontSize: theme.typography.pxToRem(40),
		position: 'absolute',
		top: '10%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',

	},
	questions: {
		padding: '20px 0'
	}
});

const SimpleHeader = (props) => {
	const { classes, title } = props;
	return (
		<header>
			<div alt="" className={classes.hero} />
			<h1 className={classes.heading}>{title}</h1>
		</header>
	);
};

export default withStyles(styles)(SimpleHeader);