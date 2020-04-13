import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Firebase from './network/Firebase';

import './App.scss';
import Home from './pages/Home';
import Business from './pages/Business';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import TandC from './pages/TandC';
import PrivacyPolicy from './pages/PrivacyPolicy';
class App extends Component {
	state = {
		firebaseInstance: null,
	};

	componentDidMount() {
		const fbInstance = Firebase.initFirebase();
		this.setState({ firebaseInstance: fbInstance });
	}

	scroll = () => {
		window.document.getElementById('contact-us').scrollIntoView();
	};

	render() {
		return (
			<div>
				<Helmet>
					<title>Pokerload</title>
					<meta name="description" content="PokerLoad intends to be the main channel found on an internet platform for all poker
				activities that take place live in real casinos and licensed poker clubs worldwide." />
				</Helmet>
				<Router>
					<nav className={
						`navigation ${window.location.pathname !== "/" && "dark"}
					`}>
						<Router>
							<a href="/">Home</a>
							<a href="/business">Business</a>
							<a href="/about-us">About Us</a>
							<a href="/faq">FAQ</a>
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
			</div>
		);
	}
}

export default App;