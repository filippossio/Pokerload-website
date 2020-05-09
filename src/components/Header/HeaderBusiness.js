import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GrayBackground from '../../assets/gray_background.png';
import HeaderLogoBusiness from '../../assets/logoBusiness.svg';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CustomTypography from '../../UI/CustomTypography';

const useStyles = makeStyles((theme) => ({
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
	header: {
		backgroundImage: `url(${GrayBackground})`,
	},
}));


const Header = () => {
	const classes = useStyles();

	return (
		<>
			<Box pt={4} pb={10} className={classes.header} >
				<Grid
					container
					direction="row"
					alignItems="center">
					<Grid item xs={12} md={6}>
						<img src={HeaderLogoBusiness} alt="Pokerload Logo" />
					</Grid>
					<Grid item xs={12} md={6}>
						<CustomTypography variant="h5" py={30} align="center" color="black" fontWeight="bold" fontStyle="italic">&quot;We bring players closer to you&quot;</CustomTypography>
						<CustomTypography variant="h5" pb={10} align="center" color="#bb001f" fontWeight="bold">Raise your live game</CustomTypography>
						<CustomTypography variant="h4" pb={10} align="center" color="black" fontWeight="bold">CRM & Marketing platform</CustomTypography>
						<CustomTypography variant="h5" pb={10} align="center" color="black" fontWeight="bold">for all licenced poker venues</CustomTypography>
						<CustomTypography variant="h6" pt={20} pb={10} align="center" color="#bb001f" fontWeight="bold">for more info contact us</CustomTypography>
						<CustomTypography variant="subtitle1" align="center" color="black" fontWeight="bold">at <a className={classes.mailTo}
							style={{ color: 'black' }}
							target="_blank"
							href=" mailto:Business@pokerload.com?subject=Mail from Our Business Site">
							Business@pokerload.com</a></CustomTypography>
					</Grid>
				</Grid>
			</Box >
			<div className={classes.banner}>
				<Grid container>
					<Grid item sm={3}>Promote</Grid>
					<Grid item sm={3}>Organise</Grid>
					<Grid item sm={3}>Monitor</Grid>
					<Grid item sm={3}>Automate</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Header;
