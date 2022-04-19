import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div style={{ height: '500px' }} className='d-flex justify-content-center align-items-center'>
            <h2 className='text-primary display-2'>Page <span className='text-danger'>Not Found</span> <FontAwesomeIcon className='text-dark' icon={faSadCry} /> </h2>
        </div>
    );
};

export default NotFound;