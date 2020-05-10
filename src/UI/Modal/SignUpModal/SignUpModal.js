import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import NewsletterSignUp from '../../../components/NewsletterSignUp/NewsletterSignUp';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	signUpBtn: {
		width: '200px',
		height: '50px',
		marginTop: '20px',
		marginBottom: '20px',
		borderRadius: '50px',
		backgroundColor: '#606060',
		borderColor: '#606060',
		color: 'white',
		fontSize: '27px',
		'&:hover': {
			backgroundColor: 'black',
			borderColor: '#606060',
			cursor: 'pointer',
		},
		'&:focus': {
			outline: '0',
		},
		'&:active': {
			transform: 'translateY(4px)',
		}
	},
	modalContainer: {
		backgroundColor: '#606060',
		height: '250px',
		width: '500px',
		[theme.breakpoints.down('sm')]: {
			height: '100%',
			width: '100%',
		}
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	dialog: {
		[theme.breakpoints.down('sm')]: {
			margin: 'auto',
			height: '250px'
		}
	}
}));

const SignUpModal = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Box textAlign="center">
				<button className={classes.signUpBtn} onClick={handleClickOpen}>SIGN UP</button>
			</Box>
			<Dialog open={open} onClose={handleClose} fullScreen={fullScreen} className={classes.dialog}>
				{handleClose ? (
					<IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				) : null}
				<Container className={classes.modalContainer}>
					<NewsletterSignUp />
				</Container>
			</Dialog>
		</div>
	);
};

export default SignUpModal;
