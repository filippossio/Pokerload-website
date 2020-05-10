import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SimpleTemplate from '../components/SimpleTemplate/SimpleTemplate';

const AboutUs = (props) => {
	const { onPageVisit } = props;
	useEffect(() => {
		onPageVisit();
	});
	return (
		<SimpleTemplate title="About Us">
			<h1 style={{ textAlign: 'center', fontFamily: 'roboto', color: '#404040' }}>Work in Progress...</h1>
		</SimpleTemplate>
	);
};

export default AboutUs;

AboutUs.propTypes = {
	onPageVisit: PropTypes.func
};
