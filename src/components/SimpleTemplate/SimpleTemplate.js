import React from 'react';
import PropTypes from 'prop-types';
import SimpleHeader from '../SimpleHeader/SimpleHeader';

const SimpleTemplate = ({ title, children }) => {

	return (
		<>
			<SimpleHeader title={title} />
			{children}
		</>
	);
};

export default SimpleTemplate;

SimpleTemplate.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};
