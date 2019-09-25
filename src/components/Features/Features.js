import React from 'react';

import './Features.scss'
import Feature from './Feature/Feature'

const fetaures = (props) => {
    let featuresArray = props.features.map((feature, index) =>
        <Feature
            index={index}
            key={index}
            featureName={feature.name}
            featureDescription={feature.description}
            icon={feature.icon} />
    );

    return (
        <section className="features-section">
            <h2 className="h2">Check out our features</h2>
            <p className="p">Pokerload is a product that offers casinos and poker players</p>
            <p className="p">a streamlined poker experiece</p>
            <div className="features">
                {featuresArray}
            </div>
        </section>
    );
}

export default fetaures;