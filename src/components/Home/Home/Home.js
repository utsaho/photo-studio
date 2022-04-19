import React from 'react';
import ExploreWild from '../../ExploreWild/ExploreWild/ExploreWild';
import Services from '../../Services/Services';
import CarouSel from '../Carousel/CarouSel';
import Gallery from '../Gallery/Gallery';
import './Header.css';
const Home = () => {
    return (
        <div>
            <CarouSel></CarouSel>
            <Gallery nOf={6}></Gallery>
            <Services></Services>
            <ExploreWild></ExploreWild>

        </div>
    );
};

export default Home;