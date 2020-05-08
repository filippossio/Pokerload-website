import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HeaderLogo from '../../assets/logo.svg';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import NavigationItems from './NavigationItems';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import LeftNavigationItems from './LeftNavigationItems';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'white',
		color: 'black',
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
		},
	},
	menuButton: {
		position: 'absolute',
		left: '5%',
		marginRight: theme.spacing(2),
	},
	logo: {
		height: '50px',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			height: '50px',
		},
	},
	list: {
		width: 250,
	},
});

function ElevationScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const Navigation = (props) => {
	const { classes } = props;
	const [leftNav, setLeftNav] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setLeftNav(open);
	};

	const list = () => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}>
			<LeftNavigationItems />
		</div>
	);

	return (
		<div className={classes.root}>
			<ElevationScroll {...props}>
				<AppBar>
					<Toolbar className={classes.toolbar}>
						<Hidden smUp>
							<IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
								<MenuIcon />
							</IconButton>
						</Hidden>
						<Drawer anchor='left' open={leftNav} onClose={toggleDrawer(false)}>
							{list()}
						</Drawer>
						<a href="/">
							<img src={HeaderLogo} alt="" className={classes.logo} />
						</a>
						<Hidden xsDown>
							<nav>
								<NavigationItems sm />
							</nav>
						</Hidden>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</div>
	);
};

export default withStyles(styles)(Navigation);