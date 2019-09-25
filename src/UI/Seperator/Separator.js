import React from 'react';

import './Seperator.scss';
import FeaturesSeparator from '../../assets/features-separator.png'

const seperator = (props) => {
    return (
        <div className="seperator">
            <img className="seperator-img" src={FeaturesSeparator} alt="" />
        </div>

    );
}

export default seperator;