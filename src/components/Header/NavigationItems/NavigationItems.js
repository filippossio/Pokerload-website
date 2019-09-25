import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.scss'

const navigationItems = (props) => {
    const navigationItems = {
        1: 'home',
        2: 'features',
        3: 'casinos',
        4: 'contact us'
    }

    let navigation = null;
    navigation = Object.keys(navigationItems).map((item, index) => {
        return <NavigationItem key={index} label={navigationItems[item]} />
    })


    return (
        <div className="navigation-items">
            {navigation}
        </div>
    );
}

export default navigationItems;