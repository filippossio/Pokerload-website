import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GrayBackground from '../../assets/gray_background.png';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CustomTypography from '../../UI/CustomTypography';
import SignUpModal from '../../UI/Modal/SignUpModal/SignUpModal';
import HeaderLogo from '../../assets/logo.svg';

const useStyles = makeStyles(() => ({
	header: {
		backgroundImage: `url(${GrayBackground})`,
	},
}));


const HeaderHome = () => {
	const classes = useStyles();

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
		</>
	);
};

export default HeaderHome;
