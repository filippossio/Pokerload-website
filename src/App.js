import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

import './App.scss';
import Home from './pages/Home';
import Business from './pages/Business';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';

class App extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Pokerload</title>
					<meta name="description" content="PokerLoad intends to be the main channel found on an internet platform for all poker
				activities that take place live in real casinos and licensed poker clubs worldwide." />
				</Helmet>
				<Router>
					<nav className={`navigation ${window.location.pathname === "/business" && "dark"}`}>
						<Router>
							<a href="/">Home</a>
							<a href="/business">Business</a>
							<a href="/about-us">About Us</a>
							<a href="/faq">FAQ</a>
						</Router>
					</nav>
					<Switch>
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