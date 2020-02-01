import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	copyright: {
		flexGrow: 1,
		height: "20px",
	},
	coloumn: {
		padding: "0 80px",
	},
	p: {
		margin: "0",
		textTransform: "uppercase",
		fontFamily: "Roboto",
	},
	pBold: {
		fontWeight: "bold",
	},
});

const copyright = (props) => {
	const { classes } = props;
	return (
		<section className={classes.copyright}>
			<Grid container>
				<Grid item xs={4} className={classes.coloumn}>
					<p className={`${classes.p} ${classes.pBold}`}>pokerload 2019, TLD &#169;</p>
				</Grid>
				<Grid item xs={4} className={classes.coloumn}>
					<p className={classes.p}>terms and conditions</p>
				</Grid>
				<Grid item xs={4} className={classes.coloumn}>
					<p className={classes.p}>Privacy Policy</p>
				</Grid>
			</Grid>
		</section >
	);
};

export default withStyles(styles)(copyright);