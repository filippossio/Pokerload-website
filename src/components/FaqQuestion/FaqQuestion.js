import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	faqQuestionCont: {
		paddingBottom: '10px',
	},
	faqQuestion: {
		fontFamily: 'roboto',
		color: '#404040',
		textTransform: 'uppercase',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3rem',
		}
	}
});

const FaqQuestion = (props) => {
	const { question, classes } = props;
	return (
		<Container className={classes.faqQuestionCont}>
			<h2 className={classes.faqQuestion}>{question.title}</h2>
			<Typography>{question.content}</Typography>
		</Container>
	);
};

export default withStyles(styles)(FaqQuestion);