import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CustomTypography from '../UI/CustomTypography';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	box: {
		backgroundColor: 'rgba(187, 0, 31, 0.8)',
	}
}));

const Banner = ({ items }) => {
	const classes = useStyles();

	let list = items.map((item, index) => {
		return (
			<Grid item sm={3} key={index}>
				<CustomTypography
					align='center'
					variant='h6'
					color='white'
				>
					{item}
				</CustomTypography>
			</Grid>
		);
	});
	return (
		<>
			<Box py={5} px={5} className={classes.box}>
				<Hidden xsDown>
					<Grid container spacing={2}>
						{list}
					</Grid>
				</Hidden>
			</Box>
		</>
	);
};

export default Banner;

Banner.propTypes = {
	items: PropTypes.array
};
