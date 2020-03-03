import React, { Component } from 'react';
import {
	BrowserRouter as Router, Switch, Route
} from "react-router-dom";
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
				description: 'Jump long registration queues, earn hustle-free your early bird bonus and find a game of your preferences.',
				icon: location,
			}, {
				name: 'Organise your game',
				description: 'Schedule your game and pre-book your seat.',
				icon: calendar,
			}, {
				name: 'Secure online payment',
				description: 'Find your chips waiting at your live table.',
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
				name: 'Lean the basics',
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
				name: 'Automate customer service desk',
				description: 'Release pressure bottleneck game registration hours via the autmated player registration, payment and table allocation.',
				icon: serviceDesk,
			}, {
				name: 'Promote your games',
				description: 'Showcase poker games to a larger and targeted audience.',
				icon: promoteGame,
			}, {
				name: 'Notify nearby customers',
				description: 'Draw players to the casino\'s doorstep through targeted pushed notification.',
				icon: notify,
			}, {
				name: 'Enlarge your customer pool',
				description: 'Allow players to group-up and send requests for higher stakes cash games.',
				icon: customerPool,
			}, {
				name: 'Customer satisfuction',
				description: 'Enhance customer retension via customer feedback and behaviour analysis',
				icon: customerSatisfaction,
			}, {
				name: 'Easy and secure payments',
				description: 'Recieve fast and secure world-wide payments from an all major foreign back cards.',
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

	render() {
		return (
			<Router>
				<nav className="navigation">
					<Router>
						<a href="/business">Business</a>
						<a href="/contact-us">Contact Us</a>

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
					<Route path="/contact-us">
						<h1>This is the contac us</h1>
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
			</ Router >
		);
	}
}

export default App;