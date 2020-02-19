import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import facebookSVG from '../../assets/facebook.svg';
import instagramSvg from '../../assets/instagram.svg';
import twitterSvg from '../../assets/twitter.svg';
import linkedinSvg from '../../assets/linkedin.svg';


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
		[theme.breakpoints.down('sm')]: {
			// fontSize: '10px',
		},
	},
	pBlack: {
		color: 'black',
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
	newsletter: {
		border: '1px solid white',
		'& input': {
			height: '36px',
			border: 'none',
			backgroundColor: "#888888",
			color: "#ffffff",
			padding: '0 10px',
			float: 'left',
			width: '70%',
			'&::placeholder': {
				color: '#ffffff'
			}
		},
		"& button": {
			height: "36px",
			border: "1px solid white",
			borderRadius: "0px",
			// padding: '10px 15px',
			// marginLeft: '25px',
			fontSize: '12px',
			width: '100%',
		}
	},
	button: {
		overflow: 'hidden',
		// paddingRight: '.5em',
	},
	pBold: {
		fontWeight: "bold",
	},

});


const footer = (props) => {
	const { classes } = props;
	return (
		<section className={classes.footer} >
			<Grid container>
				<Grid item xs={12} md={4} className={classes.coloumn}>
					<h2 className={`${classes.heading} ${classes.pUppercase}`}>contact us</h2>
					<Grid container className={classes.row}>
						<p className={`${classes.p} ${classes.pUppercase}`}>contactus@pokerload.com</p>
						<hr className={classes.horizontalLine}></hr>
						<p className={`${classes.p} ${classes.pUppercase}`}>145 GEORGE STREET, G1 1RD, GLASGOW, UK</p>
						<p className={`${classes.p} ${classes.pUppercase}`}>4 MYSTRA, 1055, NICOSIA, CYPRUS</p>
						<hr className={classes.horizontalLine}></hr>
						<p className={`${classes.p} ${classes.pUppercase}`}>+44 771 665 0529 (UK)</p>
						<p className={`${classes.p} ${classes.pUppercase}`}>+357 99 740 775 (CY)</p>
					</Grid>
				</Grid>
				<hr className={classes.horizontalLineMobile}></hr>
				<Grid item xs={12} md={4} className={classes.coloumn}>
					<label htmlFor="newsletter" className={classes.heading}>SIGN UP</label>
					<div className={classes.newsletter}>
						<form action="">
							<input
								type="email"
								placeholder="ENTER YOUR EMAIL"
								id="newsletter"
							/>
							<div className={classes.button}>
								<button className={`${classes.p} ${classes.pBold} ${classes.pBlack}`}>Join</button>
							</div>
						</form>
					</div>
					<hr className={classes.horizontalLine}></hr>
					<p className={classes.p}>By singing up, you have agreed to recieve update emails regarding our services and products</p>
				</Grid>
				<hr className={classes.horizontalLineMobile}></hr>
				<Grid item xs={12} md={4} className={classes.coloumn}>
					<h2 className={classes.heading}>FIND US</h2>
					<Grid container>
						<Grid item xs={3}>
							<a href="/">
								<img src={facebookSVG} alt="facebook" />
							</a>
						</Grid>
						<Grid item xs={3}>
							<a href="https://www.instagram.com/pokerload/">
								<img src={instagramSvg} alt="instagram" />
							</a>
						</Grid>
						<Grid item xs={3}>
							<a href="/">
								<img src={twitterSvg} alt="twitter" />
							</a>
						</Grid>
						<Grid item xs={3}>
							<a href="/">
								<img src={linkedinSvg} alt="linked in" />
							</a>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section >
	);
};

export default withStyles(useStyles)(footer);