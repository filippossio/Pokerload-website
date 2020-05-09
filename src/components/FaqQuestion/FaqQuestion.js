import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import favicon from '../../assets/favicon.ico';


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
	},
	favicon: {
		height: '1.2em',
		width: '1.2em',
		marginRight: '0.4rem',
		[theme.breakpoints.down('sm')]: {
			height: '1.1rem',
			width: '1.1	rem',
		}
	},
	questionHeading: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline'
	},
	content: {
		paddingLeft: '1.7rem',
		'& ul': {
			paddingLeft: '1.1rem',
			margin: '0'
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
			<div className={classes.questionHeading}>
				<img src={favicon} alt="Pokerload" className={classes.favicon} />
				<h2 className={classes.faqQuestion}>{question.title}</h2>
			</div>
			<div className={classes.content}>{content}</div>
		</Container>
	);
};

export default withStyles(styles)(FaqQuestion);