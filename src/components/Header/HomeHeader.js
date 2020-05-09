import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GrayBackground from '../../assets/gray_background.png';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CustomTypography from '../../UI/CustomTypography';
import SignUpModal from '../../UI/Modal/SignUpModal/SignUpModal';
import HeaderLogo from '../../assets/logo.svg';

const styles = theme => ({
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
	header: {
		backgroundImage: `url(${GrayBackground})`,
	},
});


const header = (props) => {
	const { classes } = props;

	return (
		<>
			<Box pt={4} pb={10} className={classes.header} >
				<Grid
					container
					direction="row"
					alignItems="center">
					<Grid item md={6}>
						<img src={HeaderLogo} alt="Pokerload Logo" />
					</Grid>
					<Grid item xs={12} md={6}>
						<CustomTypography variant="h5" pb={10} align="center" color="#bb001f" fontWeight="bold">Live Games at your fingertips</CustomTypography>
						<CustomTypography variant="h3" pb={10} align="center" color="black" fontWeight="bold">Book & Buy-in</CustomTypography>
						<CustomTypography variant="h4" pb={10} align="center" color="black" fontWeight="bold">in just a few clicks</CustomTypography>
						<CustomTypography variant="h6" pb={10} align="center" color="#bb001f" fontWeight="bold">Join our newsletter</CustomTypography>
						<SignUpModal />
						<CustomTypography variant="subtitle1" align="center" color="black" fontWeight="bold">Must be 21+ years old to sign up</CustomTypography>
					</Grid>
				</Grid>
			</Box >
			<div className={classes.banner}>
				<Grid container>
					<Grid item sm={3}>1. Download App</Grid>
					<Grid item sm={3}>2. Register</Grid>
					<Grid item sm={3}>3. Find game</Grid>
					<Grid item sm={3}>4. Book in</Grid>
				</Grid>
			</div>
		</>
	);
};

export default withStyles(styles)(header);