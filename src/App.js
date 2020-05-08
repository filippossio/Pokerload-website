import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Analytics from './network/analytics/Analytics';
import Firebase from './network/Firebase';
import Home from './pages/Home';
import Business from './pages/Business';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import TandC from './pages/TandC';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LayoutPage from './components/LayoutPage/LayoutPage';

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
	useEffect(() => {
		Firebase.initFirebase();
	}, []);

	const pageLoaded = (page) => {
		Analytics.onVisitPage(page);
	};
	return (
		<>
			<LayoutPage>
				<Router>
					<Switch>
						<Route path="/terms-and-conditions">
							<TandC onPageVisit={() => pageLoaded('Terms and Conditions')} />
						</Route >
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
					</Switch >
				</Router >
			</LayoutPage>
		</>
	);
};
export default withStyles(styles)(App);