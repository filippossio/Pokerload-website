import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	faqQuestionCont: {
		paddingBottom: '25px',
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
	let content = [];
	if (question.content.length > 1) {
		const list = question.content.map((element, index) => {
			return <li key={index}><Typography>{element}</Typography></li>;
		});
		content = (<ul>{list}</ul>);
	} else {
		content = <Typography>{question.content}</Typography>;
	}
	return (
		<Container className={classes.faqQuestionCont}>
			<h2 className={classes.faqQuestion}>{question.title}</h2>
			{
				content
			}
		</Container>
	);
};

export default withStyles(styles)(FaqQuestion);