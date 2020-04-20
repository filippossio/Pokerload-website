import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Firebase from './network/Firebase';

import Home from './pages/Home';
import Business from './pages/Business';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import TandC from './pages/TandC';
import PrivacyPolicy from './pages/PrivacyPolicy';

const styles = theme => ({
	navigation: {
		paddingTop: '20px',
		fontFamily: 'roboto',
		paddingRight: '20px',
		display: 'flex',
		justifyContent: 'flex-end',
		width: '50vw',
		position: 'absolute',
		top: '0px',
		right: '0px',
		height: 'fit-content',
		textTransform: 'uppercase',
		textAlign: 'center',
		'& a': {
			height: 'fit-content',
			textDecoration: 'none',
			padding: '0 20px',
			color: 'white',
			'&:hover': {
				cursor: 'pointer',
				color: '#bb001f'
			}
		},
		[theme.breakpoints.down('sm')]: {
			width: '100vw',
			height: '5vh',
			justifyContent: 'center',
			paddingRight: '0px',
			paddingTop: '0px',
			backgroundColor: '#0000007d',
			position: 'unset',
			'& a': {
				color: 'black',
				margin: 'auto',
				padding: '0 10px',
				fontSize: '0.875rem'
			}
		}
	},
	dark: {
		'& a': {
			color: 'black',
			'&:hover': {
				cursor: 'pointer',
				color: '#bb001f'
			}
		}
	},
	verticalLine: {
		borderLeft: '1px solid white',
		[theme.breakpoints.down('sm')]: {
			borderLeft: '1px solid black',
			margin: '5px 3px',
		}
	},
	verticalLineDark: {
		borderLeft: '1px solid black',
	}
});

const App = (props) => {
	const { classes } = props;

	useEffect(() => {
		Firebase.initFirebase();
	}, []);

	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down('sm'));

	let separator = <div className={`${classes.verticalLine} ${window.location.pathname !== "/" ? classes.verticalLineDark : ''}`} />;

	return (
		<div>
			<Helmet>
				<title>Pokerload</title>
				<meta name="description" content="PokerLoad intends to be the main channel found on an internet platform for all poker
				activities that take place live in real casinos and licensed poker clubs worldwide." />
			</Helmet>
			<Router>
				<nav className={`${classes.navigation} ${window.location.pathname !== "/" ? classes.dark : ''}`}>
					<Router>
						{mobile ? null : separator}
						<a href="/">Home</a>
						{separator}
						<a href="/business">Business</a>
						{separator}
						<a href="/about-us">About Us</a>
						{separator}
						<a href="/faq">FAQ</a>
						{mobile ? null : separator}
					</Router>
				</nav>
				<Switch>
					<Route path="/terms-and-conditions">
						<TandC />
					</Route>
					<Route path="/privacy-policy">
						<PrivacyPolicy />
					</Route>
					<Route path="/business">
						<Business />
					</Route>
					<Route path="/about-us">
						<AboutUs />
					</Route>
					<Route path="/faq">
						<FAQ />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div >
	);
}

export default withStyles(styles)(App);