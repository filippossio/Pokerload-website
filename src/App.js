import React, { Component } from 'react';
import {
	BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { Helmet } from 'react-helmet';

import './App.scss';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Copyright from "./components/Footer/Copyright";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Pokerload from './components/Pokerload/Pokerload';

import location from './assets/location.svg';
import calendar from './assets/calendar.svg';
import payment from './assets/payment.svg';
import requestGame from './assets/requestGame.svg';
import bankroll from './assets/bankroll.svg';
import tutorial from './assets/tutorial.svg';
import taxi from './assets/taxi.svg';
import loyalty from './assets/loyalty.svg';
import clientManagment from './assets/pokerloadIcons/customer_management.svg';
import serviceDesk from './assets/pokerloadIcons/service_desk.svg';
import promoteGame from './assets/pokerloadIcons/promote_game.svg';
import notify from './assets/pokerloadIcons/notify.svg';
import customerPool from './assets/pokerloadIcons/customer_pool.svg';
import customerSatisfaction from './assets/pokerloadIcons/customer_satisfaction.svg';
import card from './assets/pokerloadIcons/card.svg';
import easySecure from './assets/pokerloadIcons/easy_secure.svg';
import casinoServices from './assets/pokerloadIcons/casino_services.svg';

class App extends Component {
	state = {
		features: [
			{
				name: 'find a game near you',
				description: 'Jump long registration queues, earn your early bird hustle-free and find a game of your preference.',
				icon: location,
			}, {
				name: 'Organise your game',
				description: 'Schedule your game and pre-book your seat.',
				icon: calendar,
			}, {
				name: 'Secure online payment',
				description: 'Have chips waiting for you at the table.',
				icon: payment,
			}, {
				name: 'request new game',
				description: 'Create a game based on your preferences.',
				icon: requestGame,
			}, {
				name: 'Bankroll management',
				description: 'Track your live earnings and set your fixed monthly budget.',
				icon: bankroll,
			},
			{
				name: 'Learn the basics',
				description: 'Gain access to free tutorials on budget management, poker rules and how to gamble responsibly.',
				icon: tutorial,
			}, {
				name: 'Collect Loyalty points',
				description: 'Enjoy discounts and luxurious services through several bookings.',
				icon: loyalty,
			}, {
				name: 'Call your taxi',
				description: 'Request a taxi at your current location for your chosen destination directly through the app.',
				icon: taxi,
			},
		],
		featuresBusiness: [
			{
				name: 'Client Management',
				description: 'Gain live status and management of the daily tables and attendants.',
				icon: clientManagment,
			}, {
				name: 'Automated customer service desk',
				description: 'Release pressure during bottleneck game registration hours via the automated player registration, payment and table allocation.',
				icon: serviceDesk,
			}, {
				name: 'Promote your games',
				description: 'Showcase poker games to a larger and targeted audience.',
				icon: promoteGame,
			}, {
				name: 'Notify nearby customers',
				description: 'Draw players to the casino\'s doorstep through targeted pushed notifications.',
				icon: notify,
			}, {
				name: 'Enlarge your customer pool',
				description: 'Allow players to group-up and send requests for higher stakes cash games.',
				icon: customerPool,
			}, {
				name: 'Customer satisfaction',
				description: 'Enhance customer retension via customer feedback and behaviour analysis.',
				icon: customerSatisfaction,
			}, {
				name: 'Easy and secure payments',
				description: 'Receive fast and secure world-wide payments from an all major foreign back cards.',
				icon: card,
			}, {
				name: 'Easy and secure access',
				description: 'Access our user-friendly and secure platform from any computer or mobile device found in the poker venue.',
				icon: easySecure,
			}, {
				name: 'Showcase casino services',
				description: 'Advertise and sell your exclusive services through Pokerload\'s customer loyalty rewards system.',
				icon: casinoServices,
			},
		]
	};

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
					<nav className={`navigation ${window.location.pathname === "/business" && "dark"}`}>
						<Router>
							<a href="/">Home</a>
							<a href="/business">Business</a>
							<span onClick={this.scroll} >Contact Us</span>
						</Router>
					</nav>
					<Switch>
						<Route path="/business">
							<Header business />
							<Pokerload />
							<Features features={this.state.featuresBusiness} />
							<Footer />
							<Copyright />
						</Route>
						<Route path="/">
							<Header />
							<Pokerload />
							<Features features={this.state.features} />
							<ComingSoon />
							<Footer />
							<Copyright />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;