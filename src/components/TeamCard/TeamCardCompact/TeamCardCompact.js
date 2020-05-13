import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
	teamCard: {
		display: 'flex',
		alignItems: 'center',
		flexFlow: 'column',
		margin: '10px 10px',
		padding: '45px 0',
	},
	image: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		border: '1px solid #bb001f',
		[theme.breakpoints.down('xs')]: {
			width: theme.spacing(10),
			height: theme.spacing(10),
		}

	}
}));

const TeamCardCompact = (props) => {
	const { person } = props;
	const classes = useStyles();

	return (
		<div className={classes.teamCard}>
			<Avatar alt={person.name} src={person.image} className={classes.image} />
		</div>
	);
};

export default TeamCardCompact;

TeamCardCompact.propTypes = {
	person: PropTypes.object
};
