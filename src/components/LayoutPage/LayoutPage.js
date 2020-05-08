import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const LayoutPage = (props) => {

	return (
		<>
			<Navigation />
			<div style={{ paddingTop: '70px' }}>
				{props.children}
			</div>
			<Footer />
		</>
	);
};

export default LayoutPage;