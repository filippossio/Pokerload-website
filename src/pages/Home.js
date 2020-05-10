import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderHome from '../components/Header/HeaderHome';
import Features from '../components/Features/Features';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import Pokerload from '../components/Pokerload/Pokerload';
import Banner from '../components/Banner';
import location from '../assets/location.svg';
import calendar from '../assets/calendar.svg';
import payment from '../assets/payment.svg';
import requestGame from '../assets/requestGame.svg';
import bankroll from '../assets/bankroll.svg';
import tutorial from '../assets/tutorial.svg';
import taxi from '../assets/taxi.svg';
import loyalty from '../assets/loyalty.svg';

const Home = (props) => {
	const { onPageVisit } = props;
	const features = [
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
	];

	const bannerItems = ['1. Download App', '2. Register', '3. Find game', '4. Book in'];

	useEffect(() => {
		onPageVisit();
	});

	return (
		<>
			<HeaderHome />
			<Banner items={bannerItems} />
			<Pokerload />
			<Features features={features} />
			<ComingSoon />
		</>
	);
};

export default Home;

Home.propTypes = {
	onPageVisit: PropTypes.func
};
