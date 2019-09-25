import React from 'react';
import './NavigationItem.scss'

const navigationItem = (props) => {
    return (
        <p className="navigation-item">{props.label}</p>
    );
}

export default navigationItem;