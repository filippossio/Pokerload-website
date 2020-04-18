import React from 'react';
import SimpleHeader from '../SimpleHeader/SimpleHeader';
import Footer from '../Footer/Footer';
import Copyright from '../Footer/Copyright'

const SimpleTemplate = (props) => {
    const { title } = props;
    return (
        <>
            <SimpleHeader title={title} />
            {props.children}
            <Footer />
            <Copyright />
        </>
    );
}

export default SimpleTemplate;