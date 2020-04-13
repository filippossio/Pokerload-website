import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	faqQuestion: {
		paddingBottom: '10px',
	},

});

const FaqQuestion = (props) => {
	const { question, classes } = props;
	return (
		<Container className={classes.faqQuestion}>
			<h2>{question.title}</h2>
			<Typography>{question.content}</Typography>
		</Container>
	);
};

export default withStyles(styles)(FaqQuestion);