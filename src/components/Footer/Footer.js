import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../images/icons/Facebook-logo.png';
import github from '../../images/icons/Github-logo.png';
import instagram from '../../images/icons//Instagram-logo.png';
const Footer = () => {
    const socialUrl = (url) => {
        window.open(`${url}`, '_blank');
    }
    const date = new Date();

    return (
        <div className='d-flex flex-column justify-content-center align-items-center     text-center mt-5 bg-dark text-light' style={{ height: '100px' }}>
            <div>
                <small style={{ fontFamily: 'monospace' }}>
                    &copy; {date.getFullYear()} utshao utsho
                </small>
            </div>
            <div>
                <img role='button' onClick={() => socialUrl('https://www.facebook.com/utsaho.utsho')} className='rounded-circle border-info' src={facebook} alt="" />
                <img role='button' onClick={() => socialUrl('https://www.instagram.com/utsaho_utsho')} className='mx-2 rounded-circle' src={github} alt="" />
                <img role='button' onClick={() => socialUrl('https://www.github.com/utsaho')} className='border rounded-circle' src={instagram} alt="" />
            </div>
        </div>
    );
};

export default Footer;