import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	copyright: {
		flexGrow: 1,
		height: '20px',
	},
	coloumn: {
		padding: '0 80px',
		[theme.breakpoints.down('sm')]: {
			padding: '0',
		},

	},
	p: {
		margin: '0',
		textTransform: 'uppercase',
		fontFamily: 'Roboto',
		color: 'black',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.75rem',
			textAlign: 'center'
		},
	},
	pBold: {
		fontWeight: 'bold',
	},
	pUnderline: {
		textDecoration: 'underline',
		display: 'block',
	},
	pGray: {
		color: '#9e9e9e'
	}
}));

const Copyright = () => {
	const classes = useStyles();
	return (
		<section className={classes.copyright}>
			<Grid container>
				<Grid item xs={6} sm={4} className={classes.coloumn}>
					<p className={`${classes.p} ${classes.pBold}`}>&#169; 2019 pokerload LTD</p>
				</Grid>
				<Grid item xs={6} sm={4} className={classes.coloumn}>
					<a className={`${classes.p} ${classes.pUnderline} ${classes.pGray}`} href="/terms-and-conditions">terms and conditions</a>
				</Grid>
				<Grid item xs={12} sm={4} className={classes.coloumn}>
					<a className={`${classes.p} ${classes.pUnderline} ${classes.pGray}`} href="/privacy-policy">Privacy Policy</a>
				</Grid>
			</Grid>
		</section >
	);
};

export default Copyright;
