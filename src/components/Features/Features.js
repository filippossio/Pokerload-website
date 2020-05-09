import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import FeaturesRow from './FeaturesRow/FeaturesRow';
import HorizontalLine from '../../UI/HorizontalLine/HorizontalLine';


const Features = (props) => {
	const { features } = props;
	let body = features.map((feature, index, elements) => {
		if (index % 2 === 0) {
			return (
				<div key={index}>
					<HorizontalLine index={index} />
					{
						elements[index + 1] ? <FeaturesRow index={index} features={[feature, elements[index + 1] || null]} /> : <FeaturesRow index={index} features={[feature]} />
					}
				</div>
			);
		}
		return '';
	});
	return (
		<Container maxWidth='lg'>
			{body}
		</Container>
	);
};

export default Features;

Features.propTypes = {
	features: PropTypes.array
};
