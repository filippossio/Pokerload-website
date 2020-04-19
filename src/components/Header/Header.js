import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SignUpModal from '../../UI/Modal/SignUpModal/SignUpModal';
import HeroImage from '../../assets/heroImage.png';
import HeroImageBusiness from '../../assets/gray_background.png';
import HeroImageMobile from '../../assets/heroImageMobile.png';
import HeaderLogo from '../../assets/logo.svg';
import HeaderLogoBusiness from '../../assets/logoBusiness.svg';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	header: {
		fontFamily: 'roboto',
		textTransform: 'uppercase',
		height: '100vh',
		paddingBottom: '20px',
	},
	hero: {
		height: '100vh',
		width: '100vw',
		[theme.breakpoints.down('sm')]: {
			height: '95vh',
		}
	},
	heroContent: {
		paddingLeft: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: 'fit-content',
		width: '50vw',
		position: 'absolute',
		top: '20px',
		[theme.breakpoints.down('xs')]: {
			width: '100vw',
		},
		[theme.breakpoints.down('sm')]: {
			top: '50px',
			paddingTop: '20px',
		},
	},
	headerLogo: {
		height: '215px',
		width: '500px',
		marginTop: '10px',
		[theme.breakpoints.down('sm')]: {
			height: '170px',
			width: '300px',
		},
		'@media(max-height: 700px)': {
			height: '170px',
		},
		'@media(max-height: 500px)': {
			height: '130px',
		},
	},
	text0: {
		fontWeight: 'bold',
		fontSize: '1.5rem',
		color: 'white',
		margin: '1% 0 6% 0',
		fontStyle: 'italic',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		}
	},
	text1: {
		fontWeight: 'bold',
		fontSize: '1.5rem',
		color: '#bb001f',
		margin: '10px 0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		},
		'@media(max-height: 700px)': {
			fontSize: '1.2rem',
		},
	},
	text2: {
		fontWeight: 'bold',
		fontSize: '2.5rem',
		color: 'white',
		margin: '0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem',
		},
		'@media(max-height: 700px)': {
			fontSize: '2.2rem',
		},
	},
	text3: {
		fontWeight: 'bold',
		fontSize: '2rem',
		color: 'white',
		margin: '0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.6rem',
		},
		'@media(max-height: 700px)': {
			fontSize: '1.7rem',
		},
	},
	text4: {
		fontWeight: 'bold',
		fontSize: '1rem',
		color: 'white',
		marginTop: '40px',
		'@media(max-height: 700px)': {
			marginTop: '20px',
			fontSize: '0.9rem',
		},
	},
	newsletter: {
		fontWeight: 'bold',
		fontSize: '1.2rem',
		color: '#bb001f',
		margin: '20px 0 10px 0',
		textAlign: 'left',
	},
	banner: {
		height: '20%',
		fontWeight: '500',
		fontSize: '1.2rem',
		backgroundColor: 'rgba(187, 0, 31, 0.8)',
		position: 'relative',
		bottom: '20%',
		color: 'white',
		textAlign: 'center',
		'& div': {
			height: '100%',
			padding: '15px 75px',

			'& div': {
				[theme.breakpoints.down('xs')]: {
					display: 'none',
				},
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0',
				borderLeft: '1px solid white',
			},
			'& div:first-child': {
				borderLeft: '1px solid white',
			},
			'& div:last-child': {
				borderRight: '1px solid white',
			}
		},
		[theme.breakpoints.down('sm')]: {
			height: '15%',
			bottom: '15%',
			fontSize: '0.8rem',
		},
		'@media(max-height: 700px)': {
			bottom: '15%',
			height: '15%',
		},
	},
	mailTo: {
		textDecoration: 'underline',
		color: 'white',
		'&:hover': {
			color: 'gray',
		}
	},
});

const header = (props) => {
	const { classes, business } = props;

	if (!business) {
		return (
			<header className={classes.header}>
				<picture>
					<source srcSet={HeroImageMobile} media="(max-width: 599px)" />
					<img src={HeroImage} alt="" className={classes.hero} />
				</picture>
				<div className={classes.heroContent} >
					<div>
						<a href="/"><img src={HeaderLogo} alt="pokerload" className={classes.headerLogo} /></a>
						<h2 className={classes.text1}>Live Games at your fingertips</h2>
						<h2 className={classes.text2}>Book & Buy-in</h2>
						<h2 className={classes.text3}>in just a few clicks</h2>
						<p className={classes.newsletter}>join our newsletter</p>
						<SignUpModal />
						<p className={classes.text4}>Must be 21+ years old to sign up</p>
					</div>
				</div>
				<div className={classes.banner}>
					<Grid container>
						<Grid item sm={3}>1. Download App</Grid>
						<Grid item sm={3}>2. Register</Grid>
						<Grid item sm={3}>3. Find your game</Grid>
						<Grid item sm={3}>4. Book in</Grid>
					</Grid>
				</div>
			</header>
		);
	}
	else {
		return (
			<header className={classes.header}>
				<picture>
					<source srcSet={HeroImageBusiness} media="(max-width: 599px)" />
					<img src={HeroImageBusiness} alt="" className={classes.hero} />
				</picture>
				<div className={classes.heroContent} >
					<div>
						<a href="/"><img src={HeaderLogoBusiness} alt="pokerload" className={classes.headerLogo} /></a>
						<h2 className={classes.text0}>"We bring players closer to you"</h2>
						<h2 className={classes.text1}>Raise your live game</h2>
						<h2 className={classes.text2} style={{ color: 'black' }}>CRM & Marketing platform</h2>
						<h2 className={classes.text3} style={{ color: 'black' }}>for all licenced poker venues</h2>
						<p className={classes.newsletter} style={{ paddingTop: '20px' }}>for more info contact us</p>
						<p className={classes.text4} style={{ marginTop: '0px', color: 'black' }}>
							at <a className={classes.mailTo}
								style={{ color: 'black' }}
								target="_blank"
								href=" mailto:Business@pokerload.com?subject=Mail from Our Business Site">
								Business@pokerload.com</a>
						</p>
					</div>
				</div>
				<div className={classes.banner}>
					<Grid container>
						<Grid item sm={3}>Promote</Grid>
						<Grid item sm={3}>Organise</Grid>
						<Grid item sm={3}>Monitor</Grid>
						<Grid item sm={3}>Automate</Grid>
					</Grid>
				</div>
			</header >
		);
	}
};

export default withStyles(styles)(header);