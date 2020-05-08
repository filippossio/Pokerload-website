import React from 'react';
import SimpleHeader from '../SimpleHeader/SimpleHeader';

const SimpleTemplate = (props) => {
	const { title } = props;
	return (
		<>
			<SimpleHeader title={title} />
			{props.children}
		</>
	);
};

export default SimpleTemplate;