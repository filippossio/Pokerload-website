import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FaqQuestion from '../components/FaqQuestion/FaqQuestion';
import SimpleTemplate from '../components/SimpleTemplate/SimpleTemplate';

const useStyles = makeStyles(() => ({
	questions: {
		padding: '20px 0'
	}
}));

const FAQ = (props) => {
	const { onPageVisit } = props;
	const classes = useStyles();

	const [faqData] = useState(
		[
			{
				title: 'What is our goal?',
				content: [
					'We want to make sure that poker players receive maximum benefits and have an easier and more efficient overall live-poker experience.'
				]
			},
			{
				title: 'What are our values?',
				content: [
					'Resilience',
					'Passion',
					'Creativity & Innovation',
					'Adaptation to changes'
				],
			},
			{
				title: 'How does it work?',
				content: [
					'Download and register to our mobile platform where you could find all types and stakes of cash games or tournaments available in your current area. Based on your selected preferences, book a sit at a table through an online payment and collect as well your loyalty points.'
				]
			},
			{
				title: 'What and how do we charge for our services?',
				content: [
					'For every new game checked-in, there will be a minimum of 1.2% and a maximum of 3.6% charge based on the amount buy-in. The higher the amount the lower the percentage charged.',
					'Extra bank charges may apply depending on each player’s branch.',
					'Payments using foreign bank cards will have a currency conversion to the Casino’s operating currency.'
				]
			},
			{
				title: 'Is there any Refund Policy?',
				content: [
					'Yes, if you have already booked and paid for your sit at a table but for any reason you did not make it to reach out to the actual casino in the given timeframe, your buy-in amount will be automatically returned to your bank account. In addition, we would like to inform you that any other charges applied to the total amount such us bank charges and Pokerload service fee will be retained.'
				]
			},
			{
				title: 'Where do we operate?',
				content: [
					'Currently we are operating in the UK and Cyprus only. We do have plans to expand internationally.'
				]
			},
			{
				title: 'Where are we located?',
				content: [
					'Our Headquarters are based in Cyprus.'
				]
			},
			{
				title: 'Facing any problems?',
				content: [
					'Get in touch via the email contactus@pokerload.com and we will contact you directly as soon as possible.'
				]
			}
		]);

	useEffect(() => {
		onPageVisit();
	});

	const questions = faqData.map((question, index) => {
		return <FaqQuestion question={question} key={index} />;
	});

	return (
		<SimpleTemplate title="Frequently Asked Questions">
			<div className={classes.questions}>
				{questions}
			</div>
		</SimpleTemplate>
	);
};

export default FAQ;

FAQ.propTypes = {
	onPageVisit: PropTypes.func
};
