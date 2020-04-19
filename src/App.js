import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Analytics from './network/analytics/Analytics';
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
		'& a': {
			height: 'fit-content',
			textDecoration: 'none',
			borderLeft: '1px solid white',
			padding: '0 20px',
			color: 'white',
			'&:hover': {
				cursor: 'pointer',
				color: '#bb001f'
			}
		},
		'& a:last-child': {
			borderRight: '1px solid white'
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
				borderLeft: '1px solid black',
				margin: '10px 0'
			},
			'& a:last-child': {
				borderRight: '1px solid black'
			}
		}
	},
	dark: {
		'& a': {
			borderLeft: '1px solid black',
			color: 'black',
			'&:hover': {
				cursor: 'pointer',
				color: '#bb001f'
			}
		},
		'& a:last-child': {
			borderRight: '1px solid black'
		}
	}
});

const App = (props) => {
	const { classes } = props;

	const pageLoaded = (page) => {
		Analytics.onVisitPage(page);
	};

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
						<a href="/">Home</a>
						<a href="/business">Business</a>
						{/* <a href="/about-us">About Us</a> */}
						<a href="/faq">FAQ</a>
					</Router>
				</nav>
				<Switch>
					<Route path="/terms-and-conditions">
						<TandC onPageVisit={() => pageLoaded('Terms and Conditions')} />
					</Route>
					<Route path="/privacy-policy">
						<PrivacyPolicy onPageVisit={() => pageLoaded('Privacy Policy')} />
					</Route>
					<Route path="/business">
						<Business onPageVisit={() => pageLoaded('Business')} />
					</Route>
					<Route path="/about-us">
						<AboutUs onPageVisit={() => pageLoaded('About Us')} />
					</Route>
					<Route path="/faq">
						<FAQ onPageVisit={() => pageLoaded('FaQ')} />
					</Route>
					<Route path="/">
						<Home onPageVisit={() => pageLoaded('Home')} />
					</Route>
				</Switch>
			</Router>
		</div >
	);
};
export default withStyles(styles)(App);