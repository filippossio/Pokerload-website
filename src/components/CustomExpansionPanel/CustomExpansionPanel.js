import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
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

const CustomExpansionPanel = (props) => {
	const { classes, expanded, handleChange } = props;
	return (
		<>
			<ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography className={classes.heading}>General settings</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
						maximus est, id dignissim quam.
						</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography className={classes.heading}>General settings</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
						maximus est, id dignissim quam.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</>
	);
};

export default withStyles(styles)(CustomExpansionPanel);