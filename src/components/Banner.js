import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Banner = () => {

	return (
		<>
			<Box>
				<Grid container>
					<Grid item sm={3}>
						Promote</Grid>
					<Grid item sm={3}>
						Organise</Grid>
					<Grid item sm={3}>
						Monitor</Grid>
					<Grid item sm={3}>
						Automate</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Banner;
