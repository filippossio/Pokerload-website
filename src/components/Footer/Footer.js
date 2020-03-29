import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import facebookSVG from '../../assets/facebook.svg';
import instagramSvg from '../../assets/instagram.svg';
import twitterSvg from '../../assets/twitter.svg';
import linkedinSvg from '../../assets/linkedin.svg';
import NewsletterSignUp from '../NewsletterSignUp/NewsletterSignUp'


const useStyles = theme => ({
	footer: {
		flexGrow: 1,
		backgroundColor: "#606060",

		padding: "10px 0px",
	},
	coloumn: {
		padding: "10px 80px",
		paddingBottom: '40px',
		[theme.breakpoints.up('md')]: {
			borderRight: "2px solid white",
			paddingBottom: '10px',
			"&:last-child": {
				borderRight: "none",
			},
		},
	},
	row: {
		color: "white",
		display: "flex",
	},
	heading: {
		fontSize: "25px",
		lineHeight: "30px",
		color: "white",
		marginBottom: "10px",
		fontFamily: "Roboto",
		fontWeight: "bold",
		display: 'block',
		marginBlockStart: '0.83em',
		marginBlockEnd: '0.83em',
		marginInlineStart: '0px',
		marginInlineEnd: '0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
		},
	},
	p: {
		margin: "0 0",
		fontSize: "15px",
		lineHeight: "19px",
		fontFamily: "Roboto",
		width: "100%",
		color: 'white',
		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			// fontSize: '10px',
		},
	},
	pUppercase: {
		textTransform: "uppercase",
	},
	horizontalLine: {
		borderTop: "1px solid white",
		width: "100%",
	},
	horizontalLineMobile: {
		borderTop: "1px solid white",
		width: "90%",
		[theme.breakpoints.up('md')]: {
			display: 'none',
		}

	},
});


const footer = (props) => {
	const { classes } = props;

	return (
		<section className={classes.footer} >
			<Grid container>
				<Grid id="contactUs" item xs={12} md={4} className={classes.coloumn}>
					<h2 className={`${classes.heading} ${classes.pUppercase}`}>contact us</h2>
					<Grid container className={classes.row}>
						<a target="._blank" href="mailto:contactus@pokerload.com" className={`${classes.p} ${classes.pUppercase}`}>contactus@pokerload.com</a>
						<hr className={classes.horizontalLine}></hr>
						<p className={`${classes.p} ${classes.pUppercase}`}>145 GEORGE STREET, G1 1RD, GLASGOW, UK</p>
						<p className={`${classes.p} ${classes.pUppercase}`}>4 MYSTRA, 1055, NICOSIA, CYPRUS</p>
						<hr className={classes.horizontalLine}></hr>
						<a href="tel:+447716650529" className={`${classes.p} ${classes.pUppercase}`}>+44 771 665 0529 (UK)</a>
						<a href="tel:+35799740775" className={`${classes.p} ${classes.pUppercase}`}>+357 99 740 775 (CY)</a>
					</Grid>
				</Grid>
				<hr className={classes.horizontalLineMobile}></hr>
				<Grid item xs={12} md={4} className={classes.coloumn}>
					<NewsletterSignUp />
				</Grid>
				<hr className={classes.horizontalLineMobile}></hr>
				<Grid item xs={12} md={4} className={classes.coloumn}>
					<h2 className={classes.heading}>FIND US</h2>
					<Grid container>
						<Grid style={{ paddingBottom: '10px' }} item xs={3} md={6} lg={3}>
							<a href="https://www.facebook.com/PokerloadLTD/">
								<img src={facebookSVG} target="_blank" alt="facebook" />
							</a>
						</Grid>
						<Grid style={{ paddingBottom: '10px' }} item xs={3} md={6} lg={3}>
							<a href="https://www.instagram.com/pokerload/">
								<img src={instagramSvg} target="_blank" alt="instagram" />
							</a>
						</Grid>
						<Grid style={{ paddingBottom: '10px' }} item xs={3} md={6} lg={3}>
							<a href="https://twitter.com/pokerload/">
								<img src={twitterSvg} target="_blank" alt="twitter" />
							</a>
						</Grid>
						<Grid style={{ paddingBottom: '10px' }} item xs={3} md={6} lg={3}>
							<a href="https://www.linkedin.com/company/28967506/">
								<img src={linkedinSvg} target="_blank" alt="linked in" />
							</a>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section >
	);
};

export default withStyles(useStyles)(footer);