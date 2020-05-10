import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import icon from '../../assets/pokerload-icons.svg';


const useStyles = makeStyles((theme) => ({
	section: {
		display: 'flex',
		flexFlow: 'column',
		alignItems: 'center',
		fontFamily: 'roboto',
		paddingTop: '10px'
	},
	header: {
		fontSize: '25px',
		color: '#bb001f',
		marginBottom: '0px',
	},
	text: {
		fontSize: '20px',
		textAlign: 'center',
	},
	icon: {
		height: '200px',
	},
	[theme.breakpoints.down('sm')]: {
		header: {
			fontSize: '20px',
		},
		text: {
			fontSize: '15px',
		},
	}
}));

const Pokerload = () => {
	const classes = useStyles();
	return (
		<Container maxWidth='sm' className={classes.section}>
			<img className={classes.icon} src={icon} alt="" />
			<h2 className={classes.header}>WHAT IS POKERLOAD?</h2>
			<p className={classes.text}>
				PokerLoad intends to be the main channel found on an internet platform for all poker
				activities that take place live in real casinos and licensed poker clubs worldwide.</p>
		</Container>
	);
};

export default Pokerload;
