import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer/Footer';
import Copyright from '../components/Footer/Copyright';
import FaqQuestion from '../components/FaqQuestion/FaqQuestion';

const styles = theme => ({
	faq: {

	},
	hero: {
		height: '30vh',
		width: '100vw',
		backgroundColor: "#DCDCDC",
	},
	heading: {
		fontSize: theme.typography.pxToRem(40),
		position: 'absolute',
		top: '10%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',

	},
	questions: {
		padding: '20px 0'
	}
});



const FAQ = (props) => {
	const { classes } = props;
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

	const questions = faqData.map((question) => {
		return <FaqQuestion question={question} />;
	});

	return (
		<>
			<div className={classes.faq}>
				<header>
					<div alt="" className={classes.hero} />
					<h1 className={classes.heading}>Frequently Asked Questions</h1>
				</header>
				<div className={classes.questions}>
					{questions}
				</div>
				<Footer />
				<Copyright />
			</div>
		</>
	);
};

export default withStyles(styles)(FAQ);