import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	hero: {
		height: '30vh',
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
});

const SimpleHeader = (props) => {
	const { classes, title } = props;
	return (
		<header>
			<div alt="" className={classes.hero}>
				<h1 className={classes.heading}>{title}</h1>
			</div>
		</header>
	);
};

export default withStyles(styles)(SimpleHeader);