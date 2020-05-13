import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	teamCard: {
		width: '80%',
		display: 'flex',
		alignItems: 'center',
		flexFlow: 'column',
		border: '1px solid grey',
		margin: '10px auto',
		padding: '45px 0',
		boxShadow: '5px 5px 8px #888888',
		height: '100%'
	},
	image: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		border: '1px solid #bb001f',
		[theme.breakpoints.down('sm')]: {
			width: theme.spacing(15),
			height: theme.spacing(15),
		}
	},
	name: {
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.4rem',
		}
	},
	role: {
		color: '#bb001f',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.2rem',
		}
	}
}));

const TeamCard = (props) => {
	const { person } = props;
	const classes = useStyles();

	return (
		<div className={classes.teamCard}>
			<Avatar alt={person.name} src={person.image} className={classes.image} />
			<Typography variant="h4" className={classes.name} >{person.name}</Typography>
			<Typography variant="h6" className={classes.role}>{person.role}</Typography>
		</div>
	);
};

export default TeamCard;

TeamCard.propTypes = {
	person: PropTypes.object
};
