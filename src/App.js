import React, { Component } from 'react';

import Aux from './hoc/Aux';
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
		]
	};

	render() {
		return (
			<Aux>
				<Header />
				<Pokerload />
				<Features features={this.state.features} />
				<ComingSoon />
				<Footer />
				<Copyright />
			</Aux>
		);
	}
}

export default App;