import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroImage from '../../assets/heroImage.png';
import HeroImageMobile from '../../assets/heroImageMobile.png';
import HeaderLogo from '../../assets/logo.svg';
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
	},
	heroContent: {
		paddingTop: '20px',
		paddingLeft: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100vh',
		width: '50vw',
		position: 'absolute',
		top: '0px',
		[theme.breakpoints.down('xs')]: {
			width: '100vw',
		}
	},
	headerLogo: {
		height: '215px',
		width: '500px',
		[theme.breakpoints.down('sm')]: {
			height: '170px',
			width: '300px',
		}
	},
	text1: {
		fontWeight: 'bold',
		fontSize: '1.5rem',
		color: '#bb001f',
		margin: '10px 0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		}
	},
	text2: {
		fontWeight: 'bold',
		fontSize: '2.5rem',
		color: 'white',
		margin: '0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem',
		}
	},
	text3: {
		fontWeight: 'bold',
		fontSize: '2rem',
		color: 'white',
		margin: '0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.6rem',
		}
	},
	text4: {
		fontWeight: 'bold',
		fontSize: '1rem',
		color: 'white',
		marginTop: '20px',
	},
	newsletter: {
		fontWeight: 'bold',
		fontSize: '1.2rem',
		color: '#bb001f',
		margin: '10px 0',
		textAlign: 'left',
	},
	button: {
		width: '200px',
		height: '50px',
		marginTop: '20px',
		borderRadius: '50px',
		backgroundColor: '#606060',
		borderColor: '#606060',
		color: 'white',
		fontSize: '27px',
		'&:hover': {
			backgroundColor: 'black',
			borderColor: '#606060',
		},
		'&:focus': {
			outline: '0',
		},
		'&:active': {
			transform: 'translateY(4px)',
		}
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
	},
});

const header = (props) => {
	const { classes } = props;
	return (
		<header className={classes.header}>
			<picture>
				<source srcSet={HeroImageMobile} media="(max-width: 599px)" />
				<img src={HeroImage} alt="" className={classes.hero} />
			</picture>
			<div className={classes.heroContent} >
				<div>
					<img src={HeaderLogo} alt="pokerload" className={classes.headerLogo} />
					<h2 className={classes.text1}>Live Games at your fingertips</h2>
					<h2 className={classes.text2}>Book & Buy-in</h2>
					<h2 className={classes.text3}>in just a few clicks</h2>
					<p className={classes.newsletter}>join our newsletter</p>
					<button className={classes.button}>SIGN UP</button>
					<p className={classes.text4}>Must be 21+ years old to sign up</p>
				</div>
			</div>

			<div className={classes.banner}>
				<Grid container>
					<Grid item sm={3}>1.Download App</Grid>
					<Grid item sm={3}>2. Register</Grid>
					<Grid item sm={3}>3. Find your game</Grid>
					<Grid item sm={3}>4. Book in</Grid>
				</Grid>
			</div>
		</header>
	);
};

export default withStyles(styles)(header);;;;;;;;