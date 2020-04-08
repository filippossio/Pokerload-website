import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomExpansionPanel from '../components/CustomExpansionPanel/CustomExpansionPanel';

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
});



const FAQ = (props) => {
	const { classes } = props;
	const [expanded, setExpanded] = useState(false);
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
				conent: "For every new game checked-in there will be a minimum of 1.2% and a maximum of 3.6% charge based on the amount buy-in. The higher the amount the lower the percentage charged.\nExtra bank charges may apply depending of each player’s branch.\nPayments using foreign bank cards will have a currency conversion to the Casino’s operating currency."
			},
			{
				title: "Where do we operate?",
				conent: "Currently we are operating in the UK and Cyprus only. We do have plans to expand internationally."
			},
			{
				title: "Where are we located?",
				conent: "Our Headquarters are based in Cyprus."
			},
			{
				title: "Facing any problems?",
				conent: "Get in touch via the email contactus@pokerload.comand we will contact directly as soon as possible."
			}
		]);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Container>
			<h1>Frequently Asked Questions</h1>
			<div className={classes.root}>
				<CustomExpansionPanel expanded={expanded === 'panel1'} handleChange={handleChange} />
			</div>
		</Container>
	);
};

export default withStyles(styles)(FAQ);