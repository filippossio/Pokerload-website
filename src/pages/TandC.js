import React, { useEffect } from 'react';
import SimpleTemplate from '../components/SimpleTemplate/SimpleTemplate';

const TandC = (props) => {
	const { onPageVisit } = props;
	useEffect(() => {
		onPageVisit();
	});
	return (
		<SimpleTemplate title="Terms and Conditions">
			<h1 style={{ textAlign: 'center', fontFamily: 'roboto', color: '#404040' }}>Work in Progress...</h1>
		</SimpleTemplate>
	);
};

export default TandC;