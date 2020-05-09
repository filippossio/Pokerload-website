import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	typography: props => ({
		paddingTop: props.pt || props.py || props.p,
		paddingBottom: props.pb || props.py || props.p,
		paddingLeft: props.pl || props.px || props.p,
		paddingRight: props.pr || props.px || props.p,
		marginTop: props.mt || props.my || props.m,
		marginBottom: props.mb || props.my || props.m,
		marginLeft: props.ml || props.mx || props.m,
		marginRight: props.mr || props.mx || props.m,
		color: props.color,
		fontWeight: props.fontWeight,
		fontStyle: props.fontStyle,
	})
});

const CustomTypography = (props) => {
	const classes = useStyles(props);

	return (
		<Typography variant={props.variant} align={props.align} className={`${classes.typography}`} >{props.children}</Typography>
	);
};
export default CustomTypography;