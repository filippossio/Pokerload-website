import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FaqQuestion from '../components/FaqQuestion/FaqQuestion';
import SimpleTemplate from '../components/SimpleTemplate/SimpleTemplate';

const styles = theme => ({
	questions: {
		padding: '20px 0'
	}
});



const FAQ = (props) => {
	const { classes, onPageVisit } = props;
	const [faqData] = useState(
		[
			{
				title: "What are our values?",
				content: "We make sure that poker players receive maximum benefits and have an easier and more efficient overall poker experience."
			},
			{
				title: "How does it work?",
				content: "Download and register to our mobile platform where you could find all types and stakes of cash games or tournaments available in your current area. Based on your selected preferences, book a sit at a table through an online payment and collect as well your loyalty points."
			},
			{
				title: "What and how do we charge for our services?",
				content: "For every new game checked-in there will be a minimum of 1.2% and a maximum of 3.6% charge based on the amount buy-in. The higher the amount the lower the percentage charged.\nExtra bank charges may apply depending of each player’s branch.\nPayments using foreign bank cards will have a currency conversion to the Casino’s operating currency."
			},
			{
				title: "Where do we operate?",
				content: "Currently we are operating in the UK and Cyprus only. We do have plans to expand internationally."
			},
			{
				title: "Where are we located?",
				content: "Our Headquarters are based in Cyprus."
			},
			{
				title: "Facing any problems?",
				content: "Get in touch via the email contactus@pokerload.comand we will contact directly as soon as possible."
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

export default withStyles(styles)(FAQ);