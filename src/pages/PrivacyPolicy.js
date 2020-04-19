import React, { useEffect } from 'react';
import SimpleTemplate from '../components/SimpleTemplate/SimpleTemplate';

const PrivacyPolicy = (props) => {
	const { onPageVisit } = props;
	useEffect(() => {
		onPageVisit();
	});
	return (
		<SimpleTemplate title="Privacy Policy">
			<h1 style={{ textAlign: 'center', fontFamily: 'roboto', color: '#404040' }}>Work in Progress...</h1>
		</SimpleTemplate>
	);
};

export default PrivacyPolicy;