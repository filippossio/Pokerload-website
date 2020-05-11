import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import HeaderLogo from '../../assets/logo.svg';


const useStyles = makeStyles((theme) => ({
	leftNavigationItems: {
		display: 'flex',
		flexDirection: 'column',
	},
	heading: {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	logo: {
		height: '50px',
	},
	a: {
		textDecoration: 'none',
		color: 'unset',
	}
}));

const LeftNavigationItems = () => {
	const classes = useStyles();

	return (
		<div className={classes.leftNavigationItems}>
			<a href="/" className={classes.heading}>
				<img src={HeaderLogo} alt="Logo" className={classes.logo} />
			</a>
			<Divider />
			<List>
				<a href="/" className={classes.a}>
					<ListItem button key="Home">
						<ListItemIcon><HomeIcon /></ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
				</a>
				<a href="business" className={classes.a}>
					<ListItem button key="Business">
						<ListItemIcon><BusinessIcon /></ListItemIcon>
						<ListItemText primary="Business" />
					</ListItem>
				</a>
				<a href="about-us" className={classes.a}>
					<ListItem button key="About Us">
						<ListItemIcon><PeopleIcon /></ListItemIcon>
						<ListItemText primary="About Us" />
					</ListItem>
				</a>
				<a href="faq" className={classes.a}>
					<ListItem button key="FAQ">
						<ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
						<ListItemText primary="FAQ" />
					</ListItem>
				</a>
			</List>
		</div>
	);
};

export default LeftNavigationItems;
