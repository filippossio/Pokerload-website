import React from 'react';

import './Feature.scss';

const feature = (props) => {
    return (
        <div className="feature">
            <div className="feature-parent-img chip-icon">
                <img className="feature-child-img" src={props.icon} alt={props.featureName} />
            </div>
            <p className="bold">{props.featureName}</p>
            <p>{props.featureDescription}</p>
        </div>
    );
}

export default feature;