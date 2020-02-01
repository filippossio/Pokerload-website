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
		height: "251px",
		padding: "10px 0px",
	},
	coloumn: {
		padding: "10px 80px",
		borderRight: "2px solid white",
		"&:last-child": {
			borderRight: "none",
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
	},
	p: {
		margin: "0 0",
		fontSize: "16px",
		lineHeight: "19px",
		fontFamily: "Roboto",
		width: "100%",
		color: 'white',
	},
	pUppercase: {
		textTransform: "uppercase",
	},
	horizontalLine: {
		borderTop: "1px solid white",
		width: "100%",
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

// .yourclass{
//     border: 1px solid blue;
// }
// .yourclass:last-child{
//     border: 0;
// }

const footer = (props) => {
	const { classes } = props;
	return (
		<section className={classes.footer} >
			<Grid container>
				<Grid item xs={4} className={classes.coloumn}>
					<h2 className={`${classes.heading} ${classes.pUppercase}`}>contact us</h2>
					<Grid container xs={12} className={classes.row}>
						<p className={`${classes.p} ${classes.pUppercase}`}>contactus@pokerload.com</p>
						<hr className={classes.horizontalLine}></hr>
						<p className={`${classes.p} ${classes.pUppercase}`}>145 GEORGE STREET, G1 1RD, GLASGOW, UK</p>
						<p className={`${classes.p} ${classes.pUppercase}`}>4 MYSTRA, 1055, NICOSIA, CYPRUS</p>
						<hr className={classes.horizontalLine}></hr>
						<p className={`${classes.p} ${classes.pUppercase}`}>+44 771 665 0529 (UK)</p>
						<p className={`${classes.p} ${classes.pUppercase}`}>+357 99 740 775 (CY)</p>
					</Grid>
				</Grid>
				<Grid item xs={4} className={classes.coloumn}>
					<label for="newsletter" className={classes.heading}>SIGN UP</label>
					<div className={classes.newsletter}>
						<form action="">
							<input
								fullWidth
								type="email"
								placeholder="ENTER YOUR EMAIL"
								id="newsletter"
							/>
							<div className={classes.button}>
								<button className={`${classes.p} ${classes.pBold}`}>Join</button>
							</div>
						</form>
					</div>
					<hr className={classes.horizontalLine}></hr>
					<p className={classes.p}>By singing up, you have agreed to recieve update emails regarding our services and products</p>
				</Grid>
				<Grid item xs={4} className={classes.coloumn}>
					<h2 className={classes.heading}>FIND US</h2>
					<Grid container>
						<Grid item xs={3}>
							<img src={facebookSVG} alt="facebook" />
						</Grid>
						<Grid item xs={3}>
							<img src={instagramSvg} alt="instagram" />
						</Grid>
						<Grid item xs={3}>
							<img src={twitterSvg} alt="twitter" />
						</Grid>
						<Grid item xs={3}>
							<img src={linkedinSvg} alt="linked in" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section >
	);
};

export default withStyles(useStyles)(footer);