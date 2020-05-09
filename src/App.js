import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Analytics from './network/analytics/Analytics';
import Firebase from './network/Firebase';
import Home from './pages/Home';
import Business from './pages/Business';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import TandC from './pages/TandC';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LayoutPage from './components/LayoutPage/LayoutPage';


const App = () => {
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
export default App;
