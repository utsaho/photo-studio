import React from 'react';
import ExploreWild from '../../ExploreWild/ExploreWild/ExploreWild';
import CarouSel from '../Carousel/CarouSel';
import './Header.css';
const Home = () => {
    return (
        <div>
            <CarouSel></CarouSel>
            <ExploreWild></ExploreWild>

        </div>
    );
};

export default Home;