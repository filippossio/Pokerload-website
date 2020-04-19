import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Pokerload from '../components/Pokerload/Pokerload';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import clientManagment from '../assets/pokerloadIcons/customer_management.svg';
import serviceDesk from '../assets/pokerloadIcons/service_desk.svg';
import promoteGame from '../assets/pokerloadIcons/promote_game.svg';
import notify from '../assets/pokerloadIcons/notify.svg';
import customerPool from '../assets/pokerloadIcons/customer_pool.svg';
import customerSatisfaction from '../assets/pokerloadIcons/customer_satisfaction.svg';
import card from '../assets/pokerloadIcons/card.svg';
import easySecure from '../assets/pokerloadIcons/easy_secure.svg';
import casinoServices from '../assets/pokerloadIcons/casino_services.svg';


const Business = (props) => {
	const { onPageVisit } = props;
	const [feature] = useState([
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
	]);

	useEffect(() => {
		onPageVisit();
	});

	return (
		<>
			<Header business />
			<Pokerload />
			<Features features={feature} />
			<Footer />
			{/* <Copyright /> */}
		</>
	);
};

export default Business;